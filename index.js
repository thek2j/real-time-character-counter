const textareaEl = document.getElementById("textarea");
const totalCharactersEl = document.querySelector(".total-characters");
const remainingCharactersEl = document.querySelector(".remaining-characters");

updateCounter();

textareaEl.addEventListener("keyup", updateCounter);

function updateCounter() {
  const totalCharacters = textareaEl.value.length;
  console.log(totalCharacters);
  totalCharactersEl.textContent = totalCharacters;
  remainingCharactersEl.innerText =
    textareaEl.getAttribute("maxlength") - totalCharacters;
}
