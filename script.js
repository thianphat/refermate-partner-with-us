"use strict";

// For the search bar placeholder length.

const inputs = document.getElementsByClassName("search-input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].setAttribute("size", inputs[i].getAttribute("placeholder").length);
}

/* Javascript only */
function dropdownFunction(element) {
  let dropdowns = document.getElementsByClassName("dropdown-content");
  // let btnArrow = document.getElementsByClassName(`icon--dropdown`);

  // element.nextSibling is the carriage return… The dropdown menu is the next.
  let thisDropdown = element.nextSibling.nextSibling;
  let thisArrow = element.firstChild.nextSibling;

  if (!thisDropdown.classList.contains("show")) {
    // Added to hide dropdown if clicking on the one already open
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      dropdowns[i].classList.remove("show");
    }
  }

  // Toggle the dropdown on the element clicked
  thisDropdown.classList.toggle("show");
  thisArrow.classList.toggle(`rotate180`);
}

/* W3Schools function to close the dropdown when clicked outside. */
window.onclick = function (event) {
  if (
    !event.target.matches(".dropbtn") &&
    !event.target.matches(".checkbox--input")
  ) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    // to rotate the arrows
    let arrowStatus = document.querySelectorAll(".icon--dropdown");
    arrowStatus.forEach((classitem) => {
      // ✅ Remove class from each element
      classitem.classList.remove("rotate180");
    });
    // to close the dropdown
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
//
// window.onmousedown = function (event) {
//   let el = event.target;
//   if (
//     el.tagName.toLowerCase() === "option" &&
//     el.tagName.toLowerCase() === "checkbox"
//   ) {
//     event.preventDefault();
//
//     // toggle selection
//     if (el.hasAttribute("selected")) el.removeAttribute("selected");
//     else el.setAttribute("selected", "");
//
//     // hack to correct buggy behavior
//     let select = el.parentNode.cloneNode(true);
//     el.parentNode.parentNode.replaceChild(select, el.parentNode);
//   }
// };

// ----------------------- MODAL -----------------------------------

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);
const bottomBar = document.querySelector(`.hero-cta`);

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
  // bottomBar.classList.remove(`hidden`);
  document.body.style.overflow = "scroll";

  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  // window.scrollTo(0, parseInt(scrollY || "0") * -1);
};

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
  // bottomBar.classList.add(`hidden`);
  document.body.style.overflow = "hidden";
  document.body.style.height = "100vh";
  document.body.style.position = "fixed";
  // document.body.style.top = `-${window.scrollY}px`;
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
}

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (event) {
  if (event.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }
});

window.addEventListener("resize", () => {
  measure.style.setProperty("--height", `${window.innerHeight}px`);
});

// ----------------------- Change Color On Tags -----------------------------------

window.onload = function a() {
  document.querySelectorAll(".checkbox").forEach(function (e) {
    if (e.children[0].checked === true) e.style.backgroundColor = "teal";
    else e.style.backgroundColor = "";
    e.onchange = a;
  });
};

console.log(document.querySelectorAll(".checkbox"));
