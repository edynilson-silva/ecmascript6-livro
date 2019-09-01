var nomes = ['maria', 'josé', 'joão'];

// Função anônima

nomes.forEach(function(nome) {
    console.log(nome);
});

// Outra maneira...

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);

/*

Observação: Elementos que forem adicionados depois da chamada do método não serão vistos.
Mesma situação, para os elementos existentes do Array forem alterados.

Visualizar abaixo:

*/

var canais = ["Globo", "SBT", "Record"];
canais.forEach(function(canal){
    canais.push("RedeTV"); // será ignorado
    console.log(canal);
});

/* Se colocarmos um console log, ao final do código, o RedeTV aparecerá várias vezes, 
de acordo com a quantidade de itens no array.

console.log(canal);
['Globo', 'SBT' 'Record', 'RedeTV', 'RedeTV', 'RedeTV'];
*/