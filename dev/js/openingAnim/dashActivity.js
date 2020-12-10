import {gsap} from "gsap";

const dashActivityTL = gsap.timeline();


export function dashActivityAnimation(){
    
    dashActivityTL.to("#speed-needle", {transformOrigin: "center", rotate: 45})
    .to("#rpm-needle", {transformOrigin: "center", rotate: 50})
    .to("#arrow", {yPercent: -50, duration: 3});
    

    return dashActivityTL;
}