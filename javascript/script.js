const menuBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.links');

var clickcounter = 0;

menuBtn.addEventListener('click', () => {
    clickcounter++;
    
    if(clickcounter % 2 === 0){
        navLinks.style.transform = "translateX(200%)";
    }else{
        navLinks.style.transform = "translateX(0)";
    }
});