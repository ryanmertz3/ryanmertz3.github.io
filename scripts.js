window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector(".header-content").classList.add("scrolled");
    document.querySelector(".skills").classList.add("scrolled");
    document.querySelector(".degrees").classList.add("scrolled");
  } else {
    document.querySelector(".header-content").classList.remove("scrolled");
    document.querySelector(".skills").classList.remove("scrolled");
    document.querySelector(".degrees").classList.remove("scrolled");
  }
});
