// script.js
const modal = document.getElementById('myModal');
const modalImage = document.getElementById('modalImage');
const originalImage = document.getElementById('myImage');
const closeButton = document.querySelector('.close');

originalImage.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
  modalImage.src = originalImage.src;
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target === modal) {
    closeModal();
  }
}
