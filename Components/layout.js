import { LoadCSS } from "../Utils/loader.js";
import { Header } from "../Components/header.js";
import { Navbar } from "../Components/navbar.js";
import { MainContent } from "../Components/maincontent.js";
import { Footer } from "../Components/footer.js";

export async function Layout() {
  await LoadCSS("./Components/layout.css");

  const headerHTML = await Header();
  const navbarHTML = await Navbar();
  const mainContentHTML = await MainContent();
  const footerHTML = await Footer();

  return `
    ${navbarHTML}
    <div class="main">
      ${headerHTML}
      <div>
        <div class="divider"></div>
      </div>

      ${mainContentHTML}

      <div>
        <div class="divider"></div>
      </div>
      ${footerHTML}
    </div>
  `;
}
