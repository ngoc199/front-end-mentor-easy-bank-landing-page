let navbarToggler = document.querySelector(".navbar-toggler")
navbarToggler.addEventListener("click", () => {
  let togglerTargetId = navbarToggler.getAttribute("aria-target")
  let togglerTarget = document.querySelector(`#${togglerTargetId}`)

  //   Toggle the navbar
  togglerTarget.classList.toggle("active")
  navbarToggler.classList.toggle("active")
})
