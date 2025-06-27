import { LoadCSS } from "../Utils/loader.js";

export async function About(){
    await LoadCSS("./Pages/about.css");

    return `
    <h2 class="component-title">Sobre Mim</h2>
    <div class="about-div">
        <div class="about-img-circle">
            <img class="about-img" src="./Images/Gabriel.jpeg"></img>
        </div>
        <p class="about-text">&emsp;Olá! Meu nome é Gabriel e sou apaixonado por desenvolvimento back-end, especialmente utilizando C#. Atualmente atuo na área de suporte técnico, mas estou em transição de carreira, buscando oportunidades para crescer como desenvolvedor.</p>
        <p class="about-text">&emsp;Gosto de resolver problemas, entender como as coisas funcionam por trás dos sistemas e construir soluções que realmente façam a diferença. Estou sempre aprendendo e evoluindo, com foco em me tornar um desenvolvedor cada vez mais completo.</p>
        <p class="about-text">&emsp;Moro em Maringá - PR e, fora da tecnologia, gosto de ouvir música (hardcore, indie, powermetal, rap e trap) e também curto assistir alguns animes, principalmente os de comédia.</p>
        <h3 class="about-title">Tecnologias e Ferramentas</h3>
        <p class="about-text">&emsp;<strong>Linguagens:</strong> C# e JavaScript.</p>
        <p class="about-text">&emsp;<strong>Back-end:</strong> ASP.NET Core (Minimal APIs e Controllers), Entity Framework, Identity, autenticação JWT.</p>
        <p class="about-text">&emsp;<strong>Front-end:</strong> Blazor WebAssembly e Server (Framework .NET), HTML, CSS, JavaScript.</p>
        <p class="about-text">&emsp;<strong>Bancos de dados:</strong> SQL Server, SQLite, Neo4j.</p>
    </div>
    `;
}