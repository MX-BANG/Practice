const message = document.getElementById("message");
const textChange = document.getElementById("changeText");

textChange.addEventListener("click", () => {
    message.style.color = "red";
    document.body.style.backgroundColor = "#f0f8ff";
});

