
        let n;
        let num = [];
        let soma = 0;

         n = parseInt(prompt("Digite um número:"))
            if((n < 0)||(n == 0)){ 
                alert("O valor tem que ser positivo e diferente de zero.");
            }
            else { 

                let i = 1;
                while (i <= n){
                    let x = parseInt(prompt("Digite um número:"))
                    num.push(x)
                    i++;
                }
                let y = 1 ;

                while (y <= n){
                    if(num[y]%2==0){ 
                        soma = soma + num[y]
                    }
                    y++;
                }
                alert("A soma eh: " +soma);
            }
