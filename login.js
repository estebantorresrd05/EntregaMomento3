const inputCorreo =
document.getElementById("inputCorreo");

const inputPassword =
document.getElementById("inputPassword");

const btnLogin =
document.getElementById("btnLogin");

const mensajeLogin =
document.getElementById("mensajeLogin");


function iniciarSesion() {

  const correo =
    inputCorreo.value.trim();

  const password =
    inputPassword.value.trim();


  if (      
    correo === "" ||
    password === ""
  ) {

    mensajeLogin.textContent =
      "Complete todos los campos";

    mensajeLogin.style.display =
      "block";

    return;
  }


  mensajeLogin.style.display =
    "none";


  window.location.href =
    "registro.html";

}


btnLogin.addEventListener(
  "click",
  iniciarSesion
);
