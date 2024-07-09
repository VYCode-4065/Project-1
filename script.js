const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from(".navbar", {
        y: '-10',
        opacity: 0,
        delay: 1.3,
        ease: Expo.easeInOut
    })
    .to(".boundelem", {
        y: '0',
        ease: Expo.easeInOut,
        delay: -1,
        duration: 1.5,
        stagger: .3
    })
    .from(".footer", {
        y: '100%',
        ease: Expo.easeInOut,
        delay: -1,
        duration: 2,
        stagger: .3
    })
}
var xscale = 1;
var yscale = 1;
var xprev = 0;
var yprev = 0;
var scrll = document.querySelector('.scroller');
function MouseScroller(xscale, yscale) {
    
    window.addEventListener("mousemove", (dets) => {
        scrll.style.left = dets.x + 'px';
        scrll.style.top = dets.y + 'px';
        scrll.style.transform = `scale(${xscale},${yscale})`;
    })
}
function SkewCircle() {
    var timeout = 0;
    window.addEventListener('mousemove', (dets) => {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
        xprev = dets.clientX;
        yprev = dets.clientY;
        MouseScroller(xscale, yscale);

        timeout = setTimeout(() => {
            scrll.style.transform = `scale(1,1)`;
        }, 100);
    })
}

var allElem = document.querySelectorAll('.elem');
allElem.forEach((elem)=>{
    var diff = 0;
    var diffrote = 0;
    var rotate = 0;
    elem.addEventListener('mousemove',(dets)=>{
        diff = dets.clientY-elem.getBoundingClientRect().top;
        diffrote = gsap.utils.clamp(-15,15,(dets.clientX - rotate));
        rotate = dets.clientX;
        gsap.to(elem.querySelector('img'),{
            opacity:1,
            ease:Power3,
            duration:.3,
            top:diff,
            rotate:diffrote,
            left:dets.clientX
        });
    });
    elem.addEventListener('mouseleave',(dets)=>{
        gsap.to(elem.querySelector('img'),{
            opacity:0,
            ease:Power1
        });
    });
});

firstPageAnim();
MouseScroller();
SkewCircle();