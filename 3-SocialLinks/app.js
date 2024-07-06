const webContainer = document.querySelector(".card-container");
const modelContainer = document.querySelector(".model");
const button = document.querySelector(".button-txt");


function changeView() {
    if (webContainer.style.display === "flex") {

        webContainer.style.display = "none";
        modelContainer.style.display = "flex";

        button.textContent = "My project"

    } else {
        webContainer.style.display = "flex";
        modelContainer.style.display = "none";

        button.textContent = "Original"
    }
}