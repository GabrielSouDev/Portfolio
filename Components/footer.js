import { LoadCSS } from "../Utils/loader.js";

export function Footer(){
    LoadCSS("../Components/footer.css");
    return `
    <footer>
        <div class="social">
            <a href="http://www.linkedin.com/in/gabriel-souza21" target="_blank" class="social-linkedin"><i class="fa-brands fa-linkedin social-icon"></i>Linkedin</a>
            <a href="https://github.com/GabrielSouDev" target="_blank" class="social-github"><i class="fa-brands fa-github social-icon"></i>Github</a>
        </div>
        <p class="footer-text">&copy Gabriel Souza - Desenvolvedor Back-end</p>
    </footer>
    `;
}