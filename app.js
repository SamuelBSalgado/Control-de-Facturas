const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SamBS0279',
    database: 'negocio',
    multipleStatements: true
});
connection.connect();

connection.query(
    `
    INSERT INTO Productos (Nombre, Costo, Cantidad) 
        VALUES('Lápiz', CONCAT('$', FORMAT(10, 2)), 100);

    INSERT INTO Productos (Nombre, Costo, Cantidad) 
        VALUES('Borrador', CONCAT('$', FORMAT(20, 2)), 200);

    INSERT INTO Productos (Nombre, Costo, Cantidad)
        VALUES('Sacapuntas', CONCAT('$', FORMAT(30, 2)), 300);
    `, function(error, results, fields){
    if (error){
        throw error;
    } else{
        console.log(results);
        console.log(fields);
    }
});

let cliente = {
    Nombre:'Nepomuceno',
    RFC:'NEPO231010',
    Ciudad:'Colima',
    CP: 28018,
    Email:'Nepo@gmail.com'
};
let cli_name = cliente.Nombre;
let cli_RFC = cliente.RFC;
let cli_Ciudad = cliente.Ciudad;
let cli_CP = cliente.CP;
let cli_Email = cliente.Email;

let factura = {
    fecha:'2023/03/23',
    total: "",
    productos: [
        {
            id: 1,
            cantidad: 5,
            costo: 10
        },
        {
            id: 2,
            cantidad: 5,
            costo: 20
        }
    ]
};
factura.total = factura.productos[0].cantidad*factura.productos[0].costo + factura.productos[1].cantidad*factura.productos[1].costo;

let fac_fecha = factura.fecha;
let fac_total = factura.total;
let fac_ID_product1 = factura.productos[0].id;
// let fac_cantidad_product1 = fac_fecha.productos[0].cantidad;
// let fac_costo_product1 = fac_fecha.productos[0].costo;


connection.query(`
INSERT INTO Clientes (Nombre, RFC, Ciudad, CP, Email) 
    VALUES ("${cli_name}", "${cli_RFC}", "${cli_Ciudad}", "${cli_CP}", "${cli_Email}");
`, function(error, results, fields){
        if (error){
            throw error;
        } else{
            console.log(results);
            console.log(fields);
        }
    }
);
try{
await connection.query(`
    SELECT id FROM clientes WHERE Nombre = "${cli_name}"
`, function(error, results, fields){
    if(error){
        throw error;
    } else{
        let id_cliente = console.log(results[0].id);
        connection.query(`
        INSERT INTO facturas (Folio, Fecha, Total, ClienteID) 
            VALUES (1010, "${fac_fecha}", "${fac_total}", ${id_cliente})
    `, function(error, results, fields){
        if(error){
            throw error;
        } else{
            console.log(results);
            console.log(fields);
        }
    });
    }
});
} catch(error){
    console.log(error);
} finally{
    connection.end();
}