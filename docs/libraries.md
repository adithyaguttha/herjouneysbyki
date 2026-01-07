# Animation Libraries

## Framer Motion
- **Usage:** Page transitions, component animations, gestures
- **Best for:** React/Next.js projects, declarative animations
- **Install:** `npm install framer-motion`
- **Docs:** https://www.framer.com/motion/

## GSAP (GreenSock)
- **Usage:** Scroll animations, parallax, complex timelines
- **Best for:** Advanced scroll-triggered effects, performance
- **Install:** `npm install gsap`
- **Docs:** https://gsap.com/docs/v3/

### GSAP Plugins
- **ScrollTrigger** - Scroll-based animations (included free)
- **SplitText** - Text animations (paid)

## Barba.js
- **Usage:** Page transitions between pages
- **Best for:** Smooth SPA-like transitions in multi-page sites
- **Install:** `npm install @barba/core`
- **Docs:** https://barba.js.org/

> **Note:** Barba.js works best with vanilla JS/MPA sites. For Next.js, Framer Motion is recommended for page transitions since Next.js has its own router.

## Lenis
- **Usage:** Smooth scrolling
- **Best for:** Buttery smooth scroll experience
- **Install:** `npm install lenis`
- **Docs:** https://lenis.darkroom.engineering/

---

## Quick Install All

```bash
npm install framer-motion gsap lenis @barba/core
```

## Recommended for Next.js

```bash
npm install framer-motion gsap lenis
```
(Skip Barba.js - use Framer Motion for page transitions instead)
