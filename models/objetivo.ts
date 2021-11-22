import { Schema, model } from "mongoose";
import { Enum_TipoObjetivo } from "./enums";
import { ProyectModel } from "./proyecto";

interface Objetivo{
    descripcion:string;
    tipo: Enum_TipoObjetivo;
    proyecto: Schema.Types.ObjectId;
}
const objetivoSchema = new Schema<Objetivo>({
    descripcion:{
        type:String,
        required: true,
    },
    tipo:{
        type:String, 
        enum: Enum_TipoObjetivo, 
    },
    proyecto:{
        type: Schema.Types.ObjectId,
        required:true,
        ref: ProyectModel,
    }
});

const ObjetivoModel = model('Objetivo', objetivoSchema);

export default {ObjetivoModel};