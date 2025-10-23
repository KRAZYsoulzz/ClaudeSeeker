
(function(){
  var _add = document.addEventListener.bind(document);
  document.addEventListener = function(type, listener, opts){
    if(type === 'DOMContentLoaded' && window.__idbPersistReady){

      var wrapped = function(ev){
        Promise.resolve(window.__idbPersistReady).then(function(){ listener(ev); });
      };
      return _add(type, wrapped, opts);
    }
    return _add(type, listener, opts);
  };
})();

(function(){
  let _confirmFn=null; function openConfirm(msg, onOk){ const m=$('#confirmModal'); $('#confirmMessage').textContent=msg||'Are you sure?'; _confirmFn=onOk; m.classList.remove('hidden'); m.setAttribute('aria-hidden','false'); lockBodyScroll?.(); } function closeConfirm(){ const m=$('#confirmModal'); m.classList.add('hidden'); m.setAttribute('aria-hidden','true'); _confirmFn=null; unlockBodyScroll?.(); } document.getElementById('confirmClose')?.addEventListener('click', closeConfirm); document.getElementById('confirmCancel')?.addEventListener('click', closeConfirm); document.getElementById('confirmOk')?.addEventListener('click', ()=>{ try{ _confirmFn&&_confirmFn(); }finally{ closeConfirm(); }});

  function lockBodyScroll(){ document.documentElement.style.overflow='hidden'; document.body.style.overflow='hidden'; }
  function unlockBodyScroll(){ document.documentElement.style.overflow=''; document.body.style.overflow=''; }

  try {
    const params = new URLSearchParams(window.location.search);
    const hash = (window.location.hash || "").toLowerCase();
    const shouldReset = params.get("reset") === "1" || hash.includes("#reset");
    if (shouldReset) {
      const KEYS = [
        'et_ticket_v14','et_history_v14','et_favorites_v14','et_custom_svcs_v14',
        'et_settings_v14','et_odometer_v14','et_last_export_v14'
      ];
      KEYS.forEach(k => localStorage.removeItem(k));

      if (params.get("reset") === "1") { localStorage.clear(); }

      const url = new URL(window.location.href);
      url.searchParams.delete('reset');
      url.hash = '';

      window.location.replace(url.toString());
    }
  } catch (e) {  }

document.addEventListener('DOMContentLoaded', ()=>{

  const engClose = document.getElementById('engClose');
  const engCancel = document.getElementById('engCancel');
  const engSave = document.getElementById('engSave');
  const engHours = document.getElementById('engHours');
  const engMinutes = document.getElementById('engMinutes');
  function showEngineer(show){
    const m = document.getElementById('engModal');
    if(!m) return;
    m.classList.toggle('hidden', !show);
    m.setAttribute('aria-hidden', show?'false':'true');
    if(show){ if(typeof lockBodyScroll==='function') lockBodyScroll(); }
    else { if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
  }
  window.showEngineer = showEngineer;
  if(engClose) engClose.addEventListener('click', ()=>showEngineer(false));
  if(engCancel) engCancel.addEventListener('click', ()=>showEngineer(false));
  if(engHours) engHours.addEventListener('input', ()=>{ try{ updateEngineerPreview(); }catch(_){}});
  if(engMinutes) engMinutes.addEventListener('input', ()=>{ try{ updateEngineerPreview(); }catch(_){}});
  if(engSave) engSave.addEventListener('click', ()=>{
    try{
      const h = Number((document.getElementById('engHours')||{}).value||0);
      const m = Number((document.getElementById('engMinutes')||{}).value||0);
      const price = priceEngineerAssist(h, m);
      const it = state.items[engIdx];
      it.price = price;
      it._engTime = {h, m};
      engIdx = null;
      showEngineer(false);
      renderTicket(); persist(); syncTodayToHistory();
    }catch(e){}
  });

  const addonsClose = document.getElementById('addonsClose');
  const addonsCancel = document.getElementById('addonsCancel');
  function showAddons(show){
    const m = document.getElementById('addonsModal');
    if(!m) return;
    m.classList.toggle('hidden', !show);
    m.setAttribute('aria-hidden', show?'false':'true');
    if(show){ if(typeof lockBodyScroll==='function') lockBodyScroll(); }
    else { if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
  }
  window.showAddons = showAddons;
  if(addonsClose) addonsClose.addEventListener('click', ()=>showAddons(false));
  if(addonsCancel) addonsCancel.addEventListener('click', ()=>showAddons(false));
});

})();

function displayServiceName(name){
  if(!name) return '';

  return String(name);
}

const services = [{"name": "Accuserve Windows", "price": 100.0}, {"name": "Engineer Assist", "price": 100.0}, {"name": "Ladder Assist", "price": 90.0}, {"name": "Ladder Lean", "price": 55.0}, {"name": "Marketing", "price": 125.0}, {"name": "Move Out Essential", "price": 125.0}, {"name": "Move Out Premium", "price": 175.0}, {"name": "Non-Weather Water", "price": 80.0}, {"name": "Shortstop", "price": 30.0}, {"name": "Solo - Exterior", "price": 80.0}, {"name": "Solo - Exterior & Roof", "price": 125.0}, {"name": "Solo - Interior", "price": 80.0}, {"name": "Solo - Interior & Exterior", "price": 125.0}, {"name": "Solo - Interior & Roof", "price": 125.0}, {"name": "Solo - Interior, Exterior, & Roof", "price": 150.0}, {"name": "Solo - Roof", "price": 115.0}, {"name": "Solo Post Construction - Exterior", "price": 25.0}, {"name": "Solo Post Construction - Exterior & Roof", "price": 75.0}, {"name": "Solo Post Construction - Roof", "price": 50.0}, {"name": "Solo Pre-Loss - Exterior", "price": 130.0}, {"name": "Solo Pre-Loss - Exterior & Roof", "price": 130.0}, {"name": "Solo Pre-Loss - Roof", "price": 130.0}, {"name": "Solo Virtual Assist - Exterior", "price": 80.0}, {"name": "Solo Virtual Assist - Exterior & Roof", "price": 125.0}, {"name": "Solo Virtual Assist - Roof", "price": 115.0}, {"name": "Surge vs Wind Evaluation", "price": 150.0}, {"name": "Trip Charge", "price": 50.0}];
let addons = [{"name": "40' Ladder", "price": 15.0}, {"name": "Accuserve Windows Add'l Time", "price": 25.0}, {"name": "Additional Building/Structure", "price": 50.0}, {"name": "Detach & Install New Tarp", "price": 100.0}, {"name": "Detach & Reset Original Tarp", "price": 50.0}, {"name": "Engineer Assist Add'l Time", "price": 25.0}, {"name": "Fence Inspection", "price": 15.0}, {"name": "Interior Add'l Room (>3 Rooms)", "price": 15.0}, {"name": "Interior Add-On (1-3 Rooms)", "price": 25.0}, {"name": "ITEL Sample", "price": 95.0}, {"name": "Steep Assist", "price": 25.0}, {"name": "Tarp New Install", "price": 100.0}, {"name": "Tarp Referral", "price": 35.0}, {"name": "Trip/Cancelation Fee", "price": 50.0}];
const carriers = [
  {
    "id": "american-family",
    "name": "American Family"
  },
  {
    "id": "amtrust",
    "name": "AmTrust"
  },
  {
    "id": "central-insurance",
    "name": "Central Insurance"
  },
  {
    "id": "chubb",
    "name": "Chubb"
  },
  {
    "id": "cna",
    "name": "CNA"
  },
  {
    "id": "contractor-s-alliance-network-llc",
    "name": "Contractor's Alliance Network, LLC"
  },
  {
    "id": "crawford-thehartford-claims",
    "name": "Crawford - TheHartford Claims"
  },
  {
    "id": "cse-insurance-group",
    "name": "CSE Insurance Group"
  },
  {
    "id": "deskimate",
    "name": "Deskimate"
  },
  {
    "id": "erie",
    "name": "Erie"
  },
  {
    "id": "esurance",
    "name": "Esurance"
  },
  {
    "id": "farmers",
    "name": "Farmers"
  },
  {
    "id": "grange",
    "name": "Grange"
  },
  {
    "id": "germania-insurance",
    "name": "Germania Insurance"
  },
  {
    "id": "hallmark-financial-service",
    "name": "Hallmark Financial Service"
  },
  {
    "id": "hanover-insurance",
    "name": "Hanover Insurance"
  },
  {
    "id": "hippo",
    "name": "Hippo"
  },
  {
    "id": "liberty-mutual",
    "name": "Liberty Mutual"
  },
  {
    "id": "mercury-insurance",
    "name": "Mercury Insurance"
  },
  {
    "id": "nationwide",
    "name": "Nationwide"
  },
  {
    "id": "openly-inc",
    "name": "Openly, Inc."
  },
  {
    "id": "progressive",
    "name": "Progressive"
  },
  {
    "id": "pure-insurance",
    "name": "Pure Insurance"
  },
  {
    "id": "sedgwick",
    "name": "Sedgwick"
  },
  {
    "id": "sedgwick-mrs",
    "name": "Sedgwick - MRS"
  },
  {
    "id": "state-farm",
    "name": "State Farm"
  },
  {
    "id": "the-cincinnati-insurance",
    "name": "The Cincinnati Insurance"
  },
  {
    "id": "the-philadelphia-contributionship",
    "name": "The Philadelphia Contributionship"
  },
  {
    "id": "travelers",
    "name": "Travelers"
  },
  {
    "id": "united-fire-group",
    "name": "United Fire Group"
  },
  {
    "id": "usaa",
    "name": "USAA"
  },
  {
    "id": "all-other-carriers",
    "name": "ALL OTHER CARRIERS"
  }
];
try{ window.__carriers = carriers; }catch(_){ }

const carrierBillables = {
  "american-family": {
    "ITEL Physical Sample": true,
    "Fence": false,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": true,
    "Steep Assist": false,
    "Additional Building": "No SQ Req",
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "amtrust": {
    "ITEL Physical Sample": true,
    "Fence": false,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": false,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "central-insurance": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": true,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "chubb": {
    "ITEL Physical Sample": false,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "cna": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": true,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "contractor-s-alliance-network-llc": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": false,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "crawford-thehartford-claims": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": true,
    "Steep Assist": true,
    "Additional Building": "No SQ Req",
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "cse-insurance-group": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": true,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "deskimate": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": false,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "erie": {
    "ITEL Physical Sample": true,
    "Fence": false,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "esurance": {
    "ITEL Physical Sample": true,
    "Fence": false,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "farmers": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": true,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "grange": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "germania-insurance": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": true,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "hallmark-financial-service": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": false,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "hanover-insurance": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "hippo": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "liberty-mutual": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": false,
    "Additional Building": "5 SQs",
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "mercury-insurance": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "nationwide": {
    "ITEL Physical Sample": true,
    "Fence": false,
    "Interior Room (1\u20133)": false,
    "Extra Interior Room (>3)": false,
    "Interior 360": true,
    "Steep Assist": "GOAT 10/12 or greater-Rope&Harness 12/12 or greater",
    "Additional Building": "4 SQS",
    "Install Tarp": "UP TO 1500SQFT - over 1500 needs approval from adjuster ragarding billing.",
    "Reset Tarp": "UP TO 1500SQFT - over 1500 needs approval from adjuster ragarding billing.",
    "Replace Tarp": "UP TO 1500SQFT - over 1500 needs approval from adjuster ragarding billing.",
    "Trip Charge": false
  },
  "openly-inc": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "progressive": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "pure-insurance": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "sedgwick": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "sedgwick-mrs": {
    "ITEL Physical Sample": false,
    "Fence": false,
    "Interior Room (1\u20133)": false,
    "Extra Interior Room (>3)": false,
    "Interior 360": false,
    "Steep Assist": false,
    "Additional Building": false,
    "Install Tarp": true,
    "Reset Tarp": false,
    "Replace Tarp": false,
    "Trip Charge": true
  },
  "state-farm": {
    "ITEL Physical Sample": false,
    "Fence": false,
    "Interior Room (1\u20133)": false,
    "Extra Interior Room (>3)": false,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": false,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "the-cincinnati-insurance": {
    "ITEL Physical Sample": false,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "the-philadelphia-contributionship": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "travelers": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": "Y but only pays base fee regardless of size",
    "Trip Charge": true
  },
  "united-fire-group": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  },
  "usaa": {
    "ITEL Physical Sample": true,
    "Fence": false,
    "Interior Room (1\u20133)": false,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": "10 SQ Req",
    "Install Tarp": false,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": "Y ($40)"
  },
  "all-other-carriers": {
    "ITEL Physical Sample": true,
    "Fence": true,
    "Interior Room (1\u20133)": true,
    "Extra Interior Room (>3)": true,
    "Interior 360": false,
    "Steep Assist": true,
    "Additional Building": true,
    "Install Tarp": true,
    "Reset Tarp": true,
    "Replace Tarp": true,
    "Trip Charge": true
  }
};
try{ window.__carrierBillables = carrierBillables; }catch(_){ }

const TARP_LIST_A = [[0, 150, 200], [151, 250, 350], [251, 400, 475], [401, 600, 600], [601, 800, 750], [801, 1000, 900], [1001, 1500, 1200], [1501, 2000, 1500], [2001, 2500, 1800], [2501, 3000, 2100], [3001, 3500, 2400], [3501, 4000, 2700], [4001, 4500, 3000], [4501, 5000, 3300]];
const TARP_LIST_B = [[0, 100, 200], [101, 300, 400], [301, 600, 650], [601, 900, 900], [901, 1200, 1100], [1201, 1500, 1250], [1501, 2000, 1650], [2001, 2500, 2050], [2501, 3000, 2450], [3001, 3500, 2850], [3501, 4000, 3250], [4001, 4500, 3650], [4501, 5000, 4050]];

addons = (addons || []).filter(a => a.name.toLowerCase() !== "engineer assist add'l time");

addons = (addons || []).filter(a => {
  const nm = a.name.toLowerCase();
  return nm !== "engineer assist add'l time".toLowerCase() && nm != "accuserve windows add'l time".toLowerCase();
});

const $ = (s,r=document)=>r.querySelector(s);
const $$ = (s,r=document)=>Array.from(r.querySelectorAll(s));
const KEY='et_ticket_v14', HISTORY_KEY='et_history_v14';

document.addEventListener('DOMContentLoaded', function(){
  try{
    var raw = localStorage.getItem(KEY);
    if(raw){
      var s = JSON.parse(raw);
      if(s && typeof s === 'object'){
        if(s.date) state.date = s.date;
        if(Array.isArray(s.items)) state.items = s.items;

      }
    }
  }catch(e){}
  try{ if(typeof renderTicket==='function') renderTicket(); }catch(_){}
});

function getOdo(){ try{ const s=JSON.parse(localStorage.getItem(KEY)||'{}'); return {start: Number(s.odoStart||0), end: Number(s.odoEnd||0)} }catch(e){ return {start:0,end:0} } }
function setOdo(start,end){ try{ const s=JSON.parse(localStorage.getItem(KEY)||'{}'); s.odoStart=Number(start)||0; s.odoEnd=Number(end)||0; localStorage.setItem(KEY, JSON.stringify(s)); }catch(e){} }

function getExpenses(){
  try{
    const s = JSON.parse(localStorage.getItem(KEY) || '{}');
    return Array.isArray(s.expenses) ? s.expenses : [];
  }catch(e){ return []; }
}
function setExpenses(arr){
  try{
    const s = JSON.parse(localStorage.getItem(KEY) || '{}');
    s.expenses = Array.isArray(arr) ? arr : [];
    localStorage.setItem(KEY, JSON.stringify(s));
  }catch(e){}
}

const FAVORITES_KEY='et_favorites_v14', CUSTOM_SVCS_KEY='et_custom_svcs_v14';
function getFavorites(){ try{ return new Set(JSON.parse(localStorage.getItem(FAVORITES_KEY)||'[]')); }catch(e){ return new Set(); } }
function saveFavorites(set){ try{ localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(set))); }catch(e){} }
function getCustomServices(){ try{ return JSON.parse(localStorage.getItem(CUSTOM_SVCS_KEY)||'[]'); }catch(e){ return []; } }
function saveCustomServices(list){ try{ localStorage.setItem(CUSTOM_SVCS_KEY, JSON.stringify(list)); }catch(e){} }
let favs = getFavorites();

const CARRIER_FAV_KEY='et_carrier_favs_v14';
function getCarrierFavs(){ try{ return new Set(JSON.parse(localStorage.getItem(CARRIER_FAV_KEY)||'[]')); }catch(e){ return new Set(); } }
function saveCarrierFavs(set){ try{ localStorage.setItem(CARRIER_FAV_KEY, JSON.stringify(Array.from(set))); }catch(e){} }
let customServices = getCustomServices();

const state = { date: new Date().toISOString().slice(0,10), items: [] };

function currency(v){ return `$${(v||0).toFixed(2)}`; }
function isTarpLine(name){ return (name||'').toLowerCase().startsWith('tarp —'); }
function persist(){ try{ localStorage.setItem(KEY, JSON.stringify(state)); }catch(e){} }

async function getHistory(){ const r=localStorage.getItem(HISTORY_KEY); return r? JSON.parse(r):[]; }
async function setHistory(h){ localStorage.setItem(HISTORY_KEY, JSON.stringify(h)); }

async function syncTodayToHistory(){
  const todayISO = state.date || new Date().toISOString().slice(0,10);
  const history = await getHistory();
  const items = JSON.parse(JSON.stringify(state.items || []));

  const servicesCount = items.length;
  const addonsCount = items.reduce((acc, it)=> acc + ((it.addons||[]).length), 0);
  const grandTotal = items.reduce((sum, it)=>{
    const addSum = (it.addons||[]).reduce((a,b)=> a + (Number(b.price)||0) * (Number(b.qty)||1), 0);
    return sum + (Number(it.price)||0) * (Number(it.qty)||1) + addSum;
  }, 0);

  let expenses = [];
  try{
    const s = JSON.parse(localStorage.getItem(KEY)||'{}');
    expenses = Array.isArray(s.expenses) ? s.expenses : [];
  }catch(_){}
  const _o = (typeof getOdo==='function') ? getOdo() : {start:0,end:0};

  let entry = history.find(h => h.date === todayISO);
  if(!entry){
    entry = {
      id: (crypto?.randomUUID?.() || String(Date.now())),
      date: todayISO,
      jobs: servicesCount ? 1 : 0,
      servicesCount, addonsCount, grandTotal,
      items,
      expenses,
      odoStart: Number(_o.start||0),
      odoEnd: Number(_o.end||0)
    };
    history.unshift(entry);
  }else{
    entry.items = items;
    entry.servicesCount = servicesCount;
    entry.addonsCount = addonsCount;
    entry.jobs = servicesCount ? 1 : 0;
    entry.grandTotal = grandTotal;
    entry.expenses = expenses;
    entry.odoStart = Number(_o.start||0);
    entry.odoEnd = Number(_o.end||0);
  }
  await setHistory(history);
  try{ await renderHistory(); }catch(_){}
}

function addServiceLine(name, price){
  state.items.push({ id: crypto.randomUUID(), name, price, qty: 1, addons: [] });
  renderTicket(); persist(); syncTodayToHistory();
  if (isTimeBilled(name)) { openEngineerModal(state.items.length - 1); }
}
function addTarpLine(carrier, sqft, invoice, pay){
  const name = `Tarp — ${carrier} — ${sqft} sqft`;
  addServiceLine(name, pay);
}
function totals(){

  let servicesSubtotal=0, addonsTotal=0;
  state.items.forEach(it=>{
    servicesSubtotal += it.price*(it.qty||1);
    addonsTotal += (it.addons||[]).reduce((a,b)=>a+b.price*(b.qty||1),0);
  });
  const expenses = getExpenses();
  const expensesTotal = (expenses||[]).reduce((s,e)=> s + (Number(e.amount)||0), 0);
  const grand = servicesSubtotal + addonsTotal;
  const jobs = state.items.reduce((sum, it)=> sum + (Number(it.qty)||1), 0);
  const avg = jobs ? (grand / jobs) : 0;

  const odo = (typeof getOdo==='function') ? getOdo() : {start:0,end:0};
  const odoMiles = Math.max(0, (Number(odo.end)||0) - (Number(odo.start)||0));
  return {servicesSubtotal, addonsTotal, expensesTotal, grand, jobs, avg};
}

function openServicePicker(){
  try{ renderPickerCatalog(); }catch(e){ console.error(e); }
  $("#servicePickerModal").classList.remove("hidden");
  const search = $("#pickerSearch"); if(search){ search.value=''; search.focus(); }
}
function closeServicePicker(){ $("#servicePickerModal").classList.add("hidden"); }

function renderPickerCatalog(){
  const listEl = $("#pickerList"); if(!listEl) return;
  const favs = getFavorites ? getFavorites() : new Set();
  const searchVal = ($("#pickerSearch")?.value||'').toLowerCase().trim();
  const merged = (typeof getCustomServices==='function' ? (getCustomServices()||[]) : []).concat(services||[]);
  let display = merged;
  if(searchVal){ display = merged.filter(s=> (s.name||'').toLowerCase().includes(searchVal)); }
  display.sort((a,b)=>{
    const af = favs.has(a.name), bf = favs.has(b.name);
    if (af !== bf) return af ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
  listEl.innerHTML='';
  display.forEach(s=>{
    const div=document.createElement('div');
    div.className='cardItem';
    const starActive = favs.has(s.name) ? 'active' : '';
    div.innerHTML = `
      <div class="svcRow top"><span class="name">${s.name}</span></div>
      <div class="svcRow bottom">
        <span class="price">${currency(s.price)}</span>
        <div class="svcActions">
          <span class="star ${starActive}" title="Favorite">★</span>
          <button class="btnAddSvc" aria-label="Add service">➕</button>
        </div>
      </div>`;

    div.querySelector('.btnAddSvc').onclick = ()=>{ addServiceLine(s.name, s.price); closeServicePicker(); };
    const star = div.querySelector('.star');
    star.onclick = ()=>{
      const f = getFavorites();
      if(f.has(s.name)) f.delete(s.name); else f.add(s.name);
      saveFavorites(f); renderPickerCatalog();
    };
    listEl.appendChild(div);
  });
}

function openServiceModal(){
  const modal = $("#serviceModal"); if(!modal) return;
  const listEl = $("#svcList");
  const search = $("#svcSearch");
  listEl.innerHTML='';
  function getFavs(){ try{ return new Set(JSON.parse(localStorage.getItem('et_favorites_v14')||'[]')); }catch(e){ return new Set(); } }
  function saveFavs(set){ try{ localStorage.setItem('et_favorites_v14', JSON.stringify(Array.from(set))); }catch(e){} }
  const favs = getFavs();
  function build(filter=''){
    listEl.innerHTML='';
    const merged = (window.customServices||[]).concat(services);
    let display = merged.filter(s=> !filter || (s.name||'').toLowerCase().includes(filter.toLowerCase()));
    display.sort((a,b)=>{
      const af=favs.has(a.name), bf=favs.has(b.name);
      if(af!==bf) return af? -1: 1;
      return a.name.localeCompare(b.name);
    });
    display.forEach(s=>{
      const div=document.createElement('div');
      div.className='svcItem';
      const active = favs.has(s.name)? 'active':'';
      div.innerHTML = `
        <div class="svcRow top"><span class="name">${s.name}</span></div>
        <div class="svcRow bottom"><span class="price">${currency(s.price)}</span>
          <div class="svcActions">
            <span class="star ${active}" title="Favorite">★</span>
            <button class="btnPick">➕</button>
          </div>
        </div>`;

      const star = div.querySelector('.star');
      const pick = div.querySelector('.btnPick');
      star.onclick = ()=>{
        if(favs.has(s.name)) favs.delete(s.name); else favs.add(s.name);
        saveFavs(favs); build(search.value||'');
      };
      pick.onclick = ()=>{ addServiceLine(s.name, s.price); closeServiceModal(); };
      listEl.appendChild(div);
    });
  }
  if(search){ search.value=''; search.oninput = ()=> build(search.value||''); }
  build('');
  modal.classList.remove('hidden');
}
function closeServiceModal(){ const modal = $("#serviceModal"); if(modal) modal.classList.add('hidden'); }
function renderCatalog(list=services){

  const merged = [...(customServices||[]), ...services];

  const searchVal = ($("#searchInput")?.value||'').toLowerCase().trim();
  let display = merged;
  if (searchVal){
    display = merged.filter(s=> s.name.toLowerCase().includes(searchVal));
  }

  display.sort((a,b)=>{
    const af = favs.has(a.name), bf = favs.has(b.name);
    if (af !== bf) return af ? -1 : 1;
    return a.name.localeCompare(b.name);
  });

  const cont=$("#serviceList"); cont.innerHTML='';
  display.forEach(s=>{ const div=document.createElement('div'); div.className='cardItem'; div.innerHTML=`<div class="meta"><span class="name">${s.name}</span><span class="price">${currency(s.price)}</span></div><div><span class="star ${favs.has(s.name)?'active':''}">⭐</span> <button>Add</button></div>`;
    div.querySelector('button').onclick=()=>addServiceLine(s.name,s.price);
    const star = div.querySelector('.star');
    star.onclick = ()=>{ if (favs.has(s.name)) favs.delete(s.name); else favs.add(s.name); saveFavorites(favs); renderCatalog(); };
    cont.appendChild(div); });
}
function renderTicket(){
  const tbody=$("#ticketTable tbody"); tbody.innerHTML='';
  const mwrap=$("#ticketMobile"); if(mwrap) mwrap.innerHTML='';
  state.items.forEach((it, idx)=>{
    const addonSum=(it.addons||[]).reduce((a,b)=>a+b.price*(b.qty||1),0);
    const line = it.price*(it.qty||1) + addonSum;
    const tr=document.createElement('tr');
    const addonsChips = (it.addons && it.addons.length)
  ? `<div class='chips'>${it.addons.map(a=>`<span class='chip'><span class='dot'></span><span>${a.name}</span><span>${currency(a.price)}</span></span>`).join('')}</div>`
  : "";
    tr.innerHTML=`
      <td>${it.name}</td>
      <td class='colQty'><div class='qtyWrap'><button class='qtyMinus' aria-label='Decrease'>–</button><span class='qtyVal'>${it.qty||1}</span><button class='qtyPlus' aria-label='Increase'>+</button></div></td>
      <td>${currency(it.price)}</td>
      <td>${addonsChips}</td>
      <td>${currency(line)}</td>
      <td class="rowActions">
        ${isTarpLine(it.name) ? '' : '<button data-act="addons">Add-ons</button>'} ${ ( (it.name||'').toLowerCase()==='engineer assist' ) ? '<button data-act=\"time\">🕒 Time</button>' : '' }
        <button data-act="del">🗑</button>
      </td>`;

    const mcard=document.createElement('div');
    mcard.className='mcard';
    mcard.setAttribute('data-idx', String(idx));
    mcard.innerHTML = `
      <div class="mrow top">
        <div class="mname">${displayServiceName(it.name)}</div>
        <div class="mtotal">${currency(line)}</div>
      </div>
      <div class="mrow mid">
        <div class="mqty"><div class='qtyWrap'><button class='qtyMinus' aria-label='Decrease'>–</button><span class='qtyVal'>${it.qty||1}</span><button class='qtyPlus' aria-label='Increase'>+</button></div></div>
        <div class="munit">${currency(it.price)} ea</div>

        <div class="mactions">${isTarpLine(it.name) ? '' : '<button class="btnIcon" data-act="addons" title="Add-ons">➕</button>'}
        ${isTimeBilled(it.name) ? '<button class="btnIcon" data-act="time" title="Edit time">🕒</button>' : ''}
        <button class="btnIcon" data-act="del" title="Remove">🗑</button>
        </div>
      </div>
      <div class="mrow addons">${addonsChips}</div>`;
    if(mwrap) mwrap.appendChild(mcard);
    const minus = tr.querySelector('.qtyMinus');
const plus = tr.querySelector('.qtyPlus');
if(minus) minus.onclick = ()=>{ it.qty=Math.max(1,(Number(it.qty)||1)-1); renderTicket(); persist(); syncTodayToHistory(); };
if(plus) plus.onclick = ()=>{ it.qty=(Number(it.qty)||1)+1; renderTicket(); persist(); syncTodayToHistory(); };
tr.querySelector('[data-act=del]').onclick = ()=>{ try{ confirmDeleteService(idx); }catch(_){ } };
    const btn=tr.querySelector('[data-act=addons]'); if(btn){ btn.onclick=()=>openAddonsModal(idx); }
    const tbtn=tr.querySelector('[data-act=time]'); if(tbtn){ tbtn.onclick=()=>openEngineerModal(idx); }
    tbody.appendChild(tr);

    if(mwrap){
      const mc = mwrap.lastElementChild;
      if(mc){
        const mMinus = mc.querySelector('.qtyMinus');
        const mPlus = mc.querySelector('.qtyPlus');
        if(mMinus) mMinus.onclick = ()=>{ it.qty=Math.max(1,(Number(it.qty)||1)-1); renderTicket(); persist(); syncTodayToHistory(); };
        if(mPlus) mPlus.onclick = ()=>{ it.qty=(Number(it.qty)||1)+1; renderTicket(); persist(); syncTodayToHistory(); };
        const mDel = mc.querySelector('[data-act=del]');
        if(mDel) mDel.onclick = ()=>{ try{ confirmDeleteService(idx); }catch(_){ } };
        const mAdd = mc.querySelector('[data-act=addons]');
        if(mAdd) mAdd.onclick = ()=> openAddonsModal(idx);
        const mTime = mc.querySelector('[data-act=time]');
        if(mTime) mTime.onclick = ()=> openEngineerModal(idx);
      }
    }
    });
  const t=totals();
  $("#grandTotal").textContent = currency(t.grand);
  $("#netTotal").textContent = currency(t.grand - (t.expensesTotal||0));
  $("#jobsCount").textContent = t.jobs;
  (function(){
  const set = new Set((state.items||[]).map(it => (it.name||'').trim().toLowerCase()));
  $("#servicesCount").textContent = set.size;

document.addEventListener('DOMContentLoaded', ()=>{

  const engClose = document.getElementById('engClose');
  const engCancel = document.getElementById('engCancel');
  const engSave = document.getElementById('engSave');
  const engHours = document.getElementById('engHours');
  const engMinutes = document.getElementById('engMinutes');
  function showEngineer(show){
    const m = document.getElementById('engModal');
    if(!m) return;
    m.classList.toggle('hidden', !show);
    m.setAttribute('aria-hidden', show?'false':'true');
    if(show){ if(typeof lockBodyScroll==='function') lockBodyScroll(); }
    else { if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
  }
  window.showEngineer = showEngineer;
  if(engClose) engClose.addEventListener('click', ()=>showEngineer(false));
  if(engCancel) engCancel.addEventListener('click', ()=>showEngineer(false));
  if(engHours) engHours.addEventListener('input', ()=>{ try{ updateEngineerPreview(); }catch(_){}});
  if(engMinutes) engMinutes.addEventListener('input', ()=>{ try{ updateEngineerPreview(); }catch(_){}});
  if(engSave) engSave.addEventListener('click', ()=>{
    try{
      const h = Number((document.getElementById('engHours')||{}).value||0);
      const m = Number((document.getElementById('engMinutes')||{}).value||0);
      const price = priceEngineerAssist(h, m);
      const it = state.items[engIdx];
      it.price = price;
      it._engTime = {h, m};
      engIdx = null;
      showEngineer(false);
      renderTicket(); persist(); syncTodayToHistory();
    }catch(e){}
  });

  const addonsClose = document.getElementById('addonsClose');
  const addonsCancel = document.getElementById('addonsCancel');
  function showAddons(show){
    const m = document.getElementById('addonsModal');
    if(!m) return;
    m.classList.toggle('hidden', !show);
    m.setAttribute('aria-hidden', show?'false':'true');
    if(show){ if(typeof lockBodyScroll==='function') lockBodyScroll(); }
    else { if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
  }
  window.showAddons = showAddons;
  if(addonsClose) addonsClose.addEventListener('click', ()=>showAddons(false));
  if(addonsCancel) addonsCancel.addEventListener('click', ()=>showAddons(false));
});

})();
  $("#addonsCount").textContent = state.items.reduce((a,i)=>a+(i.addons?.length||0),0);
  $("#milesDriven").textContent = t.odoMiles ?? 0;
  const expEl = document.getElementById('totalExpenses'); if(expEl){ expEl.textContent = currency(t.expensesTotal||0); }
  $("#avgEarning").textContent = currency(t.avg);
  try{ renderExpensesRows(); }catch(e){}
}

let addonsIndex = null;
function openAddonsModal(index){
  addonsIndex = index; const it = state.items[index]; $("#addonsTitle").textContent = `Add-ons for ${it.name}`; const selected = new Set((it.addons||[]).map(a=>a.name)); const body = $("#addonsBody"); body.innerHTML='';
  addons.forEach(a => { const row = document.createElement('div'); row.className='addonRow'; const id = `addon_${a.name.replace(/[^a-z0-9]+/gi,'_')}`; row.innerHTML = `
      <input type="checkbox" id="${id}" ${selected.has(a.name)?'checked':''}/>
      <label for="${id}"><span class="addonName">${a.name}</span><span class="addonPrice">${currency(a.price)}</span></label>
      <div>${currency(a.price)}</div>`; body.appendChild(row); });
  showAddons(true);
}
function showAddons(show){ const m=$("#addonsModal"); m.classList.toggle('hidden', !show); m.setAttribute('aria-hidden', show?'false':'true'); }

function saveAddons(){
  try{
    if(addonsIndex==null) return;
    const it = state.items[addonsIndex];
    const picks = [];
    document.querySelectorAll('#addonsBody input[type=checkbox]').forEach((cb, i)=>{
      if(cb && cb.checked){
        const a = Array.isArray(addons) ? addons[i] : null;
        if(!a) return;
        let qty = 1;
        if(a.name === "Additional Building/Structure"){
          const q = prompt("How many additional buildings/structures?", "1");
          qty = Math.max(1, parseInt(q||"1", 10));
        }
        picks.push({ name: a.name, price: Number(a.price||0), qty });
      }
    });
    it.addons = picks;
    addonsIndex = null;
  }catch(e){}
  const m=document.getElementById('addonsModal');
  if(m){ m.classList.add('hidden'); m.setAttribute('aria-hidden','true'); if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
  try{ renderTicket(); persist(); syncTodayToHistory(); }catch(_){}
}

function renderCarrierList(){
  const host=$("#carrierList"); if(!host) return; host.innerHTML=''; const q=($("#carrierSearch")?.value||'').toLowerCase().trim(); const list = carriers.filter(c => !q || c.name.toLowerCase().includes(q));
  list.forEach(c => { const flags = carrierBillables[c.id] || {}; const card=document.createElement('div'); card.className='carrierCard'; const header=document.createElement('div'); header.className='carrierHeader'; header.innerHTML = `<strong>${c.name}</strong> <span class="badge">Services: ${Object.keys(flags).length}</span>`; const body=document.createElement('div'); body.style.display='none'; const table=document.createElement('table'); table.innerHTML='<thead><tr><th>Service</th><th>Available</th></tr></thead>'; const tb=document.createElement('tbody');
    Object.entries(flags).forEach(([svc,val])=>{ const tr=document.createElement('tr'); const display = (val===true)?'✅':(val===false?'❌':String(val)); tr.innerHTML = `<td>${svc}</td><td>${display}</td>`; tb.appendChild(tr); });
    table.appendChild(tb); body.appendChild(table);
    header.onclick=()=>{ body.style.display = (body.style.display==='none'?'block':'none'); };
    card.appendChild(header); card.appendChild(body);
    host.appendChild(card);
  });
}

function isTimeBilled(name){
  const n = (name||'').toLowerCase();
  return n === 'engineer assist' || n.startsWith('accuserve windows');
}

function priceEngineerAssist(hours, minutes){
  let totalMin = Math.max(0, (Number(hours)||0)*60 + (Number(minutes)||0));
  if (totalMin <= 60) return 100;
  const over = totalMin - 60;
  const increments = Math.ceil(over / 15);
  return 100 + increments * 25;
}
let engIdx = null;
function openEngineerModal(index){
  engIdx = index;
  try{
    const it = state.items[index] || {};
    const titleEl = document.querySelector('#engModal .modalHead h3');
    if(titleEl){
      const n = (it.name||'').toLowerCase();
      titleEl.textContent = n.startsWith('accuserve windows') ? 'Accuserve Windows — Time' : 'Engineer Assist — Time';
    }
  }catch(e){}

  const it = state.items[index];
  const meta = it._engTime || {h:1, m:0};
  $("#engHours").value = meta.h ?? 1;
  $("#engMinutes").value = meta.m ?? 0;
  updateEngineerPreview();
  showEngineer(true);
}
function showEngineer(show){
  const m=$("#engModal"); m.classList.toggle('hidden', !show); m.setAttribute('aria-hidden', show?'false':'true');
}
function updateEngineerPreview(){
  const h = Number($("#engHours").value||0);
  const m = Number($("#engMinutes").value||0);
  const price = priceEngineerAssist(h, m);
  $("#engPreview").textContent = `Calculated: $${price.toFixed(2)} (first 60 min = $100, then $25/15min rounded up)`;
}
function saveEngineerTime(){
  if(engIdx==null) return;
  const h = Number($("#engHours").value||0);
  const m = Number($("#engMinutes").value||0);
  const price = priceEngineerAssist(h, m);
  const it = state.items[engIdx];
  it.price = price;
  it._engTime = {h, m};
  engIdx = null;
  showEngineer(false);
  renderTicket(); persist(); syncTodayToHistory();
}

function chooseTarpList(carrierName, sqft){ const name=(carrierName||'').toLowerCase(); const isStateFarm = name.includes('state') && name.includes('farm'); const listAcarriers=['liberty','safeco','homesite','amfam','american family','nationwide']; const inListA=listAcarriers.some(k=>name.includes(k)); if(isStateFarm) return sqft<=600?'A':'B'; return inListA?'A':'B'; }
function invoiceForSqft(listId, sqft){ const table=listId==='A'?TARP_LIST_A:TARP_LIST_B; for(const [min,max,amt] of table){ if(sqft>=min && sqft<=max) return amt; } return table.length?table[table.length-1][2]:0; }
function computeTarp(carrierName, sqft){ const listId=chooseTarpList(carrierName,sqft); const invoice=invoiceForSqft(listId,sqft); return { listId, invoice, pay: invoice/2 }; }
function openTarpModal(){
  const sel=$("#tarpCarrier");
  const search=$("#tarpSearch");
  const favBtn=$("#tarpFavBtn");
  const favs=getCarrierFavs();
  function populate(filter=''){
    sel.innerHTML='';
    const list = carriers
      .filter(c=> !filter || c.name.toLowerCase().includes(filter.toLowerCase()))
      .slice()
      .sort((a,b)=>{
        const af=favs.has(a.name), bf=favs.has(b.name);
        if(af!==bf) return af? -1: 1;
        return a.name.localeCompare(b.name);
      });
    list.forEach(c=>{ const opt=document.createElement('option'); opt.value=c.name; opt.textContent=c.name; sel.appendChild(opt); });
    updateFavBtn();
  }
  function updateFavBtn(){
    if(!favBtn) return;
    const name = sel.value||'';
    favBtn.classList.toggle('active', favs.has(name));
  }
  if(search){ search.value=''; search.oninput = ()=> populate(search.value||''); }
  if(favBtn){
    favBtn.onclick = ()=>{
      const name = sel.value||''; if(!name) return;
      if(favs.has(name)) favs.delete(name); else favs.add(name);
      saveCarrierFavs(favs);
      populate(search?.value||'');
    };
  }
  populate('');
  sel.onchange = updateFavBtn;
  $("#tarpResult").textContent='Enter values to calculate…';
  showTarp(true);
}

function showTarp(show){ const m=$("#tarpModal"); m.classList.toggle('hidden', !show); m.setAttribute('aria-hidden', show?'false':'true'); }
function sqftFromInputs(){ const s=Number($("#tarpSqft").value||0); const L=Number($("#tarpLen").value||0); const W=Number($("#tarpWid").value||0); if(s>0) return Math.floor(s); if(L>0&&W>0) return Math.floor(L*W); return 0; }
function previewTarp(){ const carrier=$("#tarpCarrier").value; const sqft=sqftFromInputs(); if(sqft<=0){ $("#tarpResult").textContent='Enter sqft or L×W'; return null; } const res=computeTarp(carrier,sqft); $("#tarpResult").textContent = `${carrier} — ${sqft} sqft → Invoice $${res.invoice.toFixed(2)} • Pay $${res.pay.toFixed(2)}`; return {carrier, sqft, ...res}; }
function addTarp(){ const p=previewTarp(); if(!p) return; addTarpLine(p.carrier,p.sqft,p.invoice,p.pay); showTarp(false); }

function dateOnlyISO(d){ return new Date(d.getFullYear(), d.getMonth(), d.getDate()).toISOString().slice(0,10); }
function addDays(d,n){ const x=new Date(d); x.setDate(x.getDate()+n); return x; }
function startOfFriWeek(d){ const day=d.getDay(); const diff=(day-5+7)%7; const start=addDays(d,-diff); return new Date(start.getFullYear(),start.getMonth(),start.getDate()); }
function endOfFriWeek(d){ const s=startOfFriWeek(d); return addDays(s,6); }
function fmtMDY(d){ const mm=String(d.getMonth()+1).padStart(2,'0'); const dd=String(d.getDate()).padStart(2,'0'); const yyyy=d.getFullYear(); return `${mm}/${dd}/${yyyy}`; }

let currentRange={kind:'thisweek', start:null, end:null};
function setRange(kind){
  const now=new Date();
  if(kind==='thisweek'){ currentRange={kind, start:startOfFriWeek(now), end:endOfFriWeek(now)}; }
  else if(kind==='lastweek'){ const start=addDays(startOfFriWeek(now),-7); currentRange={kind, start, end:addDays(start,6)}; }
  else { currentRange={kind, start:new Date(now.getFullYear(),0,1), end:now}; }
  document.querySelectorAll('.chipBtn').forEach(ch=>ch.classList.remove('active'));
  if(kind==='thisweek') document.querySelector('#chipThisWeek')?.classList.add('active');
  if(kind==='lastweek') document.querySelector('#chipLastWeek')?.classList.add('active');
  if(kind==='ytd') document.querySelector('#chipYTD')?.classList.add('active');
  document.querySelector('#rangeText').textContent = `Selected Range: ${fmtMDY(currentRange.start)} to ${fmtMDY(currentRange.end)}`;
  renderHistory();
}

function exportCsvRange(){
  const sISO=dateOnlyISO(currentRange.start); const eISO=dateOnlyISO(currentRange.end);
  getHistory().then(rows=>{
    rows=(rows||[]).filter(r=>r.date>=sISO && r.date<=eISO);
    const header=['Date','Jobs','Miles','Services','Add-ons','Total']; const lines=[header.join(',')];
    rows.forEach(r=>lines.push([r.date,r.jobs,r.miles,r.servicesCount,r.addonsCount,(r.grandTotal||0).toFixed(2)].join(',')));
    const blob=new Blob([lines.join('\\n')],{type:'text/csv'}); const url=URL.createObjectURL(blob);
    const a=document.createElement('a'); a.href=url; a.download='history_range.csv'; a.click(); URL.revokeObjectURL(url);
  });
}

function openQuickAdd(){
  const m = document.getElementById('quickAddModal');
  if(m){ m.classList.remove('hidden'); m.setAttribute('aria-hidden','false'); if(typeof lockBodyScroll==='function') lockBodyScroll(); }
  populateQuickServices(Array.isArray(services)?services:[]);
  renderQuickAddons();
  const qd = document.getElementById('quickDate');
  if(qd && !qd.value){ qd.value = new Date().toISOString().slice(0,10); }
}
function showQuick(show){
  const m = document.getElementById('quickAddModal');
  if(!m) return;
  m.classList.toggle('hidden', !show);
  m.setAttribute('aria-hidden', show?'false':'true');
  if(show){ if(typeof lockBodyScroll==='function') lockBodyScroll(); }
  else { if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
}
function populateQuickServices(list){
  const sel = document.getElementById('quickService');
  if(!sel) return;
  sel.innerHTML = (list||[]).map((s,i)=>{
    const price = Number(s.price||0);
    const label = `${s.name} — $${price.toFixed(2)}`;
    return `<option value="${i}" data-name="${s.name.replace(/"/g,'&quot;')}" data-price="${price}">${label}</option>`;
  }).join('');
}
function renderQuickAddons(){
  const host = document.getElementById('quickAddons');
  if(!host) return;
  host.innerHTML = '';
  (addons||[]).forEach((a, i)=>{
    const id = "qa"+i;
    const row = document.createElement('label');
    row.className = 'addonRow';
    row.innerHTML = `<input type="checkbox" data-index="${i}" id="${id}"><span class="addonName">${a.name}</span><span class="addonPrice">$${(Number(a.price)||0).toFixed(2)}</span>`;
    host.appendChild(row);
  });
}
async function saveQuickAdd(){
  try{
    const sel = document.getElementById('quickService');
    const opt = sel ? sel.options[sel.selectedIndex] : null;
    if(!opt) return;
    const name = opt.getAttribute('data-name') || opt.textContent || '';
    const price = Number(opt.getAttribute('data-price') || 0);
    const picks = [];
    document.querySelectorAll('#quickAddons input[type=checkbox]').forEach(cb=>{
      if(cb.checked){
        const idx = Number(cb.getAttribute('data-index')||-1);
        const a = (typeof addons !== 'undefined' && Array.isArray(addons)) ? addons[idx] : null;
        if(a){
          let qty = 1;
          if(a.name === "Additional Building/Structure"){
            const q = prompt("How many additional buildings/structures?", "1");
            qty = Math.max(1, parseInt(q||"1",10));
          }
          picks.push({name:a.name, price:Number(a.price||0), qty});
        }
      }
    });
    const date = document.getElementById('quickDate')?.value || new Date().toISOString().slice(0,10);
    const history = await getHistory() || [];
    let entry = history.find(h=>h.date===date);
    if(!entry){ entry = { date, servicesCount:0, addonsCount:0, grandTotal:0, items:[], expenses:[] }; history.push(entry); }
    entry.items.push({ name, price, qty:1, addons:picks });
    entry.servicesCount = entry.items.length;
    entry.addonsCount = entry.items.reduce((a,i)=> a + ((i.addons||[]).length), 0);
    entry.grandTotal = entry.items.reduce((sum, it)=>{
      const addonSum = (it.addons||[]).reduce((a,b)=> a + (Number(b.price)||0) * (Number(b.qty)||1), 0);
      return sum + (Number(it.price)||0) * (Number(it.qty)||1) + addonSum;
    }, 0);
    await setHistory(history);
    try{ if(typeof renderHistory==='function') await renderHistory(); }catch(_){}
    showQuick(false);
  }catch(_){}
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('quickClose')?.addEventListener('click', ()=>showQuick(false));
  document.getElementById('quickCancel')?.addEventListener('click', ()=>showQuick(false));
  document.getElementById('quickAddBtn')?.addEventListener('click', ()=>{ saveQuickAdd(); });
});

document.addEventListener('DOMContentLoaded', ()=>{
  try{
    document.getElementById('addTarpBtn')?.addEventListener('click', openTarpModal);
    document.getElementById('tarpClose')?.addEventListener('click', ()=>showTarp(false));
    document.getElementById('tarpCalcBtn')?.addEventListener('click', previewTarp);
    document.getElementById('tarpAddBtn')?.addEventListener('click', addTarp);
    document.getElementById('addonsClose')?.addEventListener('click', ()=>showAddons(false));
    document.getElementById('addonsCancel')?.addEventListener('click', ()=>showAddons(false));
    document.getElementById('addonsSave')?.addEventListener('click', saveAddons);
  }catch(_){}
});

(function(){
  const fab = document.getElementById('addServiceFab');
  const topBtn = document.getElementById('addServiceBtn');

  if (!fab) return;

  function isVisible(el){
    if(!el) return false;
    const style = window.getComputedStyle(el);
    if(style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') return false;
    const rect = el.getBoundingClientRect();
    const inViewport = rect.bottom > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
    return inViewport;
  }

  function onFabClick(){
    try{
      if (typeof openServiceModal === 'function') { openServiceModal(); return; }
      const btn = document.getElementById('addServiceBtn');
      if(btn){ btn.click(); }
    }catch(e){ console.error(e); }
  }
  fab.onclick = onFabClick;

  function isOnTicketTab(){
    const active = document.querySelector('.tab.active');
    return active && active.getAttribute('data-tab') === 'ticket';
  }

  function refreshFab(){

    if(!isOnTicketTab()){ fab.classList.remove('show'); return; }

    const scrolled = (window.scrollY || window.pageYOffset || 0) > 80;
    const shouldShow = (!topBtn || !isVisible(topBtn) || scrolled);
    if(shouldShow){ fab.classList.add('show'); } else { fab.classList.remove('show'); }
  }

  try{
    if(topBtn && 'IntersectionObserver' in window){
      const io = new IntersectionObserver(()=>refreshFab(), {root:null, threshold:[0, 0.01, 1]});
      io.observe(topBtn);
    }
  }catch(e){}

  ['scroll','resize','orientationchange'].forEach(evt=>window.addEventListener(evt, refreshFab, {passive:true}));
  document.addEventListener('click', (e)=>{
    const t = e.target.closest('.tab');
    if(t){ setTimeout(refreshFab, 0); }
  });
  document.addEventListener('DOMContentLoaded', refreshFab);
  setTimeout(refreshFab, 300);

document.addEventListener('DOMContentLoaded', ()=>{

  const engClose = document.getElementById('engClose');
  const engCancel = document.getElementById('engCancel');
  const engSave = document.getElementById('engSave');
  const engHours = document.getElementById('engHours');
  const engMinutes = document.getElementById('engMinutes');
  function showEngineer(show){
    const m = document.getElementById('engModal');
    if(!m) return;
    m.classList.toggle('hidden', !show);
    m.setAttribute('aria-hidden', show?'false':'true');
    if(show){ if(typeof lockBodyScroll==='function') lockBodyScroll(); }
    else { if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
  }
  window.showEngineer = showEngineer;
  if(engClose) engClose.addEventListener('click', ()=>showEngineer(false));
  if(engCancel) engCancel.addEventListener('click', ()=>showEngineer(false));
  if(engHours) engHours.addEventListener('input', ()=>{ try{ updateEngineerPreview(); }catch(_){}});
  if(engMinutes) engMinutes.addEventListener('input', ()=>{ try{ updateEngineerPreview(); }catch(_){}});
  if(engSave) engSave.addEventListener('click', ()=>{
    try{
      const h = Number((document.getElementById('engHours')||{}).value||0);
      const m = Number((document.getElementById('engMinutes')||{}).value||0);
      const price = priceEngineerAssist(h, m);
      const it = state.items[engIdx];
      it.price = price;
      it._engTime = {h, m};
      engIdx = null;
      showEngineer(false);
      renderTicket(); persist(); syncTodayToHistory();
    }catch(e){}
  });

  const addonsClose = document.getElementById('addonsClose');
  const addonsCancel = document.getElementById('addonsCancel');
  function showAddons(show){
    const m = document.getElementById('addonsModal');
    if(!m) return;
    m.classList.toggle('hidden', !show);
    m.setAttribute('aria-hidden', show?'false':'true');
    if(show){ if(typeof lockBodyScroll==='function') lockBodyScroll(); }
    else { if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
  }
  window.showAddons = showAddons;
  if(addonsClose) addonsClose.addEventListener('click', ()=>showAddons(false));
  if(addonsCancel) addonsCancel.addEventListener('click', ()=>showAddons(false));
});

})();

  try{
    const cs = document.getElementById('customServiceBtn');
    if(cs){
      cs.addEventListener('click', ()=>{
        const n = document.getElementById('customName');
        const p = document.getElementById('customPrice');
        const s = document.getElementById('customSave');
        if(n) n.value='';
        if(p) p.value='';
        if(s) s.checked=true;
        openCustomModal();
      });
    }
  }catch(e){}

window.openExpenseModal = function(){
  const m = document.getElementById('expenseModal');
  if(!m) return;
  const n = document.getElementById('expenseName');
  const a = document.getElementById('expenseAmount');
  if(n) n.value='';
  if(a) a.value='';
  m.classList.remove('hidden');
  m.setAttribute('aria-hidden', 'false');
  (n||a)?.focus?.();
}
window.closeExpenseModal = function(){
  const m = document.getElementById('expenseModal');
  if(!m) return;
  m.classList.add('hidden');
  m.setAttribute('aria-hidden', 'true');
}
window.saveExpense = function(){

  const n = (document.getElementById('expenseName')?.value||'').trim();
  const amt = Number(document.getElementById('expenseAmount')?.value||0);
  if(!n || !(amt>=0)) return;
  const ex = getExpenses();
  ex.push({name:n, amount:amt});
  setExpenses(ex);
  renderTicket();
  closeExpenseModal();
}

function openCustomModal(){
  try{
    if (typeof showCustom === 'function'){ try{ showCustom(true); }catch(_){ } return; }
  }catch(e){}

  const m = document.getElementById('customModal');
  if(m){
    const n = document.getElementById('customName');
    const p = document.getElementById('customPrice');
    const s = document.getElementById('customSave');
    if(n) n.value='';
    if(p) p.value='';
    if(s) s.checked=true;
    m.classList.remove('hidden');
    m.setAttribute('aria-hidden','false');
  }
}

(function(){

  window.showCustom = function(show){
    var m = document.getElementById('customModal');
    if(!m) return;
    if(show){ m.classList.remove('hidden'); m.setAttribute('aria-hidden','false'); }
    else { m.classList.add('hidden'); m.setAttribute('aria-hidden','true'); }
  };

  window.openExpenseModal = function(){
    var m = document.getElementById('expenseModal');
    if(!m) return;
    var n = document.getElementById('expenseName');
    var a = document.getElementById('expenseAmount');
    if(n) n.value='';
    if(a) a.value='';
    m.classList.remove('hidden'); m.setAttribute('aria-hidden','false');
    (n||a)?.focus?.();
  };

  window.closeExpenseModal = function(){
    var m = document.getElementById('expenseModal');
    if(!m) return;
    m.classList.add('hidden'); m.setAttribute('aria-hidden','true');
  };

  window.saveExpense = function(){

    var n = (document.getElementById('expenseName')||{}).value || '';
    var a = Number((document.getElementById('expenseAmount')||{}).value || 0);
    n = (n||'').trim();
    if(!n || !(a>=0)) return;
    try{
      var s = JSON.parse(localStorage.getItem(KEY) || '{}');
      var ex = Array.isArray(s.expenses)? s.expenses : [];
      ex.push({name:n, amount:a});
      s.expenses = ex;
      localStorage.setItem(KEY, JSON.stringify(s));
    }catch(e){}
    try{ if(typeof renderTicket==='function') renderTicket(); }catch(e){}
    closeExpenseModal();
  };

  document.addEventListener('DOMContentLoaded', function(){

  document.body.addEventListener('click', (e)=>{
    const modal = e.target.classList && e.target.classList.contains('modal') ? e.target : null;
    if(modal){ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); unlockBodyScroll(); }
  });
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      const open = document.querySelectorAll('.modal:not(.hidden)');
      open.forEach(m=>{ m.classList.add('hidden'); m.setAttribute('aria-hidden','true'); });
      unlockBodyScroll();
    }
  });

document.getElementById('addTarpPill')?.addEventListener('click', ()=>{
  document.getElementById('addTarpBtn')?.click();
});

    try{
      document.getElementById('customClose')?.addEventListener('click', function(){ showCustom(false); });
      document.getElementById('customCancel')?.addEventListener('click', function(){ showCustom(false); });
      document.getElementById('customSaveBtn')?.addEventListener('click', function(){
        var name = (document.getElementById('customName')||{}).value || '';
        var price = Number((document.getElementById('customPrice')||{}).value || 0);
        var saveIt = !!(document.getElementById('customSave')||{}).checked;
        name = (name||'').trim();
        if(!name || !(price>=0)) return;
        try{ if(typeof addServiceLine==='function') addServiceLine(name, price); }catch(e){}
        if(saveIt){
          try{
            var custom = JSON.parse(localStorage.getItem('et_custom_svcs_v14')||'[]');
            if(!custom.find(function(s){return (s.name||'')===name;})){ custom.push({name:name, price:price}); }
            localStorage.setItem('et_custom_svcs_v14', JSON.stringify(custom));
            if(typeof renderCatalog==='function') renderCatalog();
          }catch(e){}
        }
        showCustom(false);
      });
    }catch(e){}

    try{
      document.getElementById('customServiceBtn')?.addEventListener('click', function(){ showCustom(true); });
      document.getElementById('addExpenseBtn')?.addEventListener('click', function(){ openExpenseModal(); });
    }catch(e){}

    try{
      document.getElementById('expenseClose')?.addEventListener('click', function(){ closeExpenseModal(); });
      document.getElementById('expenseCancel')?.addEventListener('click', function(){ closeExpenseModal(); });
      document.getElementById('expenseSave')?.addEventListener('click', function(){ saveExpense(); });
    }catch(e){}
  });

document.addEventListener('DOMContentLoaded', ()=>{

  const engClose = document.getElementById('engClose');
  const engCancel = document.getElementById('engCancel');
  const engSave = document.getElementById('engSave');
  const engHours = document.getElementById('engHours');
  const engMinutes = document.getElementById('engMinutes');
  function showEngineer(show){
    const m = document.getElementById('engModal');
    if(!m) return;
    m.classList.toggle('hidden', !show);
    m.setAttribute('aria-hidden', show?'false':'true');
    if(show){ if(typeof lockBodyScroll==='function') lockBodyScroll(); }
    else { if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
  }
  window.showEngineer = showEngineer;
  if(engClose) engClose.addEventListener('click', ()=>showEngineer(false));
  if(engCancel) engCancel.addEventListener('click', ()=>showEngineer(false));
  if(engHours) engHours.addEventListener('input', ()=>{ try{ updateEngineerPreview(); }catch(_){}});
  if(engMinutes) engMinutes.addEventListener('input', ()=>{ try{ updateEngineerPreview(); }catch(_){}});
  if(engSave) engSave.addEventListener('click', ()=>{
    try{
      const h = Number((document.getElementById('engHours')||{}).value||0);
      const m = Number((document.getElementById('engMinutes')||{}).value||0);
      const price = priceEngineerAssist(h, m);
      const it = state.items[engIdx];
      it.price = price;
      it._engTime = {h, m};
      engIdx = null;
      showEngineer(false);
      renderTicket(); persist(); syncTodayToHistory();
    }catch(e){}
  });

  const addonsClose = document.getElementById('addonsClose');
  const addonsCancel = document.getElementById('addonsCancel');
  function showAddons(show){
    const m = document.getElementById('addonsModal');
    if(!m) return;
    m.classList.toggle('hidden', !show);
    m.setAttribute('aria-hidden', show?'false':'true');
    if(show){ if(typeof lockBodyScroll==='function') lockBodyScroll(); }
    else { if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
  }
  window.showAddons = showAddons;
  if(addonsClose) addonsClose.addEventListener('click', ()=>showAddons(false));
  if(addonsCancel) addonsCancel.addEventListener('click', ()=>showAddons(false));
});

})();

function renderExpensesRows(){

  document.querySelectorAll('.expenseRow').forEach(el=>el.remove());
  const expenses = (typeof getExpenses==='function') ? (getExpenses()||[]) : [];
  const tb = document.querySelector('#ticketTable tbody');
  const mlist = document.getElementById('ticketMobile');
  if(!tb && !mlist) return;

  expenses.forEach((ex, idx)=>{
    const name = ex.name || 'Expense';
    const amt = Number(ex.amount||0);

    if(tb){
      const tr = document.createElement('tr');
      tr.className = 'expenseRow';
      tr.innerHTML = `
        <td>${name} <span class="expenseBadge">Expense</span></td>
        <td class='colQty'>—</td>
        <td class='colPrice expensePrice'>${currency(amt)}</td>
        <td>—</td>
        <td class='expensePrice'>${currency(amt)}</td>
        <td class="rowActions"><button data-act="delete-expense" data-index="${idx}" title="Delete">🗑️</button></td>
      `;
      tb.appendChild(tr);
    }

    if(mlist){
      const div = document.createElement('div');
      div.className = 'mcard expenseRow';
      div.innerHTML = `
        <div class="mrow title"><strong>${name}</strong> <span class="expenseBadge">Expense</span></div>
        <div class="mrow price expensePrice">${currency(amt)}</div>
        <div class="mrow actions"><button class="btnIcon" data-act="delete-expense" data-index="${idx}" title="Delete">🗑️</button></div>
      `;
      mlist.appendChild(div);
    }
  });

  document.querySelectorAll('[data-act="delete-expense"]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const i = Number(btn.getAttribute('data-index')||-1);
      if(i>=0){
        const ex = getExpenses();
        ex.splice(i,1);
        setExpenses(ex);
        renderTicket();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', ()=>{

  try{
    document.getElementById('editMilesBtn')?.addEventListener('click', ()=>{
      const cur = (typeof getOdo==='function') ? getOdo() : {start:0,end:0};
      const s = document.getElementById('mileStart'); const e = document.getElementById('mileEnd');
      if(s) s.value = cur.start||''; if(e) e.value = cur.end||'';
      if(typeof openModal==='function'){ openModal('milesModal'); } else { document.getElementById('milesModal')?.classList.remove('hidden'); }
    });
    document.getElementById('milesSave')?.addEventListener('click', ()=>{
      const s = Number(document.getElementById('mileStart')?.value||0);
      const e = Number(document.getElementById('mileEnd')?.value||0);
      if(typeof setOdo==='function') setOdo(s,e);
      if(typeof closeModal==='function'){ closeModal('milesModal'); } else { document.getElementById('milesModal')?.classList.add('hidden'); }
      try{ renderTicket(); renderHistory(); }catch(_){}
    });
    document.getElementById('milesClose')?.addEventListener('click', ()=>{ if(typeof closeModal==='function'){ closeModal('milesModal'); } else { document.getElementById('milesModal')?.classList.add('hidden'); } });
    document.getElementById('milesCancel')?.addEventListener('click', ()=>{ if(typeof closeModal==='function'){ closeModal('milesModal'); } else { document.getElementById('milesModal')?.classList.add('hidden'); } });
  }catch(e){}
  try{
    const host = document.querySelector('section.history');
    const map = {chipThisWeek:'thisweek', chipLastWeek:'lastweek', chipYTD:'ytd'};
    function handle(evt){
      const t = evt.target.closest('#chipThisWeek, #chipLastWeek, #chipYTD');
      if(!t) return;
      const val = map[t.id];
      if(val && typeof setRange==='function'){ setRange(val); }
    }
    host?.addEventListener('click', handle);
    host?.addEventListener('touchend', handle);
  }catch(e){}
});

document.addEventListener('DOMContentLoaded', ()=>{

  try{
    document.getElementById('editMilesBtn')?.addEventListener('click', ()=>{
      const cur = (typeof getOdo==='function') ? getOdo() : {start:0,end:0};
      const s = document.getElementById('mileStart'); const e = document.getElementById('mileEnd');
      if(s) s.value = cur.start||''; if(e) e.value = cur.end||'';
      if(typeof openModal==='function'){ openModal('milesModal'); } else { document.getElementById('milesModal')?.classList.remove('hidden'); }
    });
    document.getElementById('milesSave')?.addEventListener('click', ()=>{
      const s = Number(document.getElementById('mileStart')?.value||0);
      const e = Number(document.getElementById('mileEnd')?.value||0);
      if(typeof setOdo==='function') setOdo(s,e);
      if(typeof closeModal==='function'){ closeModal('milesModal'); } else { document.getElementById('milesModal')?.classList.add('hidden'); }
      try{ renderTicket(); renderHistory(); }catch(_){}
    });
    document.getElementById('milesClose')?.addEventListener('click', ()=>{ if(typeof closeModal==='function'){ closeModal('milesModal'); } else { document.getElementById('milesModal')?.classList.add('hidden'); } });
    document.getElementById('milesCancel')?.addEventListener('click', ()=>{ if(typeof closeModal==='function'){ closeModal('milesModal'); } else { document.getElementById('milesModal')?.classList.add('hidden'); } });
  }catch(e){}
  try{
    const host = document.querySelector('section.history');
    function onAdd(evt){
      const btn = evt.target.closest('#addNewBtn');
      if(!btn) return;
      if (typeof openQuickAdd === 'function') { openQuickAdd(); }
    }
    host?.addEventListener('click', onAdd);
    host?.addEventListener('touchend', onAdd);
  }catch(e){}
});

(function(){
  function isOpen(el){ return el && !el.classList.contains('hidden'); }
  window.openModal = function(id){
    const m = document.getElementById(id);
    if(!m) return;
    m.classList.remove('hidden');
    m.setAttribute('aria-hidden','false');
  };
  window.closeModal = function(id){
    const m = id ? document.getElementById(id) : document.querySelector('.modal:not(.hidden)');
    if(!m) return;
    m.classList.add('hidden');
    m.setAttribute('aria-hidden','true');
  };
  document.addEventListener('click', (e)=>{

    const closeBtn = e.target.closest('[data-close-modal], #customClose, #customCancel, #expenseClose, #expenseCancel, #milesClose, #milesCancel');
    if(closeBtn){
      const tid = closeBtn.getAttribute('data-close-modal') || closeBtn.getAttribute('data-target');
      const modal = tid ? document.getElementById(tid) : closeBtn.closest('.modal');
      if(modal) closeModal(modal.id);
      return;
    }

    const openBtn = e.target.closest('[data-open-modal]');
    if(openBtn){
      const id = openBtn.getAttribute('data-open-modal');
      if(id) openModal(id);
      return;
    }

    const overlay = e.target.classList && e.target.classList.contains('modal');
    if(overlay){
      const card = e.target.querySelector('.modalCard');
      if(card && !card.contains(e.target)) {

      }
      closeModal(e.target.id);
      return;
    }
  }, {passive:true});

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      const open = document.querySelector('.modal:not(.hidden)');
      if(open) closeModal(open.id);
    }
  });

document.addEventListener('DOMContentLoaded', ()=>{

  const engClose = document.getElementById('engClose');
  const engCancel = document.getElementById('engCancel');
  const engSave = document.getElementById('engSave');
  const engHours = document.getElementById('engHours');
  const engMinutes = document.getElementById('engMinutes');
  function showEngineer(show){
    const m = document.getElementById('engModal');
    if(!m) return;
    m.classList.toggle('hidden', !show);
    m.setAttribute('aria-hidden', show?'false':'true');
    if(show){ if(typeof lockBodyScroll==='function') lockBodyScroll(); }
    else { if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
  }
  window.showEngineer = showEngineer;
  if(engClose) engClose.addEventListener('click', ()=>showEngineer(false));
  if(engCancel) engCancel.addEventListener('click', ()=>showEngineer(false));
  if(engHours) engHours.addEventListener('input', ()=>{ try{ updateEngineerPreview(); }catch(_){}});
  if(engMinutes) engMinutes.addEventListener('input', ()=>{ try{ updateEngineerPreview(); }catch(_){}});
  if(engSave) engSave.addEventListener('click', ()=>{
    try{
      const h = Number((document.getElementById('engHours')||{}).value||0);
      const m = Number((document.getElementById('engMinutes')||{}).value||0);
      const price = priceEngineerAssist(h, m);
      const it = state.items[engIdx];
      it.price = price;
      it._engTime = {h, m};
      engIdx = null;
      showEngineer(false);
      renderTicket(); persist(); syncTodayToHistory();
    }catch(e){}
  });

  const addonsClose = document.getElementById('addonsClose');
  const addonsCancel = document.getElementById('addonsCancel');
  function showAddons(show){
    const m = document.getElementById('addonsModal');
    if(!m) return;
    m.classList.toggle('hidden', !show);
    m.setAttribute('aria-hidden', show?'false':'true');
    if(show){ if(typeof lockBodyScroll==='function') lockBodyScroll(); }
    else { if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
  }
  window.showAddons = showAddons;
  if(addonsClose) addonsClose.addEventListener('click', ()=>showAddons(false));
  if(addonsCancel) addonsCancel.addEventListener('click', ()=>showAddons(false));
});

})();

async function renderHistory(){
  const host = document.getElementById('historyGrouped') || document.getElementById('historyList') || document.getElementById('historyBody');
  if(!host) return;
  host.innerHTML = '';

  let rows = [];
  try{
    const history = await getHistory();
    const sISO = dateOnlyISO(currentRange.start);
    const eISO = dateOnlyISO(currentRange.end);
    rows = history.filter(h => h.date >= sISO && h.date <= eISO);

    try{ if(typeof renderHistorySummary==="function") renderHistorySummary(rows); }catch(_){}

    try{
      const todayISO = new Date().toISOString().slice(0,10);
      const raw = JSON.parse(localStorage.getItem(KEY)||'{}');
      const todayLoose = Array.isArray(raw.expenses) ? raw.expenses : [];
      rows = rows.map(r=>{
        if(r.date===todayISO && (!Array.isArray(r.expenses) || r.expenses.length===0) && todayLoose.length){
          return Object.assign({}, r, { expenses: todayLoose.slice() });
        }
        return r;
      });
    }catch(_){}

  }catch(e){ rows = []; }

  rows.forEach(r => {
    const d = new Date((r.date||'') + 'T00:00:00');

    const svcTotal = (r.items||[]).reduce((sum, it) => {
      const add = (it.addons||[]).reduce((a,b)=> a + (Number(b.price)||0) * (Number(b.qty)||1), 0);
      return sum + (Number(it.price)||0) * (Number(it.qty)||1) + add;
    }, 0);
    const expensesTotal = (r.expenses||[]).reduce((s,e)=> s + (Number(e.amount)||0), 0);
    const dayNet = svcTotal - expensesTotal;

    const day = document.createElement('div');
    day.className = 'groupDay';
    const dayLabel = (typeof fmtDay==='function') ? fmtDay(d) : d.toLocaleDateString();
    day.innerHTML = `<span class="dayLabel">${dayLabel}</span><span class="dayTotal">${currency(dayNet)}</span>`;
    host.appendChild(day);

    try{
      const ex = Array.isArray(r.expenses) ? r.expenses : [];
      ex.forEach(eObj => {
        const row = document.createElement('div');
        row.className = 'histSub addon expense';
        row.innerHTML = `<span class="name">${(eObj.name||'Expense')}</span><span class="amt">${currency(Number(eObj.amount||0))}</span>`;
        day.appendChild(row);
      });
    }catch(_){}

    try{
      if((r.odoEnd||0) > (r.odoStart||0)){
        const chip = document.createElement('div');
        chip.className = 'histMiles';
        chip.textContent = `Miles: ${Number(r.odoEnd||0) - Number(r.odoStart||0)}`;
        day.appendChild(chip);
      }
    }catch(_){}

    try{
      const ex = Array.isArray(r.expenses) ? r.expenses : [];
      if(ex.length){

        ex.forEach(eObj => {
          const row = document.createElement('div');

      row.className = 'histExpenseRow addon';
      row.style.backgroundColor = 'rgba(255,0,0,0.05)';
      row.querySelectorAll('.amt').forEach(a=>a.style.color='rgba(200,0,0,0.85)');
          row.innerHTML = `<span class="name">${(eObj.name||'Expense')}</span><span class="amt">${currency(Number(eObj.amount||0))}</span>`;
          wrap.appendChild(row);
        });

      }
    }catch(_){}

    (r.items||[]).forEach(it => {
      const addTotal = (it.addons||[]).reduce((a,b)=> a + (Number(b.price)||0) * (Number(b.qty)||1), 0);
      const amt = (Number(it.price)||0) * (Number(it.qty)||1) + addTotal;
      const line = document.createElement('div');
      line.className = 'histItem';
      line.innerHTML = `<div class="left"><div class="name">${(it.name||'')}</div></div>
                        <div class="right"><div class="total">${currency(amt)}</div></div>`;
      host.appendChild(line);

      (it.addons||[]).forEach(ad => {
        const row = document.createElement('div');
        row.className = 'histSub addon';
        row.innerHTML = `<span class="name">${ad.name||''}</span><span class="amt">${currency(Number(ad.price||ad.amount||0))}</span>`;
        host.appendChild(row);
      });

    });
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  try{
    const miles = document.getElementById('milesDriven');
    const btn = document.getElementById('editMilesBtn');
    if(miles && btn){
      const parent = miles.parentElement || document.querySelector('.summaryRight');
      if(parent && btn.nextSibling !== miles){
        parent.insertBefore(btn, miles);
      }
    }
  }catch(e){}
});

document.addEventListener('DOMContentLoaded', ()=>{
  try{
    const btn = document.getElementById('addonsSave');
    if(btn) btn.addEventListener('click', ()=>{ try{ saveAddons(); }catch(e){} });
  }catch(_){}
});

document.addEventListener('DOMContentLoaded', ()=>{
  const at = document.getElementById('addTarpBtn');
  if(at){ at.addEventListener('click', ()=>{ try{ openTarpModal(); }catch(_){ const m=document.getElementById('tarpModal'); if(m){ m.classList.remove('hidden'); m.setAttribute('aria-hidden','false'); } } }); }
  const mp = document.getElementById('addTarpPill');
  if(mp){ mp.addEventListener('click', ()=>{ try{ openTarpModal(); }catch(_){ const m=document.getElementById('tarpModal'); if(m){ m.classList.remove('hidden'); m.setAttribute('aria-hidden','false'); } } }); }
  const tClose = document.getElementById('tarpClose');
  if(tClose){ tClose.addEventListener('click', ()=>{ const m=document.getElementById('tarpModal'); if(m){ m.classList.add('hidden'); m.setAttribute('aria-hidden','true'); if(typeof unlockBodyScroll==='function') unlockBodyScroll(); } }); }
});

document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('clearHistoryBtn');
  if(!btn) return;
  btn.addEventListener('click', ()=>{
    if(typeof openConfirm === 'function'){
      openConfirm('Clear ALL saved history? This cannot be undone.', ()=>{
        try{
          localStorage.removeItem('et_history_v14');
        }catch(_){}
        try{

          if(typeof renderHistory==='function'){ renderHistory(); }
        }catch(_){}
      });
    }else{

      if(confirm('Clear ALL saved history? This cannot be undone.')){
        localStorage.removeItem('et_history_v14');
        try{ if(typeof renderHistory==='function'){ renderHistory(); } }catch(_){}
      }
    }
  });
});

(function(){
  function setRangeInputsFromCurrent(){
    try{
      const s = dateOnlyISO(currentRange?.start || new Date());
      const e = dateOnlyISO(currentRange?.end || new Date());
      const hs = document.getElementById('histStart'); if(hs) hs.value = s;
      const he = document.getElementById('histEnd'); if(he) he.value = e;
    }catch(_){}
  }

  async function applyHistoryRange(){
    try{
      const s = document.getElementById('histStart')?.value || '';
      const e = document.getElementById('histEnd')?.value || '';
      if(s){ currentRange.start = new Date(s+'T00:00:00'); }
      if(e){ currentRange.end = new Date(e+'T00:00:00'); }
      if(typeof renderHistory==='function') await renderHistory();
    }catch(_){}
  }

  window.renderHistorySummary = function(rows){
    try{

      let totalSvc = 0, totalExp = 0;
      let best = {date: null, net: -Infinity};
      let worst = {date: null, net: Infinity};
      let dayJobs = [];

      (rows||[]).forEach(r=>{
        const svc = (r.items||[]).reduce((sum, it)=>{
          const add = (it.addons||[]).reduce((a,b)=> a + (Number(b.price)||0) * (Number(b.qty)||1), 0);
          return sum + (Number(it.price)||0) * (Number(it.qty)||1) + add;
        }, 0);
        const exp = (r.expenses||[]).reduce((s,e)=> s + (Number(e.amount)||0), 0);
        const net = svc - exp;
        totalSvc += svc; totalExp += exp;
        dayJobs.push((r.items||[]).length);
        if(net > best.net) best = {date:r.date, net};
        if(net < worst.net) worst = {date:r.date, net};
      });

      const fmt = (n)=> (typeof currency==='function') ? currency(n||0) : ('$'+(n||0).toFixed(2));
      const avgJobs = dayJobs.length ? (dayJobs.reduce((a,b)=>a+b,0)/dayJobs.length) : 0;

      const set = (id, val)=>{ const el=document.getElementById(id); if(el) el.textContent = val; };
      set('sumTotalEarnings', fmt(totalSvc));
      set('sumTotalExpenses', fmt(totalExp));
      set('sumNet', fmt(totalSvc - totalExp));
      set('sumAvgJobs', (Math.round(avgJobs*100)/100).toString());

      function fmtDayStr(iso){
        if(!iso) return '—';
        const d = new Date(iso+'T00:00:00');
        return (typeof fmtDay==='function') ? fmtDay(d) : d.toLocaleDateString();
      }
      set('sumBest', best.date ? (fmtDayStr(best.date) + ' · ' + fmt(best.net)) : '—');
      set('sumWorst', worst.date ? (fmtDayStr(worst.date) + ' · ' + fmt(worst.net)) : '—');
    }catch(_){}
  };

  document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('histApply')?.addEventListener('click', applyHistoryRange);

    setRangeInputsFromCurrent();

    const delBtn = document.getElementById('clearHistoryBtn');
    const delModal = document.getElementById('deleteRangeModal');
    const delClose = document.getElementById('delRangeClose');
    const delCancel = document.getElementById('delRangeCancel');
    const delConfirm = document.getElementById('delRangeConfirm');

    function showDelRange(show){
      if(!delModal) return;
      delModal.classList.toggle('hidden', !show);
      delModal.setAttribute('aria-hidden', show?'false':'true');
      if(show){ if(typeof lockBodyScroll==='function') lockBodyScroll(); }
      else { if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
    }

    function presetDeleteInputs(){
      try{
        const hs = document.getElementById('histStart')?.value;
        const he = document.getElementById('histEnd')?.value;
        if(hs) document.getElementById('delStart').value = hs;
        if(he) document.getElementById('delEnd').value = he;
      }catch(_){}
    }

    delBtn?.addEventListener('click', ()=>{ presetDeleteInputs(); showDelRange(true); });
    delClose?.addEventListener('click', ()=> showDelRange(false));
    delCancel?.addEventListener('click', ()=> showDelRange(false));

    delConfirm?.addEventListener('click', async ()=>{
      try{
        const s = document.getElementById('delStart')?.value || '';
        const e = document.getElementById('delEnd')?.value || '';
        if(!s || !e){ showDelRange(false); return; }
        const sISO = s; const eISO = e;
        const histRaw = await getHistory();
        const filtered = (histRaw||[]).filter(h => !(h.date >= sISO && h.date <= eISO));
        await setHistory(filtered);
        showDelRange(false);
        if(typeof renderHistory==='function') await renderHistory();
      }catch(_){ showDelRange(false); }
    });
  });
})();

async function saveQuickAdd(){
  try{
    const date = (document.getElementById('quickDate')?.value)||new Date().toISOString().slice(0,10);
    const sel = document.getElementById('quickService');
    if(!sel) return;
    const idx = Math.max(0, sel.selectedIndex);
    const svc = Array.isArray(services) ? services[idx] : null;
    if(!svc) return;

    const picks = [];
    document.querySelectorAll('#quickAddons input[type=checkbox]').forEach((cb,i)=>{
      if(cb.checked){
        const a = Array.isArray(addons) ? addons[i] : null;
        if(!a) return;
        let qty = 1;
        if(a.name === "Additional Building/Structure"){
          const q = prompt("How many additional buildings/structures?", "1");
          qty = Math.max(1, parseInt(q||"1",10));
        }
        picks.push({name:a.name, price:Number(a.price||0), qty});
      }
    });

    const item = { name: svc.name, price: Number(svc.price||0), qty: 1, addons: picks };

    const hist = await getHistory() || [];
    let day = hist.find(h => h.date === date);
    if(!day){
      day = { date, items: [], expenses: [] };
      hist.push(day);
      hist.sort((a,b)=> (a.date<b.date?-1:a.date>b.date?1:0));
    }
    day.items.push(item);
    await setHistory(hist);

    const m = document.getElementById('quickAddModal');
    if(m){ m.classList.add('hidden'); m.setAttribute('aria-hidden','true'); if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }
    if(typeof renderHistory==='function'){ await renderHistory(); }
  }catch(e){  }
}

function confirmDeleteService(idx){
  if(typeof openConfirm==='function'){
    openConfirm('Delete this service?', ()=>{
      try{ state.items.splice(idx,1); }catch(_){}
      try{ renderTicket(); persist(); syncTodayToHistory(); }catch(_){}
    });
  }else{
    if(confirm('Delete this service?')){
      try{ state.items.splice(idx,1); }catch(_){}
      try{ renderTicket(); persist(); syncTodayToHistory(); }catch(_){}
    }
  }
}

(function(){
  let _confirmFn = null;
  function lock(){ try{ if(typeof lockBodyScroll==='function') lockBodyScroll(); }catch(_){ } }
  function unlock(){ try{ if(typeof unlockBodyScroll==='function') unlockBodyScroll(); }catch(_){ } }
  window.openConfirm = function(msg, onOk){
    const m = document.getElementById('confirmModal');
    if(!m) return (onOk && onOk());
    const t = document.getElementById('confirmMessage');
    if(t) t.textContent = msg || 'Are you sure?';
    _confirmFn = (typeof onOk==='function') ? onOk : null;
    m.classList.remove('hidden'); m.setAttribute('aria-hidden','false'); lock();
  };
  window.closeConfirm = function(){
    const m = document.getElementById('confirmModal');
    if(!m) return;
    m.classList.add('hidden'); m.setAttribute('aria-hidden','true'); _confirmFn=null; unlock();
  };
  document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('confirmClose')?.addEventListener('click', closeConfirm);
    document.getElementById('confirmCancel')?.addEventListener('click', closeConfirm);
    document.getElementById('confirmOk')?.addEventListener('click', ()=>{ try{ _confirmFn && _confirmFn(); } finally { closeConfirm(); } });
  });
})();

document.addEventListener('DOMContentLoaded', ()=>{
  try{
    document.getElementById('addServiceBtn')?.addEventListener('click', ()=> openServiceModal());
    document.getElementById('addServiceFab')?.addEventListener('click', ()=> openServiceModal());
  }catch(_){}
  try{
    document.getElementById('customServiceBtn')?.addEventListener('click', ()=>{ try{ showCustom(true); }catch(_){  const m=document.getElementById('customServiceModal'); if(m){ m.classList.remove('hidden'); m.setAttribute('aria-hidden','false'); } } });
  }catch(_){}
  try{
    document.getElementById('addExpenseBtn')?.addEventListener('click', ()=>{ try{ openExpenseModal(); }catch(_){ const m=document.getElementById('expenseModal'); if(m){ m.classList.remove('hidden'); m.setAttribute('aria-hidden','false'); } } });
  }catch(_){}

  try{
    document.querySelectorAll('[data-tab]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const t = btn.getAttribute('data-tab');
        if(!t) return;
        document.querySelectorAll('[data-tab]').forEach(b=> b.classList.remove('active'));
        btn.classList.add('active');
        document.querySelectorAll('section[data-panel]').forEach(sec=>{
          const match = sec.getAttribute('data-panel')===t;
          sec.classList.toggle('hidden', !match);
        });
      });
    });
  }catch(_){}
});

document.addEventListener('DOMContentLoaded', ()=>{
  try{
    document.getElementById('svcClose')?.addEventListener('click', ()=>{ const m=document.getElementById('serviceModal'); if(m){ m.classList.add('hidden'); m.setAttribute('aria-hidden','true'); if(typeof unlockBodyScroll==='function') unlockBodyScroll(); } });
    document.getElementById('pickerCancel')?.addEventListener('click', ()=>{ const m=document.getElementById('serviceModal'); if(m){ m.classList.add('hidden'); m.setAttribute('aria-hidden','true'); if(typeof unlockBodyScroll==='function') unlockBodyScroll(); } });
  }catch(_){}
});

function renderCarrierList(){
  try{
    var host = document.getElementById('carrierList');
    if(!host) return;
    var rawList = (Array.isArray(window.__carriers) ? window.__carriers : (typeof carriers !== 'undefined' && Array.isArray(carriers) ? carriers : []));
    var searchEl = document.getElementById('carrierSearch');
    var q = (searchEl && searchEl.value ? String(searchEl.value) : '').toLowerCase().trim();
    var list = rawList.filter(function(c){
      var nm = (c && c.name ? c.name : '').toLowerCase();
      return !q || nm.includes(q);
    });

    host.innerHTML = '';

    if(!list.length){
      var empty = document.createElement('div');
      empty.className = 'muted';
      empty.style.padding = '12px';
      empty.textContent = q ? 'No carriers match your search.' : 'No carriers found.';
      host.appendChild(empty);
      return;
    }

    var bills = (window.__carrierBillables ? window.__carrierBillables : (typeof carrierBillables !== 'undefined' && carrierBillables ? carrierBillables : {}));

    list.forEach(function(c){
      var card = document.createElement('div');
      card.className = 'card carrierCard';

      var header = document.createElement('button');
      header.className = 'subhead';
      header.setAttribute('type','button');
      header.setAttribute('aria-expanded', 'false');
      header.style.display = 'flex';
      header.style.justifyContent = 'space-between';
      header.style.alignItems = 'center';

      var title = document.createElement('span');
      title.textContent = c.name || '(Unnamed Carrier)';
      var chevron = document.createElement('span');
      chevron.textContent = '▸';
      chevron.setAttribute('aria-hidden', 'true');

      header.appendChild(title);
      header.appendChild(chevron);

      var body = document.createElement('div');
      body.className = 'stack';
      body.style.display = 'none';

      var flags = bills[c.id] || {};
      var keys = Object.keys(flags);
      if(!keys.length){
        var none = document.createElement('div');
        none.className = 'muted';
        none.textContent = 'No configured billables for this carrier.';
        body.appendChild(none);
      }else{
        var table = document.createElement('table');
        table.className = 'simple';
        var thead = document.createElement('thead');
        thead.innerHTML = '<tr><th>Service</th><th>Billable</th></tr>';
        table.appendChild(thead);
        var tb = document.createElement('tbody');
        keys.forEach(function(svc){
          var val = flags[svc];
          var display = (val===true) ? 'Yes' : (val===false ? 'No' : String(val));
          var tr = document.createElement('tr');
          tr.innerHTML = '<td>'+svc+'</td><td>'+display+'</td>';
          tb.appendChild(tr);
        });
        table.appendChild(tb);
        body.appendChild(table);
      }

      header.addEventListener('click', function(){
        var open = body.style.display !== 'none';
        body.style.display = open ? 'none' : 'block';
        header.setAttribute('aria-expanded', String(!open));
        chevron.textContent = open ? '▸' : '▾';
      });

      card.appendChild(header);
      card.appendChild(body);
      host.appendChild(card);
    });
  }catch(e){
    try{
      var host = document.getElementById('carrierList');
      if(host){
        host.innerHTML = '<div class="muted" style="padding:12px">Error rendering carriers.</div>';
      }
    }catch(_){}
    console && console.error && console.error(e);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  try{
    var s = document.getElementById('carrierSearch');
    if(s){
      s.addEventListener('input', function(){
        renderCarrierList();
      });
    }
  }catch(e){}
});

(function(){
  function ready(){
    try{
      var list = (window.__carriers && Array.isArray(window.__carriers)) ? window.__carriers
               : (typeof carriers !== 'undefined' && Array.isArray(carriers) ? carriers : []);
      return Array.isArray(list) && list.length > 0;
    }catch(e){ return false; }
  }
  function start(){
    try{
      var s = document.getElementById('carrierSearch'); if(s) s.value='';
      if (typeof renderCarrierList === 'function') renderCarrierList();
    }catch(e){}
  }
  var tries = 0;
  function tick(){
    if (ready() || tries > 60){
      start();
    } else {
      tries++; setTimeout(tick, 50);
    }
  }
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', tick);
  } else {
    tick();
  }
})();

function renderCarrierList(){
  try{
    var host = document.getElementById('carrierList');
    if(!host) return;
    var rawList = (Array.isArray(window.__carriers) ? window.__carriers
                 : (typeof carriers !== 'undefined' && Array.isArray(carriers) ? carriers : []));
    var searchEl = document.getElementById('carrierSearch');
    var q = (searchEl && searchEl.value ? String(searchEl.value) : '').toLowerCase().trim();
    var list = rawList.filter(function(c){
      var nm = (c && c.name ? c.name : '').toLowerCase();
      return !q || nm.includes(q);
    });

    host.innerHTML = '';

    if(!list.length){
      var empty = document.createElement('div');
      empty.className = 'muted';
      empty.style.padding = '12px';
      empty.textContent = q ? 'No carriers match your search.' : 'No carriers found.';
      host.appendChild(empty);
      return;
    }

    var bills = (window.__carrierBillables ? window.__carrierBillables
               : (typeof carrierBillables !== 'undefined' ? carrierBillables : {}));

    list.forEach(function(c){
      var card = document.createElement('div');
      card.className = 'card carrierCard';

      var header = document.createElement('button');
      header.className = 'subhead carrierHead';
      header.setAttribute('type','button');
      header.setAttribute('aria-expanded', 'false');

      var title = document.createElement('span');
      title.className = 'carrierTitle';
      title.textContent = c.name || '(Unnamed Carrier)';
      var chevron = document.createElement('span');
      chevron.className = 'chev';
      chevron.setAttribute('aria-hidden', 'true');
      chevron.textContent = '▸';

      header.appendChild(title);
      header.appendChild(chevron);

      var body = document.createElement('div');
      body.className = 'carrierBody';
      body.style.display = 'none';

      var flags = bills[c.id] || {};
      var keys = Object.keys(flags);

      if(!keys.length){
        var none = document.createElement('div');
        none.className = 'muted';
        none.textContent = 'No configured billables for this carrier.';
        body.appendChild(none);
      } else {
        var table = document.createElement('table');
        table.className = 'simple billablesTable';
        var thead = document.createElement('thead');
        thead.innerHTML = '<tr><th>Service</th><th class="colBillable">Billable</th></tr>';
        table.appendChild(thead);
        var tb = document.createElement('tbody');
        keys.forEach(function(svc){
          var val = flags[svc];
          var display;
          if (val === true){
            display = '<span class="b-yes" title="Yes">✓</span>';
          } else if (val === false){
            display = '<span class="b-no" title="No">✕</span>';
          } else {

            var txt = String(val);
            display = '<span class="b-note" title="'+txt.replace(/"/g,'&quot;')+'">'+txt+'</span>';
          }
          var tr = document.createElement('tr');
          tr.innerHTML = '<td>'+svc+'</td><td class="colBillable">'+display+'</td>';
          tb.appendChild(tr);
        });
        table.appendChild(tb);
        body.appendChild(table);
      }

      header.addEventListener('click', function(){
        var open = body.style.display !== 'none';
        body.style.display = open ? 'none' : 'block';
        header.setAttribute('aria-expanded', String(!open));
        chevron.textContent = open ? '▸' : '▾';
      });

      card.appendChild(header);
      card.appendChild(body);
      host.appendChild(card);
    });
  }catch(e){
    try{
      var host = document.getElementById('carrierList');
      if(host){
        host.innerHTML = '<div class="muted" style="padding:12px">Error rendering carriers.</div>';
      }
    }catch(_){}
    console && console.error && console.error(e);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  try{
    var s = document.getElementById('carrierSearch');
    if(s){
      s.addEventListener('input', function(){
        renderCarrierList();
      });
    }
  }catch(e){}
});

(function(){
  var KEY = 'et_custom_svcs_v14';
  var last = null;
  function normalizeAndRefresh(){
    try{
      var raw = localStorage.getItem(KEY) || '[]';
      if (raw === last) return;
      var arr = [];
      try{ arr = JSON.parse(raw) || []; }catch(_){ arr = []; }

      var map = Object.create(null);
      for (var i=0;i<arr.length;i++){
        var it = arr[i] || {};
        var nm = (it.name||'').trim();
        if(!nm) continue;
        var key = nm.toLowerCase();
        map[key] = { name: nm, price: Number(it.price)||0 };
      }
      var norm = Object.values(map);
      var normJSON = JSON.stringify(norm);
      if (normJSON !== raw){
        localStorage.setItem(KEY, normJSON);
        last = normJSON;
      } else {
        last = raw;
      }

      try{ window.customServices = norm; }catch(_){}
      try{ if(typeof renderCatalog==='function') renderCatalog(); }catch(_){}
      try{ if(typeof renderPickerCatalog==='function') renderPickerCatalog(); }catch(_){}
    }catch(e){}
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(normalizeAndRefresh, 50); });
  } else {
    setTimeout(normalizeAndRefresh, 50);
  }

  try{
    document.getElementById('customSaveBtn')?.addEventListener('click', function(){
      setTimeout(normalizeAndRefresh, 80);
    });
  }catch(e){}

  setInterval(normalizeAndRefresh, 2000);
})();

(function(){
  var KEY = 'et_custom_svcs_v14';

  function getList(){
    try{ return JSON.parse(localStorage.getItem(KEY)||'[]') || []; }catch(_){ return []; }
  }
  function setList(arr){
    try{ localStorage.setItem(KEY, JSON.stringify(arr||[])); }catch(_){}
    try{ window.customServices = arr||[]; }catch(_){}
    try{ if(typeof renderCatalog==='function') renderCatalog(); }catch(_){}
    try{ if(typeof renderPickerCatalog==='function') renderPickerCatalog(); }catch(_){}
    try{ attachAll(); }catch(_){}
}

  function normalizeName(n){ return String(n||'').trim().toLowerCase(); }

  function removeByName(name){
    var lower = normalizeName(name);
    var list = getList().filter(function(s){ return normalizeName(s.name) !== lower; });
    setList(list);
  }

  function makeBtn(label){
    var b = document.createElement('button');
    b.className = 'svcDelBtn';
    b.type = 'button';
    b.textContent = label || 'Delete';
    return b;
  }

  function attachInRoot(root){
    try{
      if(!root) return;
      var list = getList();
      if(!list.length) return;

      var map = Object.create(null);
      list.forEach(function(s){ map[normalizeName(s.name)] = true; });

      var rows = root.querySelectorAll('li, .svcRow, .entry, .item, tr');
      rows.forEach(function(row){
        try{
          if (row.querySelector('.svcDelBtn')) return;
          var txt = (row.innerText || '').trim();
          if(!txt) return;

          var hit = null;
          for (var key in map){
            if (!key) continue;

            if (txt.toLowerCase().startsWith(key) || (' '+txt.toLowerCase()+' ').includes(' '+key+' ')){
              hit = key; break;
            }
          }
          if(!hit) return;

          var btn = makeBtn('Delete');
          btn.addEventListener('click', function(ev){
            ev.preventDefault(); ev.stopPropagation();
            var pretty = txt.split('\n')[0];
            var ok = window.confirm('Delete "'+ pretty +'" from your saved services?');
            if(!ok) return;
            try{ row.remove(); }catch(_){}
            removeByName(hit);
            try{ if(typeof renderCatalog==='function') renderCatalog(); }catch(_){}
            try{ if(typeof renderPickerCatalog==='function') renderPickerCatalog(); }catch(_){}
          });

          var host = row.querySelector('.actions') || row.querySelector('td:last-child') || row;
          host.appendChild(btn);
        }catch(e){}
      });
    }catch(e){}
  }

  function attachAll(){
    attachInRoot(document);
    var pick = document.getElementById('servicePickerModal');
    if (pick) attachInRoot(pick);
  }

  ['renderCatalog','renderPickerCatalog'].forEach(function(name){
    if (typeof window[name] === 'function'){
      var fn = window[name];
      window[name] = function(){
        var r = fn.apply(this, arguments);
        setTimeout(attachAll, 30);
        return r;
      };
    }
  });
  if (typeof window.openServicePicker === 'function'){
    var o = window.openServicePicker;
    window.openServicePicker = function(){
      var r = o.apply(this, arguments);
      setTimeout(attachAll, 60);
      return r;
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(attachAll, 60); }, {once:true});
  else setTimeout(attachAll, 60);

  try{
    var mo = new MutationObserver(function(){ setTimeout(attachAll, 40); });
    mo.observe(document.documentElement, { childList:true, subtree:true });
  }catch(e){}
})();

(function(){
  function zap(){
    try{
      ['customServiceBtn','pickerSave'].forEach(function(id){
        var el = (document.getElementById('servicePickerModal')||document).querySelector('.modalFoot #'+id);
        if (el && el.parentElement) el.parentElement.removeChild(el);
      });
    }catch(e){}
  }
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(zap, 30); }, {once:true});
  } else { setTimeout(zap, 30); }
  try{
    var mo = new MutationObserver(function(){ zap(); });
    mo.observe(document.documentElement, { childList:true, subtree:true, attributes:true, attributeFilter:['class','style'] });
  }catch(e){}
  if (typeof window.openServicePicker === 'function'){
    var _open = window.openServicePicker;
    window.openServicePicker = function(){
      var r = _open.apply(this, arguments);
      setTimeout(zap, 50);
      return r;
    };
  }
})();

