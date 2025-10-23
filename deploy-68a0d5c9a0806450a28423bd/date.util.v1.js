(function(){

  if (!window.etLocalISO) {
    window.etLocalISO = function(){
      var d = new Date();
      function pad(n){ return String(n).padStart(2,'0'); }
      return [d.getFullYear(), pad(d.getMonth()+1), pad(d.getDate())].join('-');
    };
  }
})();
