
        let n;
        let num = [];
        let x = 1;

         n = parseInt(prompt("Digite um número: "))
            if((n < 0)||(n == 0)){ 
                alert("O valor tem que ser positivo e diferente de zero.");
            }
            else { 

                let i = 0;
                while(i <= n){
                    if(i % 2 != 0)
                        num.push(i)
                    i++;
                }

                alert("A soma eh: " +num);
            }
