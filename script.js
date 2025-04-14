const main = () => document.getElementById("main-content");

const loadComponent = async (componentName) => {
    try{
        const response = await fetch(`Components/${componentName}.html`);
        if(!response.ok)
            throw new Error("Erro ao carregar componente HTML, Status: " + response.status);

        const htmlComponent = await response.text();
        main().innerHTML = htmlComponent;

        if(initializer[componentName])
            initializer[componentName]();
    }catch(erro){
        main().innerHTML = "<p style='color: red; width: 100%; text-align: center; font-size: 1.5rem;'>Erro ao carregar conteudo.</p>";
        console.error("error:", erro);
    }
};

const initContact = () => {
    document.getElementById("email-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const url = "https://formsubmit.co/gabriel.calde21@gmail.com";
        const formData = new FormData(this);
    
        fetch(url, {
          method: "POST",
          body: formData
        })
        .then(response => {
          if (response.ok) {
            alert("Mensagem enviada com sucesso!");
          } else {
            alert("Erro ao enviar a mensagem.");
          }
        })
        .catch(error => {
          alert("Erro ao enviar: " + error.message);
        });
      });
};

const initializer = {
    contact: initContact,
}


document.addEventListener("DOMContentLoaded", () => 
    loadComponent("contact"));