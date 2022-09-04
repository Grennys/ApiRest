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

//Post agregar un producto
rutas.post('/productos', (req, res ) => {  
    var date = new Date(); 
    var fecha = date.toLocaleDateString();   
    const { sku, nombre,precio,url,marca,descripcion,iva,descuento,inventario } = req.body;    
    if ( sku && nombre && precio && url && marca && descripcion && iva && descuento && inventario ) {                
        let NuevoP = {
            sku, 
            nombre,
            precio,
            url,
            marca,
            descripcion,
            iva,
            descuento,
            inventario,
            fecha
        };
        Nprodcuto.push(NuevoP);
        const nuevoP_json =  JSON.stringify(Nprodcuto);
        fs.writeFileSync('src/Base_datos/productos.json', nuevoP_json, 'utf-8');
        res.send('El producto satisfactoriamente');
    } else {
        res.status(500).json({error: 'Todos los campos son requeridos.'});
    }
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




