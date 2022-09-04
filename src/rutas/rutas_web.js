const { Router } = require('express');
const rutas = Router();

const fs = require('fs');
const { send } = require('process');
const data = fs.readFileSync('src/Base_datos/productos.json');
const myData = JSON.parse (data);


rutas.get('/productos', (req, res) =>{            
    res.json(myData);             
});

//Consultar por SKU
rutas.get('/productos/:sku', (req, res ) => {    
    const { sku } = req.params;    
    under.each(myData.productos, (producto,i) =>{
        if(producto.sku == sku){                                    
            res.json(producto);
        }        
    });     
});



module.exports = rutas;




