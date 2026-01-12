const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-open-button");

menuOpenButton.addEventListener("click", () => {
  //Togglr mbile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close the mobile menu when a nav link is clicked (optional)
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
