// Para encontrar um item específico dentro de um Array

var alunos = [
    {nome: 'João', idade: 15},
    {nome: 'José', idade: 18},
    {nome: 'Maria', idade: 20},
    {nome: 'Lorena', idade: 3},
    {nome: 'Edvaldo', idade: 56}
];

var aluno;

for(var i = 0; i < alunos.length; i++){
    if (alunos[i].nome === 'Josés') {
        aluno = alunos[i];
        break; // evita percorrer o restante da lista
    }
}

console.log(aluno);

// Utilizando o FIND

var alunos = [
    {nome: 'João', idade: 15},
    {nome: 'José', idade: 18},
    {nome: 'Maria', idade: 20},
    {nome: 'Lorena', idade: 3},
    {nome: 'Edvaldo', idade: 56}
];

var aluno = alunos.find(function(aluno){
    return aluno.nome === 'José';
});

console.log(aluno);