import {gsap} from "gsap";

const dashActivityTL = gsap.timeline();


export function dashActivityAnimation(){
    
    dashActivityTL.to("#speed-needle", {transformOrigin: "right top", rotate: 45}, "+=.75")
    .to("#rpm-needle", {transformOrigin: "right top", rotate: 50})
    .to("#arrow", {yPercent: -150, duration: 3}, "-=.95")
    .to("#speed-needle", {transformOrigin: "right top", rotate: 10}, "+=.75")
    .to("#rpm-needle", {transformOrigin: "right top", rotate: 40})
    .to("#arrow", {yPercent: -150, duration: 3}, "-=.95")
    ;
    

    return dashActivityTL;
}