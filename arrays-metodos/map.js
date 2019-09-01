// Útil para "passarmos" por todos elementos, e inclusive, modificá-los também.


// Código para duplicar os valores da lista

var numeros = [1, 2, 3];
var dobro = [];

for(var i = 0; i < numeros.length; i++) {
    dobro.push(numeros[i] * 2);
}

console.log(numeros);
console.log(dobro);


// Usando o  MAP

var listNumbers = [1, 2, 3];
var newList = listNumbers.map(function(number) {
    return number * 2;
});

console.log(listNumbers);
console.log(newList);

/**
 Assim como no forEach, a função de callback não passa por elementos modificados, 
 alterados ou removidos depois da primeira execução da função de retorno.
 */