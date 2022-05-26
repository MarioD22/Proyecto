export class trabajo{

    id?:number;
    nombreTrabajo:string;
    cargo:string;
    descripcion:string;
       
constructor (nombreTrabajo:string,cargo:string,descripcion:string){
    this.nombreTrabajo=nombreTrabajo;
    this.cargo=cargo;
    this.descripcion=descripcion;
}


}