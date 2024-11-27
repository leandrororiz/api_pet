const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
//middleware para parsear o corpo das requisições
app.use(bodyParser.json());
//Simulação de um banco de dados em memória
let clientes = [];
let animais = [];
let consultas = [];
//Rota GET para listar todos os clientes
app.get('/clientes', (req, res) => {
    res.json(clientes);
})
//Rota POST para criar um novo cliente
app.post('/clientes', (req,res) => {
    const cliente = req.body;
    clientes.push(cliente);
    res.status(201).json(cliente);
})
//Rota PUT para atualizar um cliente existente
app.put('/clientes/:id', (req, res) => {
    const id = req.params.id;
    const clienteIndex = clientes.findIndex(c => c.id === id);

    if (clienteIndex !== -1) {
        clientes[clienteIndex] = { id, ...req.body};
        res.json(clientes[clienteIndex]);
    } else{
        res.status(404).json({message: 'Cliente não encontrado'});
    }
});

//Rota PATCH para atualizar parcialmente um cliente
app.patch('/clientes/:id', (req, res) => {
    const id = req.params.id;
    const clienteIndex = clientes.findIndex(c => c.id === id);

    if(clienteIndex !== -1) {
        clientes[clienteIndex] = { ...clientes[clienteIndex], ...req.body};
        res.json(clientes[clienteIndex]);
    } else {
        res.status(404).json({ message: 'Cliente não encontrado'});
    }
});

//Rota DELETE para remover um cliente
app.delete('/clientes/:id', (req, res) => {
    const id = req.params.id;
    const clienteIndex = clientes.findIndex(c => c.id === id);

    if (clienteIndex !== -1) {
        clientes.splice(clienteIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Cliente não encontrado'});
    }
});
// Rota GET para listar todos os animais
app.get('/animais', (req, res) => {
    res.json(animais);
})

// Rota POST para criar um novo animal
app.post('/animais', (req, res) => {
    const animal = req.body;
    animais.push(animal);
    res.status(201).json(animal);
})

// Rota PUT para atualizar um animal existente
app.put('/animais/:id', (req, res) => {
    const id = req.params.id;
    const animalIndex = animais.findIndex(a => a.id === id);

    if (animalIndex !== -1) {
        animais[animalIndex] = { id, ...req.body };
        res.json(animais[animalIndex]);
    } else {
        res.status(404).json({ message: 'Animal não encontrado' });
    }
});

// Rota PATCH para atualizar parcialmente um animal
app.patch('/animais/:id', (req, res) => {
    const id = req.params.id;
    const animalIndex = animais.findIndex(a => a.id === id);

    if (animalIndex !== -1) {
        animais[animalIndex] = { ...animais[animalIndex], ...req.body };
        res.json(animais[animalIndex]);
    } else {
        res.status(404).json({ message: 'Animal não encontrado' });
    }
});

// Rota DELETE para remover um animal
app.delete('/animais/:id', (req, res) => {
    const id = req.params.id;
    const animalIndex = animais.findIndex(a => a.id === id);

    if (animalIndex !== -1) {
        animais.splice(animalIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Animal não encontrado' });
    }
});

// Rota GET para listar todos os dados de 'consulta'
app.get('/consultas', (req, res) => {
    res.json(consultas);
});

// Rota POST para adicionar dados à variável 'consulta'
app.post('/consultas', (req, res) => {
    const dadosConsulta = req.body;
    consulta.push(dadosConsulta); // Adiciona dados à variável consulta
    res.status(201).json(dadosConsulta);
});

// Rota PUT para atualizar dados específicos de 'consulta' por ID
app.put('/consultas/:id', (req, res) => {
    const id = req.params.id;
    const consultaIndex = consulta.findIndex(c => c.id === id);

    if (consultaIndex !== -1) {
        consulta[consultaIndex] = { id, ...req.body }; // Substitui os dados da consulta
        res.json(consulta[consultaIndex]);
    } else {
        res.status(404).json({ message: 'Consulta não encontrada' });
    }
});

// Rota PATCH para atualizar parcialmente dados de 'consulta' por ID
app.patch('/consultas/:id', (req, res) => {
    const id = req.params.id;
    const consultaIndex = consulta.findIndex(c => c.id === id);

    if (consultaIndex !== -1) {
        consulta[consultaIndex] = { ...consulta[consultaIndex], ...req.body }; // Atualiza parcialmente
        res.json(consulta[consultaIndex]);
    } else {
        res.status(404).json({ message: 'Consulta não encontrada' });
    }
});

// Rota DELETE para remover dados de 'consulta' por ID
app.delete('/consultas/:id', (req, res) => {
    const id = req.params.id;
    const consultaIndex = consulta.findIndex(c => c.id === id);

    if (consultaIndex !== -1) {
        consulta.splice(consultaIndex, 1); // Remove a consulta pelo ID
        res.status(204).send(); // Sucesso sem conteúdo
    } else {
        res.status(404).json({ message: 'Consulta não encontrada' });
    }
});

//Inicia servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});