(function(){
  function wirePickerFooter(){
    try{
      var modal = document.getElementById('servicePickerModal'); if(!modal) return;
      var foot = modal.querySelector('.modalFoot'); if(!foot) return;
      var btns = foot.querySelectorAll('button');
      btns.forEach(function(b){
        try{
          if (b.id === 'pickerCancel') return;
          if (b.dataset && b.dataset.wired === '1') return;
          var label = (b.innerText || b.textContent || '').toLowerCase().trim();
          if (!label) return;

          if (label.includes('custom')){
            b.addEventListener('click', function(ev){
              ev.preventDefault(); ev.stopPropagation();
              try{
                var s = document.getElementById('customSave'); if(s) s.checked = true;
                var n = document.getElementById('customName'); if(n) n.value = '';
                var p = document.getElementById('customPrice'); if(p) p.value = '';
              }catch(_){}
              try{
                if (typeof openCustomModal === 'function') openCustomModal();
                else if (typeof showCustom === 'function') showCustom(true);
              }catch(_){}
            });
            b.disabled = false;
            b.dataset.wired = '1';
            return;
          }
          if (label.includes('save') || label.includes('done') || label.includes('close')){
            b.addEventListener('click', function(ev){
              ev.preventDefault(); ev.stopPropagation();
              try{ if (typeof closeServicePicker === 'function') closeServicePicker(); }catch(_){}
            });
            b.disabled = false;
            b.dataset.wired = '1';
            return;
          }

          b.addEventListener('click', function(ev){
            ev.preventDefault(); ev.stopPropagation();
            try{ if (typeof closeServicePicker === 'function') closeServicePicker(); }catch(_){}
          });
          b.disabled = false;
          b.dataset.wired = '1';
        }catch(e){}
      });
    }catch(e){}
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(wirePickerFooter, 50); }, {once:true});
  } else {
    setTimeout(wirePickerFooter, 50);
  }

  if (typeof window.openServicePicker === 'function'){
    var _open = window.openServicePicker;
    window.openServicePicker = function(){
      var r = _open.apply(this, arguments);
      setTimeout(wirePickerFooter, 60);
      return r;
    };
  }

  try{
    var mo = new MutationObserver(function(){ wirePickerFooter(); });
    mo.observe(document.documentElement, { childList:true, subtree:true, attributes:true, attributeFilter:['class','style'] });
  }catch(e){}
})();

  function openMagic(email){
    if(!window.netlifyIdentity){ alert('Netlify Identity not available'); return; }

    try {
      const u = window.netlifyIdentity.currentUser();
      if (u && email && u.email && u.email.toLowerCase() !== email.toLowerCase()) {
        window.netlifyIdentity.logout();
      }
    }catch(_){}

    window.netlifyIdentity.open('login');

    setTimeout(()=>{
      try {
        const frame = document.querySelector('iframe[src*="identity"]').contentWindow.document;
        const input = frame.querySelector('input[type="email"]');
        if(input && email){ input.value = email; input.dispatchEvent(new Event('input',{bubbles:true})); }
      } catch(_){}
    }, 350);
  }

