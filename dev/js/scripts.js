import {gsap} from "gsap";

import {openingLinesAnimation} from "./openingAnim/openingAnim.js";

const mainTL = gsap.timeline()

mainTL.add(openingLinesAnimation());