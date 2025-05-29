export const init = () => {
  emailjs.init({
    publicKey: 'pT5g-klgLvL1isc7',
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