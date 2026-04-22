import { Schema,model } from "mongoose";

const empleadoSchema = new Schema ({
    codigo: {
        type: Number,
    },
    nombre:{
        type: String,
    },
    apellido1:{
        type: String,
    },
    apellido2:{
        type: String,
    },
    codigo_departamento:{
        type: Number,
    },
},{versionKey: false, timestamps:true});

export default model ('empleado', empleadoSchema);