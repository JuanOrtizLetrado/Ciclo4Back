//Enums de USUARIO
enum Enum_Rol {
    estudiante='Estudiante',
    lider='Lider',
    administrador='Administrador',

}

enum Estado_Usuario{
    pendiente='Pendiente',
    autorizado='Autorizado',
    noAutorizado='No Autorizado',
}

//Enums de PROYECTOS
enum Estado_Proyecto{
activo= "Activo",
inactivo="Inactivo",
}

enum Fase_Proyecto{
iniciado= 'Iniciado',
desarrollo= 'En Desarrollo',
terminado= 'Terminado',
nulo='',
}

//enums de OBJETIVOS
enum Enum_TipoObjetivo{
    general = 'General',
    especifico = 'Especifico',
}

//Enum Inscripción
enum Enum_EstadoInscripcion{
    aceptada = 'Aceptada',
    rechazada = 'Rechazada',
}

export {Enum_Rol,Estado_Usuario,Estado_Proyecto,Fase_Proyecto, Enum_TipoObjetivo,Enum_EstadoInscripcion};




