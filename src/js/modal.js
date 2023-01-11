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
  
(() => {
    const refs = {
      openModalBtnform: document.querySelector("[data-modal-openform]"),
      closeModalBtnform: document.querySelector("[data-modal-closeform]"),
      modalform: document.querySelector("[data-modalform]"),
    };
  
    refs.openModalBtnform.addEventListener("click", toggleModal);
    refs.closeModalBtnform.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modalform.classList.toggle("is-hiddenform");
    }
  })();
  