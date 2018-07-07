 const mq = window.matchMedia(("min-width:576px"));
 let body = document.getElementById("body");
 let styleBody= getComputedStyle(document.getElementById("body"));
 let styleProgressive = getComputedStyle(document.getElementById("section-progressive"));
 let startMenu = document.getElementById("start-menu");
 let loadingText = document.getElementById("loading-text");
 let buttonEnter = document.getElementById("button-enter");
 let menu= document.getElementById("menu");
 let hide = document.querySelectorAll(".hide");
 let section = document.querySelectorAll(".section");
 let button = document.querySelectorAll(".button");
 let banner = document.getElementById("banner-main");
 let buttonMenu = document.getElementById("button-menu");
 let buttonHome = document.getElementById("button-home");
 let buttonInfos = document.getElementById("button-infos");
 let buttonInfosMenu = document.getElementById("button-infos-menu");

 let menuInfos= document.getElementById("menu-infos");
 let buttonAgenda = document.getElementById("button-agenda");
 let buttonAgendaMenu = document.getElementById("button-agenda-menu");

 let menuAgenda= document.getElementById("menu-agenda");
 let buttonContact = document.getElementById("button-contact");
 let buttonContactMenu = document.getElementById("button-contact-menu");


 let menuContact= document.getElementById("menu-contact");
 let buttonAskUs = document.getElementById("button-ask-us");
 let buttonAskUsMenu = document.getElementById("button-askus-menu");

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
 let boxCta = document.getElementById("box-cta");
 buttonEnter.addEventListener("click", afficherSite);
 function setBodyWidthSmall(){
     body.style.width="90vw";
 }
 function setBodyWidthLarge(){
    body.style.width="80vw";
}
function setBody(){
    if(styleBody.width < '576px'){
        setBodyWidthSmall();
      }else{
         setBodyWidthLarge();
      }
}
function returnHome(){
    if(styleBody.width<'576px'){
        body.style.width="100vw";
     }else {
         setBodyWidthLarge();
     }
}
function resize(){
    if (styleBody.width<"576px"){
        body.style.width="100vw";
}else {
    setBodyWidthLarge();
}
}

 function afficherSite(){
     startMenu.classList.toggle("hide");
     startMenu.classList.toggle("d-flex");
     mainSection.classList.toggle("hide");
     buttonNewsLetter.classList.toggle("hide");
     buttonPhone.classList.toggle("hide");
     buttonFooter.classList.toggle("hide");
    /*  buttonMenu.classList.toggle("hide"); */
     footer.classList.toggle("hide");
     footer.classList.toggle("d-flex");
    /*  resize(); */
     setBody(); 
     }
     

 buttonNewsLetter.addEventListener("click", afficherNewsLetter);
 buttonPhone.addEventListener("click",afficherPhone);
 buttonAgenda.addEventListener("click", clickAgenda); 
 buttonMenu.addEventListener("click", afficherMenu);
 buttonInfos.addEventListener("click", clickInfos);
 buttonContact.addEventListener("click",clickContact);
 buttonAskUs.addEventListener("click",clickAskUs);
 buttonHome.addEventListener("click",returnMenu);
 buttonInfosMenu.addEventListener("click",clickInfosMenu);
 buttonAgendaMenu.addEventListener("click",clickAgendaMenu);
 buttonContactMenu.addEventListener("click",clickContactMenu);
 buttonAskUsMenu.addEventListener("click",clickAskUsMenu);
 button.forEach(functionShow);
 buttonAgendaCard1.addEventListener("click",clickCard1);
 buttonAgendaCard2.addEventListener("click",clickCard2);
 buttonAgendaCard3.addEventListener("click",clickCard3);
 buttonAgendaCard4.addEventListener("click",clickCard4);
 buttonFooter.addEventListener("click", afficherProgressive);
 footer.addEventListener("mouseover",afficherFooter);
 footer.addEventListener("mouseleave",cacherFooter);
