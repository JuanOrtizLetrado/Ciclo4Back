import { Schema, model} from "mongoose";
import { Enum_EstadoInscripcion } from "./enums";
import { ProyectModel } from "./proyecto";
import { UserModel } from "./user";

interface Inscripcion{
   proyecto: Schema.Types.ObjectId;
   estudiante: Schema.Types.ObjectId;
   estado: Enum_EstadoInscripcion;
   fechaIngreso: Date;
   fechaEgreso: Date;
}
const IsncripcionSchema = new Schema<Inscripcion>({
proyecto:{
    type:Schema.Types.ObjectId,
    require:true,
    ref:ProyectModel,
},
estudiante:{
    type:Schema.Types.ObjectId,
    require:true,
    ref:UserModel,
},
estado:{
    type: String,
    enum:Enum_EstadoInscripcion,
    required:true,
},
fechaIngreso:{
    type: Date,
    required:true,
},
fechaEgreso:{
    type: Date,
    required:true,
}

});

const InscripcionModel = model('Inscripcion', IsncripcionSchema);

export {InscripcionModel};