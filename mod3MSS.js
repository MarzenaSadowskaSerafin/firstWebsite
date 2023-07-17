console.info("Hejka all developerom !");

let button = document.querySelector(".formMain__button");
let body = document.querySelector(".formMain");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => { 
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny"
});