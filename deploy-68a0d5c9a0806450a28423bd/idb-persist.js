
(function(){
  const DB_NAME = 'SeekerCompanionDB';
  const STORE = 'kv';
  let db;

  function openDB(){
    return new Promise((resolve, reject)=>{
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = function(e){
        const db = e.target.result;
        if(!db.objectStoreNames.contains(STORE)){
          db.createObjectStore(STORE, { keyPath: 'key' });
        }
      };
      req.onsuccess = ()=> resolve(req.result);
      req.onerror = ()=> reject(req.error);
    });
  }

  function withStore(mode, fn){
    return openDB().then(d=>{
      db = d;
      return new Promise((resolve, reject)=>{
        const tx = db.transaction(STORE, mode);
        const store = tx.objectStore(STORE);
        Promise.resolve(fn(store)).then(()=>{
          tx.oncomplete = ()=> resolve();
          tx.onabort = tx.onerror = ()=> reject(tx.error || new Error('tx aborted'));
        }).catch(reject);
      });
    });
  }

  function idbSet(key, value){
    return withStore('readwrite', store => store.put({ key, value, updatedAt: Date.now() }));
  }
  function idbGet(key){
    return openDB().then(d=>{
      return new Promise((resolve, reject)=>{
        const tx = d.transaction(STORE, 'readonly');
        const store = tx.objectStore(STORE);
        const req = store.get(key);
        req.onsuccess = ()=> resolve(req.result ? req.result.value : undefined);
        req.onerror = ()=> reject(req.error);
      });
    });
  }
  function idbDel(key){
    return withStore('readwrite', store => store.delete(key));
  }
  function idbAll(){
    return openDB().then(d=> new Promise((resolve, reject)=>{
      const tx = d.transaction(STORE, 'readonly');
      const store = tx.objectStore(STORE);
      const req = store.getAll();
      req.onsuccess = ()=> resolve(req.result || []);
      req.onerror = ()=> reject(req.error);
    }));
  }

  const KEYS = [
    'et_ticket_v14','et_history_v14','et_favorites_v14','et_custom_svcs_v14',
    'et_settings_v14','et_odometer_v14','et_last_export_v14'
  ];

  (async function requestPersistentStorage(){
    try {
      if (navigator.storage && navigator.storage.persist) {
        const already = await navigator.storage.persisted?.();
        if (!already) await navigator.storage.persist();
      }
    } catch(e) {}
  })();

  const restorePromise = (async function(){
    try {
      const all = await idbAll();
      for (const row of all) {
        if (!row || !row.key) continue;

        if (KEYS.includes(row.key) || row.key.startsWith('et_')) {
          if (typeof row.value === 'string') {
            localStorage.setItem(row.key, row.value);
          } else {
            localStorage.setItem(row.key, JSON.stringify(row.value));
          }
        }
      }
    } catch(e) {
      console.warn('IDB restore failed', e);
    }
  })();

  window.__idbPersistReady = restorePromise;

  (function(){
    const _set = localStorage.setItem.bind(localStorage);
    const _remove = localStorage.removeItem.bind(localStorage);
    const _clear = localStorage.clear.bind(localStorage);

    localStorage.setItem = function(k, v){
      try {
        _set(k, v);

        let val = v;
        try { val = JSON.parse(v); } catch(_){}
        idbSet(k, val);
      } catch(e){}
    };
    localStorage.removeItem = function(k){
      try { _remove(k); idbDel(k); } catch(e){}
    };
    localStorage.clear = function(){
      try { _clear(); } catch(e){}

      KEYS.forEach(k=> idbDel(k));
    };
  })();
})();
