export function getProjectItem(project)
{
    return `<div class="project-item">
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
}