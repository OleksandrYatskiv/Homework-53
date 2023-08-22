import { data } from "./components/data.js";
import renderUsers from "./components/render.js";

document.addEventListener('DOMContentLoaded', () => {
    const wrapp = document.querySelector('.wrapp');
    renderUsers(data, wrapp);
});