(function(){
  const BYTES_PER_CHUNK = 90000;
  const META_FIELD = 'seeker_backup_v38_parts';
  const META_INFO = 'seeker_backup_v38_info';

  function $(q){ return document.querySelector(q); }
  function ui(){
    return {
      status: $('#backupStatus'),
      signIn: $('#idSignIn'),
      signOut: $('#idSignOut'),
      backup: $('#backupNow'),
      restore: $('#restoreNow'),
      sync: $('#syncNow'),
    };
  }

  function textEnc(){ return new TextEncoder(); }
  function textDec(){ return new TextDecoder(); }

  async function sha256(str){
    const d = await crypto.subtle.digest('SHA-256', textEnc().encode(str));
    return new Uint8Array(d);
  }
  async function getKey(email){
    const raw = await sha256(email || 'guest');
    return crypto.subtle.importKey('raw', raw, {name:'AES-GCM'}, false, ['encrypt','decrypt']);
  }
  function b64(u8){ return btoa(String.fromCharCode.apply(null, u8)); }
  function ub64(b){ return new Uint8Array(atob(b).split('').map(c=>c.charCodeAt(0))); }

  async function encryptJSON(obj, email){
    const key = await getKey(email);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const pt = textEnc().encode(JSON.stringify(obj));
    const ct = new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM', iv}, key, pt));
    return JSON.stringify({v:1, n:b64(iv), c:b64(ct)});
  }
  async function decryptJSON(str, email){
    const key = await getKey(email);
    const blob = JSON.parse(str||'{}');
    const iv = ub64(blob.n||'');
    const ct = ub64(blob.c||'');
    const pt = await crypto.subtle.decrypt({name:'AES-GCM', iv}, key, ct);
    return JSON.parse(textDec().decode(new Uint8Array(pt)));
  }

  function collectLocal(){
    const out = {};
    for (let i=0;i<localStorage.length;i++){
      const k = localStorage.key(i);
      try{ out[k] = localStorage.getItem(k); }catch(_){}
    }
    return out;
  }
  function applyLocal(data){
    if(!data||typeof data!=='object') return;
    for(const k of Object.keys(data)){
      try{ localStorage.setItem(k, data[k]); }catch(_){}
    }

    try{ window.dispatchEvent(new Event('storage')); }catch(_){}
    try{ if (typeof renderHistory==='function') renderHistory(); }catch(_){}
    try{ if (typeof renderTicket==='function') renderTicket(); }catch(_){}
    try{ if (typeof refreshUI==='function') refreshUI(); }catch(_){}
  }

  function chunkString(s){
    const parts = [];
    for (let i=0;i<s.length;i+=BYTES_PER_CHUNK){
      parts.push(s.slice(i, i+BYTES_PER_CHUNK));
    }
    return parts;
  }

  function joinParts(parts){ return (parts||[]).join(''); }

  function currentUser(){ return (window.netlifyIdentity && window.netlifyIdentity.currentUser()) || null; }

  async function ensureAuthed(){
    return new Promise((res)=>{
      const u = currentUser();
      if (u) return res(u);
      if (window.netlifyIdentity){
        window.netlifyIdentity.open('login');
        const done = ()=>{ window.netlifyIdentity.off('login', done); res(currentUser()); };
        window.netlifyIdentity.on('login', done);
      } else {
        alert('Netlify Identity is not available.');
        res(null);
      }
    });
  }

  async function doBackup(){
    const u = currentUser();
    if(!u){ alert('Sign in first.'); return; }
    const payload = collectLocal();
    const enc = await encryptJSON(payload, (u.email || u.user_metadata?.full_name || 'user'));
    const parts = chunkString(enc);
    const info = { updatedAt: new Date().toISOString(), keys: Object.keys(payload).length, bytes: enc.length, parts: parts.length };
    await u.update({ data: { [META_FIELD]: parts, [META_INFO]: info } });
    ui().status && (ui().status.textContent = `Backed up ${info.keys} keys at ${info.updatedAt}`);
  }

  async function doRestore(){
    const u = currentUser();
    if(!u){ alert('Sign in first.'); return; }
    const meta = u.user_metadata || {};
    const parts = meta[META_FIELD];
    if(!parts || !parts.length){ alert('No backup found.'); return; }
    const enc = joinParts(parts);
    try{
      const data = await decryptJSON(enc, (u.email || u.user_metadata?.full_name || 'user'));
      applyLocal(data);
      ui().status && (ui().status.textContent = `Restored ${Object.keys(data).length} keys.`);
    }catch(e){
      console.error(e);
      alert('Failed to decrypt backup. Is this the right account?');
    }
  }

  async function doSync(){

    await doBackup();
    await doRestore();
  }

  let timer = null;
  function requestCloudBackup(){
    if(!currentUser()) return;
    clearTimeout(timer);
    timer = setTimeout(()=>{ doBackup().catch(console.error); }, 1500);
  }
  window.requestCloudBackup = requestCloudBackup;

  (function(){
    const _set = localStorage.setItem.bind(localStorage);
    const _rem = localStorage.removeItem.bind(localStorage);
    localStorage.setItem = function(k,v){ const r = _set(k,v); try{ requestCloudBackup(); }catch(_){ } return r; };
    localStorage.removeItem = function(k){ const r = _rem(k); try{ requestCloudBackup(); }catch(_){ } return r; };
  })();

  document.addEventListener('DOMContentLoaded', ()=>{
    const U = ui();
    function refreshAuth(){
      const u = currentUser();
      U.status && (U.status.textContent = u ? `Signed in as ${u.email||'user'}` : 'Signed out.');
    }
    const emailEl = document.getElementById('idEmail');
    const sendMagic = document.getElementById('idSendMagic');
    sendMagic && sendMagic.addEventListener('click', ()=>{ openMagic(emailEl && emailEl.value || ''); });
    U.signOut && U.signOut.addEventListener('click', ()=>{ window.netlifyIdentity && window.netlifyIdentity.logout(); setTimeout(refreshAuth, 300); });
    U.backup && U.backup.addEventListener('click', ()=>{ doBackup().catch(console.error); });
    U.restore && U.restore.addEventListener('click', ()=>{ doRestore().catch(console.error); });
    U.sync && U.sync.addEventListener('click', ()=>{ doSync().catch(console.error); });

    if(window.netlifyIdentity){
      window.netlifyIdentity.on('init', refreshAuth);
      window.netlifyIdentity.on('login', refreshAuth);
      window.netlifyIdentity.on('logout', refreshAuth);
    }
    refreshAuth();
  });
})();

