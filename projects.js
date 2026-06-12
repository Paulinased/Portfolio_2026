const projects = [
{
    id: "akvariefeber",
    title: "AkvarieFeber",
    image: "Bilder/akvariefeber.png",
    shortDescription: "Grafisk profil och marknadsmaterial för en modern akvariebutik.",
    fullDescription: "Ett konceptprojekt där en komplett visuell identitet togs fram för en modern akvariebutik. Målet var att skapa ett enhetligt uttryck som förmedlar kvalitet, kunskap och passion för akvariehobbyn.",
    gallery: [
    "Bilder/akvariefeber-1.jpg",
    "Bilder/akvariefeber-material.png",
  ]
},
{
    id: "ugglan",
    title: "Skolprojekt: Bokförlaget UGGLAN",
    image: "Bilder/ugglan.png",
    shortDescription: "Grafisk profil för ett fiktivt bokförlag.",
    fullDescription: "Grafisk profil och marknadsmaterial för ett fiktivt bokförlag.",
    gallery: [
    "Bilder/logotyp.png",
    "Bilder/ugglan.png",
  ]
},
{
    id: "horby",
    title: "Skolprojekt: Hörby Kommun",
    image: "Bilder/horby.png",
    shortDescription:
    "Modernisering av Hörby kommuns logotyp",
    fullDescription:
    "Ett konceptuellt skolprojekt där Hörby kommuns logotyp moderniserades med fokus på enkelhet, tydlighet och användbarhet i moderna medier. Målet var att bevara den historiska symboliken samtidigt som identiteten fick ett mer samtida uttryck.",
    gallery: [
    "Bilder/horby2.png",
    "Bilder/horby.png",
  ]
},
{
    id: "bowling",
    title: "Åhus Bowling",
    image: "Bilder/bowlingen.png",
    shortDescription:
    "Grafisk profil för restaurang.",
    fullDescription:
    "Projektet omfattade framtagning av logotyp, menyer, banners och affischer för Åhus Bowling. Fokus låg på att skapa en tydlig visuell identitet som stärker restaurangens varumärke och kommunikation.",
    gallery: [
    "Bilder/bowlingen-logo.png",
    "Bilder/bowlingen.png",
    "Bilder/bowling-meny.png",
    "Bilder/barnaffisch2.png",
  ]
},
{
  id: "spice",
  title: "SPICE of Åhus",
  image: "Bilder/spice.png",
  shortDescription:
    "Grafisk profil för restaurang.",
  fullDescription:
    "Projektet omfattade framtagning av logotyp, menyer, banners och affischer för Spice of Åhus. Fokus låg på att skapa en tydlig visuell identitet som stärker restaurangens varumärke och kommunikation.",
  gallery: [
    "Bilder/spice-logo.jpg",
    "Bilder/spice.png",
    "Bilder/menyspice3.jpg",
    "Bilder/bannertillspice.jpg",
  ]
},
{
    id: "marie",
    title: "Illustration - Marie",
    image: "Bilder/marieklar2.jpg",
    shortDescription:
    "Illustration skapad i Adobe Illustrator",
    fullDescription:
    "Illustration skapad i Adobe Illustrator med Low Poly-teknik. Projektet visar arbete med form, färg och geometriska strukturer för att skapa ett modernt visuellt uttryck.",
    gallery: [
    "Bilder/marieklar2.jpg"
  ]
},
{
    id: "bjorn",
    title: "Illustration - Breaking Bad",
    image: "Bilder/björn2.jpg",
    shortDescription:
    "Illustration skapad i Adobe Illustrator",
    fullDescription:
    "Illustration skapad i Adobe Illustrator med Low Poly-teknik. Projektet visar arbete med form, färg och geometriska strukturer för att skapa ett modernt visuellt uttryck.",
    gallery: [
    "Bilder/björn2.jpg",
    "Bilder/björn1.jpg",
  ]
}
];

const container = document.getElementById("projectsContainer");

if(container){

    projects.forEach(project => {

        container.innerHTML += `
        
        <a href="project.html?id=${project.id}" class="project-link">

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
                    <p>${project.shortDescription || project.description}</p>
                </div>

                <footer class="project_footer">
                    <span class="project_readmore">
                        Se mer →
                    </span>
                </footer>

            </article>

        </a>
        `;
    });

}