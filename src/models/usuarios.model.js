const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = mongoose.Schema({
    nome_usuario:String,
    email_usuario:String,
    senha_usuario:String,
    tipo_usuario:Number,
},{
    timestamps:true
});

DataSchema.pre('save', function(next){
    if(!this.isModifield('senha_usuario')){
        return next();
    }
    this.senha_usuario = bcrypt.hashSync(this.senha_usuario, 10);
    next();
});

const usuarios = mongoose.model('Usuarios', DataSchema);
module.exports = usuarios;