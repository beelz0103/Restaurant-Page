export default function generateheader() {
  const header = document.createElement('div');
  header.classList.add("header")
  header.textContent = "Tet's Gaming Inn"

  document.getElementById("content").appendChild(header)   
}
