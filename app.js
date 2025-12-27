import { Layout } from "./Components/layout.js";
import { Projects, ProjectsInit } from "./Pages/projects.js";
import { About } from "./Pages/about.js";
import { Contact, ContactInit } from "./Pages/contact.js";
import { NotFound } from "./Pages/notfound.js";

const routes = {
    "/": Projects,
    "/projects": Projects,
    "/about": About,
    "/contact": Contact
}

const jsInit = (path) => {
    if (path === '/projects' || path === '/') ProjectsInit?.();
    if (path === '/contact') ContactInit?.();
}

function setActiveNav(path) {
  const buttons = document.querySelectorAll(".nav-buttom");
  buttons.forEach(btn => {
    const link = btn.getAttribute("data-link");
    if (link === path) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function navigateTo(url){
    window.location.hash = `#${url}`;
}

function getCurrentPath() {
    return window.location.hash.replace("#", "") || "/";
}

async function router(){
    const path = getCurrentPath();
    const route = routes[path] || NotFound;

    document.getElementById("app").innerHTML = await Layout();
    await new Promise(requestAnimationFrame);

    const mainContent = document.getElementById("main-content");
    mainContent.innerHTML = await route()
    mainContent.classList.add("fade-in");

    jsInit(path);

    document.querySelectorAll("[data-link]").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const url = link.getAttribute("data-link");
            navigateTo(url);
        });
    });

    setActiveNav(path);
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);