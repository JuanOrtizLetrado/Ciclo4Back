import { connect } from "mongoose";
//Son lo mismo
///const {connect} = require('mongoose');


const ConectarBD = async () => {
    return await connect (
     'mongodb+srv://admin4ciclo:juan2635129@proyecto4ciclo.eew23.mongodb.net/BDProyecto4Ciclo?retryWrites=true&w=majority' 
    ) 
    .then(()=>{
        console.log('Conexion exitosa');
    })
    .catch((e)=>{
        console.error('Error al conectar a la BD', e);
    });
};

export default ConectarBD;

