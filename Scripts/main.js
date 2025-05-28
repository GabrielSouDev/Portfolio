import { loadComponent } from '/Scripts/pageLoader.js';

document.addEventListener("DOMContentLoaded", () => 
    loadComponent("contact"));

window.loadComponent = loadComponent;