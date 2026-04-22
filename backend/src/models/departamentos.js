import { Schema,model } from "mongoose";

const departamentoSchema = new Schema ({
    codigo: {
        type: Number,
    },
    nombre:{
        type: String,
    },
},{versionKey: false, timestamps:true});

export default model ('departamento', departamentoSchema);