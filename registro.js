const API_URL =
"https://6a1866a71878294b597d0a86.mockapi.io/estudiantes";


const inputNombre =
document.getElementById("inputNombre");

const inputEdad =
document.getElementById("inputEdad");

const selectGrado =
document.getElementById("selectGrado");

const selectEstado =
document.getElementById("selectEstado");

const btnAgregar =
document.getElementById("btnAgregar");

const areaResultados =
document.getElementById("areaResultados");


async function obtenerEstudiantes() {

  const respuesta =
    await fetch(API_URL);

  const estudiantes =
    await respuesta.json();

  mostrarEstudiantes(estudiantes);

}


async function agregarEstudiante() {

  const nuevoEstudiante = {

    nombre:
      inputNombre.value,

    edad:
      inputEdad.value,

    grado:
      selectGrado.value,

    estado:
      selectEstado.value

  };


  await fetch(API_URL, {

    method: "POST",

    headers: {
      "Content-Type":
        "application/json"
    },

    body: JSON.stringify(
      nuevoEstudiante
    )

  });


  obtenerEstudiantes();

}


function mostrarEstudiantes(estudiantes) {

  areaResultados.innerHTML = "";


  estudiantes.forEach(
    (estudiante) => {

      areaResultados.innerHTML += `

        <div>

          <h3>
            ${estudiante.nombre}
          </h3>

          <p>
            Edad:
            ${estudiante.edad}
          </p>

          <p>
            Grado:
            ${estudiante.grado}
          </p>

          <button
            onclick="eliminarEstudiante('${estudiante.id}')"
          >
            Eliminar
          </button>

        </div>

      `;

    }
  );

}


async function eliminarEstudiante(id) {

  await fetch(
    `${API_URL}/${id}`,
    {

      method: "DELETE"

    }
  );

  obtenerEstudiantes();

}


btnAgregar.addEventListener(
  "click",
  agregarEstudiante
);


obtenerEstudiantes();