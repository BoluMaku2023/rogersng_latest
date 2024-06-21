import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/all";

let containerr = useRef(null);
let image = useRef(null);
let imageReveal = CSSRulePlugin.getRule(".a-hero-video:after");
const tl = new TimelineLite();

useEffect(() => {
  tl.to(containerr, 1, { css: { visibility: "visible" } })
    .to(imageReveal, 1.3, { width: "0%", ease: Power2.easeInOut })
    .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 });
});
