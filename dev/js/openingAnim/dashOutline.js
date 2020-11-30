import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const dashOutlineTL = gsap.timeline();


export function dashOutlineAnimation(){
    
    dashOutlineTL.from("#dash-outline", {duration:1, drawSVG: 0})

    return dashOutlineTL;
}