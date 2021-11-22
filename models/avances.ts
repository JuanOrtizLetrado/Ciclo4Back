import { Schema, model } from "mongoose";
import { ProyectModel } from "./proyecto";
import { UserModel } from "./user";

interface Avances{
   proyecto: Schema.Types.ObjectId;
   fecha: Date;
   descripcion: string;
   observaciones: string;
   creadoPor: Schema.Types.ObjectId;
}

const AvanceSchema = new Schema<Avances>({

    proyecto:{
        type: Schema.Types.ObjectId,
        required:true,
        ref:ProyectModel,
    },
    fecha:{
        type: Date,
        required:true,
    },
    descripcion:{
        type: String,
        required:true,
    },
    observaciones:{
        type: String,
        required:true,
    },
    creadoPor:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    }

});

const AvancesModel = model('Avance', AvanceSchema);

export {AvancesModel};