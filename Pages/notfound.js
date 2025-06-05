import { LoadCSS } from "../Utils/loader.js";

export function NotFound(){
    LoadCSS("../Pages/notfound.css");

    return `
    <p class="not-found">Error 404 - Pagina não encontrada!</p>
    `
}