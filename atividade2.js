var listaDeInscritos = []

var idade = prompt("Insira sua idade.");
var nome = prompt("Digite seu nome completo.");

    if (idade < 18)
        console.log("Idade inválida.") 

    else {  if  (listaDeInscritos.length < 100)  
                   { console.log("Cadastro realizado.")
                    listaDeInscritos.push(nome) }
                

            else{ console.log("Evento já está com a lista cheia."); 
        }
    }
    
console.log(listaDeInscritos)