gsap.fromTo(
    ".loading-page", 
    {opacity: 1}, 
    {
        opacity: 0,
        duration: 1.5,
        delay: 2.5,
        zIndex: -1,
        CSS: {
            zIndex: -1
        }
    })


function pageTransition() {
    let tl = gsap.timeline()

    tl.to(".transition", {
        duration: 1,
        scaleY: 1,
        transformOrigin: "bottom",
        ease: "power4.inOut",
    })

    tl.to(".transition", {
        duration: 1,
        scaleY: 0,
        transformOrigin: "top",
        ease: "power4.inOut",
        delay: 0.2
    })
}

function contentAnimation() {
    let tl = gsap.timeline();
    tl.to("h1", {
        top: 0,
        duration: 2,
        ease: "power3.inOut",
        delay: 2.75
    })
}

function delay(n) {
    n = n || 0;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n)
    })
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data){
                const done = this.async();

                pageTransition();
                await delay(1000);
                done();
            },

            async enter(data) {
                contentAnimation();
            },

            async once(data){
                contentAnimation();
            }
        }
    ]
})