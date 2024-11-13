const mongoose = require('mongoose');

const Exame = mongoose.model('Exame', {
    nome: String,
    clinica: String,
    idCliente: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Cliente' 
    },
    ativo: Boolean
});

module.exports = Exame;