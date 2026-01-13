const tabsOpenButton = document.querySelector("#tabs-open-button");
const tabsCloseButton = document.querySelector("#tabs-open-button");

tabsOpenButton.addEventListener("click", () => {
  //Togglr mbile tabs visibility
  document.body.classList.toggle("show-mobile-tabs");
});

// Close the mobile tabs when a nav link is clicked (optional)
tabsCloseButton.addEventListener("click", () => tabsOpenButton.click());

