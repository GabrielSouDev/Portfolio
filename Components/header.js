import { LoadCSS } from "../Utils/loader.js";

export function Header(){
    LoadCSS("/Components/header.css");

    return `
    <header>
        <div class="header-title">
            <div>
                <h1 class="title">Gabriel Souza</h1>
                <h2 class="subtitle">Desenvolvedor Back-end</h2>
            </div>
        </div>
    </header>
    `;
}