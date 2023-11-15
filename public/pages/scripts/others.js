const arrow = document.querySelector(".arrow");
const option = document.querySelector(".option");
const navbardiv = document.querySelector(".navbar");

export function navbar() {
   const invite = document.querySelectorAll(".invite");
const vote = document.querySelectorAll(".vote");
   arrow.addEventListener("click", () => {
      if (option.style.display == '' || option.style.display == 'none') {
         option.style.display = "block";
         arrow.style.rotate = '180deg'
         navbardiv.style.border = 'none';
      } else {
         option.style.display = "none";
         arrow.style.rotate = '0deg';
         navbardiv.style.borderBottom = '1px solid white';
      }
   });
   window.addEventListener("scroll", (e) => {
if(window.scrollY > 0){
      if (option.style.display == 'block') {
         option.style.display = "none";
         arrow.style.rotate = '0deg';
         navbardiv.style.borderBottom = '1px solid white';

      }
   }
   });

   fetch("../../data/clientinfo.json").then((response) => response.json()).then((res) => {
     for(var i = 0; i < invite.length; i++){
      invite[i].setAttribute('href', res.clientinfo[0].invitelink); 
      vote[i].setAttribute('href', res.clientinfo[0].votelink); 
      document.querySelectorAll(".botname")[i].textContent = res.clientinfo[0].name;
      document.querySelectorAll(".features .botname")[i].textContent = res.clientinfo[0].name;
      document.querySelectorAll(".servers")[i].textContent = res.clientinfo[0].servers;
      document.querySelectorAll(".members")[i].textContent = res.clientinfo[0].members;
     }
        
   }).catch((err) => {
      console.log("Somthing went wrong.");
   });
   
}
export function capital(str){
   return str.substring(0, 1).toUpperCase() + str.substring(1)
}
export function removeEscape(word) {
   return word.replace(/[^a-zA-Z0-9]/g, ' ');
}