(function(){

  let go = null;
  function getGoTrue(){
    if (go) return go;
    go = new window.GoTrue({ APIUrl: 'https://seeker-companion.netlify.app/.netlify/identity', setCookie: true });
    return go;
  }

  function show(el, yes){ if(!el) return; el.classList[yes?'remove':'add']('hidden'); }
  function setText(id, text){ var el=document.getElementById(id); if(el) el.textContent = text; }

  let currentEmail = null;
  async function initSession(){
    try{

      const u = await sessionUser();
      if (u){ currentEmail = u.email; setSignedIn(u); }
      else { setSignedOut(); }
    }catch(e){ setSignedOut(); }
  }
  async function sessionUser(){
    try{

      const res = await fetch('https://seeker-companion.netlify.app/.netlify/identity/user', { credentials:'include' });
      if (!res.ok) return null;
      const data = await res.json();
      return data || null;
    }catch(e){ return null; }
  }

  function collect(){
    return {
      t: Date.now(),
      ls: {
        et_custom_svcs_v14: localStorage.getItem('et_custom_svcs_v14')||'[]',
        et_tickets_v2: localStorage.getItem('et_tickets_v2')||'[]',
        et_settings_v1: localStorage.getItem('et_settings_v1')||'{}'
      }
    };
  }
  function restore(obj){
    if(!obj||!obj.ls) return;
    Object.keys(obj.ls).forEach(k=>{ if(obj.ls[k]!=null) localStorage.setItem(k, obj.ls[k]); });
    try{ if(typeof renderCatalog==='function') renderCatalog(); }catch(e){}
    try{ if(typeof renderPickerCatalog==='function') renderPickerCatalog(); }catch(e){}
  }

  async function deriveKey(email){
    const enc=new TextEncoder().encode(email||'anon');
    const base=await crypto.subtle.importKey('raw', enc, {name:'PBKDF2'}, false, ['deriveKey']);
    return crypto.subtle.deriveKey({name:'PBKDF2', salt:enc, iterations:100000, hash:'SHA-256'}, base, {name:'AES-GCM', length:256}, false, ['encrypt','decrypt']);
  }
  async function encFor(email, obj){
    const key=await deriveKey(email);
    const iv=crypto.getRandomValues(new Uint8Array(12));
    const data=new TextEncoder().encode(JSON.stringify(obj||{}));
    const ct=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM', iv}, key, data));
    const out=new Uint8Array(iv.length+ct.length); out.set(iv,0); out.set(ct,iv.length);
    return btoa(String.fromCharCode.apply(null,out));
  }
  async function decFor(email, b64){
    if(!b64) return null;
    const bin=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));
    const iv=bin.slice(0,12), ct=bin.slice(12);
    const key=await deriveKey(email);
    const pt=await crypto.subtle.decrypt({name:'AES-GCM', iv}, key, ct);
    return JSON.parse(new TextDecoder().decode(new Uint8Array(pt))||'{}');
  }

  async function backupNow(){
    const u = await sessionUser();
    if(!u){ alert('Sign in first'); return; }
    const email = u.email;
    const payload = collect();
    const enc = await encFor(email, payload);
    const size=90000, parts=[]; for(let i=0;i<enc.length;i+=size) parts.push(enc.slice(i,i+size));
    const data = { scb_count: parts.length, scb_ts: Date.now() }; parts.forEach((c,i)=> data['scb_part_'+i]=c);
    try{
      const updated = await getGoTrue().updateUser(data);
      setText('bkMeta', 'Last backup: '+new Date(data.scb_ts).toLocaleString());
      setText('bkStatus', 'Signed in as '+updated.email+' — backup complete');
    }catch(e){ console.error(e); alert('Backup failed'); }
  }
  async function restoreNow(){
    const u = await sessionUser();
    if(!u){ alert('Sign in first'); return; }
    try{
      const meta = (u.user_metadata)||{};
      const n = meta.scb_count||0; if(!n){ alert('No backup found'); return; }
      let enc=''; for(let i=0;i<n;i++) enc += meta['scb_part_'+i]||'';
      const obj = await decFor(u.email, enc);
      restore(obj);
      setText('bkStatus', 'Signed in as '+u.email+' — restored');
    }catch(e){ console.error(e); alert('Restore failed'); }
  }

  async function sendMagic(){
    const el = document.getElementById('bkEmail');
    const email = (el && el.value||'').trim();
    if(!email){ alert('Enter your email'); return; }
    try{
      const redirectTo = 'https://seeker-companion.netlify.app/#/id-complete';
      await getGoTrue().requestPasswordlessEmail(email, { redirectTo });
      setText('bkStatus','Magic link sent to '+email+'. On iPhone: copy the link, then paste below and Confirm.');
    }catch(e){ console.error(e); alert('Could not send magic link.'); }
  }
  function tokenFromURL(str){
    try{ const u=new URL(str); const m=(u.hash||'').match(/confirmation_token=([^&]+)/); return m?decodeURIComponent(m[1]):null; }catch(e){ return null; }
  }
  async function confirmMagic(){
    const el = document.getElementById('bkPaste');
    const url = (el && el.value||'').trim();
    const token = tokenFromURL(url);
    if(!token){ alert('Could not find confirmation_token in that URL'); return; }
    try{
      const user = await getGoTrue().confirm(token);
      currentEmail = user && user.email;
      setSignedIn(user);
      setText('bkStatus', 'Signed in as '+(currentEmail||'your account'));
      setTimeout(initSession, 500);
    }catch(e){ console.error(e); alert('Could not confirm link.'); }
  }
  async function signout(){
    try{ await getGoTrue().logout(); }catch(e){}
    currentEmail = null;
    setSignedOut();
  }

  function setSignedIn(u){
    setText('bkStatus', 'Signed in as '+(u && u.email || 'your account'));
    show(document.getElementById('bkSignin'), false);
    show(document.getElementById('bkActions'), true);
    const meta = u && u.user_metadata;
    if(meta && meta.scb_ts) setText('bkMeta','Last backup: '+new Date(meta.scb_ts).toLocaleString());
  }
  function setSignedOut(){
    show(document.getElementById('bkSignin'), true);
    show(document.getElementById('bkActions'), false);
    setText('bkStatus','Not signed in');
  }

  function openBackupTab(){
    ['historyPanel','billablesPanel','earningsPanel','backupPanel'].forEach(id=>{
      const el=document.getElementById(id); if(!el) return;
      if(id==='backupPanel') el.classList.remove('hidden'); else el.classList.add('hidden');
    });
    initSession();
  }

  document.addEventListener('DOMContentLoaded', function(){
    var tbtn=document.getElementById('tab-backup-btn');
    if(tbtn) tbtn.addEventListener('click', openBackupTab);
    var s=document.getElementById('bkSend'); if(s) s.addEventListener('click', sendMagic);
    var c=document.getElementById('bkConfirm'); if(c) c.addEventListener('click', confirmMagic);
    var bo=document.getElementById('bkBackup'); if(bo) bo.addEventListener('click', backupNow);
    var ro=document.getElementById('bkRestore'); if(ro) ro.addEventListener('click', restoreNow);
    var so=document.getElementById('bkSignout'); if(so) so.addEventListener('click', signout);
  });

  let t=null;
  window.requestCloudBackup=function(){ clearTimeout(t); t=setTimeout(backupNow,1500); };
})();

