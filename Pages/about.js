import { LoadCSS } from "../Utils/loader.js";

export function About(){
    LoadCSS("./Pages/about.css");

    return `
    <p class="component-title">Sobre Mim...</p>
    `;
}