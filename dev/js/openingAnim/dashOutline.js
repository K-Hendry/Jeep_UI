import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

const dashOutlineTL = gsap.timeline();


export function dashOutlineAnimation(){
    
    dashOutlineTL.from("#dash-outline", {duration:2, drawSVG: 0})
    //.to("#rpm-circle", {duration:1, drawSVG: 1})
    .from("#speedometer-rpm", {duration: .25, alpha: 0})
    .from("#map-lines", {duration: .5, alpha: 0})
    .from("#arrow", {duration: .25, alpha: 0})
    .from("#NE", {duration: .25, alpha: 0})
    .from("#MODE", {duration: .25, alpha: 0})
    .from("#city", {duration: .25, alpha: 0})
    .to("#city",{duration:.35, morphSVG:"#mountains"}, "+=0")
    .to("#city",{duration:.35, morphSVG:"#waves"}, "+=0")
    .to("#city",{duration:.35, morphSVG:"#dunes"}, "+=0")
    .to("#city",{duration:.35, morphSVG:"#city"}, "+=0")
    .from("#gas-outline2", {duration: .25, alpha: 0})
    .from("#gas-cap", {duration: .25, alpha: 0})
    .from("#G", {duration: .25, alpha: 0})
    .from("#liquid", {duration: 1.75, alpha: 0, yPercent: 150, xPercent: -550, delay:0})
    .from("#jeep-top", {duration: .5, alpha: 0});

    return dashOutlineTL;
}