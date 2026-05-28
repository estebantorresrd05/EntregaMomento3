const resultado =
document.getElementById(
  "resultadoPokemon"
);


const API_URL =
"https://6a1866a71878294b597d0a86.mockapi.io/estudiantes";


async function obtenerEstudiantes() {

  const respuesta =
    await fetch(API_URL);

  const estudiantes =
    await respuesta.json();


  resultado.innerHTML = "";


  estudiantes.forEach(
    (estudiante) => {

      resultado.innerHTML += `

        <div class="card">

          <h2>
            ${estudiante.nombre}
          </h2>

          <p>
            Edad:
            ${estudiante.edad}
          </p>

          <p>
            Grado:
            ${estudiante.grado}
          </p>

          <p>
            Estado:
            ${estudiante.estado}
          </p>

        </div>

      `;

    }
  );

}


obtenerEstudiantes();