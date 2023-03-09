const express = require('express');
const db = require('./models');
const Ingatlan = db.Ingatlan;
const Kategoria = db.Kategoria;
const bodyParser = require('body-parser');
const routes = express.Router();


routes.get('/ingatlan', (req, res) => {
    Ingatlan.findAll({include: Kategoria})
        .then(data => {
            res.send(data).status(200);
        })
});
routes.post('/ingatlan', bodyParser.json(), (req, res) => {  
    if(!req.body.kategoria || !req.body.tehermentes || !req.body.ar) {
        res.status(400).send('Hiányos adatok.');
        return;
    }
    const newData = {
        kategoria: req.body.kategoria,
        leiras: req.body.leiras ? req.body.leiras : null,
        hirdetesDatuma: req.body.hirdetesDatuma ? req.body.hirdetesDatuma : null,
        tehermentes: req.body.tehermentes,
        ar: req.body.ar,
        kepUrl: req.body.kepUrl ? req.body.kepUrl : null
    };
    Ingatlan.create(newData)
        .then(data => {res.send({id: data.id}).status(201)})
        .catch(err => {res.status(500).send('Szerver oldali hiba!' + err)}); 
})


routes.delete('/ingatlan/:id', (req, res) => {
    const id = req.params.id;
    Ingatlan.destroy({where: {id: id}})
        .then(num => {
            if (num === 1) {
                res.status(204).send();
            } else {
                res.send('Az ingatlan nem létezik.').status(404);
            }
        })
        .catch(err => {res.status(500).send('Szerver oldali hiba!' + err)});
})

module.exports = routes;