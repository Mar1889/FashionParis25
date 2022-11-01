const Cliente = require("../models/clientes.model")//const para importar
let response ={
    msg:"",
    exito: false
}

exports.create = function(req,res){ 
    let cliente = new Cliente({ 
        nombre: req.body.nombre, 
        apellido_p: req.body.apellido_p, 
        apellido_m: req.body.apellido_m, 
        telefono: req.body.telefono, 
        mail: req.body.mail, 
        direccion : req.body.direccion 
    }) 

    cliente.save(function(err){ 
        if(err){ 
            console.error(err),  
            response.exito = false, 
            response.msg = "Error al guardar el cliente" 
            res.json(response) 
            return; 
        } 

        response.exito = true, 
        response.msg = "El cliente se guardó correctamente" 
        res.json(response) 
    }) 
}

exports.find = function (req,res){//obtiene todos los datos de DB
    Cliente.find(function(err, clientes){
        res.json(clientes)
    })
}

exports.findOne = function (req,res){
    Cliente.findOne({_id: req.params.id},function(err, cliente){
        res.json(cliente)// Obtiene segun el Id
    })
}

exports.update = function (req,res){ 
    let cliente = { nombre: req.body.nombre, 
        apellido_p: req.body.apellido_p, 
        apellido_m: req.body.apellido_m, 
        telefono: req.body.telefono, 
        mail: req.body.mail, 
        direccion : req.body.direccion
    }

    Cliente.findByIdAndUpdate(req.params.id, {$set: cliente}, function (err){ 
        if(err){ 
            console.error (err), 
            response.exito = false, 
            response.msg== "Error al modificar el cliente" 
            res.json(response) 
            return; 
        } 

        response.exito = true, 
        response.msg = "El cliente se modifico correctamentel"
        res.json(response)
    })
}

exports.remove = function(req, res){
    Cliente.findByIdAndRemove({_id: req.params.id}, function(err){ 
        if(err){ 
            console.error(err), 
            response.exito = false, 
            response.msg = "Error al eliminar el cliente" 
            res.json(response) 
            return; 
        }
        response.exito = true, 
        response.msg = "El cliente eliminado correctamente" 
        res.json(response)
    })
}
