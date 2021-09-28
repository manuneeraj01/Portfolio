const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const cancelBtn = document.querySelector(".cancel-btn");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
        
   
        
}