const ButtonActive = document.querySelector(".sortear")
const InputValue = document.querySelector(".input")
const result = document.querySelector(".result")
let nomes = '';

function generateNumber() {
  nomes = InputValue.value
  nomes = nomes.split(",")

  var indice = Math.floor(Math.random() * nomes.length);
  var elemento = nomes[indice];
  
  result.innerHTML = `O Livro Sorteado é : <br> ${elemento}`
}



ButtonActive.addEventListener("click", generateNumber)

