'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/reporte')
		.then(() => {
			console.log("Conectado a la base de datos reporte")

			app.listen(port, () => {
				console.log("Servidor corriendo")
			})
		})
