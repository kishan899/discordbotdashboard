import { navbar, capital, removeEscape } from "./others.js";
navbar();
ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2000,
    delay: 500,
});
ScrollReveal().reveal('.navbar', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.main', { delay: 500});

fetch('../../data/contactinfo.json').then((response) => response.json())
.then((res) => {
    res.contactinfo.forEach((res) => {
        document.querySelector(".main").innerHTML += `<div class="cantactcard"><div class="left">
        <img src=${res.image} alt=""> </div><div class="right"><h1>${res.name}</h1><p>${res.description}</p><a href=${res.link}>Go...</a></div></div>`

    })
   })