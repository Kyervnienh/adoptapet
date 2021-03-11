var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");

var isProduction = process.env.NODE_ENV === 'production';

mongoose.connect(
  process.env.MONGODB_URI, // obtiene la url de conexión desde las variables de entorno
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

mongoose.set("debug", true);

require("./models/Usuario");
require('./config/passport');
// Aquí se importarán los modelos Mascota y Solicitud cuando estén listos


app.use('/v1', require('./routes'));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});