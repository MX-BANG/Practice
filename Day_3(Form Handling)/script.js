const input1 = document.getElementById("input");
const btn = document.getElementById("Submitbtn");
const greeting = document.getElementById("greetings")

btn.addEventListener("click", function () {
    const userText = input1.value;
    greeting.innerText = "Welcome " + userText
    greeting.style.color = "red";
    greeting.style.fontSize = "24px";
});

