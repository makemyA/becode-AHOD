 const mq = window.matchMedia(("min-width:576px"));
 let startMenu = document.getElementById("start-menu");
 let buttonEnter = document.getElementById("button-enter");
 let menu= document.getElementById("menu");
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
 let agendaCards= document.querySelectorAll(".agenda-card");
 let agendaCard1= document.getElementById("agenda-card-1");
 let agendaCard2= document.getElementById("agenda-card-2");
 let agendaCard3= document.getElementById("agenda-card-3");
 let agendaCard4= document.getElementById("agenda-card-4");
 let buttonAgendaCard1= document.getElementById("button-agenda-1");
 let buttonAgendaCard2= document.getElementById("button-agenda-2");
 let buttonAgendaCard3= document.getElementById("button-agenda-3");
 let buttonAgendaCard4= document.getElementById("button-agenda-4");
 let footer = document.getElementById("footer");
 let buttonFooter = document.getElementById("button-footer");
 let mainSection = document.getElementById("main-section");
 let sectionProgressive = document.getElementById("section-progressive");
 let buttonPhone = document.getElementById("button-phone");
 let bannerProgressive = document.getElementById("banner-progressive");
 let buttonNewsLetter = document.getElementById("button-newsletter");
 let sectionNewsLetter = document.getElementById("section-newsletter");
 buttonEnter.addEventListener("click", afficherSite);
 function afficherSite(){
     startMenu.classList.toggle("hide");
     startMenu.classList.toggle("d-flex");
     mainSection.classList.toggle("hide");
     buttonNewsLetter.classList.toggle("hide");
     buttonPhone.classList.toggle("hide");
     buttonFooter.classList.toggle("hide");

 }
 buttonNewsLetter.addEventListener("click", afficherNewsLetter);
 buttonPhone.addEventListener("click",afficherPhone);
 buttonAgenda.addEventListener("click", clickAgenda); 
 buttonMenu.addEventListener("click", afficherMenu);
 buttonInfos.addEventListener("click", clickInfos);
 buttonContact.addEventListener("click",clickContact);
 buttonAskUs.addEventListener("click",clickAskUs);
 button.forEach(functionShow);
 buttonAgendaCard1.addEventListener("click",clickCard1);
 buttonAgendaCard2.addEventListener("click",clickCard2);
 buttonAgendaCard3.addEventListener("click",clickCard3);
 buttonAgendaCard4.addEventListener("click",clickCard4);
 buttonFooter.addEventListener("click", afficherProgressive);
 function afficherNewsLetter(){
     sectionNewsLetter.classList.toggle("hide");
     mainSection.classList.toggle("flou");
     
 }
 function afficherProgressive(){
     mainSection.classList.toggle("hide");
     sectionProgressive.classList.toggle("hide");
     buttonNewsLetter.classList.toggle("hide");

 }
 function afficherPhone(){
    bannerProgressive.classList.toggle("hide");
    mainSection.classList.toggle("flou");
    /* mainSection.classList.toggle("hide");
    sectionProgressive.classList.toggle("hide"); */

 }
/*  footer.addEventListener("mouseover", mouseOver);
 footer.addEventListener("mouseleave", mouseLeave); */
/*  buttonFooter.addEventListener("click",afficherFooter);
function afficherFooter(){
    footer.classList.toggle("up");
} */
/*  function mouseOver(){
     footer.classList.toggle("up");
 } */
/*  function mouseLeave(){
    footer.classList.toggle("up");
    footer.classList.toggle("down");

} */

 function clickCard1(){
     agendaCard1.classList.toggle("hide");
     /* banner.classList.add("hide");
     button.forEach(functionHide);
     buttonInfos.classList.remove("hide");
     menuAgenda.classList.remove("hide"); */
 }
 function clickCard2(){
    agendaCard2.classList.toggle("hide");
 }
 function clickCard3(){
    agendaCard3.classList.toggle("hide");
 }
 function clickCard4(){
    agendaCard4.classList.toggle("hide");
 }
 function functionShow(item, index, array){
     item=item.classList.remove("hide");
 }
 function functionHide(item, index, array) {
    item=item.classList.add("hide");
}
function toggleHide(item){
    item=item.classList.toggle("hide");
}
function toggleFlex(item){
    item=item.classList.toggle("d-flex");
}
function afficherMenu() {
    
    menu.classList.remove("hide");
    menu.classList.toggle("in");
    menu.classList.toggle("out");
    buttonMenu.classList.toggle("fixed");
    footer.classList.toggle("up");
    footer.classList.toggle("down");
    
    
 }
  /*Fonctions*/
/*    if (!mq.matches){
    // window width is at least 500px
   
    console.log("test");
  }else {
    button.forEach(functionDelete);
    function functionDelete(item){
        item=item.classList.remove("button");
  }
} */
   /*   }else{
     // window width is less than 500px
     } */
 function clickInfos() {
     banner.classList.toggle("hide");
     button.forEach(toggleHide);
     buttonInfos.classList.toggle("hide");
     menuInfos.classList.toggle("hide");
     menuInfos.classList.toggle("d-flex");
     buttonMenu.classList.toggle("color-primary");
   /*  banner.classList.add("hide");
    button.forEach(functionHide);
    buttonInfos.classList.remove("hide");
    menuInfos.classList.remove("hide"); */
 }
 function clickAgenda(){
    banner.classList.toggle("hide");
    button.forEach(toggleHide);
    buttonAgenda.classList.toggle("hide");
    menuAgenda.classList.toggle("hide");
    menuAgenda.classList.toggle("d-flex");
    buttonMenu.classList.toggle("color-primary");

    /* agendaCards.forEach(toggleHide); */
   
 }
 function clickContact(){
    banner.classList.toggle("hide");
    button.forEach(toggleHide);
    buttonContact.classList.toggle("hide");
    menuContact.classList.toggle("hide");
    menuContact.classList.toggle("d-flex");
    buttonMenu.classList.toggle("color-primary");

 }
 function clickAskUs(){
    banner.classList.toggle("hide");
    button.forEach(toggleHide);
    buttonAskUs.classList.toggle("hide");
    menuAskUs.classList.toggle("hide");
    menuAskUs.classList.toggle("d-flex");
    buttonMenu.classList.toggle("color-primary");

 }

function loading(){
    section.forEach(toggleHide);
    agendaCards.forEach(toggleHide);
    menu.classList.add("hide");
     menu.classList.toggle("out");
     footer.classList.toggle("down");
     sectionProgressive.classList.add("hide");
     bannerProgressive.classList.toggle("hide");
     sectionNewsLetter.classList.toggle("hide");
     mainSection.classList.toggle("hide");
     buttonNewsLetter.classList.toggle("hide");
     buttonPhone.classList.toggle("hide");
     buttonFooter.classList.toggle("hide");
     

   /*  menu.classList.toggle("show"); */
}

loading();