(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("modal--is-hidden");
    }
})();
  
(() => {
    const refs = {
      openModalBtnmap: document.querySelector("[data-modal-openmap]"),
      closeModalBtnmap: document.querySelector("[data-modal-closemap]"),
      modalmap: document.querySelector("[data-modalmap]"),
    };
  
    refs.openModalBtnmap.addEventListener("click", toggleModal);
    refs.closeModalBtnmap.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modalmap.classList.toggle("is-hiddenmap");
    }
  })();
  