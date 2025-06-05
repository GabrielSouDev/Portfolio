import { LoadCSS } from "../Utils/loader.js";

export function Contact(){
  LoadCSS("./Pages/contact.css");

  return `
  <p class="component-title">Envie sua Mensagem</p>

  <form id="email-form" class="contact-form">
    <div>
      <label class="contact-form-label">Nome: </label>
      <input class="contact-form-name" type="text" name="name" required placeholder="Digite seu nome">
    </div>

    <div>
      <label class="contact-form-label">E-mail: </label>
      <input class="contact-form-email" type="email" name="email" required placeholder="Digite seu e-mail">
    </div>
    
    </div>
      <label class="contact-form-label">Mensagem: </label>
      <textarea class="contact-form-message" name="message" required placeholder="Digite sua mensagem"></textarea>
    </div>

    <button type="submit" class="contact-form-button">Enviar</button>
  </form>

  <p id="success-message">Mensagem enviada com sucesso!</p>
  <p id="error-message">Houve um erro no envio de sua mensagem, tente novamente.</p>
  `;
}

export const ContactInit = () => {
  emailjs.init({
    publicKey: 'pT5g-klgLvL1isc7S',
  });

  const form = document.getElementById("email-form");
  const successMessage = document.getElementById("success-message");
  const errorMessage = document.getElementById("error-message");
    
  form.addEventListener("submit", function(event) {
    event.preventDefault();
        
    emailjs.sendForm('service_02n53j9', 'template_pkma8ts', this)
    .then(() => {
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';
      form.reset();
    }, (error) => {
      successMessage.style.display = 'none';
      errorMessage.style.display = 'block';
      console.error('Erro:', error);
    });
  });
};