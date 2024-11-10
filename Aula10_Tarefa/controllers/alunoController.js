const express = require('express');
const router = express.Router();

const Aluno = require('../models/aluno');
const Disciplina = require('../models/disciplina');

router.get('/', async (req, res) => {
    try {
        const alunos = await Aluno.find().populate('autorId');
        res.json(alunos);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar alunos", erro: error.message });
    }
});

router.post('/', async (req, res) => {
    const { nome, idade, ra, idTurma } = req.body;

    try {
        const turma = await Disciplina.findById(idTurma);
        
        if (!turma) {
            return res.status(422).json({ mensagem: "Turma não encontrada" });
        }

        const aluno = {
            nome,
            idade,
            ra,
            idTurma
        }

         await Aluno.create(aluno);

        res.status(201).json(aluno);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar aluno", erro: error.message });
    }
});

module.exports = router;