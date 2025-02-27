## Importação
Antigamente era usado o padrão CommonJS para importar as bibliotecas e funções de outros arquivos.
const http = require('http');

Atualmente usa-se o padrão ESModules
ESModules => import/export

import fastfy from 'fastfy';

Para usar esse padrão é necessário alterar o arquivo packages.json e colocar o campo: "type": "module"

Para importar um módulo nativo do node, é feito do seguinte modo: import http from 'node:http';

Quando criamos um server, enviamos uma arrow function com os parâmetros req e res.
Em req, conseguimos recuperar as informações que enviamos ao servidor. 

A linha server.listen(3333) faz com que o servidor seja escutado na porta 3333.

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

Stateful -> sempre vai ter algum tipo de informação sendo guardada na memória. Se a aplicação for derrubada, perde os dados que foi salvo em memória.
Stateless -> salva informações em dispositivos externos, arquivos de textos, bancos de dados. 