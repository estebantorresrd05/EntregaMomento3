const resultado =
document.getElementById(
  "resultadoPersonaje"
);


async function obtenerPersonajes() {

  const respuesta =
    await fetch(
      "https://rickandmortyapi.com/api/character"
    );

  const datos =
    await respuesta.json();


  resultado.innerHTML = "";


  datos.results.forEach(
    (personaje) => {

      resultado.innerHTML += `

        <div class="card">

          <h2>
            ${personaje.name}
          </h2>

          <img
            src="${personaje.image}"
          >

          <p>
            Estado:
            ${personaje.status}
          </p>

          <p>
            Especie:
            ${personaje.species}
          </p>

        </div>

      `;

    }
  );

}


obtenerPersonajes();