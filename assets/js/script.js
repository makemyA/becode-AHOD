
 
 let menu= document.getElementsByClassName("menu");
 let hide = document.querySelectorAll(".hide");
 let section = document.querySelectorAll(".section");
 let button = document.querySelectorAll(".button");
 let banner = document.getElementById("banner-main");
 let buttonMenu = document.getElementById("button-menu");
 let buttonInfos = document.getElementById("button-infos");
 let menuInfos= document.getElementById("menu-infos");
 let buttonAgenda = document.getElementById("button-agenda");
 let menuAgenda= document.getElementById("menu-agenda");
 let buttonContact = document.getElementById("button-contact");
 let menuContact= document.getElementById("menu-contact");
 let buttonAskUs = document.getElementById("button-ask-us");
 let menuAskUs= document.getElementById("menu-ask-us");
 buttonAgenda.addEventListener("click", clickAgenda);
 buttonMenu.addEventListener("click", returnMenu);
 buttonInfos.addEventListener("click", clickInfos);
 buttonContact.addEventListener("click",clickContact);
 buttonAskUs.addEventListener("click",clickAskUs);
 button.forEach(functionShow);
 function functionShow(item, index, array){
     item=item.classList.remove("hide");
 }
 function functionHide(item, index, array) {
    item=item.classList.add("hide");
}
function returnMenu() {
    banner.classList.remove("hide");
    button.forEach(functionShow);
    section.forEach(functionHide);
    
 }
  /*Fonctions*/
 function clickInfos() {
    banner.classList.add("hide");
    button.forEach(functionHide);
    buttonInfos.classList.remove("hide");
    menuAgenda.classList.remove("hide");
 }
 function clickAgenda(){
    banner.classList.add("hide");
    button.forEach(functionHide);
    buttonAgenda.classList.remove("hide");
    menuAgenda.classList.remove("hide");
 }
 function clickContact(){
    banner.classList.add("hide");
    button.forEach(functionHide);
    buttonContact.classList.remove("hide");
    menuContact.classList.remove("hide");
 }
 function clickAskUs(){
    banner.classList.add("hide");
    button.forEach(functionHide);
    buttonAskUs.classList.remove("hide");
    menuAskUs.classList.remove("hide");
 } 


    /* <script>$(function(){
            $(buttonInfos).click(function(){
               $(buttonInfos).toggle() // AFFICHE ET CACHE A CHAQUE CLIQUE SUR LE BOUTTON
            });
         });</script> */
/* let row = document.getElementById("row1");

let addTest = function() {
 row.classList.add("test");
        
    } 
addTest(); */
/* let changeImg = document.getElementById("image1");
changeImg.addEventListener("mouseover", fonctionOver);
changeImg.addEventListener("mouseleave", fonctionOut) */