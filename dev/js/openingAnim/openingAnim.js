import {gsap} from "gsap";

const openingLinesTL = gsap.timeline();

openingLinesTL.from("#intro-line", {scaleX: 0});

export function openingLinesAnimation(){

    return openingLinesTL;

}