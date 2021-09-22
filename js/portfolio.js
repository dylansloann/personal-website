// Change it up slider
if (!localStorage.getItem("woah-dark-checked")) localStorage.setItem("woah-dark-checked", "false");

const changeSlider = document.getElementById("woah-dark-switch");
changeSlider.checked = localStorage.getItem("woah-dark-checked") === "true" ? true : false;
if (changeSlider.checked) changeItUp();

function changeItUp() {
  // all components changing
  const bgLightBlue = document.querySelectorAll(".bg-light-blue");
  const navbar = document.querySelector(".navbar");
  const pageSection = document.querySelectorAll(".page-section");
  const dynataProject = document.getElementById("dynata-project");
  const dynataLogo = document.getElementById("dynata-project-logo");
  const gestureLogo = document.getElementById("gesture-project-logo");
  const orionLogo = document.getElementById("orion-project-logo");
  const footer = document.getElementById("footer");
  const footerInfoHeader = document.querySelectorAll(".footer-info-header");
  const footerCopyright = document.getElementById("copyright");
  const footerMutedText = document.querySelectorAll(".text-muted");
  const carousel = document.querySelectorAll(".carousel");
  const darkModeLabel = document.querySelector(".label");

  if (changeSlider.checked) {
    bgLightBlue.forEach((e) => e.classList.add("bg-dark-purple"));
    navbar.classList.add("navbar-dark");
    navbar.classList.remove("bg-white");
    navbar.classList.add("bg-purple");
    darkModeLabel.style.backgroundColor = "#18171D";
    gestureLogo.src = "../assets/gesture-logo-white.png";
    orionLogo.src = "../assets/orion-logo-white.png";
    dynataLogo.src = "../assets/dynata-logo-white.png";
    dynataProject.classList.add("bg-purple");
    pageSection.forEach((e) => (e.style.color = "lightgrey"));
    carousel.forEach((e) => (e.style.border = "3px lightgrey double"));
    footer.classList.remove("bg-light");
    footer.classList.add("bg-alt-purple");
    footerCopyright.classList.remove("bg-white");
    footerCopyright.classList.add("bg-purple");
    footerInfoHeader.forEach((e) => e.classList.add("text-white"));
    localStorage.setItem("woah-dark-checked", "true");
  } else {
    bgLightBlue.forEach((e) => e.classList.remove("bg-dark-purple"));
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("bg-white");
    darkModeLabel.style.backgroundColor = "#fe4502";
    gestureLogo.src = "../assets/gesture-logo-black.png";
    orionLogo.src = "../assets/orion-logo-black.png";
    dynataLogo.src = "../assets/dynata-logo-black.png";
    pageSection.forEach((e) => (e.style.color = "#202020"));
    carousel.forEach((e) => (e.style.border = "3px #202020 double"));
    dynataProject.classList.remove("bg-purple");
    footer.classList.add("bg-light");
    footerCopyright.classList.add("bg-white");
    footerInfoHeader.forEach((e) => e.classList.remove("text-white"));
    footerInfoHeader.forEach((e) => e.classList.remove("text-white"));
    footerMutedText.forEach((e) => e.classList.add("text-muted"));
    localStorage.setItem("woah-dark-checked", "false");
  }
}
