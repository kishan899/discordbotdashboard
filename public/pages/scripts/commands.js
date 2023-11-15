import { navbar, capital, removeEscape } from "./others.js";
navbar();
const searchbar = document.querySelector(".search_field");
const cmdfield = document.querySelector(".cmdcard");
ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2000,
    delay: 500,
});
ScrollReveal().reveal('.navbar', { delay: 400, origin: 'left' });
searchbar.addEventListener("input", (e) => {
    document.querySelector(".main .left .button").style.display = "block"
    if (e.target.value != "") {
        fetch("/data/commands.json").then((response) => response.json())
            .then((json) => {
                cmdfield.innerHTML = '';
                let d = [];

                for (const prop in json) {
                    d.push(json[prop].map((x) => x).filter((x) => {
                        return x.name.includes(e.target.value) === true;
                    }))
                }

                d.map(x => x).map((x, i) => {
                    if (d[i] != '') {
                        d[i].map((x, i) => {
                            cmdfield.innerHTML += `<div class="cmdbutton searchedcmd" id="#hello"><h1>${capital(x.name)}</h1></div>`;

                        })

                    } else {
                        for (const prop in json) {
                            if (json.hasOwnProperty(prop)) {
                                if (prop == e.target.value) {
                                    cmdfield.innerHTML = '';
                                    cmdfield.innerHTML += `<div class="searchedcmd"><h1>${capital(prop)}</h1><p>Did you mean ${capital(prop)} Category?</p></div>`;

                                }
                            }
                        } //for ended
                    }

                })
                let g = document.querySelectorAll(".cmdcard .searchedcmd");
                g.forEach((x) => {
                    x.addEventListener("click", (e) => {
                        let right = document.querySelector(".main .right");
                        let left = document.querySelector(".main .left")
if(window.innerWidth < 992){
    left.style.transform ="translateX(-1000px)";
    left.style.display = "none"
    right.style.display = "block"
    right.style.width = "100%";
    document.querySelector(".navbar .right .leftbtn").classList.remove("fa-xmark");
    document.querySelector(".navbar .right .leftbtn").classList.add("fa-bars");
}
                        let categories = document.querySelectorAll(".main .left .leftshow .category");
                        categories.forEach((x) => {
                            x.style.backgroundColor = '';
                        });

                        document.querySelector(".allcatcmd").innerHTML = "";
                        d.map(x => x).map((x, i) => {
                            try {
                                if (d[i] != '') {
                                    let cmdinfo = d[i].filter((x) => {
                                        return x.name === e.target.textContent.toLowerCase();
                                    })
                                    document.querySelector(".allcatcmd").innerHTML = `<div class="cmdinfo"><h1>${capital(cmdinfo[0].name)}</h1><p><span>Example</span> <br>${cmdinfo[0].usage ? capital(cmdinfo[0].usage) : "Not found in database."}</p><p><span>Description</span><br>${capital(cmdinfo[0].description)}</p></div>`

                                }
                            } catch {
                                ///handling errors
                            }

                        });
                    });
                });
            });

    } else {
        cmdfield.innerHTML = "";
        document.querySelector(".main .left .button").style.display = "none"
    };

})

document.querySelector(".main .left .button").addEventListener("click", () => {
    searchbar.value = "";
    cmdfield.innerHTML = "";
    document.querySelector(".main .left .button").style.display = "none"
});
searchbar.addEventListener("focusout", () => {
    document.querySelector(".main .left .button").style.borderTop = "1px solid rgba(255, 255, 255, 0.200)";
    document.querySelector(".main .left .button").style.borderBottom = "1px solid rgba(255, 255, 255, 0.200)";
});
searchbar.addEventListener("focus", () => {
    document.querySelector(".main .left .button").style.borderTop = "1px solid white";
    document.querySelector(".main .left .button").style.borderBottom = "1px solid white";
});

//category
const category = document.querySelector(".main .left .leftshow");
fetch("../../data/commands.json").then((response) => response.json())
    .then((x) => {
        for (const prop in x) {
            if (x.hasOwnProperty(prop)) {
                category.innerHTML += `<div class="category"><i class="fa-solid fa-bolt"></i><p>${capital(prop)}</p></div>`
                let categories = document.querySelectorAll(".main .left .leftshow .category");
                categories.forEach((y) => {
                    y.addEventListener("click", (e) => {
                        let right = document.querySelector(".main .right");
                        let left = document.querySelector(".main .left")
if(window.innerWidth < 992){
    left.style.transform ="translateX(-1000px)";
    left.style.display = "none"
    right.style.display = "block"
    right.style.width = "100%"
    document.querySelector(".navbar .right .leftbtn").classList.remove("fa-xmark");
document.querySelector(".navbar .right .leftbtn").classList.add("fa-bars");
}
                    
                        categories.forEach((x) => {
                            x.style.backgroundColor = ''
                        })
                        document.querySelector(".allcatcmd").innerHTML = "";
                        e.target.style.backgroundColor = 'rgb(0, 185, 129)'
                        console.log(y.style.backgroundColor)
                        document.querySelector(".allcatcmd").innerHTML = "";
                        document.querySelector(".allcatcmd").innerHTML += `<h1>${capital(e.target.textContent)}</h1>`;
                        let cat = e.target.textContent.toLowerCase();
                        x[cat].forEach((value) => {
                            document.querySelector(".allcatcmd").innerHTML += `<div class="cardscmd"><h2>${capital(value.name)}</h2><p><span>Description</span><br>${capital(value.description ? capital(value.description) : "Not found in database.")}</p><p><span>Explame</span><br>${value.usage ? capital(value.usage) : "Not found in database."}</p></div>`
                            document.querySelectorAll(".right .allcatcmd .cardscmd").forEach((x, i) => {
                                x.style.animation = `slide ${++i}00ms ease-in-out`
                            })
                        })

                    })
                })
            }
        }
    });
document.querySelector(".navbar .right .leftbtn").addEventListener("click", ()=> {
    let right = document.querySelector(".main .right");
    let left = document.querySelector(".main .left")
    console.log(left.style.transform);
let leftstatus = document.querySelector(".main .left");
console.log(window.innerWidth);

    if(left.style.transform == '' || left.style.transform == "translateX(-1000px)"){
        left.style.display = ""
        left.style.transform ="translateX(0px)";
right.style.display = "none";
document.querySelector(".navbar .right .leftbtn").classList.remove("fa-bars");
document.querySelector(".navbar .right .leftbtn").classList.add("fa-xmark");
    } else {
        left.style.transform ="translateX(-1000px)";
        left.style.display = "none"
        right.style.display = "block"
        right.style.width = "100%";
        document.querySelector(".navbar .right .leftbtn").classList.remove("fa-xmark");
document.querySelector(".navbar .right .leftbtn").classList.add("fa-bars");
    }

})