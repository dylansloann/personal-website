// Change it up slider
if (!localStorage.getItem("woah-dark-checked")) localStorage.setItem("woah-dark-checked", "false");

const changeSlider = document.getElementById("woah-dark-switch");
changeSlider.checked = localStorage.getItem("woah-dark-checked") === "true" ? true : false;
if (changeSlider.checked) changeItUp();

function changeItUp() {
  const bgLightBlue = document.querySelectorAll(".bg-light-blue");
  const navbar = document.querySelector(".navbar");
  const pageSection = document.querySelectorAll(".page-section");
  const boysAndGirlsClubService = document.getElementById("boys-and-girls-club-service");
  const boysAndGirlsClubLogo = document.getElementById("boys-and-girls-club-logo");
  const footer = document.getElementById("footer");
  const footerInfoHeader = document.querySelectorAll(".footer-info-header");
  const footerCopyright = document.getElementById("copyright");
  const darkModeLabel = document.querySelector(".label");

  if (changeSlider.checked) {
    bgLightBlue.forEach((e) => e.classList.add("bg-dark-purple"));
    navbar.classList.add("navbar-dark");
    navbar.classList.remove("bg-white");
    navbar.classList.add("bg-purple");
    darkModeLabel.style.backgroundColor = "#18171D";
    pageSection.forEach((e) => (e.style.color = "lightgrey"));
    boysAndGirlsClubService.classList.add("bg-purple");
    boysAndGirlsClubLogo.src = "../assets/boys-and-girls-club-white.png";
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
    darkModeLabel.style.backgroundColor = "#fe4502";
    pageSection.forEach((e) => (e.style.color = "#202020"));
    boysAndGirlsClubService.classList.remove("bg-purple");
    boysAndGirlsClubLogo.src = "../assets/boys-and-girls-club-black.png";
    footer.classList.add("bg-white");
    footerCopyright.classList.add("bg-light");
    footerInfoHeader.forEach((e) => e.classList.remove("text-white"));
    localStorage.setItem("woah-dark-checked", "false");
  }
}
