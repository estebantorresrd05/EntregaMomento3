package com.example.EstudiantesApp.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.EstudiantesApp.modelos.Estudiante;

public interface IEstudianteRepositorio
        extends JpaRepository<Estudiante, Long> {

}