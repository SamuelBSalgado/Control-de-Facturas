let cliente = {
    Nombre:'Nepomuceno',
    RFC:'NEPO231010',
    Ciudad:'Colima',
    CP: 28018,
    Email:'nepomuceno@gmail.com'
};

//Las claves de los productos corresponden a Lápiz(id=1) y Borrador(id=2).
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

let fac_name = cliente.Nombre;
let fac_RFC = cliente.RFC;
let fac_Ciudad = cliente.Ciudad;
let fac_CP = cliente.CP;
let fac_Email = cliente.Email;