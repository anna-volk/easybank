// MOBILE NAVIGATION
const burgerBtn = document.querySelector("#btn-burger");
const navListMobile = document.querySelector("#nav-list");
const navOverlay = document.querySelector("#overlay");
const navLinks = document.querySelectorAll(".nav-link");
const body = document.querySelector("body");
const html = document.querySelector("html");

// OPEN & CLOSE MOBILE NAV - BURGER CLICK
burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  navListMobile.classList.toggle("active");
  navOverlay.classList.toggle("active");
  body.classList.toggle("locked");
  html.classList.toggle("locked");
});

// CLOSE NAV - LINK CLICKED
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    removeActiveClass();
  });
});

// CLOSE NAV - CLICK OUTSIDE OF NAV
navOverlay.addEventListener("click", (e) => {
  if (e.target == navOverlay) {
    removeActiveClass();
  }
});

// REMOVE ACTIVE CLASSES
function removeActiveClass() {
  burgerBtn.classList.remove("active");
  navListMobile.classList.remove("active");
  navOverlay.classList.remove("active");
  body.classList.remove("locked");
  html.classList.remove("locked");
}

// CHECK WEBP SUPPORT
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
