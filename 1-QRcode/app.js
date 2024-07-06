const webContainer = document.querySelector(".web-container");
const mobileContainer = document.querySelector(".mobile-container");

webContainer.style.display = "flex";
webContainer.style.opacity = "1";
mobileContainer.style.display = "none";

function changeView() {
    if (webContainer.style.display === "flex") {

        webContainer.style.display = "none";
        mobileContainer.style.display = "flex";

    } else {
        webContainer.style.display = "flex";
        mobileContainer.style.display = "none";

    }
}