import { LoadCSS } from "../Utils/loader.js";

export async function MainContent(){
    await LoadCSS("./Components/maincontent.css");

    return `
    <div id="main-content" class="main-content"></div>
    `;
}