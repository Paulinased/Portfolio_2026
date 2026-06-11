const projects = [
{
    id: "akvariefeber",
    title: "AkvarieFeber",
    image: "Bilder/akvariefeber.png",
    description: "Grafisk profil och marknadsmaterial för en modern akvariebutik."
},
{
    id: "ugglan",
    title: "Bokförlaget UGGLAN",
    image: "Bilder/ugglan.png",
    description: "Grafisk profil och marknadsmaterial för ett fiktivt bokförlag."
},
{
    id: "horby",
    title: "Hörby Kommun",
    image: "Bilder/horby.png",
    description: "Logotypkoncept och grafisk identitet."
},
{
    id: "bowling",
    title: "Åhus Bowling",
    image: "Bilder/bowlingen.png",
    description: "Grafisk profil för bowling, restaurang och bar."
},
{
    id: "spice",
    title: "SPICE of Åhus",
    image: "Bilder/spice.png",
    description: "Grafisk profil för restaurang."
},
{
      id: "marie",
    title: "Illustrationer",
    image: "Bilder/marieklar2.jpg",
    description: "Illustrationer skapade i Adobe Illustrator."
},
{
    id: "bjorn",
    title: "Illustrationer",
    image: "Bilder/björn2.jpg",
    description: "Illustrationer skapade i Adobe Illustrator."
}
];

const container = document.getElementById("projectsContainer");

projects.forEach(project => {

    container.innerHTML += `
    
    <article class="project">

        <header class="project_header">
            <h3 class="project_title">${project.title}</h3>
        </header>

        <div class="project_display">
            <figure class="project_image">
                <img src="${project.image}" alt="${project.title}">
            </figure>
        </div>

        <div class="project_content">
            <p>${project.description}</p>
        </div>

        <footer class="project_footer">
            <a href="project.html?id=${project.id}" class="project_readmore">
                Se mer
            </a>
        </footer>

    </article>
    
    `;
});