import { navbar } from '/pages/scripts/others.js'
navbar();
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2000,
  delay: 500,
});
ScrollReveal().reveal('.navbar', { delay: 400, origin: 'left' });
ScrollReveal().reveal('.botprofile h1', { delay: 200 });
ScrollReveal().reveal('.botprofile', { delay: 400 });
ScrollReveal().reveal('.features', { delay: 400, origin: 'left', interval: 400});
fetch("/data/featurs.json").then((response) => response.json())
   .then((json) => {
      const features = document.querySelector(".features");
      json.features.forEach((x) => {
         features.innerHTML += `<div class="feature">
    <div class="left">
      <h2>${x.title}</h2>
      <p>${x.description}</p>
    </div>
    <div class="right">
      <img src="${x.image}" alt="">
    </div>
  </div>`;
      
      })

   });
