import {gsap} from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);


const openingLinesTL = gsap.timeline();


export function openingLinesAnimation(){
    
    openingLinesTL.from("#line-base", {transformOrigin: "center", scaleX: 0, duration:.75})
    .to("#line-base",{duration:.5, morphSVG:"#mountains-line"}, "+=0")
    .to("#line-base",{duration:.5, morphSVG:"#line-base"}, "+=0")
    .to("#line-base",{duration:.5, morphSVG:"#dunes-line"}, "+=0")
    .to("#line-base",{duration:.5, morphSVG:"#line-base"}, "+=0")
    .to("#line-base",{duration:.5, morphSVG:"#waves-line"}, "+=0")
    .to("#line-base",{duration:.5, morphSVG:"#line-base"}, "+=0")
    .to("#line-base",{duration:.5, morphSVG:"#city-lines"}, "+=0")
    .to("#line-base",{duration:.5, morphSVG:"#line-base"}, "+=0")
    .to("#line-base",{transformOrigin: "center", scaleX: 0, duration:.5})
    .to("#logo",{transformOrigin: "center", x: -500 , y: -500, scaleX: 100, duration:.75});
    //.from("#dash-outline",{duration:.5, drawSVG:"0%"})
    //.to("#logo",{xPercent:"-50%", yPercent: "-50%"});

    return openingLinesTL;
}