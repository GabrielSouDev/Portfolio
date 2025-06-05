import { LoadCSS } from "../Utils/loader.js";

export function MainContent(){
    LoadCSS("./Components/maincontent.css");

    return `
    <div id="main-content" class="main-content"></div>
    `;
}