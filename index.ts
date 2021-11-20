import ConectarBD from "./db/db";
import {UserModel} from "./models/user";
import { Enum_Rol } from "./models/enums";


const main = async () => {
    await ConectarBD(); 

    //Crear un usuario
     await UserModel.create({
        correo:"jmo@123.com",
        identificacion:"10125",
        nombre:"Juan Manuel",
        apellido:"Ortiz",
        rol:Enum_Rol.administrador,
    }) .then((u)=>{
        console.log("Usuario creado",u);
    }) .catch((e)=>{
        console.error("Error al crear el cliente ", e);
    }); 
    //Obtener los usuarios
    /* await UserModel.find()
    .then((u)=>{
        console.log('Usuarios:', u);
    })
    .catch((e)=>{
        console.error('Error al leer los Usuarios', e);

    }); */
};

main();
