'use strict'

var express = require('express');
var bodyParse = require('body-parser');

var app = express();

app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

app.get('/tabla', (req,res) =>{ 

	res.status(200).send({

		message: "APPI nodes"
	})
});



module.exports = app;