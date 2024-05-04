const usuarios = []

/*function cadastrarUsuario(nome, email, idade){
    usuarios[usuarios.length] = {
        nome, email, idade
    }
}

cadastrarUsuario('Willer', 'Willer@email.com', 24) 

console.log(usuarios);

cadastrarUsuario('Ana', 'Ana@email.com', 19) 

console.log(usuarios);*/

function cadastrarUsuario(usuario){
    usuarios[usuarios.length] = {
        nome: usuario.nome, 
        email: usuario.email, 
        idade: usuario.idade
    }
}

cadastrarUsuario({
    nome: 'Willer',
    email: 'willer@email.com',
    idade: 24
})

console.log(usuarios);

const maria = {
    nome: 'Maria',
    email: 'maria@email.com',
    idade: 32
}

cadastrarUsuario(maria)

console.log(usuarios);

