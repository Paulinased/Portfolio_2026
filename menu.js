const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.querySelectorAll(".menu_link").forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });

});