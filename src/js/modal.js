(() => {
    const refs = {
      openModalBtn: document.querySelector("[modal-menu-open]"),
      closeModalBtn: document.querySelector("[modal-menu-close]"),
      modal: document.querySelector("[modal-menu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModalMenu);
    refs.closeModalBtn.addEventListener("click", toggleModalMenu);
  
    function toggleModalMenu() {
      refs.modal.classList.toggle("modal--menu-is-hidden");
     
    }
})();
  
(() => {
    const refs = {
      openModalBtnmap: document.querySelector("[modal-map-open]"),
      closeModalBtnmap: document.querySelector("[modal-map-close]"),
      modalmap: document.querySelector("[modal-map]"),
    };
  
    refs.openModalBtnmap.addEventListener("click", toggleModalMap);
    refs.closeModalBtnmap.addEventListener("click", toggleModalMap);
  
    function toggleModalMap() {
      refs.modalmap.classList.toggle("modal--map-is-hidden");
    }
})();

(() => {
  const refs = {
    openformModalBtn: document.querySelector("[modal-form-open]"),
    closeformModalBtn: document.querySelector("[modal-form-close]"),
    modalform: document.querySelector("[modal-form]"),
  };

  refs.openformModalBtn.addEventListener("click", toggleModalForm);
  refs.closeformModalBtn.addEventListener("click", toggleModalForm);

  function toggleModalForm() {
    refs.modalform.classList.toggle("modal--form-is-hidden");
  }
})();