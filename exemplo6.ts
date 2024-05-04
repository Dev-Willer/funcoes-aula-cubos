/*function soma (numero1: number, numero2: number): number {
    return numero1 + numero2
}

const funcaoNaVariavel = soma

funcaoNaVariavel(3,5)

console.log(funcaoNaVariavel(3,5));*/

const pessoa = {
    nome: 'Willer',
    sobrenome: 'Santos',
    nomeCompleto: function () {
        console.log(`${pessoa.nome} ${pessoa.sobrenome}`);
        
    }
}

const pessoa2 = {
    nome: 'Willer',
    sobrenome: 'Aroudo',
    nomeCompleto: function (idade: number) {
        console.log(`${this.nome} ${this.sobrenome}, ${idade} anos`)   
    }
}
pessoa2.nomeCompleto(20)

