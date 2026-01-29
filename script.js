const tabsOpenButton = document.querySelector("#tabs-open-button");
const tabsCloseButton = document.querySelector("#tabs-close-button");
const navlinks = document.querySelectorAll(".nav-tabs .nav-link");


tabsOpenButton.addEventListener("click", () => {
  //Toggle mobile tabs visibility
  document.body.classList.toggle("show-mobile-tabs");
});

// Close the mobile tabs when a nav link is clicked (optional)
tabsCloseButton.addEventListener("click", () => tabsOpenButton.click());
// Close the mobile tabs when a nav link is clicked (optional)
navlinks.forEach(link => {
  link.addEventListener("click", () => tabsOpenButton.click());
});
