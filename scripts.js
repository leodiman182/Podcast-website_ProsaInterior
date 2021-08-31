const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    
    
    
    burger.addEventListener('click',()=>{
        //Toggle nav
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }        
        });
        // Burger animation
        burger.classList.toggle('toggle')

    });
  
}
navSlide();

/*

const changePic = () => {
    const pic1 = document.querySelector('pic1');
    const pic2 = document.querySelector('pic2');
    const pics = document.querySelector('pics');
    
    nav.classList.toggle('pics');
    
}
*/