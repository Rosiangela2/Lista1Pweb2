
        let base = parseInt(prompt("digite um número base:"));
        let pot = parseInt(prompt("Digite a potência :"))
        let result 

            if(pot < 0){ 
                alert("O valor tem que ser positivo e diferente de zero.");
            }
            else if(pot == 0 ){  
                alert("Todo numero elevado a zero é igual a 1");
            }
            else {
                for (let i = 0; i <= pot; i++){
                    result = base * base 
                }
                alert("Resultado " +result);
            }
