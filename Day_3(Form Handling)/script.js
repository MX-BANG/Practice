const textInput = document.getElementById("textinput");
const colorInput = document.getElementById("colorinput");
const btn = document.getElementById("btn");
const greetings = document.getElementById("greetings");

btn.addEventListener("click", function(){
    const UserInput = textInput.value;
    const color = colorInput.value;

    greetings.innerText = "Welcome " + UserInput;
    greetings.style.color = color;

})