const main = () => document.getElementById("main-content");

export const loadComponent = async (componentName) => {
    try{
        const response = await fetch(`Components/${componentName}.html`);
        if(!response.ok)
            throw new Error("Erro ao carregar componente HTML, Status: " + response.status);

        const htmlComponent = await response.text();
        main().innerHTML = htmlComponent;

        const module = await import(`./Components/${componentName}.js`);

        if(module.init)
          module.init();
    }catch(erro){
        main().innerHTML = "<p style='color: red; width: 100%; text-align: center; font-size: 1.5rem;'>Erro ao carregar conteudo.</p>";
        console.error("error:", erro);
    }
};