(function(){
  function qq(sel, root){ return (root||document).querySelector(sel); }
  function hasText(el, txt){ if(!el) return false; const s=(el.textContent||el.innerText||'').toLowerCase(); return s.includes(txt.toLowerCase()); }
  function safe(fn){ try{ fn(); }catch(e){ console && console.warn && console.warn('[wire]', e); } }
  function openCustom(){ safe(()=>{ if(typeof openCustomModal==='function') openCustomModal(); else if(typeof showCustom==='function') showCustom(true); }); }
  function closePicker(){ safe(()=>{ if(typeof closeServicePicker==='function') closeServicePicker(); else { const m=qq('#servicePickerModal'); if(m) m.classList.add('hidden'); }}); }
  function rerender(){ safe(()=>{ if(typeof renderCatalog==='function') renderCatalog(); }); safe(()=>{ if(typeof renderPickerCatalog==='function') renderPickerCatalog(); }); }

  document.addEventListener('click', function(e){
    let btn = e.target.closest('button, [role="button"], .pill');
    if(!btn) return;

    if(btn.id === 'tab-backup-btn'){ e.preventDefault(); safe(()=>{ if(typeof openBackupTab==='function') openBackupTab(); }); return; }
    if(btn.id === 'tab-history-btn'){ e.preventDefault(); safe(()=>{ if(typeof openHistoryTab==='function') openHistoryTab(); }); return; }
    if(btn.id === 'tab-billables-btn'){ e.preventDefault(); safe(()=>{ if(typeof openBillablesTab==='function') openBillablesTab(); }); return; }
    if(btn.id === 'tab-earnings-btn'){ e.preventDefault(); safe(()=>{ if(typeof openEarningsTab==='function') openEarningsTab(); }); return; }

    if(btn.id === 'bkSend'){ e.preventDefault(); safe(()=>{ if(typeof sendMagic==='function') sendMagic(); }); return; }
    if(btn.id === 'bkConfirm'){ e.preventDefault(); safe(()=>{ if(typeof confirmMagic==='function') confirmMagic(); }); return; }
    if(btn.id === 'bkBackup'){ e.preventDefault(); safe(()=>{ if(typeof backupNow==='function') backupNow(); }); return; }
    if(btn.id === 'bkRestore'){ e.preventDefault(); safe(()=>{ if(typeof restoreNow==='function') restoreNow(); }); return; }
    if(btn.id === 'bkSignout'){ e.preventDefault(); safe(()=>{ if(typeof signout==='function') signout(); }); return; }

    if(btn.id === 'addCustomService' || hasText(btn, 'custom service')){
      e.preventDefault(); openCustom(); return;
    }

    const picker = btn.closest('#servicePickerModal .modalFoot, #servicePicker .modalFoot');
    if(picker){
      if(/cancel/i.test(btn.id||'') || hasText(btn,'cancel')) return;
      e.preventDefault();
      if(hasText(btn,'custom')){ openCustom(); return; }
      if(hasText(btn,'save') || hasText(btn,'done') || hasText(btn,'close')){ closePicker(); return; }
    }
  }, true);

  setTimeout(function(){
    try{
      var overlays = document.querySelectorAll('.overlay,.backdrop,.modalBackdrop');
      overlays.forEach(function(o){
        if (o.style && o.style.pointerEvents === 'auto' && o.classList.contains('hidden')){
          o.style.pointerEvents = 'none';
        }
      });
    }catch(e){}
  }, 300);

})();

