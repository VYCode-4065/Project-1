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
function MouseScroller(xscale, yscale) {
    var scrll = document.querySelector('.scroller');
    window.addEventListener("mousemove", (dets) => {
        scrll.style.left = dets.x + 'px';
        scrll.style.top = dets.y + 'px';
        scrll.style.transform = `scale(${xscale},${yscale})`;


    })
}
function SkewCircle() {
    window.addEventListener('mousemove', (dets) => {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.4, 1.6, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
        xprev = dets.clientX;
        yprev = dets.clientY;
        MouseScroller(xscale, yscale);

        timeout = setTimeout(() => {
            scrll.style.transform = `scale(1,1)`;
        }, 100);
    })
}

firstPageAnim();
MouseScroller();
SkewCircle();