import {gsap} from "gsap";

const openingLinesTL = gsap.timeline();


export function openingLinesAnimation(){
    
    openingLinesTL.from("#intro-line", {transformOrigin: "center", scaleX: 0, duration:.5});

    return openingLinesTL;

}