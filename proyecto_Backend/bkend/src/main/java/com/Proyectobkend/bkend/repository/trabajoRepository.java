/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Proyectobkend.bkend.repository;

import com.Proyectobkend.bkend.model.trabajo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 *
 * @author Pc
 */
@Repository
public interface trabajoRepository extends JpaRepository<trabajo, Long>{
    
}