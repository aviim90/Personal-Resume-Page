const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove(("active"));
    navMenu.classList.remove(("active"));
}))

/*--------HEADER ON SCROLL-----------------------------*/

const header = document.querySelector("header");
const heroSection = document.querySelector(".hero-intro");

const heroSectionOptions = {
    rootMargin: "-650px 0px 0px 0px"
};

const heroSectionObserver = new IntersectionObserver
(function(
    entries,
    heroSectionObserver
){
 entries.forEach(entry => {
    if((!entry.isIntersecting)){
        header.classList.add("header-scrolled");
    }
    else{
        header.classList.remove("header-scrolled");
    }
 });
},
heroSectionOptions);

heroSectionObserver.observe(heroSection);