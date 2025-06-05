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
    if (path === '/projects') ProjectsInit?.();
    if (path === '/contact') ContactInit?.();
}

function navigateTo(url){
    window.location.hash = `#${url}`;
}

function getCurrentPath() {
    return window.location.hash.replace("#", "") || "/";
}

function router(){
    const path = getCurrentPath();
    const route = routes[path] || NotFound;

    document.getElementById("app").innerHTML = Layout();
    document.getElementById("main-content").innerHTML = route();

    jsInit(path);

    document.querySelectorAll("[data-link]").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const url = link.getAttribute("data-link");
            navigateTo(url);
        });
    });
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);