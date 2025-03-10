let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');


let sections=document.querySelector('section');
let navlinks=document.querySelector('header nav a');

window.onscroll=() => {
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset=sec.offsettop-150;
        let height=sec.offsetheight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset+ height){
            navlinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelector('header nav a[href*='+ id+']').classList.add('active')
            })
        }
        
    })
}

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
