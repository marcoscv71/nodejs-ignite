// const http = require('http');

// CommonJS => require
// ESModules => import/export
// import fastfy from 'fastfy';


import http from 'node:http'; // forma de importar modulos que sao nativos do node

// Criar um usuário (name, email, password) -> o req eu consigo pegar rodas as informações que
// envio ao servidor

const server = http.createServer((req, res) => {
    const {method, url} = req

    if(method === 'GET' && url === '/users') {
        return res.end('Listagem de usuários')
    }

    if(method === 'POST' && url === '/users') {
        return res.end('Criação de usuário')
    }

    return res.end('Hello World')
})

server.listen(3333) // localhost:3333

// Rotas são caminhos de entrada dentro da nossa aplicação
// Formas do front end executas diferentes operações dentro do backend
// Criar usuarios
// Listagem usuarios
// Edição de usuarios
// Remoção de usuarios

// - HTTP 
//    - Método HTTP
//    - URL
// GET, POST, PUT, PATCH, DELETE

// GET => buscar um recurso do beckend
// POST => Criar um recurso
// PUT => Editar ou atualizar um recurso 
// PATCH => Atualizar uma informação específica de um recurso
// DELETE => deletar um recurso no backend