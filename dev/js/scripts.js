import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

import {openingLinesAnimation} from "./openingAnim/openingAnim.js";
import {dashActivityAnimation} from "./openingAnim/dashActivity.js";
import {dashOutlineAnimation} from "./openingAnim/dashOutline.js";

const mainTL = gsap.timeline()

mainTL.add(openingLinesAnimation());
mainTL.add(dashOutlineAnimation());
mainTL.add(dashActivityAnimation());



//instantiate GSDevTools with default settings
GSDevTools.create();