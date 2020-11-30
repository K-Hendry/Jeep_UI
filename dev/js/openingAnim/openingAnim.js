import {gsap} from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);


const openingLinesTL = gsap.timeline();


export function openingLinesAnimation(){
    
    openingLinesTL.from("#line-base", {transformOrigin: "center", scaleX: 0, duration:.75})
    .to("#line-base",{transformOrigin: "center", duration:.5, morphSVG:"#mountains-line"}, "overlap")
    .to("#line-base",{duration:.5, morphSVG:"#line-base"}, "+=0")
    .to("#line-base",{duration:.5, morphSVG:"#dunes-line"}, "+=0")
    .to("#line-base",{duration:.5, morphSVG:"#line-base"}, "+=0")
    .to("#line-base",{duration:.5, morphSVG:"#waves-line"}, "+=0")
    .to("#line-base",{duration:.5, morphSVG:"#line-base"}, "+=0")
    .to("#line-base",{duration:.5, morphSVG:"#city-lines"}, "+=0")
    .to("#line-base",{duration:.5, morphSVG:"#line-base"}, "+=0")
    .to("#line-base",{transformOrigin: "center", scaleX: 0, duration:.5})
    .from("#jeep-logo",{transformOrigin: "center", duration:.75, scaleX:0})
    //.from("#dash-outline",{duration:.5, drawSVG:"10%"})
    .to("#jeep-logo",{xPercent:"-100", yPercent: "-100", visibility: "display"});

    return openingLinesTL;
}