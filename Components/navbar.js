import { LoadCSS } from "../Utils/loader.js";

export function Navbar(){
    LoadCSS("/Components/navbar.css");

    return`
    <nav>
        <div class="nav-buttom" data-link="/projects">
            <p class="nav-buttom-text">Projetos</p>
        </div>

        <div class="nav-buttom" data-link="/about">
            <p class="nav-buttom-text">Sobre</p>
        </div>

        <div class="nav-buttom" data-link="/contact">
            <p class="nav-buttom-text">Contato</p>
        </div>
    </nav>
    `;
}