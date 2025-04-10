const main = () => document.getElementById("main-content");

document.addEventListener("DOMContentLoaded", () => 
    loadComponent("projetos"));


const loadComponent = async (componentName) => {
    try{
        const response = await fetch(`Components/${componentName}.html`);
        if(!response.ok)
            throw new Error("Erro ao carregar componente HTML, Status: " + response.status);

        const htmlComponent = await response.text();
        main().innerHTML = htmlComponent;
    }catch(erro){
        main().innerHTML = "<p style='color: red; width: 100%; text-align: center; font-size: 1.5rem;'>Erro ao carregar conteudo.</p>";
        console.error("error:", erro);
    }
};
