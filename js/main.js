// ocultamos el div y cargamos la pagina portafolio.html

// Ocultar el Inicio - Ir al portafolio
setTimeout(function () {
  document.getElementById("miinicio").style.display = "none";
  // Redirection al portafolio luego de ocultar el Inicio
  window.location.href = "portafolio.html";
}, 4500); // 1000 mili segundos = 1 segundos

// función Alerta de Gestión de CV (Lectura / Descarga / Impresión)
const $btnGestionCV = document.querySelector("#btnTituloYTexto");

$btnGestionCV.addEventListener("click", () => {
  Swal.fire({
    title: "<strong>¿Cómo deseas gestionar el CV?</strong>",
    icon: "info",
    html: `
      <p style="margin-bottom: 15px;">
        Antes de imprimir, considera que puedes <b>ahorrar papel</b> visualizándolo digitalmente o guardándolo en tus dispositivos.
      </p>
      <div style="font-size: 2rem; margin: 10px 0;">🖨️ 📄 ☁️</div>
    `,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Visualizar Online",
    denyButtonText: "Descargar / Imprimir",
    cancelButtonText: "Cerrar",
    confirmButtonColor: "#202020",
    denyButtonColor: "#4a4a4a",
    cancelButtonColor: "#d33",
    footer: "<em>Un pequeño gesto, un gran cambio por el planeta.</em>",
  }).then((result) => {
    /* Lógica de decisión */
    if (result.isConfirmed) {
      // Opción: Solo leer (ejemplo: abrir PDF en pestaña nueva)
      window.open(
        "doc/Jairo_Cardenas_CV_Desarrollador_Full_Stack_3-2026.pdf",
        "_blank",
      );
    } else if (result.isDenied) {
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = "doc/Jairo_Cardenas_CV_Desarrollador_Full_Stack_3-2026.pdf"; // Tu archivo real
      document.body.appendChild(iframe);

      iframe.onload = function () {
        iframe.contentWindow.print();
      };
    }
  });
});


// funcion de alerta antes de entrar a mis proyectos
document.getElementById('btn-proyectos').addEventListener('click', function(e) {
    e.preventDefault(); // Detiene la navegación inmediata
    const url = this.getAttribute('href');

    Swal.fire({
        title: '¿Listo para el recorrido?',
        text: 'Estás por ingresar a mi sección de proyectos destacados. ¡Explora y descubre lo que he creado!',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Ver trabajos!',
        cancelButtonText: 'Ahora no',
        background: '#f8f9fa',
        backdrop: `rgba(0,0,123,0.4)`
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = url; // Redirige solo si el usuario confirma
        }
    });
});



// Cargar la section formacionautodidacta
function cargarDiv3() {
  var div = (document.getElementById("formacionautodidacta").style.display =
    "block");
}

// Cargar la section formacionacademicaformal
function cargarDiv4() {
  var div = (document.getElementById("formacionacademicaformal").style.display =
    "block");
}

// Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top:" + (e.pageY - -15) + "px; Left:" + (e.pageX - 80) + "px;",
  );
});

// Retirar imagen de presentación para mostrar mis proyectos

function mostrarProyectos() {
  let verProyectos = document.querySelector(".hidden");
  if (verProyectos) {
    verProyectos.classList.remove("hidden");
  }

  document.getElementById("imagen-presentacion-proyectos").style.display =
    "none";
  document.getElementById("boton-presentacion-proyectos").style.display =
    "none";
}
