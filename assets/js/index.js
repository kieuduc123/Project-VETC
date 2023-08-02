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
});



// const sectionEls = document.querySelectorAll('.section');
// const spMenus = document.querySelectorAll('.sp-menu a');
// let currentSection = 'sp1';
// window.onscroll = () =>{
//     sectionEls.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop -150;
//         let height = sec.offsetHeight;
//         currentSection = sec.id
//         if(top > offset && top < offset + height){
//             spMenus.forEach(links =>{
//                 links.classList.remove('active')
//                 document.querySelector('.sp-menu  a[href*= '+id+']').classList.add('active')
//             })
//         }


//     });
// }