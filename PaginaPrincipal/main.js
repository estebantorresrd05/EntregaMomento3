const API_URL = "http://localhost:8080/api/v1/estudiantes";

const tabla = document.getElementById("tabla-estudiantes");
const formulario = document.getElementById("formulario");

let estudianteEditando = null;

async function listarEstudiantes() {

    const respuesta = await fetch(API_URL);
    const estudiantes = await respuesta.json();

    tabla.innerHTML = "";

    estudiantes.forEach(estudiante => {

        tabla.innerHTML += `
            <tr>
                <td>${estudiante.id}</td>
                <td>${estudiante.nombre}</td>
                <td>${estudiante.edad}</td>
                <td>${estudiante.grado}</td>
                <td>${estudiante.estado}</td>

                <td>
                    <button onclick="editarEstudiante(${estudiante.id})">
                        Editar
                    </button>

                    <button onclick="eliminarEstudiante(${estudiante.id})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `;
    });
}

async function guardarEstudiante(estudiante) {

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(estudiante)
    });

    listarEstudiantes();
}

async function actualizarEstudiante(id, estudiante) {

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(estudiante)
    });

    listarEstudiantes();
}

async function eliminarEstudiante(id) {

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    listarEstudiantes();
}

async function editarEstudiante(id) {

    const respuesta = await fetch(`${API_URL}/${id}`);
    const estudiante = await respuesta.json();

    document.getElementById("nombre").value =
        estudiante.nombre;

    document.getElementById("edad").value =
        estudiante.edad;

    document.getElementById("grado").value =
        estudiante.grado;

    document.getElementById("estado").value =
        estudiante.estado;

    estudianteEditando = id;
}

formulario.addEventListener("submit", async function (e) {

    e.preventDefault();

    const estudiante = {

        nombre: document.getElementById("nombre").value,

        edad: document.getElementById("edad").value,

        grado: document.getElementById("grado").value,

        estado: document.getElementById("estado").value
    };

    if (estudianteEditando) {

        await actualizarEstudiante(
            estudianteEditando,
            estudiante
        );

        estudianteEditando = null;

    } else {

        await guardarEstudiante(estudiante);
    }

    formulario.reset();
});

listarEstudiantes();