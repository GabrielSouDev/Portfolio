import { LoadCSS } from "../Utils/loader.js";
import { Header } from "../Components/header.js";
import { Navbar } from "../Components/navbar.js";
import { MainContent } from "../Components/maincontent.js";
import { Footer } from "../Components/footer.js";

export function Layout(){
    LoadCSS("/Components/layout.css");

    return `
    ${Header()}

    <div class="divider"></div>

    <div class="main">
        ${Navbar()}

        ${MainContent()}
    </div>

    <div class="divider"></div>

    ${Footer()}
    `;
}