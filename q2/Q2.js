
        let n;
        let num = 0;

         n = parseInt(prompt("Insira o número:"))
            if((n < 0)||(n == 0)){ 
                alert("O valor tem que ser positivo e diferente de zero.");
            }
            else { 

                let i = 1;
                while (i <= n){
                    num = num + i;
                    i++;
                }
                alert("A soma eh: " +num);
            }
