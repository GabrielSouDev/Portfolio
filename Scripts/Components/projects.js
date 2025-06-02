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
            <a href="${project.link}" target="_blank">
                <img src="Images/${project.image}" class="project-image">
            </a>
            <div class="project-item-info">
                <a href="${project.link}" target="_blank">
                    <div class="project-div-text">
                        <p class="project-title">${project.title}</p>
                        <p class="project-description">${project.description}</p>
                        <p class="project-technologies">${project.technologies}</p>
                    </div>
                </a>
                <a href="${project.github}" target="_blank" class="social-github project-github"><i class="fa-brands fa-github social-icon"></i>Visualizar no Github</a>
             </div>
        </div>`
    });

    orderInList();

    orderInListButton.addEventListener("click", () => orderInList())
    orderInGridButton.addEventListener("click", () => orderInGrid())
};

const orderInList = () =>
{
    Array.from(projectsCollection()).forEach(project => {
        projectsDiv().classList.remove("project-grid");

        project.classList.add("project-list");
    });
};

const orderInGrid = () =>
{
    Array.from(projectsCollection()).forEach(project => {
        project.classList.remove("project-list");

        projectsDiv().classList.add("project-grid");
    });
};