(function(){
  function _localISO(d){ return [d.getFullYear(), String(d.getMonth()+1).padStart(2,'0'), String(d.getDate()).padStart(2,'0')].join('-'); }
  function getSavedDate(){
    try { var t = JSON.parse(localStorage.getItem('et_ticket_v14')); return t && t.date || null; } catch(_){ return null; }
  }
  function checkDayAndMaybeReload(){
    try {
      var today = _localISO(new Date());
      var saved = getSavedDate();
      if (saved && saved !== today) { setTimeout(function(){ try{ location.reload(); }catch(_ ){} }, 50); }
    } catch(_){}
  }
  document.addEventListener('visibilitychange', function(){
    if (document.visibilityState === 'visible') checkDayAndMaybeReload();
  });
  try { checkDayAndMaybeReload(); } catch(_){}

  function ensureChip(){
    var el = document.getElementById('syncChip');
    if (!el){
      el = document.createElement('div');
      el.id = 'syncChip';
      document.body.appendChild(el);
    }
    return el;
  }
  function updateChip(){
    var el = ensureChip();
    if (navigator.onLine){ el.classList.remove('offline'); el.classList.add('online'); el.textContent = 'All changes saved'; }
    else { el.classList.remove('online'); el.classList.add('offline'); el.textContent = 'Offline'; }
  }
  window.addEventListener('online', updateChip);
  window.addEventListener('offline', updateChip);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', updateChip); else updateChip();
})();

