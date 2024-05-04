type Tfuncaocalc = (numero1: number, numero2: number) => number

type Tcalculadora = {
    soma: Tfuncaocalc
    subtracao: Tfuncaocalc
    multiplicacao: Tfuncaocalc
    divisao: Tfuncaocalc
}

const calculadora: Tcalculadora = {
    soma: function (numero1: number, numero2: number): number {
        return numero1 + numero2
    },

    subtracao: function (numero1: number, numero2: number): number {
        return numero1 - numero2
    },

    multiplicacao: function (numero1: number, numero2: number): number {
        return numero1 * numero2
    },
    divisao: function (numero1: number, numero2: number): number {
        return numero1 / numero2
    }
}

console.log(calculadora.soma(6,6));
console.log(calculadora.subtracao(13,6));
console.log(calculadora.multiplicacao(20,6));
console.log(calculadora.divisao(34,6));