function afficherFooter(){
    footer.classList.remove("down"); 
    footer.classList.add("up"); 
}
function cacherFooter(){
    footer.classList.remove("up"); 
    footer.classList.add("down");
}

 function afficherNewsLetter(){
     sectionNewsLetter.classList.toggle("hide");
     mainSection.classList.toggle("flou");
     
 }
 function afficherProgressive(){
     mainSection.classList.toggle("hide");
     sectionProgressive.classList.toggle("hide");
     buttonNewsLetter.classList.toggle("hide");
     console.log(styleProgressive.width);
     console.log(styleBody.width);
       if(styleProgressive.width>styleBody.width) {
        body.style.width="100vw";
      }else {
          setBody();
      }
    

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
function addHide(item){
    item=item.classList.add("hide");
}
function removeHide(item){
    item=item.classList.remove("hide");
}
function addFlex(item){
    item=item.classList.add("d-flex");
}
function removeFlex(item){
    item=item.classList.remove("d-flex");
}
function afficherMenu() {
    
    menu.classList.remove("hide");
    menu.classList.toggle("in");
    menu.classList.toggle("out");
   /*  buttonMenu.classList.toggle("fixed"); */
    boxCta.classList.toggle("hide");
    boxCta.classList.toggle("d-flex");
    /* resize(); */
   /*  mainSection.classList.toggle("flou"); */
    
    
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
 function returnMenu(){
     banner.classList.remove("hide");
     button.forEach(removeHide);
     section.forEach(removeFlex);
     section.forEach(addHide);
  /*    returnHome(); */
     setBody();
 }    
 function clickInfos() {
     banner.classList.toggle("hide");
     button.forEach(toggleHide);
     buttonInfos.classList.toggle("hide");
     menuInfos.classList.toggle("hide");
     menuInfos.classList.toggle("d-flex");
     setBody();
     /* buttonMenu.classList.toggle("color-primary"); */
   
   
     /*  banner.classList.add("hide");
    button.forEach(functionHide);
    buttonInfos.classList.remove("hide");
    menuInfos.classList.remove("hide"); */
 }
 function clickInfosMenu() {
    banner.classList.add("hide");
    button.forEach(addHide);
    buttonInfos.classList.toggle("hide");
    section.forEach(addHide);
    section.forEach(removeFlex);
    menuInfos.classList.toggle("hide");
    menuInfos.classList.toggle("d-flex");
    setBody();
}
 function clickAgenda(){
    banner.classList.toggle("hide");
    button.forEach(toggleHide);
    buttonAgenda.classList.toggle("hide");
    menuAgenda.classList.toggle("hide");
    menuAgenda.classList.toggle("d-flex");
    setBody();
 }
 function clickAgendaMenu(){
    banner.classList.add("hide");
    button.forEach(addHide);
    buttonAgenda.classList.toggle("hide");
    section.forEach(addHide);
    section.forEach(removeFlex);
    menuAgenda.classList.toggle("hide");
    menuAgenda.classList.toggle("d-flex");
    setBody();
 }

 function clickContact(){
    banner.classList.toggle("hide");
    button.forEach(toggleHide);
    buttonContact.classList.toggle("hide");
    menuContact.classList.toggle("hide");
    menuContact.classList.toggle("d-flex");
    setBody();
 }
 function clickContactMenu(){
    banner.classList.add("hide");
    button.forEach(addHide);
    buttonContact.classList.toggle("hide");
    section.forEach(addHide);
    section.forEach(removeFlex);
    menuContact.classList.toggle("hide");
    menuContact.classList.toggle("d-flex");
    setBody();
 }
 function clickAskUs(){
    banner.classList.toggle("hide");
    button.forEach(toggleHide);
    buttonAskUs.classList.toggle("hide");
    menuAskUs.classList.toggle("hide");
    menuAskUs.classList.toggle("d-flex");
    setBody();
 }
 function clickAskUsMenu(){
    banner.classList.add("hide");
    button.forEach(addHide);
    buttonAskUs.classList.toggle("hide");
    section.forEach(addHide);
    section.forEach(removeFlex);
    menuAskUs.classList.toggle("hide");
    menuAskUs.classList.toggle("d-flex");
    setBody();
 }

function loading(){
    section.forEach(toggleHide);
    agendaCards.forEach(toggleHide);
    /* menu.classList.add("hide"); */
     menu.classList.toggle("out");
     footer.classList.toggle("down");
     footer.classList.toggle("hide");
     footer.classList.toggle("d-flex");
     sectionProgressive.classList.add("hide");
     bannerProgressive.classList.toggle("hide");
     sectionNewsLetter.classList.toggle("hide");
     mainSection.classList.toggle("hide");
     boxCta.classList.toggle("hide");
     boxCta.classList.toggle("d-flex");

    /*  buttonNewsLetter.classList.toggle("hide"); */
     /* buttonPhone.classList.toggle("hide"); */
     /* buttonFooter.classList.toggle("hide"); */
    /* buttonMenu.classList.remove("hide"); */
     

   /*  menu.classList.toggle("show"); */
}

loading();
console.log(styleBody.width);
console.log(styleProgressive.width);