(function(){
  function el(id){ return document.getElementById(id); }
  function ensurePanel(){
    var p = el('dbgPanel');
    if (!p){
      p = document.createElement('div');
      p.id = 'dbgPanel';
      p.innerHTML = ''
        + '<h4>Test Tools</h4>'
        + '<div class="btnrow">'
        +   '<button id="dbgCanOn" class="primary">Route to Canary</button>'
        +   '<button id="dbgCanOff">Back to Prod</button>'
        +   '<button id="dbgReload">Reload</button>'
        +   '<button id="dbgClose">Close</button>'
        + '</div>'
        + '<div class="meta">Tip: long‑press the status chip to open.</div>';
      document.body.appendChild(p);
    }
    return p;
  }
  function showPanel(show){ ensurePanel().style.display = show ? 'block' : 'none'; }
  function hookActions(){
    var on = el('dbgCanOn'), off = el('dbgCanOff'), reload = el('dbgReload'), close = el('dbgClose');
    if (on){ on.onclick = function(){ try{ location.href = "/canary-on.html"; }catch(_){ } }; }
    if (off){ off.onclick = function(){ try{ location.href = "/canary-off.html"; }catch(_){ } }; }
    if (reload){ reload.onclick = function(){ try{ location.reload(); }catch(_){ } }; }
    if (close){ close.onclick = function(){ showPanel(false); }; }
  }
  function setupLongPress(){
    var chip = document.getElementById('syncChip');
    if (!chip) return;
    var t, down=false;
    function start(){ down=true; clearTimeout(t); t=setTimeout(function(){ if(down){ showPanel(true); hookActions(); } }, 700); }
    function stop(){ down=false; clearTimeout(t); }
    chip.addEventListener('mousedown', start);
    chip.addEventListener('touchstart', start, {passive:true});
    chip.addEventListener('mouseup', stop);
    chip.addEventListener('mouseleave', stop);
    chip.addEventListener('touchend', stop);
  }
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setupLongPress);
  } else {
    setupLongPress();
  }
})();

