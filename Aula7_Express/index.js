// const express = require('express');
// const app = express();
// const { randomUUID } = require('crypto');

// app.use(express.json());
// app.use('/usuario', usuarioController);

// app.listen(3001, () => console.log('server running on port 3001'));



// const produtos = [
//     {
//         "id": 1,
//         "nome": "Produto 1",
//         "preco": 100
//     },
//     {
//         "id": 2,
//         "nome": "Produto 2",
//         "preco": 200
//     },
//     {
//         "id": 3,
//         "nome": "Produto 3",
//         "preco": 300
//     },
//     {
//         "id": 4,
//         "nome": "Produto 4",
//         "preco": 400
//     }
// ];

// app.get("/produto", (request, responde) => {
//     return responde.json(produtos);
// });

// app.post("/produto", (request, response) => {
//     const { nome, preco } = request.body;
//     console.log(request.body);
//     const prod = {
//         'nome': nome,
//         'preco': preco,
//         id: randomUUID()
//     }
//     produtos.push(prod);
//     return response.json(produtos);
// });

const express = require('express');
const usuarioController = require('./usuarioController');


const app = express();


app.use(express.json());
app.use('/usuario', usuarioController);


// Start server
app.listen(3000, () => console.log('Server is running on port 3000'));


