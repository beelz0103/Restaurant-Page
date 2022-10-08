export default function generatehomecontent() {
  const paragraphtitle = document.createElement('div');
  paragraphtitle.id = "home"
  paragraphtitle.textContent = "Home"

  const paragraph = document.createElement('div');
  paragraph.textContent = 
  `If you are a weeb worth your salt, you must know what NGNL is about. The idea of this
  gambling inn is simple, if you beat our cute employees at a game, you get your food for free, plus
  a picture with the employee you beat.`

  document.querySelector(".content").appendChild(paragraphtitle);
  document.querySelector(".content").appendChild(paragraph);
}