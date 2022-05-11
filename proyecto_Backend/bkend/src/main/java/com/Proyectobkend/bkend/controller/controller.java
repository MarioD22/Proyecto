/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.Proyectobkend.bkend.controller;

import com.Proyectobkend.bkend.model.capacitacion;
import com.Proyectobkend.bkend.model.persona;
import com.Proyectobkend.bkend.model.trabajo;
import com.Proyectobkend.bkend.exception.resourceNotFoundException;
import com.Proyectobkend.bkend.repository.capacitacionRepository;
import com.Proyectobkend.bkend.repository.personaRepository;
import com.Proyectobkend.bkend.repository.trabajoRepository;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {
    
 @Autowired
 private personaRepository personaRepo;
 @Autowired
 private capacitacionRepository capaRepository;
 @Autowired
 private trabajoRepository trabajoRepository;
    
 
//busca toda la info de la tabla con mi informacion personal//

@GetMapping ("/info")
public List<persona> buscarPersona(){
    return personaRepo.findAll();
}

//buscar por ID//

@GetMapping("/persona/{id}")
	public ResponseEntity<persona> getEmployeeById(@PathVariable Long id) {
		persona perso = personaRepo.findById(id)
	.orElseThrow(() -> new resourceNotFoundException("No existe persona con ese Id:" + id));
		return ResponseEntity.ok(perso);
	}
	


//busca toda la info de la tabla con mi informacion de caapcitacion//
@GetMapping("/capacitacion")
    public List<capacitacion> buscarCapacitacion(){
        return capaRepository.findAll();
    }
    
//busca toda la info de la tabla con mi informacion laboral//    
@GetMapping("/trabajo")
    public List<trabajo> buscarTrabajo(){
        return trabajoRepository.findAll();
    }    
    
//crear los datos en las tablas//

@PostMapping("/new/persona")
public void crearPersona( @RequestBody persona per) {
        personaRepo.save(per);
      
}




//crear los datos en las tablas//

@PostMapping("/new/capacitacion")
public void crearCapacitacion( @RequestBody capacitacion cap) {
        capaRepository.save(cap);
      
}
//crear los datos en las tablas//

@PostMapping("/new/trabajo")
public void crearTrabajo( @RequestBody trabajo trab) {
        trabajoRepository.save(trab);
      
}

//actualizar datos//


@PutMapping("/persona/{id}")
public ResponseEntity<persona> Actualizar(@PathVariable Long id, @RequestBody persona personaDetalle){

    persona perso = personaRepo.findById(id)
            .orElseThrow(() -> new resourceNotFoundException("No existe persona con ese Id:" + id));

    perso.setNombre(personaDetalle.getNombre());
    perso.setApellido(personaDetalle.getApellido());
    perso.setEdad(personaDetalle.getEdad());
    perso.setPresentacion(personaDetalle.getPresentacion());
    perso.setTelefono(personaDetalle.getTelefono());
    perso.setCorreo(personaDetalle.getCorreo());
    perso.setDni(personaDetalle.getDni());
    perso.setFechanac(personaDetalle.getFechanac());
    perso.setEstadocivil(personaDetalle.getEstadocivil());
    
    persona ActualizarPerfil = personaRepo.save(perso);
    return ResponseEntity.ok(ActualizarPerfil);

}


	// Eliminar datos persona
@DeleteMapping("/persona/{id}")
public ResponseEntity<Map<String, Boolean>> eliminarPersonal(@PathVariable Long id){
 persona perso = personaRepo.findById(id)
      .orElseThrow(() -> new resourceNotFoundException("No existe persona con ese Id:" + id));
	
		personaRepo.delete(perso);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Perfil Eliminado", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


//Elimina capacitacion//
@DeleteMapping("/capacitacion/{id}")
public ResponseEntity<Map<String, Boolean>> eliminarCapacitacion(@PathVariable Long id){
     capacitacion capa = capaRepository.findById(id)    
      .orElseThrow(() -> new resourceNotFoundException("No existe persona con ese Id:" + id));
	        
     capaRepository.delete(capa);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("Capacitacion Eliminada", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}


//Elimina Trabajo//
@DeleteMapping("/Trabajo/{id}")
public ResponseEntity<Map<String, Boolean>> eliminarTrabajo(@PathVariable Long id){
    trabajo trab = trabajoRepository.findById(id)
      
      .orElseThrow(() -> new resourceNotFoundException("No existe persona con ese Id:" + id));
	        
     trabajoRepository.delete(trab);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("Trabajo Eliminado", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	





}


 
    

