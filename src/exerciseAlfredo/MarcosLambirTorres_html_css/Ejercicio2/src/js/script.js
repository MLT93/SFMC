// Variables
const headerTitle = document.getElementById('header-title');
const navWeb = document.getElementById('nav-web');
const navMobile = document.getElementById('nav-mobile');
const modalTrigger = document.getElementById('modal-trigger');
const modalContent = document.getElementById('modal-content');

// Manejar la visibilidad de headerTitle
const handleElementsVisibility = () => {
  if (window.innerWidth < 1080) {
    headerTitle.classList.add('toggle-visibility');
    navWeb.classList.add('toggle-visibility');
  } else {
    headerTitle.classList.remove('toggle-visibility');
    navWeb.classList.remove('toggle-visibility');
    navMobile.classList.add('toggle-visibility');
  }
};

// Ejecutar funciones al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  // Ejecutar la función inicialmente para tomar un estado inicial
  handleElementsVisibility();

  // Resize de la Web
  window.addEventListener('resize', handleElementsVisibility);

  // Modal
  modalContent.classList.add('toggle-visibility');
  modalTrigger.onclick = function () {
    modalContent.classList.toggle('toggle-visibility');
  };
});
