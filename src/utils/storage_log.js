// This function stores a file log into local storage in a web storage variable called storage_debug.log
// This provides some unique debugging opportunities to trace events and refreshes when the Web console log
// may be clearing on the browser.

export function storage_log(logValue) {

    const previousValue = localStorage.getItem("storage_debug.log");
  
    if (typeof logValue==='object') {
      const logValueJSON = JSON.stringify(logValue);
      localStorage.setItem("storage_debug.log", `${previousValue}Object typeof: ${typeof logValue}\nObject: ${logValue}\nJSON.stringify: ${logValueJSON}\n`);
    }
    else {
      localStorage.setItem("storage_debug.log", `${previousValue}typeof: ${typeof logValue}\nvalue: ${logValue}\n`);
    }
  
  }
  
  export default storage_log;
  
