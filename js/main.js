// ocultamos el div y cargamos la pagina portafolio.html

// Ocultar el Inicio - Ir al portafolio
setTimeout(function () {
  document.getElementById("miinicio").style.display = "none";
  // Redirection al portafolio luego de ocultar el Inicio
  window.location.href = "portafolio.html";
}, 4500); // 1000 mili segundos = 1 segundos

// función Alerta de Impresión CV
const $btnTituloYTexto = document.querySelector("#btnTituloYTexto");

$btnTituloYTexto.addEventListener("click", () => {
  Swal.fire({
    title: "Hola, ¡Juntos podemos hacer la diferencia!",
    text: "Puedes guardar el documento en la nube y acceder a él desde cualquier lugar, sin necesidad de imprimirlo. Utiliza el icono para solo leerlo o imprimir el documento.",
    confirmButtonText: "Proceder",
    confirmButtonColor: "#202020",
    cancelButtonColor: "#d33",
    footer: "Un pequeño gesto, un gran cambio.",
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
    "top:" + (e.pageY - -15) + "px; Left:" + (e.pageX - 80) + "px;"
  );
});

// Retirar imagen de presentación para mostrar mis proyectos

function mostrarProyectos() {
  let verProyectos = document.querySelector(".hidden");
  if (verProyectos) {
    verProyectos.classList.remove("hidden");
    
  }

  document.getElementById("imagen-presentacion-proyectos").style.display = "none";
  document.getElementById("boton-presentacion-proyectos").style.display = "none";
}