/**
 * @author ETOUMI Aristide
 * @description DI-Bootcamp week3 day4 ExercicesXP | Coloring Game
 */

/*
1- Select a color
2- Draw what you want
*/

let colorPalette = document.getElementsByClassName("color-palette")[0];
let rightPanel = document.getElementsByClassName("right-panel")[0];
let colorChoosed = "";
let lastColorHover = "";

for (const div of colorPalette.children) {
    div.addEventListener("click", (ev) => {
        colorChoosed = ev.target.style.backgroundColor;
    })
}

for (const div of rightPanel.children) {
    div.addEventListener("click", (ev) => {
        ev.target.style.backgroundColor = colorChoosed;
        lastColorHover = colorChoosed;
    })

    div.addEventListener("mouseenter", (ev) => {
        lastColorHover = ev.target.style.backgroundColor;
        ev.target.style.backgroundColor = colorChoosed;
    })

    div.addEventListener("mouseleave", (ev) => {
        ev.target.style.backgroundColor = lastColorHover;
    })
}

function clearColor(event) {
    colorChoosed = "";
    lastColorHover = "";
    for (const div of rightPanel.children) {
        div.style.backgroundColor = "white";
    }
}