const students = [
    {
        name: "Vinicius",
        nota1: 5,
        nota2: 4,
    },

    {
        name: "Giovanna",
        nota1: 9,
        nota2: 8,
    },

    {
        name: "Pedro",
        nota1: 2,
        nota2: 8,
    }
]


function myArr(nota1, nota2) {
    return (nota1 + nota2) / 2
}

function printMedia(student) {
    if (myArr(student.nota1, student.nota2) >= 7) {
        return `
    A média do(a) aluno(a) ${student.name} foi de: ${myArr(student.nota1, student.nota2)}
    Parabéns, ${student.name}! Você foi aprovado(a)!
      `} else {
        return `
    A média do(a) aluno(a) ${student.name} foi de: ${myArr(student.nota1, student.nota2)}
    Não foi dessa vez ${student.name}! Tente novamente.`
    }

}

for (let student of students) {
    let medMessage = printMedia(student)
    alert(medMessage)
}




