const Mascota = require('../models/Mascota')

function crearMascota(req, res) {
    var mascota = new Mascota(req.body)
    res.status(201).send(mascota)
}

function obtenerMascotas(req, res) {
    var mascota1 = new Mascota(1, 'Iker', 'Chihuahua')
    var mascota2 = new Mascota(2, 'Kyara', 'Husky')
    res.send([mascota1, mascota2])
}

function modificarMascota(req, res) {
    var mascota1 = new Mascota(req.params.id, 'Iker', 'Chihuahua')
    var modificaciones = req.body
    mascota1 = { ...mascota1, ...modificaciones }
    res.send(mascota1)
}

function eliminarMascota(req, res) {
    res.status(200).send(`Mascota ${req.params.id} eliminado`)
}

module.exports = {
    crearMascota,
    obtenerMascotas,
    modificarMascota,
    eliminarMascota
}