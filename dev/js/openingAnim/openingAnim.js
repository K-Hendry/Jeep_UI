import {gsap} from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);


const openingLinesTL = gsap.timeline();


export function openingLinesAnimation(){
    
    openingLinesTL.from("#line-base", {transformOrigin: "center", scaleX: 0, duration:.75})
    .to("#line-base",{transformOrigin: "center", duration:.25, morphSVG:"#mountains-line"}, "overlap")
    //.to("#line-base",{duration:.45, morphSVG:"#line-base"}, "+=0")
    .to("#line-base",{duration:.45, morphSVG:"#dunes-line"}, "+=0")
    //.to("#line-base",{duration:.45, morphSVG:"#line-base"}, "+=0")
    .to("#line-base",{duration:.35, morphSVG:"#waves-line"}, "+=0")
    //.to("#line-base",{duration:.35, morphSVG:"#line-base"}, "+=0")
    .to("#line-base",{duration:.35, morphSVG:"#city-lines"}, "+=0")
    .to("#line-base",{duration:.35, morphSVG:"#line-base"}, "+=0")
    .to("#line-base",{transformOrigin: "center", scaleX: 0, duration:.5})
    .from("#jeep-logo",{transformOrigin: "center", duration:.75, scaleX:0})
    //.from("#dash-outline",{duration:.5, drawSVG:"10%"})
    .to("#jeep-logo",{alpha:0});

    return openingLinesTL;
}