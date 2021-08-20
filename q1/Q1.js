
        let n;
        let num = [];
        let result = []

         n = parseInt(prompt("Digite um número:"))
            if((n < 0)||(n == 0)){ 
                alert("O valor tem que ser positivo e diferente de zero.");
            }
            else { 
                let i = 0
                for (let i = 0; i < n; i++) {
                    let x  = parseInt(prompt("Digite um número:"))
                    num.push(x)    
                } 
                for (let i = 0; i < n; i++) {
                    result.push(num[i]*num[i])
                } 

                alert("O quadrado dos numeros eh: " +result);
            }
