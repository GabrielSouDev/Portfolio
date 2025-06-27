import { LoadCSS } from "../Utils/loader.js";

export async function Projects(){
    await LoadCSS("./Pages/projects.css");

    return `
    <div class="project-title-div">
        <button id="order-projects-in-list" class="project-button">
            <i class="fa-solid fa-grip-lines"></i>
        </button>
        <button id="order-projects-in-grid" class="project-button">
            <i class="fa-solid fa-grip"></i>
        </button>
        <h2 class="component-title">Meus projetos</h2>
    </div>

    <div id="projects-div"></div>
    `
}

const projectsDiv = () => document.getElementById('projects-div');

const projectsCollection = () => projectsDiv().getElementsByClassName("project-item");

export const ProjectsInit = async () => {
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
                        <p class="project-technologies"><strong>Linguagem: </strong>${project.languages}</p>
                        <p class="project-technologies"><strong>Back-end: </strong>${project.backend}</p>
                        <p class="project-technologies"><strong>Front-end: </strong>${project.frontend}</p>
                        <p class="project-technologies"><strong>Banco de dados: </strong>${project.database}</p>
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