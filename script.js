function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem rafa
    img.setAttribute("src", "./assets/rafa2.png")
  } else {
    //se tiver sem light, manter a imagem
    img.setAttribute("src", "./assets/avatar.png")
  }
}
