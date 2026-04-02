// ocultamos el div y cargamos la pagina portafolio.html

// Ocultar el Inicio - Ir al portafolio
setTimeout(function () {
  document.getElementById("miinicio").style.display = "none";
  // Redirection al portafolio luego de ocultar el Inicio
  window.location.href = "portafolio.html";
}, 4500); // 1000 mili segundos = 1 segundos

// Función Alerta de Gestión de CV - VERSIÓN MULTIIDIOMA
document.addEventListener("DOMContentLoaded", function () {
  const cvLinks = document.querySelectorAll(".cv-link");

  cvLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const idioma = this.dataset.idioma;
      const cvFiles = {
        es: "doc/Jairo_Cardenas_CV__es426.pdf",
        en: "doc/Jairo_Cardenas_CV_en426.pdf",
      };

      const cvUrl = cvFiles[idioma];

      // Textos multilingües
      const textos = {
        es: {
          title: `<strong>¿Cómo deseas gestionar el CV <span style="color: #007bff;">Español</span>?</strong>`,
          description: `
                        <p style="margin-bottom: 15px;">
                            Antes de imprimir, considera que puedes <b>ahorrar papel</b> 
                            visualizándolo digitalmente o guardándolo en tus dispositivos.
                        </p>
                    `,
          emoji: "👁️⬇️🖨️",
          confirmBtn: "👁️ Visualizar Online",
          denyBtn: "⬇️ Descargar / Imprimir",
          cancelBtn: "❌ Cerrar",
          footer:
            "CV Español - Un pequeño gesto, un gran cambio por el planeta.",
        },
        en: {
          title: `<strong>How do you want to manage the <span style="color: #007bff;">English</span> CV?</strong>`,
          description: `
                        <p style="margin-bottom: 15px;">
                            Before printing, consider <b>saving paper</b> by viewing it digitally 
                            or saving it to your devices.
                        </p>
                    `,
          emoji: "👁️⬇️🖨️",
          confirmBtn: "👁️ View Online",
          denyBtn: "⬇️ Download / Print",
          cancelBtn: "❌ Close",
          footer: "English CV - A small gesture, a big change for the planet.",
        },
      };

      const textoActual = textos[idioma];

      // Mostrar SweetAlert multilingüe
      Swal.fire({
        title: textoActual.title,
        icon: "info",
        html: `
                    ${textoActual.description}
                    <div style="font-size: 2.5rem; margin: 20px 0; text-align: center;">
                        ${textoActual.emoji}
                    </div>
                `,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: textoActual.confirmBtn,
        denyButtonText: textoActual.denyBtn,
        cancelButtonText: textoActual.cancelBtn,
        confirmButtonColor: "#202020",
        denyButtonColor: "#4a4a4a",
        cancelButtonColor: "#d33",
        footer: `<em>${textoActual.footer}</em>`,
      }).then((result) => {
        if (result.isConfirmed) {
          // Visualizar online
          window.open(cvUrl, "_blank", "noopener,noreferrer");
        } else if (result.isDenied) {
          // Descargar / Imprimir
          const iframe = document.createElement("iframe");
          iframe.style.cssText =
            "display: none; width: 0; height: 0; border: none;";
          iframe.src = cvUrl;
          document.body.appendChild(iframe);

          iframe.onload = function () {
            try {
              iframe.contentWindow.print();
            } catch (e) {
              console.log("Print failed, opening for download");
              window.open(cvUrl, "_blank");
            }

            // Limpieza
            setTimeout(() => {
              if (document.body.contains(iframe)) {
                document.body.removeChild(iframe);
              }
            }, 2000);
          };

          iframe.onerror = function () {
            const errorMsg =
              idioma === "es"
                ? "No se pudo cargar el CV. Verifica la conexión."
                : "Could not load CV. Check your connection.";

            Swal.fire({
              icon: "error",
              title: idioma === "es" ? "Oops..." : "Oops...",
              text: errorMsg,
            });
            document.body.removeChild(iframe);
          };
        }
      });
    });
  });
});

// funcion de alerta antes de entrar a mis proyectos
document
  .getElementById("btn-proyectos")
  .addEventListener("click", function (e) {
    e.preventDefault(); // Detiene la navegación inmediata
    const url = this.getAttribute("href");

    Swal.fire({
      title: "¿Listo para el recorrido?",
      text: "Estás por ingresar a mi sección de proyectos destacados. ¡Explora y descubre lo que he creado!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Ver trabajos!",
      cancelButtonText: "Ahora no",
      background: "#f8f9fa",
      backdrop: `rgba(0,0,123,0.4)`,
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
  // Only attempt to set attributes if the cursor element was actually found
  if (cursor) {
    cursor.setAttribute(
      "style",
      "top:" + (e.pageY + 15) + "px; left:" + (e.pageX - 80) + "px;",
    );
  }
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
