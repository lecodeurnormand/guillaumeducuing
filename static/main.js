// ANIMATION 
const li = document.querySelectorAll("li");
const logo = document.querySelector(".header-logo");
const slidehome = document.querySelector(".slidehome");
const iconscroll = document.querySelector(".icon-scroll");
const underline = document.querySelectorAll(".underline");
// const TL1 = new TimelineMax({paused:true});
// TL1
// .staggerFrom(logo,1.5,{y:-30,opacity:0},0.8)
// .staggerFrom(li,1.5,{y:40,opacity:0},0.3,'-=0.2')
// .staggerFrom(slidehome,1.4,{y:280,opacity:1},0.1,'-=2.5')
// .staggerFrom(iconscroll,1,{y:40,opacity:0},0.3,'-=0.8')
// .from(underline,2,{width:0,ease:"power1.out"})

window.addEventListener('scroll',()=>{
    if(scrollY>30){
        iconscroll.classList.add('leave');
    }
    else{
        iconscroll.classList.remove('leave');
    }
})
/*window.addEventListener('scroll',()=>{

    const{scrollTop,clientHeight} = document.documentElement;

    const topElementToTopViewport = iconehand.getBoundingClientRect().top;
    const topProjet = iconeprojet.getBoundingClientRect().top;
    const topDraw = iconedraw.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topElementToTopViewport).toFixed()-
     clientHeight *0.50){iconehand.classList.add('active')}

    if(scrollTop > (scrollTop + topProjet).toFixed()-
     clientHeight *0.60){iconeprojet.classList.add('active')}

     if(scrollTop > (scrollTop + topDraw).toFixed()-
     clientHeight *0.70){iconedraw.classList.add('active')}


})*/

// const sr = ScrollReveal();
// if(myLoader()){
//     sr.reveal('h2',{
//         reset: false,
//         duration : 2000
//     });
// }

// sr.reveal('.grilleanim',{
//     origin:'left',
//     distance:'150px',
//     reset:true,
//     duration:2000
// });
// sr.reveal('.container-serv',{
//     origin:'right',
//     distance:'100px',
//     reset:true,
//     duration:2000
// });

// function burger(){
//     let burger = document.querySelector('.burger i');
//     let menu = document.querySelector('.menu');
//         burger.addEventListener('click',(e)=>{
//             e.preventDefault();
//             menu.classList.toggle('menuopen');
//             e.stopPropagation();
//         })
//     document.addEventListener('click',(e)=>{
//         if($(menu).hasClass('menuopen'));
//         menu.classList.remove('menuopen');
//     })
// }
// burger();


function myLoader(){
    let button = document.querySelector('.button');
    let frame = document.querySelector('.frame');
    let loader = document.querySelector('.loader');
    let body = document.querySelector('body');
        body.classList.add('scroll');
        window.addEventListener('scroll',()=>{
            if(scrollY>50){
                loader.classList.add('display');
                body.classList.remove('scroll');
                frame.classList.add('go');
                iconscroll.classList.add('revealIconScroll');
                slidehome.classList.add('reveal');
            }
            // TL1.play();
        })
}

// if(screen.width)
myLoader();