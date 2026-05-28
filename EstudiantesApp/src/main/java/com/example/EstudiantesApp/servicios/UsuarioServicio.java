package com.example.EstudiantesApp.servicios;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.EstudiantesApp.modelos.Usuario;
import com.example.EstudiantesApp.repositorios.IUsuarioRepositorio;

@Service
public class UsuarioServicio {

    @Autowired
    IUsuarioRepositorio repositorios;

    public Usuario registrar_usuario(
            Usuario datos) {

        return repositorios.save(datos);
    }

    public boolean login_usuario(
            String correo,
            String password) {

        Usuario usuarioBuscado =
                repositorios.findByCorreo(correo)
                .orElse(null);

        if (usuarioBuscado != null) {

            return usuarioBuscado
                    .getPassword()
                    .equals(password);
        }

        return false;
    }
}