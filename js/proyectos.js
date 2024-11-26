document.addEventListener('DOMContentLoaded', () => {
  // Funcionalidad para seleccionar proyectos
  const categories = document.querySelectorAll('.category');

  categories.forEach((category) => {
    const projects = category.querySelectorAll('.project');

    projects.forEach((project) => {
      project.addEventListener('click', (event) => {
        // Prevenir que el enlace se abra inmediatamente
        event.preventDefault();

        const title = project.querySelector('h3').innerText;
        const description = project.querySelector('p').innerText;
        const image = project.querySelector('img').src;
        const link = project.querySelector('a').href;

        Swal.fire({
          title: title,
          text: description,
          imageUrl: image,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: title,
          confirmButtonText: 'Visitar Proyecto',
          confirmButtonColor: 'orangered',
          showCloseButton: true,
          showCancelButton: true,
          cancelButtonText: 'Cerrar',
          background: '#f9f9f9',
        }).then((result) => {
          if (result.isConfirmed) {
            // Abrir el enlace solo si se confirma
            window.open(link, '_blank');
          }
        });
      });
    });
  });

  // Filtrado y desplazamiento
  const filterButtons = document.querySelectorAll('.filter-button');
  const categorySections = document.querySelectorAll('.category');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      // Actualizar botones activos
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');

      // Mostrar/Ocultar categorías
      categorySections.forEach((section) => {
        if (filter === 'all' || section.id === filter) {
          section.style.display = 'block';
          if (section.id === filter) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          section.style.display = 'none';
        }
      });

      // Si es "todos", desplazarse al inicio
      if (filter === 'all') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Botón para volver al inicio
  const scrollButton = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });

  scrollButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Barra de progreso en el header
  const progressBar = document.getElementById('progress-bar');
  const timeline = document.querySelector('.timeline');

  window.addEventListener('scroll', () => {
    const timelineHeight = timeline.offsetHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = Math.min((scrollTop / timelineHeight) * 100, 100);
    progressBar.style.width = `${progress}%`;
  });

  // Actualización de filtros según la sección visible
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.category');
    let currentSection = '';

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.id;
      }
    });

    // filterButtons.forEach((button) => {
    //   button.classList.remove('active');
    //   if (button.dataset.filter === currentSection) {
    //     button.classList.add('active');
    //   }
    });
  });

