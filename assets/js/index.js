const spMenus = document.querySelectorAll('.sp-links');
const sectionEls = document.querySelectorAll('.section');
let currentSection = 'sp1';

window.addEventListener('scroll',() =>{
    sectionEls.forEach(sectionEls => {
        if(window.scrollY >= (sectionEls.offsetTop - sectionEls.clientHeight / 3)){
            currentSection = sectionEls.id
        }
    });
    spMenus.forEach(spMenus => {
        if(spMenus.href.includes(currentSection)){
            document.querySelector('.active').classList.remove('active');
            spMenus.classList.add('active');
        }
    })
})