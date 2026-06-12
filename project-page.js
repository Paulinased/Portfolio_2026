const params =
new URLSearchParams(window.location.search);

const projectId =
params.get("id");

const project =
projects.find(p => p.id === projectId);

document.getElementById("projectTitle")
.innerText =
project.title;

document.getElementById("projectDescription")
.innerText =
project.fullDescription;

const gallery =
document.getElementById("projectGallery");

project.gallery.forEach(image => {

    gallery.innerHTML += `
        <img src="${image}">
    `;

});