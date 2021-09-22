// Change it up slider
if (!localStorage.getItem("woah-dark-checked")) localStorage.setItem("woah-dark-checked", "false");

const changeSlider = document.getElementById("woah-dark-switch");
changeSlider.checked = localStorage.getItem("woah-dark-checked") === "true" ? true : false;
if (changeSlider.checked) changeItUp();

function changeItUp() {
  const navAndCTABackground = document.querySelector(".nav-and-cta");
  const landingPageCTA = document.getElementById("landing-page-cta");
  const ctaName = document.querySelector(".cta-name");
  const landingPageOverview = document.getElementById("landing-page-overview");
  const overviewHeadshot = document.getElementById("overview-headshot");
  const footer = document.getElementById("footer");
  const footerInfoHeader = document.querySelectorAll(".footer-info-header");
  const footerCopyright = document.getElementById("copyright");

  if (changeSlider.checked) {
    navAndCTABackground.classList.add("woah-dark-background");
    landingPageCTA.style.flex = 1;
    ctaName.style.textShadow = "0.03em 0.03em 0 #06001E";
    landingPageOverview.classList.remove("bg-light");
    landingPageOverview.style.color = "lightgrey";
    overviewHeadshot.style.border = "3px lightgrey double";
    footer.classList.remove("bg-white");
    footer.classList.add("bg-alt-purple");
    footerCopyright.classList.remove("bg-light");
    footerCopyright.classList.add("bg-purple");
    footerInfoHeader.forEach((e) => e.classList.add("text-white"));
    localStorage.setItem("woah-dark-checked", "true");
  } else {
    navAndCTABackground.classList.remove("woah-dark-background");
    landingPageCTA.style.flex = 0.7;
    ctaName.style.textShadow = "0.03em 0.03em 0 #0c2936";
    landingPageOverview.classList.add("bg-light");
    landingPageOverview.style.color = "#202020";
    overviewHeadshot.style.border = " 3px #202020 double";
    footer.classList.add("bg-white");
    footerCopyright.classList.add("bg-light");
    footerInfoHeader.forEach((e) => e.classList.remove("text-white"));
    localStorage.setItem("woah-dark-checked", "false");
  }
}
