import {gsap} from "gsap";

const logoRevealTL = gsap.timeline();


export function logoRevealAnimation(){
    
    logoRevealTL.from("#jeep-logo", {transformOrigin: "center", scaleX: 0, duration:.75})

    return logoRevealTL;
}