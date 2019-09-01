// Usando para filtrar da lista de acordo com algum critério.

var alunos = [
    {nome: 'João', idade: 15},
    {nome: 'José', idade: 18},
    {nome: 'Maria', idade: 20}
];

var alunosDeMaior = [];
for (var i =0; i <alunos.length; i++) {
       if (alunos[i].idade >= 18) {
           alunosDeMaior.push(alunos[i]);
    }
}

console.log(alunosDeMaior);

// Mesmo exemplo, com método FILTER

var alunos = [
    {nome: 'João', idade: 15},
    {nome: 'José', idade: 18},
    {nome: 'Maria', idade: 20},
    {nome: 'Lorena', idade: 3},
    {nome: 'Edvaldo', idade: 56}
];

var alunosDeMaior = alunos.filter(function (aluno) {
    return aluno.idade >= 18;
});

console.log(alunosDeMaior);