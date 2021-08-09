// This function stores a file log into local storage in a web storage variable called storage_debug.log
// This provides some unique debugging opportunities to trace events and refreshes when the Web console log
// may be clearing on the browser.

export function storage_log(...args) {

    if (args.length>1) {
      for (let i=1; i<args.length; i++) {
        const previousValue = localStorage.getItem("storage_debug.log");
        if (typeof args[i]==='object') {
          const argsJSON = JSON.stringify(args[i]);
          localStorage.setItem("storage_debug.log", `${previousValue}${args[0]} Object typeof: ${typeof args[i]}\n${args[0]} Object: ${args[i]}\n${args[0]} JSON.stringify: ${argsJSON}\n`);
        }
        else {
          const previousValue = localStorage.getItem("storage_debug.log");          
          localStorage.setItem("storage_debug.log", `${previousValue}${args[0]} typeof: ${typeof args[i]}\n${args[0]} value: ${args[i]}\n`);
        }
      }
    }
    else {
      if (typeof args[0]==='object') {
        const previousValue = localStorage.getItem("storage_debug.log");        
        const argsJSON = JSON.stringify(args[0]);
        localStorage.setItem("storage_debug.log", `${previousValue}Object typeof: ${typeof args[0]}\nObject: ${args[0]}\nJSON.stringify: ${argsJSON}\n`);
      }
      else {
        const previousValue = localStorage.getItem("storage_debug.log");        
        localStorage.setItem("storage_debug.log", `${previousValue}typeof: ${typeof args[0]}\nvalue: ${args[0]}\n`);
      }
    }

  }
  
  export default storage_log;
  
