const { Router } = require('express');
const rutas = Router();

const fs = require('fs');
const { send } = require('process');
const data = fs.readFileSync('src/Base_datos/productos.json');
const myData = JSON.parse (data);


rutas.get('/productos', (req, res) =>{            
    res.json(myData);             
});


//Eliminar un producto
rutas.delete('/productos/:sku', (req, res ) => {
    const { sku } = req.params;
    Nprodcuto = Nprodcuto.filter(Nprodcuto => Nprodcuto.sku != req.params.sku);
    const nuevoP_json = JSON.stringify(Nprodcuto);
    fs.writeFileSync('src/Base_datos/productos.json', nuevoP_json);
    res.send('se eliminó el producto satisfactoriamente');
});


module.exports = rutas;




