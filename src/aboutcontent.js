export default function generateaboutcontent() {
  const paragraphtitle = document.createElement('div');
  paragraphtitle.id = "about"
  paragraphtitle.textContent = "About"

  const paragraph = document.createElement('div');
  paragraph.textContent = 
  `MEH`

  document.querySelector(".content").appendChild(paragraphtitle);
  document.querySelector(".content").appendChild(paragraph);
}