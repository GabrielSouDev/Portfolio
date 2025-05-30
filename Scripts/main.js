import { loadComponent } from '../Scripts/componentLoader.js';

document.addEventListener("DOMContentLoaded", () => 
    loadComponent("contact"));

window.loadComponent = loadComponent;