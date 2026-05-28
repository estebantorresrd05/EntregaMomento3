const API_LOGIN =
    "http://localhost:8080/api/v1/usuarios/login";

const formularioLogin =
    document.getElementById("form-login");

formularioLogin.addEventListener(
    "submit",
    async function (e) {

        e.preventDefault();

        const correo =
            document.getElementById("correo").value;

        const password =
            document.getElementById("password").value;

        const respuesta = await fetch(API_LOGIN, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                correo,
                password
            })
        });

        const resultado =
            await respuesta.json();

        if (resultado === true) {

            alert("Login exitoso");

            window.location.href =
                "index.html";

        } else {

            alert("Credenciales incorrectas");
        }
    }
);