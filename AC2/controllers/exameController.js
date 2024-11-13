const express = require('express');
const router = express.Router();

const Exame = require('../models/exame');
const Cliente = require('../models/cliente');

router.get('/', async (req, res) => {
    try {
        const exames = await Exame.find().populate('idCliente');
        res.json(exames);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar exames", erro: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const exame = await Exame.findOne({ _id: id });

        if (!exame) {
            res.status(422).json({ mensagem: "Cliente não encontrado" });
            return;
        }

        const cliente = await Cliente.find({ idCliente: id });

        res.status(200).json({ exame, cliente });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    const { nome, clinica, idCliente } = req.body;

    try {
        const clienteA = await Cliente.findById(idCliente);

        if (!clienteA) {
            return res.status(422).json({ mensagem: "Cliente não encontrado" });
        }

        const exame = {
            nome,
            clinica,
            idCliente
        }

        await Exame.create(exame);

        res.status(201).json(exame);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar post", erro: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateFields = req.body;

        const updatedExame = await Exame.findByIdAndUpdate(id, updateFields, { new: true });

        if (!updatedExame) {
            return res.status(422).json({ mensagem: "Exame não encontrado" });
        }

        res.status(200).json(updatedExame);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar exame", erro: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {

        const exame = await Exame.findByIdAndDelete(req.params.id);
        
        if (!exame) {
            return res.status(422).json({ mensagem: "Exame não encontrado" });
        }

        res.status(200).json({ mensagem: "Excluído com sucesso!" });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir exame", erro: error.message });
    }
});

module.exports = router;