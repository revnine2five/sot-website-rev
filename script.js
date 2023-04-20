var modalContainerMenu = document.querySelector(".modal-container-menu");
var modalMenu = document.querySelector(".modal-menu");
var iconHamburger = document.querySelector(".icon1");
//THIS IS HAMBURGER MODAL
if (iconHamburger) {
  iconHamburger.addEventListener("click", function () {
    if (modalMenu.classList.contains("check")) {
      modalContainerMenu.style.visibility = "hidden";
      modalContainerMenu.style.opacity = 0;
      modalMenu.style.visibility = "hidden";
      modalMenu.classList.remove("check");
    } else {
      modalContainerMenu.style.visibility = "visible";
      modalContainerMenu.style.opacity = 1;
      modalMenu.style.visibility = "visible";
      modalMenu.classList.add("check");
    }
  });

  modalContainerMenu.addEventListener("click", function (e) {
    if (e.target !== this) {
      return;
    }
    modalContainerMenu.style.visibility = "hidden";
    modalContainerMenu.style.opacity = 0;
    modalMenu.style.visibility = "hidden";
    modalMenu.classList.remove("check");
  });
}

// this is the part of image slider javascript, and the first if is needed due to prevent error when using one js file
var slides = document.querySelectorAll(".slide");
if (slides) {
  var repeat = function () {
    let active = document.getElementsByClassName("active");
    let i = 1;

    var repeater = function () {
      setTimeout(function () {
        [...active].forEach(function (activeSlide) {
          activeSlide.classList.remove("active");
        });
        slides[i].classList.add("active");
        i++;

        if (slides.length === i) {
          i = 0;
        }
        if (i >= slides.length) {
          return;
        }
        repeater();
      }, 5000);
    };
    repeater();
  };
  repeat();
}
// var activation = document.querySelector(".activation");
// var modalContainer = document.querySelector(".modal-container");

// activation.addEventListener("click", function () {
//   modalContainer.style.visibility = "visible";
// });

var shopContainers = document.querySelectorAll(".shop-container-menu");
var modalContainer = document.querySelector(".modal-container");
var modalParents = document.querySelectorAll(".modal-parent");

if (shopContainers && modalContainer) {
  shopContainers.forEach(function (shopContainer, index) {
    shopContainer.addEventListener("click", function () {
      modalContainer.style.visibility = "visible";
      modalContainer.style.opacity = 1;
      modalParents[index].style.visibility = "visible";
    });
  });

  modalContainer.addEventListener("click", function (e) {
    if (e.target !== this) {
      return;
    }
    modalContainer.style.visibility = "hidden";
    modalContainer.style.opacity = 0;
    modalParents.forEach(function (modalParent) {
      modalParent.style.visibility = "hidden";
    });
  });
}

var bridgeContainers = document.querySelectorAll(".bridge-child-flex");

if (bridgeContainers) {
  bridgeContainers.forEach(function (bridgeContainer, index) {
    bridgeContainer.dataset.aos = "fade-right";
    bridgeContainer.dataset.aosDelay = index * 300;
  });
}

// var faqParas = document.querySelectorAll(".faq-paragraph");
// var paraChild1 = document.querySelector(".faq-container-child-end");
// var paraChilds2 = document.querySelectorAll(".faq-container-child-start");
// if (paraChild1 && paraChilds2) {
//   paraChilds2.forEach(function (paraChild2, index) {
//     paraChild2.dataset.aos = "fade-up";
//     paraChild2.dataset.aosDelay = index * 1000;
//   });

//   paraChild1.dataset.aos = "fade-up";
//   paraChild1.dataset.aosDelay = 1500;
// }
AOS.init();
