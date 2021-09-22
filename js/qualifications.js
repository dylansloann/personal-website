// Change it up slider
if (!localStorage.getItem("woah-dark-checked")) localStorage.setItem("woah-dark-checked", "false");

const changeSlider = document.getElementById("woah-dark-switch");
changeSlider.checked = localStorage.getItem("woah-dark-checked") === "true" ? true : false;
if (changeSlider.checked) changeItUp();

function changeItUp() {
  const bgLightBlue = document.querySelectorAll(".bg-light-blue");
  const navbar = document.querySelector(".navbar");
  const resumeSection = document.getElementById("resume-section");
  const resume = document.getElementById("resume");
  const pageSection = document.querySelectorAll(".page-section");
  const pTags = document.querySelectorAll("p");
  const h4Tags = document.querySelectorAll("h4");
  const planetClipart = document.getElementById("planet-clipart");
  const technicalSkills = document.getElementById("technical-skills");
  const footer = document.getElementById("footer");
  const footerInfoHeader = document.querySelectorAll(".footer-info-header");
  const footerCopyright = document.getElementById("copyright");

  if (changeSlider.checked) {
    bgLightBlue.forEach((e) => e.classList.add("bg-dark-purple"));
    navbar.classList.add("navbar-dark");
    navbar.classList.remove("bg-white");
    navbar.classList.add("bg-purple");
    pageSection.forEach((e) => (e.style.color = "lightgray"));
    pTags.forEach((e) => (e.style.color = "lightgray"));
    h4Tags.forEach((e) => (e.style.color = "lightgray"));
    resumeSection.style.color = "white";
    resume.style.border = "4px white dotted";
    technicalSkills.classList.add("bg-purple");
    planetClipart.src = "../assets/planet-red.png";
    footer.classList.remove("bg-white");
    footer.classList.add("bg-alt-purple");
    footerCopyright.classList.remove("bg-light");
    footerCopyright.classList.add("bg-purple");
    footerInfoHeader.forEach((e) => e.classList.add("text-white"));
    localStorage.setItem("woah-dark-checked", "true");
  } else {
    bgLightBlue.forEach((e) => e.classList.remove("bg-dark-purple"));
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("bg-white");
    pageSection.forEach((e) => (e.style.color = "#202020"));
    pTags.forEach((e) => (e.style.color = "#202020"));
    h4Tags.forEach((e) => (e.style.color = "#202020"));
    resumeSection.style.color = "#202020";
    resume.style.border = "4px #202020 dotted";
    technicalSkills.classList.remove("bg-purple");
    planetClipart.src = "../assets/planet.gif";
    footer.classList.add("bg-white");
    footerCopyright.classList.add("bg-light");
    footerInfoHeader.forEach((e) => e.classList.remove("text-white"));
    localStorage.setItem("woah-dark-checked", "false");
  }
}
