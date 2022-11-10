const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const ProductosSchema = new Schema ({
    id_producto: {type: String, required: true, max:100}, 
    nombre:{type: String, required: true, max:100},
    descripcion:{type: String, required: true, max:300},
    precio:{type: Number, required: true, max:9000000},
});

module.exports = mongoose.model("productos", ProductosSchema);