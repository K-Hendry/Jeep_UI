import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

import {openingLinesAnimation} from "./openingAnim/openingAnim.js";

const mainTL = gsap.timeline()

mainTL.add(openingLinesAnimation());

//instantiate GSDevTools with default settings
GSDevTools.create();