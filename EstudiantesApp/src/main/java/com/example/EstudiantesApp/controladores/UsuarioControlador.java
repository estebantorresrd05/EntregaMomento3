package com.example.EstudiantesApp.controladores;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.EstudiantesApp.modelos.Usuario;
import com.example.EstudiantesApp.servicios.UsuarioServicio;

@RestController
@RequestMapping("/api/v1/usuarios")
public class UsuarioControlador {

    @Autowired
    UsuarioServicio servicio;

    @PostMapping("/registro")
    public ResponseEntity<?> controlarRegistro(
            @RequestBody Usuario datos) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(servicio.registrar_usuario(datos));
    }

    @PostMapping("/login")
    public ResponseEntity<?> controlarLogin(
            @RequestBody Map<String, String> datos) {

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(servicio.login_usuario(
                        datos.get("correo"),
                        datos.get("password")
                ));
    }
}