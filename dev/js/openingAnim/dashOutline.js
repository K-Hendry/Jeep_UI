import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const dashOutlineTL = gsap.timeline();


export function dashOutlineAnimation(){
    
    //dashOutlineTL.from("#line-base", {transformOrigin: "center", scaleX: 0, duration:.75})
    // .to("#line-base",{duration:.5, morphSVG:"#mountains-line"}, "+=0")
    // .to("#line-base",{duration:.5, morphSVG:"#line-base"}, "+=0")
    // .to("#line-base",{duration:.5, morphSVG:"#dunes-line"}, "+=0")
    // .to("#line-base",{duration:.5, morphSVG:"#line-base"}, "+=0")
    // .to("#line-base",{duration:.5, morphSVG:"#waves-line"}, "+=0")
    // .to("#line-base",{duration:.5, morphSVG:"#line-base"}, "+=0")
    // .to("#line-base",{duration:.5, morphSVG:"#city-lines"}, "+=0")
    // .to("#line-base",{duration:.5, morphSVG:"#line-base"}, "+=0")
    // .to("#line-base",{transformOrigin: "center", scaleX: 0, duration:.75})
    // .from("#jeep-logo", {transformOrigin: "center", scaleX: 0, duration:.75});

    return dashOutlineTL;
}