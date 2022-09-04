const { Router } = require('express');
const rutas = Router();

const fs = require('fs');
const { send } = require('process');
const data = fs.readFileSync('src/Base_datos/productos.json');
const myData = JSON.parse (data);


rutas.get('/productos', (req, res) =>{            
    res.json(myData);             
});

//Ordenes de compra
rutas.get('/ordenes', (req, res) =>{       
    const fs = require('fs');    
    const data = fs.readFileSync('src/Base_datos/ordenes.json');
    const myOrdenes = JSON.parse (data);       
    res.json(myOrdenes);   
});

module.exports = rutas;