(function(){
  function nowISO(){ try{return new Date().toISOString();}catch(_){return ""; } }
  function todayISO(){ const d=new Date(); return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-'); }
  function readLS(key){ try{ return JSON.parse(localStorage.getItem(key)); }catch(_){ return null; } }
  function writeLS(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(_){ } }

  function getState(){
    return {
      ticket: readLS('et_ticket_v14'),
      history: readLS('et_history_v14') || [],
      settings: readLS('et_settings_v14') || readLS('et_settings_v13') || {}
    };
  }

  function exportJSON(){
    const state = getState();
    const out = {
      schema: "et.v1",
      exportedAt: nowISO(),
      appVersion: (window.APP_VERSION || "unknown"),
      payload: {
        ticket: state.ticket || null,
        history: state.history || [],
        settings: state.settings || {}
      }
    };
    const blob = new Blob([JSON.stringify(out)], {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'seeker-backup-' + todayISO() + '.json';
    document.body.appendChild(a); a.click(); a.remove();
    setPreview('Exported file created.');
  }

  function indexByDate(arr){
    const map = new Map();
    (arr||[]).forEach(rec => { if (rec && rec.date) map.set(rec.date, rec); });
    return map;
  }

  function newer(a, b){

    const au = a && a.updatedAt, bu = b && b.updatedAt;
    if (au && bu) return (new Date(au).getTime() > new Date(bu).getTime());
    if (au && !bu) return true;
    return false;
  }

  function mergeImport(payload){
    const current = getState();

    writeLS('et_lastImportSnapshot', { at: nowISO(), ticket: current.ticket, history: current.history, settings: current.settings });

    let added=0, updated=0, skipped=0;

    const curIdx = indexByDate(current.history);
    const outHistory = Array.from(curIdx.values());

    (payload.history || []).forEach(inRec => {
      if (!inRec || !inRec.date){ skipped++; return; }
      const existing = curIdx.get(inRec.date);
      if (!existing){ outHistory.push(inRec); added++; curIdx.set(inRec.date, inRec); }
      else if (newer(inRec, existing)){

        const i = outHistory.findIndex(r => r && r.date === inRec.date);
        if (i>=0) outHistory[i] = inRec; else outHistory.push(inRec);
        curIdx.set(inRec.date, inRec);
        updated++;
      } else {
        skipped++;
      }
    });

    const outSettings = Object.assign({}, current.settings || {});
    Object.keys(payload.settings || {}).forEach(k => { outSettings[k] = payload.settings[k]; });

    const outTicket = current.ticket;

    writeLS('et_history_v14', outHistory);
    writeLS('et_settings_v14', outSettings);

    return {added, updated, skipped};
  }

  function setPreview(msg){
    try{
      var el = document.getElementById('bkPreview');
      if (el){ el.textContent = msg; }
    }catch(_){}
  }

  function onImportFile(file){
    const reader = new FileReader();
    reader.onload = function(){
      try{
        const data = JSON.parse(reader.result);
        if (!data || !data.payload){ setPreview('Invalid backup file.'); return; }
        const res = mergeImport(data.payload);
        setPreview('Import complete: +' + res.added + ' added, ' + res.updated + ' updated, ' + res.skipped + ' skipped.');
        try{ setTimeout(function(){ location.reload(); }, 300); }catch(_){}
      }catch(e){
        setPreview('Import failed: ' + (e && e.message ? e.message : 'unknown error'));
      }
    };
    reader.readAsText(file);
  }

  function undoImport(){
    try{
      const snap = readLS('et_lastImportSnapshot');
      if (!snap){ setPreview('No recent import to undo.'); return; }
      writeLS('et_ticket_v14', snap.ticket || null);
      writeLS('et_history_v14', snap.history || []);
      writeLS('et_settings_v14', snap.settings || {});
      setPreview('Undo complete. Reloading...');
      setTimeout(function(){ try{ location.reload(); }catch(_){ } }, 200);
    }catch(_){
      setPreview('Undo failed.');
    }
  }

  function wireBackupUI(){
    var ex = document.getElementById('bkExport');
    var im = document.getElementById('bkImport');
    var un = document.getElementById('bkUndo');
    if (ex) ex.addEventListener('click', exportJSON);
    if (im) im.addEventListener('change', function(ev){ var f=ev.target.files&&ev.target.files[0]; if (f) onImportFile(f); });
    if (un) un.addEventListener('click', undoImport);
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', wireBackupUI);
  } else {
    wireBackupUI();
  }
})();
(function(){})();
