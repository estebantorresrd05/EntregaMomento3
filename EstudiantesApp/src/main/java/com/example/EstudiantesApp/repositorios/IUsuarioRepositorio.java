package com.example.EstudiantesApp.repositorios;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.EstudiantesApp.modelos.Usuario;

public interface IUsuarioRepositorio
        extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByCorreo(String correo);

}