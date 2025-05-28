export const init = () => {
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