import { Schema, model } from "mongoose";
import {Enum_Rol, Estado_Usuario} from "./enums"



interface User{
    correo: string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_Rol;
    estado: Estado_Usuario;
}



const userSchema = new Schema<User>({
   
    correo:{
        type: String,
        required: true,
        unique:true,
        validate:{
            validator: (email)=>{
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message:'FORMATO DE CORREO NO VALIDO',
        },
    },

    identificacion :{
        type: String,
        required: true,
        unique: true,
    },
    nombre:{
        type : String,
        required: true,
    },
    apellido:{
        type: String,
        required: true,
    },
    rol:{
        type: String,
        required:true,
        enum: Enum_Rol,
    },
    estado:{
        type: String,
        enum:Estado_Usuario,
        default: Estado_Usuario.pendiente,
    }

});

const UserModel = model('User', userSchema);

export {UserModel};