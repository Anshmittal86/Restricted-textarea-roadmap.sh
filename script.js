const textareaEl = document.getElementById("message");
const charCountEl = document.getElementById("charCount");
const msgContainer = document.querySelector(".container")
const errorMsgEl = document.getElementById("errorMsg");

function handleCharCount() {
  
  const charCount = textareaEl.value.length;
  charCountEl.textContent = `${charCount} / 250`;

  if(charCount === 250) {
    textareaEl.setAttribute("aria-invalid", "true") // Invalid entry for screen reader
    msgContainer.classList.add("red-border")
    errorMsgEl.textContent = "Character limit reached."; // Character limit reached for screen reader 
  } else {
    textareaEl.removeAttribute("aria-invalid");
    msgContainer.classList.remove("red-border")
    errorMsgEl.textContent = "";
  }
}

textareaEl.addEventListener("input", handleCharCount)