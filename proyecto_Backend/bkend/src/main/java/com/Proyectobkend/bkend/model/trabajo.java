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
@Table(name = "trabajos")
public class trabajo {
 
    
     @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id ;
    @Column(name ="nombreTrabajo")
    private String nombreTrabajo;
    @Column(name = "descripcion")
    private String descripcion;
    
    
    
    
}