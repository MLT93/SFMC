const modalPhoneNav = document.getElementById('modalPhoneNav');
let isOpen = false;
modalPhoneNav.style.display = 'none';

const toggleOpen = () => {
  isOpen = !isOpen
  modalPhoneNav.style.display = isOpen ? 'block' : 'none';
};

modalPhoneNav.onclick = function () {
  toggleOpen();
};
