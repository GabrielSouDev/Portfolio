const projectsDiv = () => document.getElementById('projects-div');

const projectsCollection = () => projectsDiv().getElementsByClassName("project-item");

export const init = async () => {
    const orderInListButton = document.getElementById('order-projects-in-list');
    const orderInGridButton = document.getElementById('order-projects-in-grid');
    
    console.log("Componente iniciado");
    const response = await fetch("../projects.json")
    if(!response.ok)
        throw Error("Projects.json não encontrado!");
    
    const data = await response.json();

    data.forEach(project => {
        projectsDiv().innerHTML += 
        `<div class="project-item">
            <a href="${project.link}" target="_blank" class="project-link">
                <img src="Images/${project.image}" class="project-image">
                <div class="project-div-text">
                    <p class="project-title">${project.title}</p>
                    <p class="project-description">${project.description}</p>
                    <p class="project-technologies">${project.technologies}</p>
                </div>
            </a>
        </div>`
    });

    orderInList();

    orderInListButton.addEventListener("click", () => orderInList())
    orderInGridButton.addEventListener("click", () => orderInGrid())
};

const orderInList = () =>
{
    Array.from(projectsCollection()).forEach(project => {
        const image = project.querySelector(".project-image");
        const link = project.querySelector(".project-link");

        image.classList.remove("project-image-grid");
        projectsDiv().classList.remove("project-grid");

        image.classList.add("project-image-list");
        link.classList.add("project-link-list");
    });
};

const orderInGrid = () =>
{
    Array.from(projectsCollection()).forEach(project => {
        const image = project.querySelector(".project-image");
        const link = project.querySelector(".project-link");

        image.classList.remove("project-image-list");
        link.classList.remove("project-link-list");

        image.classList.add("project-image-grid");
        projectsDiv().classList.add("project-grid");
    });
};