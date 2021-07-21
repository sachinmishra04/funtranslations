const translateBtn = document.querySelector(".translate-btn");
const textInput = document.querySelector(".textInput");
const outputTxt = document.querySelector(".outputTxt");

translateBtn.addEventListener("click", () => {
  console.log(textInput.value);
  outputTxt.innerText = "";
  fetch(
    `https://api.funtranslations.com/translate/mandalorian.json?text=${textInput.value}`
  )
    .then((res) => res.json())
    .then((output) => (outputTxt.innerText = output.contents.translated))
    .catch((error) => alert("error occured", error));
});

textInput.addEventListener(onchange, () => console.log("hi"));

//https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json
