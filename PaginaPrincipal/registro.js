const API_REGISTRO =
    "http://localhost:8080/api/v1/usuarios/registro";

const formularioRegistro =
    document.getElementById("form-registro");

formularioRegistro.addEventListener(
    "submit",
    async function (e) {

        e.preventDefault();

        const usuario = {

            correo:
                document.getElementById("correo").value,

            password:
                document.getElementById("password").value
        };

        await fetch(API_REGISTRO, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(usuario)
        });

        alert("Usuario registrado");

        window.location.href =
            "login.html";
    }
);