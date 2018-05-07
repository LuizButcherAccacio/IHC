
/*
Declarações de variaveis em JS
const quando o valor não muda.
var quando a variavel é global com certeza
let para todos os outros casos
*/


const turmas = [       // Declarando a lista de turmas
    {                  // Primeiro objeto da lista => turmas[0]
        codigo:"1a",   // Propriedade codigo do objeto, é uma string
        horarios:[     // Propriedade horarios do objeto, é uma lista de objetos  
            {          // Primeiro objeto da lista de hoorários  => turmas[0].horarios[0]
                nomeAula: "1a aula",  // propriedade nome aula, string
                sala:"412"            // propriedade sala, string
            }, 
            { 
                nomeAula: "2a aula", 
                sala:"411"
            },                
            { 
                nomeAula: "3a aula",
                sala:"312"
            }   
        ]
    },
    {
        codigo:"2a",
        horarios:[
            { 
                nomeAula: "1a aula",
                sala:"310"
            }, 
            { 
                nomeAula: "2a aula", 
                sala:"309"
            },                
            { 
                nomeAula: "3a aula",
                sala:"404"
            }   
        ]
    },
    {
        codigo:"3a",
        horarios:[
            { 
                nomeAula: "1a aula",
                sala:"308"
            }, 
            { 
                nomeAula: "2a aula", 
                sala:"401"
            },                
            { 
                nomeAula: "3a aula",
                sala:"402"
            }   
        ]
    },
    {
        codigo:"4a",
        horarios:[
            { 
                nomeAula: "1a aula",
                sala:"401"
            }, 
            { 
                nomeAula: "2a aula", 
                sala:"303"
            },                
            { 
                nomeAula: "3a aula",
                sala:"404"
            }   
        ]
    },
    {
        codigo:"5a",
        horarios:[
            { 
                nomeAula: "1a aula",
                sala:"110"
            }, 
            { 
                nomeAula: "2a aula", 
                sala:"212"
            },                
            { 
                nomeAula: "3a aula",
                sala:"112"
            }   
        ]
    },
    {
        codigo:"6a",
        horarios:[
            { 
                nomeAula: "1a aula",
                sala:"106"
            }, 
            { 
                nomeAula: "2a aula", 
                sala:"305"
            },                
            { 
                nomeAula: "3a aula",
                sala:"411"
            }   
        ]
    }
];

//console.log("hello world");
/*
for(let t=0; t < turmas.length; t++)
{
    console.log(turmas[t].cod);
}
*/
function responderAjuda(inputs)
{
    return "não sei";
}
function responderLista(inputs)
{
    return "Lista de " + inputs[1];
}

function responderMensagem(mensagem)
{
    let resposta = "Não entendi. Digite a turma e o horario.";

    let termos = mensagem.split(" ");
    let turma = termos[0];
    let aula = termos[1];

    console.log("acho que vc quer a turma " + turma + " e a aula " + aula);

    for(let t=0; t < turmas.length; t++)
    {
        if(turmas[t].codigo == turma)
        {
            resposta = "achei a " + turmas[t].horarios[aula-1].sala;
           //   JSON.stringify(qualquerObjeto) converte qualquerObjeto em string JSon 
           // resposta = "achei a " + JSON.stringify(turmas[t].horarios[aula-1]);
        }
    }

    return resposta;
}



function analisarInput(mensagem)
{
    let resposta = "Não entendi. Digite a turma e o horario.";

    if(mensagem != null && mensagem != "")
    {
        let termos = mensagem.split(" ");
    
        for(let t=0; t < turmas.length; t++)
        {
            if(turmas[t].codigo == termos[0])
            {
                resposta = responderMensagem(mensagem);
                return resposta;
            }
        }   


        switch(termos[0])
        {
            case "?": resposta = responderAjuda(termos);

            break;
            case "lista": resposta = responderLista(termos);

            break;
            case "?":

            break;
            case "?":

            break;
            case "?":

            break;
            
        }
    }
    
    return resposta;
}

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const userInput = process.stdin.read();
  if (userInput !== null) {
    process.stdout.write(analisarInput(userInput) + "\n");
  }
});


//console.log(analisarInput("lista salas"));

