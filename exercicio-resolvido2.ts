classificacaodeIdade = (idade) => {
    if (idade <= 21) {
        return 'JOVEM'
    } else if (idade >= 22 && idade <= 65) {
        return 'ADULTO'
    } 
        return 'IDOSO(A)'
}

console.log(classificacaodeIdade(56));