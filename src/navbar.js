import generatehomeconent from './homecontent.js'
import generatemenuconent from './menucontent.js'
import generateaboutconent from './aboutcontent.js'

export default function generatenavbar() {
  const navbar = document.createElement('div');
  navbar.classList.add("navbar")

  const home = document.createElement('div');
  home.textContent = "Home"
  home.addEventListener("click", () => {
    document.querySelector(".content").textContent = "";
    generatehomeconent();
  })
  navbar.appendChild(home)

  const menu = document.createElement('div');
  menu.textContent = "Menu"
  navbar.appendChild(menu)
  menu.addEventListener("click", () => {
    document.querySelector(".content").textContent = "";
    generatemenuconent();
  })

  const about = document.createElement('div');
  about.textContent = "About"
  about.addEventListener("click", () => {
    document.querySelector(".content").textContent = "";
    generateaboutconent();
  })
  navbar.appendChild(about)  

  document.getElementById("content").appendChild(navbar)
}