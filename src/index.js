import './style.css';
import  generateheader from './header.js';
import generatenavbar from './navbar.js';
import generatecontentcontainer from './contentcontainer.js';
import generatehomeconent from './homecontent.js'

function generatemaincontent() {
  const content = document.createElement('div');
  content.id = "content"
  document.querySelector("body").appendChild(content)   
}

generatemaincontent()
generateheader()
generatenavbar()
generatecontentcontainer()
generatehomeconent()