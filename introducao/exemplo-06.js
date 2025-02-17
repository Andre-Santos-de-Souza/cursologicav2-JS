let mensagem = "Olá eu sou uma \"mensagem de texto\"";
       console.log(mensagem);

       console.log(typeof 0);
       console.log(typeof '0');
       console.log(typeof String(0));

       let isValid = true;

       console.log(typeof isValid);

       console.log(Boolean('0')); // true
       console.log(Boolean(0)); // false
       console.log(Boolean(undefined)); // false
       console.log(Boolean(null)); // false
       console.log(Boolean("")); // false
       console.log(Boolean(NaN)); // false

       let naoDeclarado = null;
       console.log(naoDeclarado);
       naoDeclarado = 0;
       console.log(naoDeclarado);

       let n = parseFloat('a');
       console.log(n);
       console.log(typeof n);

       console.log('---------')
       console.log(typeof n);
       console.log(typeof null);
       console.log(typeof 0);
       console.log(typeof '');
       console.log(typeof true);