type Tusuario = {
    nome: string
    email: string
    idade: number
}

const usuarios: Tusuario[] = []

function cadastrarUsuario (usuario: Tusuario) {
    usuarios[usuarios.length] = usuario

    return usuario

}

const resultado = cadastrarUsuario({
    nome:'Willer',
    email: 'willer@email.com',
    idade: 24
})

console.log(resultado);
console.log(usuarios);
