
const openHamburger = document.querySelector(".hamburger-menu")

openHamburger.addEventListener("click", open)

function open () {
    const wrapper = document.querySelector(".hamburger-wrapper")
    wrapper.classList.add("open")
}

 const closeHamburger = document.querySelector(".close-icon")

 closeHamburger.addEventListener("click", close)

 function close() {
    const wrapper = document.querySelector(".hamburger-wrapper")
    wrapper.classList.remove("open")
 }