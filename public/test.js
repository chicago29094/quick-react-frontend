function storage_log(...args) {

    if (args.length>1) {
      for (let i=1; i<args.length; i++) {
        if (typeof args[i]==='object') {
          const previousValue = localStorage.getItem("storage_test.log");
          const argsJSON = JSON.stringify(args[i]);
          localStorage.setItem("storage_test.log", `${previousValue}${args[0]} Object typeof: ${typeof args[i]}\n${args[0]} Object: ${args[i]}\n${args[0]} JSON.stringify: ${argsJSON}\n`);
        }
        else {
          const previousValue = localStorage.getItem("storage_test.log");
          localStorage.setItem("storage_test.log", `${previousValue}${args[0]} typeof: ${typeof args[i]}\n${args[0]} value: ${args[i]}\n`);
        }
      }
    }
    else {
      if (typeof args[0]==='object') {
        const previousValue = localStorage.getItem("storage_test.log");
        const argsJSON = JSON.stringify(args[0]);
        localStorage.setItem("storage_test.log", `${previousValue}Object typeof: ${typeof args[0]}\nObject: ${args[0]}\nJSON.stringify: ${argsJSON}\n`);
      }
      else {
        const previousValue = localStorage.getItem("storage_test.log");
        localStorage.setItem("storage_test.log", `${previousValue}typeof: ${typeof args[0]}\nvalue: ${args[0]}\n`);
      }
    }

  }

storage_log('Mary');
storage_log('Harry Mary');
storage_log('Harry Mary Cherre');
storage_log('Harry: Mary: Cherre: ');
storage_log('Mary',1);
storage_log('Harry Mary',1,2);
storage_log('Harry Mary Cherre',1,2,3);
storage_log('Harry: Mary: Cherre: ', 1,2,3,4);
storage_log('Mary',1, {type:sumthin});
storage_log('Harry Mary',1,2, {type:sumthin});
storage_log('Harry Mary Cherre',1,2,3, {type:sumthin});
storage_log('Harry: Mary: Cherre: ', 1,2,3,4, {type:sumthin});
