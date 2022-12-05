let controller = new ScrollMagic.Controller();

let timeline = new TimelineMax();

timeline
.to('.leaf',3,{y:-200})
.to('.bg1',3,{y:50},"-=3")
.fromTo(".bg1",{y:-50},{y:0,duration:3},"-=3")
.to('.content',3,{top:'0%'},"-=3") /*-=3 makes animation run at the same time */
.fromTo('.content-images',{opacity:0},{opacity:1,duration:3})
.fromTo('.text',{opacity:0},{opacity:1,duration:3});;


/* this attaches the animation affect to action of scrolling up */
let scene = new ScrollMagic.Scene({
    triggerElement:"section",
    duration:"200%",
    triggerHook:0, /*at which point do you want to trigger animation */

})
.setTween(timeline)
.setPin("section")
.addTo(controller);