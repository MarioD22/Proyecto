/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Proyectobkend.bkend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Pc
 */
@Entity
@Table(name="mario")
public class persona {
 
     @Id
     @GeneratedValue (strategy = GenerationType.AUTO)
    private  long id;
   @Column(name = "nombre")  
    private  String nombre;
   @Column(name = "apellido") 
    private  String apellido;
   @Column(name = "edad") 
    private  String edad;
   @Column(name = "presentacion") 
    private  String presentacion;
   @Column(name = "telefono") 
    private  String telefono;
   @Column(name = "correo") 
    private  String correo;
   @Column(name = "dni") 
    private  String dni;
   @Column(name = "fechaNac") 
    private  String fechanac;
   @Column(name = "estadoCivil") 
    private  String estadocivil;

    public persona() {
    }

    public persona(String nombre, String apellido, String edad, String presentacion, String telefono, String correo, String dni, String fechanac, String estadocivil) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.presentacion = presentacion;
        this.telefono = telefono;
        this.correo = correo;
        this.dni = dni;
        this.fechanac = fechanac;
        this.estadocivil = estadocivil;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEdad() {
        return edad;
    }

    public void setEdad(String edad) {
        this.edad = edad;
    }

    public String getPresentacion() {
        return presentacion;
    }

    public void setPresentacion(String presentacion) {
        this.presentacion = presentacion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getFechanac() {
        return fechanac;
    }

    public void setFechanac(String fechanac) {
        this.fechanac = fechanac;
    }

    public String getEstadocivil() {
        return estadocivil;
    }

    public void setEstadocivil(String estadocivil) {
        this.estadocivil = estadocivil;
    }
    
    
    
    
    
}
