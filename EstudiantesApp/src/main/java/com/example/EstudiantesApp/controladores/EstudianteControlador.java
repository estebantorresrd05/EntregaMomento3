package com.example.EstudiantesApp.controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.EstudiantesApp.modelos.Estudiante;
import com.example.EstudiantesApp.servicios.EstudianteServicio;

@RestController
@RequestMapping("/api/v1/estudiantes")
public class EstudianteControlador {

    @Autowired
    EstudianteServicio servicio;

    @PostMapping
    public ResponseEntity<?> controlarGuardado(
            @RequestBody Estudiante datos) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(servicio.guardar_estudiante(datos));
    }

    @GetMapping
    public ResponseEntity<?> controlarListado() {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(servicio.listar_estudiantes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> controlarBuscarPorId(
            @PathVariable Long id) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(servicio.buscar_estudiante_por_id(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> controlarModificar(
            @PathVariable Long id,
            @RequestBody Estudiante datos) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(servicio.modificar_estudiante(id, datos));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> controlarEliminar(
            @PathVariable Long id) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(servicio.eliminar_estudiante(id));
    }
}