const db = require('../models');
const Ingatlan = db.Ingatlan;

exports.findAll = (req, res) => {
    Ingatlan.findAll()
        .then(data => {
            res.send(data);
        })
}