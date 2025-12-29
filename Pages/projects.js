import { LoadCSS } from "../Utils/loader.js";
import { getProjectItem } from "../Components/projectitem.js";

export async function Projects(){
    await LoadCSS("./Pages/projects.css");
    await LoadCSS("../Components/projectitem.css");
    return `
    <div class="project-title-div">
        <h2 class="component-title">Meus projetos</h2>

        <div class="project-buttons">
            <button id="order-projects-in-list" class="project-button">
                <i class="fa-solid fa-grip-lines"></i>
            </button>
            <button id="order-projects-in-grid" class="project-button">
                <i class="fa-solid fa-grip"></i>
            </button>
        </div>
    </div>

    <div id="projects-div"></div>
    `
}

const projectsDiv = () => document.getElementById('projects-div');

const projectsCollection = () => projectsDiv().getElementsByClassName("project-item");

export const ProjectsInit = async () => {
    const orderInListButton = document.getElementById('order-projects-in-list');
    const orderInGridButton = document.getElementById('order-projects-in-grid');
    
    const response = await fetch("./projects.json") // alterar para ../
    if(!response.ok)
        throw Error("Projects.json não encontrado!");
    
    const data = await response.json();

    data.forEach(project => 
        projectsDiv().innerHTML += getProjectItem(project));

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