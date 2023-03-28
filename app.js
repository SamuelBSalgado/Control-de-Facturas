const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SamBS0279',
    database: 'negocio',
    multipleStatements: true
});
connection.connect();

/*connection.query(
    `
    CREATE TABLE Clientes(
        id int AUTO_INCREMENT, 
        Nombre varchar(50), 
        RFC varchar(50), 
        Ciudad varchar(20), 
        CP char(20), 
        Email varchar(50), 
        PRIMARY KEY(id));

    CREATE TABLE Productos(
        id int AUTO_INCREMENT, 
        Nombre varchar(50), 
        Costo char(20), 
        Cantidad char(100), 
        PRIMARY KEY(id));

    CREATE TABLE Facturas(
        Folio int AUTO_INCREMENT, 
        Fecha DATETIME, 
        Total char(50), 
        ClienteID int not null, 
        PRIMARY KEY(Folio), 
        FOREIGN KEY(ClienteID) REFERENCES clientes(id));

    CREATE TABLE Detalle_Facturas(
        id int AUTO_INCREMENT, 
        Factura int UNIQUE, 
        Producto int UNIQUE, 
        Cantidad int, 
        Costo int, 
        PRIMARY KEY(id));

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
});*/

let cliente = {
    Nombre:'Nepomuceno',
    RFC:'NEPO231010',
    Ciudad:'Colima',
    CP: 28018,
    Email:'CorreoNEP'
};

let fac_name = cliente.Nombre;
let fac_RFC = cliente.RFC;
let fac_Ciudad = cliente.Ciudad;
let fac_CP = cliente.CP;
let fac_Email = cliente.Email;

connection.query(`
INSERT INTO Clientes (Nombre, RFC, Ciudad, CP) 
    VALUES (${fac_name}, ${fac_RFC}, ${fac_Ciudad}, ${fac_CP}, ${fac_Email});
`, function(error, results, fields){
        if (error){
            throw error;
        } else{
            console.log(results);
            console.log(fields);
        }
    }
);

connection.end();