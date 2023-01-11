(() => {
    const refs = {
      /////////////////////////////////////////////////////////////// Menu
      openModalBtn: document.querySelector("[modal-menu-open]"),
      closeModalBtn: document.querySelector("[modal-menu-close]"),
      modal: document.querySelector("[modal-menu]"),

      /////////////////////////////////////////////////////////////// Map
      openModalBtnmap: document.querySelector("[modal-map-open]"),
      closeModalBtnmap: document.querySelector("[modal-map-close]"),
      modalmap: document.querySelector("[modal-map]"),

      /////////////////////////////////////////////////////////////// Form
      openformModalBtn: document.querySelector("[modal-form-open]"),
      closeformModalBtn: document.querySelector("[modal-form-close]"),
      modalform: document.querySelector("[modal-form]"),
    };
    /////////////////////////////////////////////////////////////// Menu
    refs.openModalBtn.addEventListener("click", toggleModalMenu);
    refs.closeModalBtn.addEventListener("click", toggleModalMenu);

    ////////////////////////////////////////////////////////////// Map
    refs.openModalBtnmap.addEventListener("click", toggleModalMap);
    refs.closeModalBtnmap.addEventListener("click", toggleModalMap);

    ////////////////////////////////////////////////////////////// Form
    refs.openformModalBtn.addEventListener("click", toggleModalForm);
    refs.closeformModalBtn.addEventListener("click", toggleModalForm);



    /////////////////////////////////////////////////////////////// Menu
    function toggleModalMenu() {
      refs.modal.classList.toggle("modal--menu-is-hidden");
    }

    ////////////////////////////////////////////////////////////// Map
    function toggleModalMap() {
      refs.modalmap.classList.toggle("modal--map-is-hidden");
    }

    ////////////////////////////////////////////////////////////// Form
    function toggleModalForm() {
      refs.modalform.classList.toggle("modal--form-is-hidden");
    }
})();
