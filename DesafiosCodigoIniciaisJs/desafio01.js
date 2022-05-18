/*Desafio
Crie um programa que leia 6 valores, os quais poderão ser negativos e/ou positivos.
Em seguida, apresente a quantidade de valores positivos digitados.

Entrada => Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída.
Não se esqueça de incluir na mensagem de saída o sufixo " valores positivos", conforme o exemplo abaixo:
 
                                            | Exemplo de Entrada |  Exemplo de Saída   |
                                            |         7          | 4 valores positivos |
                                            |        -5          |                     | 
                                            |         6          |                     | 
                                            |        -3.4        |                     | 
                                            |         4.6        |                     |
                                            |         12         |                     |

*/


// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar


let quantidadePositivos = 0;

for (let i = 0; i < 6; i++) {
    const valorInformadoPeloUsuario = gets();

    //TODO: Complete os espaços em branco com uma possível solução para o desafio
    if (valorInformadoPeloUsuario > 0) { quantidadePositivos++ }

}

print(`${quantidadePositivos} valores positivos`);
//console.log(`${quantidadePositivos} valores positivos \n`);


/*

Todas as entradas e saída dos algoritmos são utilizados o STDIN e STDOUT de cada linguagem, abaixo tem algumas dicas de como utilizar cada STDIN e STDOUT de cada linguagem.
JavaScript

Em JavaScript as funções de STDIN e STDOUT respectivamente sãogets e console.log, a função gets é implementada internamente para auxiliar a entrada dos dados.

Exemplo:
let line = gets(); // Retorna a próxima linha de entrada
console.log(line); // Imprime o dado
*/