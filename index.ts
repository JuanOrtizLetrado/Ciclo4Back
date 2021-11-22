import ConectarBD from "./db/db";
import {UserModel} from "./models/user";
import { Enum_Rol } from "./models/enums";
import { ProyectModel } from "./models/proyecto";


const main = async () => {
    await ConectarBD(); 

   /*  ProyectModel.create({
        nombre: "Proyecto Dos",
        presupuesto: 120,
        fechaInicio:Date.now(),
        fechaFin: new Date("2022/09/22"),
        lider: '619af39aeebf7efdf8c3e704',

    }); */

    const proyecto= await ProyectModel.find({nombre: 'Proyecto Dos'}).populate('lider');
    console.log("Proyecto:", proyecto);
    
};

main();


//CRUD USUARIO

     //Crear un usuario
      /*   await UserModel.create({
        correo:"jt@123.com",
        identificacion:"2002",
        nombre:"Jonatan ",
        apellido:"Torrez",
        rol:Enum_Rol.estudiante,
    }) .then((u)=>{
        console.log("Usuario creado",u);
    }) .catch((e)=>{
        console.error("Error al crear el cliente ", e);
    });    */
 
    //Obtener un usuario especifico

   /*  await UserModel.findOne({identificacion: "159"}).then((u)=>{
        console.log("Usuario Encontrado :",u);
    }).catch((e)=>{
        console.error("Error al Buscar el usuario");
    });
 */
    //Obtener los usuarios
    /*  await UserModel.find()
    .then((u)=>{
        console.log('Usuarios:', u);
    })
    .catch((e)=>{
        console.error('Error al leer los Usuarios', e);

    });  */


    //Editar Informacion 
    /* await UserModel.findOneAndUpdate({correo: "jmhgjo@123.com"},{
        nombre: "Marco de ",
        apellido: "Tropoya",
    }).then((u)=>{
        console.log("Usuario Modificado",u);
    }) .catch((e)=>{
        console.error("Error al modificar",e);
    }); */


    //Eliminar 
  /*     await UserModel.findOneAndDelete({correo: "mf@."}).then((u)=>{
        console.log("Usuario eliminado con exito",u);
    }).catch((e)=>{
        console.error("Error al eliminar el usuario", e);
    }); */
