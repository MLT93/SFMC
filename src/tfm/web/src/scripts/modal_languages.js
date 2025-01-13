// Simulación de las opciones
const options = [
  { countryTag: 'ESP', label: 'ES', prefix: '34', imgURL: 'https://flagcdn.com/h20/es.jpg' },
  { countryTag: 'ENG', label: 'EN', prefix: '44', imgURL: 'https://flagcdn.com/h20/gb.jpg' },
  /* { countryTag: 'ITA', label: 'IT', prefix: '39', imgURL: 'https://flagcdn.com/h20/it.jpg' }, */
  {
    countryTag: 'CAT',
    label: 'CA',
    prefix: '34',
    imgURL:
      'https://image.e.bmind.es/lib/fe4011717564057c741674/m/1/0558ecfd-2a25-42f0-9702-8de0e889d4a2.png',
  },
];

// Elementos del DOM
const modalLanguages = document.getElementById('modalLanguages');
const modalLabel = document.getElementById('modalLabel');
const modalSelect = document.getElementById('modalSelect');
const selectedImage = document.getElementById('selectedImage');
const modalOptions = document.getElementById('modalOptions');

// Estados
let selectedValue = options[0]; // Arrancamos de la primera posición del array
let isOpen = false;

// Funciones
function handleOptionSelect(option) {
  selectedValue = option;
  updateSelectedImage();
  updateModalLabel();
  closeDropdown();
}

function toggleDropdown() {
  isOpen = !isOpen;
  modalOptions.style.display = isOpen ? 'block' : 'none';
  modalSelect.setAttribute('aria-expanded', isOpen);
}

function closeDropdown() {
  isOpen = false;
  modalOptions.style.display = 'none';
  modalSelect.setAttribute('aria-expanded', false);
}

function updateSelectedImage() {
  selectedImage.src = selectedValue.imgURL;
  selectedImage.alt = selectedValue.countryTag;
}

function updateModalLabel() {
  modalLabel.innerHTML = `${selectedValue.label}`;
}

function renderOptions() {
  modalOptions.innerHTML = '';
  options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'modal-languages__option';
    optionElement.innerHTML = `
            <img class="modal-languages__optionImage" src="${option.imgURL}" alt="${option.countryTag}">
            <span>${option.label}</span>
        `;
    optionElement.addEventListener('click', () => handleOptionSelect(option));
    modalOptions.appendChild(optionElement);
  });
}

// Event Listeners
modalSelect.addEventListener('click', toggleDropdown);

document.addEventListener('mousedown', (event) => {
  if (!modalLanguages.contains(event.target)) {
    closeDropdown();
  }
});

// Inicialización
updateSelectedImage();
updateModalLabel();
renderOptions();
