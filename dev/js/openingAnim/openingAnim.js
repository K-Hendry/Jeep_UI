import {gsap} from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

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
    .from("#logo",{transformOrigin: "center", delay:0, scaleX: 0, duration:.5});
    

    return openingLinesTL;
}