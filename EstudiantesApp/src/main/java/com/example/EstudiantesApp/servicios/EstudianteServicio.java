package com.example.EstudiantesApp.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EstudiantesApp.modelos.Estudiante;
import com.example.EstudiantesApp.repositorios.IEstudianteRepositorio;

@Service
public class EstudianteServicio {

    @Autowired
    IEstudianteRepositorio repositorios;

    public Estudiante guardar_estudiante(
            Estudiante datos) {

        return repositorios.save(datos);
    }

    public List<Estudiante> listar_estudiantes() {

        return repositorios.findAll();
    }

    public Estudiante buscar_estudiante_por_id(
            Long id) {

        return repositorios.findById(id)
                .orElse(null);
    }

    public Estudiante modificar_estudiante(
            Long id,
            Estudiante datos) {

        Estudiante estudianteBuscado =
                repositorios.findById(id)
                .orElse(null);

        if (estudianteBuscado != null) {

            estudianteBuscado.setNombre(
                    datos.getNombre());

            estudianteBuscado.setEdad(
                    datos.getEdad());

            estudianteBuscado.setGrado(
                    datos.getGrado());

            estudianteBuscado.setEstado(
                    datos.getEstado());

            return repositorios.save(
                    estudianteBuscado);
        }

        return null;
    }

    public boolean eliminar_estudiante(
            Long id) {

        repositorios.deleteById(id);

        return true;
    }
}