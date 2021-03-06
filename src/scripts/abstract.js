// Abstract Modal
const abstractModal = document.querySelector('.abstract-modal');
const abstractModalButton = document.getElementById('js--abstract-button');
const abstractModalClose = document.querySelector('.abstract-modal__close');
const abstractModalOverlay = document.querySelector('.abstract-modal__overlay');


function toggleAbstractClasses() {
  abstractModal.classList.toggle('abstract-modal--open');
  document.body.classList.toggle('body--no-scroll');
}

if (abstractModalButton && abstractModalClose) {
  window.addEventListener('keydown', e => {
    if (e.keyCode === 27 && abstractModal.classList.contains('abstract-modal--open')) {
      toggleAbstractClasses();
    }
  });

  abstractModalButton.onclick = () => toggleAbstractClasses();
  abstractModalClose.onclick = () => toggleAbstractClasses();
  abstractModalOverlay.onclick = () => toggleAbstractClasses();
}
