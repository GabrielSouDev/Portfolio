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
    ${headerHTML}

    <div class="divider"></div>

    <div class="main">
      ${navbarHTML}

      ${mainContentHTML}
    </div>

    <div class="divider"></div>

    ${footerHTML}
  `;
}
