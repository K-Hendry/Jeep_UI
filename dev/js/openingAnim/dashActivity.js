import {gsap} from "gsap";

const dashActivityTL = gsap.timeline();


export function dashActivityAnimation(){
    
    dashActivityTL.to("#speed-needle", {transformOrigin: "right top", rotate: 45}, "+=.75")
    .to("#rpm-needle", {transformOrigin: "right top", rotate: 50}, "-=.75")
    .to("#arrow", {yPercent: -200, duration: 3}, "-=.95")
    .to("#speed-needle", {transformOrigin: "right top", rotate: 10}, "-=.75")
    .to("#rpm-needle", {transformOrigin: "right top", rotate: 40})
    //.to("#arrow", {yPercent: -200, duration: 3}, "-=.95")
    .to("#arrow", {transformOrigin: "center", rotate: 90}, "-=.05")
    .to("#speed-needle", {transformOrigin: "right top", rotate: 45}, "+=.75")
    .to("#rpm-needle", {transformOrigin: "right top", rotate: 50}, "-=.75")
    .to("#arrow", {xPercent: 135, duration: 2}, "-=.75")
    .to("#speed-needle", {transformOrigin: "right top", rotate: 10}, "+=.5")
    .to("#rpm-needle", {transformOrigin: "right top", rotate: 35})
    .to("#arrow", {transformOrigin: "center", rotate: 0}, "-=.05")
    .to("#arrow", {yPercent: -300, duration: 3}, "-=.5")
    .to("#speed-needle", {transformOrigin: "right top", rotate: 45}, "+=.75")
    .to("#rpm-needle", {transformOrigin: "right top", rotate: 50}, "-=.75")
    .to("#arrow", {transformOrigin: "center", rotate: 50}, "-=.75")
    .to("#arrow", {yPercent: -490, xPercent: 300, duration: 3}, "-=.5")
    .to("#arrow", {alpha: 0}, "-=.75")
    ;
    

    return dashActivityTL;
}