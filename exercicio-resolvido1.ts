
const Users = {
    nome: 'João',
    idade: 34,
    profissao: 'Desenvolvedor',
    altura: 1.75
}

function UsuariosPlataforma (User){
    console.log(`Olá! Meu nome é ${Users.nome}, sou um jovem de ${Users.idade} anos, ${Users.altura}m de altura e sou ${Users.profissao}`);
}

UsuariosPlataforma()