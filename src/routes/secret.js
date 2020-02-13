const Router = require('express').Router();
const CornosSecretos = require('../models/CornoContato')();

Router.get('/', (req, res) => {
    CornosSecretos.find()
    .then(cornos => res.json(cornos))
    .catch(err => res.status(500).json(err.message));
});

Router.post('/', (req, res) => {
    CornosSecretos.create(req.body)
    .then(corno => res.json(corno))
    .catch(err => res.status(500).json(err.message));
});

Router.put('/:id', (req, res) => {
    CornosSecretos.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(corno => res.json(corno))
    .catch(err => res.status(500).json(err.message));
});

Router.delete('/:id', (req, res) => {
    CornosSecretos.findOneAndDelete(req.params.id)
    .then(() => res.status(200).json({ message: 'Success' }))
    .catch(err => res.status(500).json(err.message));
});


module.exports = Router;