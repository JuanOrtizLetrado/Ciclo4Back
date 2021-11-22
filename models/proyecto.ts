import { Schema, model } from "mongoose";
import { Estado_Proyecto, Fase_Proyecto } from "./enums";
import { UserModel } from "./user";

interface Proyecto{
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Estado_Proyecto;
    fase: Fase_Proyecto;
    lider: Schema.Types.ObjectId;
}

const proyectoSchema = new Schema<Proyecto>({
nombre:{
    type:String,
    required:true,
    unique:true,
},
presupuesto:{
    type:Number,
    required:true,
},
fechaInicio:{
    type:Date,
    required:true,
},
fechaFin:{
    type: Date,
    required: true,
},
estado:{
    type:String,
    enum: Estado_Proyecto,
    default: Estado_Proyecto.inactivo,
},
fase:{
    type:String,
    enum: Fase_Proyecto,
    default: Fase_Proyecto.nulo,
},
lider:{
    type:Schema.Types.ObjectId,
    require:true,
    ref:UserModel,
}

});
//El tercer prop es para elegir el nombre que deseamos se ponga en la BD
const ProyectModel= model("Proyecto",proyectoSchema);

export {ProyectModel};