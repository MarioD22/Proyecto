
export class persona {
    id?:number;
    nombre:string;
    apellido:string;
    edad:string;
    presentacion:string;
    telefono:string;
    correo:string;
    dni:string;
    fechanac:string;
    estadocivil:string;

    constructor (nombre:string,apellido:string,edad:string,presentacion:string,telefono:string,
                 correo:string,dni:string,fechanac:string,estadocivil:string) {
         this.nombre=nombre;
         this.apellido=apellido;
         this.edad=edad;
         this.presentacion=presentacion;
         this.telefono=telefono;
         this.correo=correo;
         this.dni=dni;
         this.fechanac=fechanac;
         this.estadocivil=estadocivil;

    }
  

}