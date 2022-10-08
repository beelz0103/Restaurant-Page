export default function generatemenucontent() {
  const paragraphtitle = document.createElement('div');
  paragraphtitle.id = "menu"
  paragraphtitle.textContent = "Menu"

  const paragraph = document.createElement('div');
  paragraph.textContent = 
  `MEH`

  document.querySelector(".content").appendChild(paragraphtitle);
  document.querySelector(".content").appendChild(paragraph);
}