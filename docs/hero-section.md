# Hero Section Design Documentation

> "The Journey Unfolds" - A scroll-driven cinematic hero for Her Journeys by Ki

## Overview

The hero section is a scroll-driven storytelling experience that showcases Ki's travels through 4 animated scenes. As users scroll, the journey unfolds like pages of a travel journal.

---

## Creative Concept

### The Narrative
Each scroll "scene" represents a chapter in Ki's journey:
- **Scene 1**: The beginning - wanderlust awakens
- **Scene 2**: Coastal adventures - sun and sea
- **Scene 3**: Mountain escapes - finding peace in heights
- **Scene 4**: Hidden discoveries - stories untold

### Visual Style
| Aspect | Description |
|--------|-------------|
| Aesthetic | Editorial, journal-like, warm & intimate |
| Background | Cream with organic flowing SVG curves |
| Images | Polaroid-style frames with subtle shadows |
| Typography | Elegant serif headings + handwritten accents |
| Doodles | Travel icons + organic flowing decorative lines |

---

## Color Palette

```css
:root {
  /* Primary Colors */
  --cream: #FDF8F3;           /* Main background */
  --cream-dark: #F5EDE4;      /* Secondary background, cards */
  --beige: #E8DED1;           /* Borders, decorative lines */

  /* Accent Colors */
  --terracotta: #C17A5E;      /* Primary accent, CTAs, highlights */
  --terracotta-dark: #A65F45; /* Hover states */
  --sage: #9CAF88;            /* Secondary accent, nature elements */

  /* Text Colors */
  --warm-brown: #6B4D3A;      /* Body text, subtitles */
  --charcoal: #2D2926;        /* Headings, strong text */
}
```

### Usage Guide
- **Backgrounds**: Use `--cream` for main areas, `--cream-dark` for cards/sections
- **Text**: `--charcoal` for headings, `--warm-brown` for body text
- **Accents**: `--terracotta` for buttons, links, highlights
- **Decorations**: `--beige` for SVG lines, `--sage` for nature elements

---

## Typography

### Font Families
| Font | Variable | Usage |
|------|----------|-------|
| Playfair Display | `--font-playfair` | Headings, titles |
| Inter | `--font-inter` | Body text, UI elements |
| Caveat | `--font-caveat` | Handwritten accents, chapter labels |

### Font Sizes (Hero Section)
```css
/* Main title */
.hero-title: text-5xl md:text-6xl lg:text-7xl

/* Scene subtitle */
.hero-subtitle: text-xl md:text-2xl

/* Chapter accent */
.chapter-label: text-2xl (Caveat font)

/* CTA button */
.hero-cta: text-base font-medium
```

---

## The 4 Scenes

### Scene 1: "The Wanderer"
| Property | Value |
|----------|-------|
| Title | The Wanderer |
| Subtitle | Every journey begins with a single step |
| Accent | Chapter One |
| Doodles | Airplane, Compass |
| Image | Travel/wanderlust themed |

### Scene 2: "Mediterranean Dreams"
| Property | Value |
|----------|-------|
| Title | Mediterranean Dreams |
| Subtitle | Where azure waters meet golden shores |
| Accent | Chapter Two |
| Doodles | Waves, Sun, Passport Stamp |
| Image | Beach/coastal themed |

### Scene 3: "Mountain Whispers"
| Property | Value |
|----------|-------|
| Title | Mountain Whispers |
| Subtitle | Finding peace in the heights |
| Accent | Chapter Three |
| Doodles | Mountains, Dotted Path |
| Image | Mountain/adventure themed |

### Scene 4: "Hidden Gems"
| Property | Value |
|----------|-------|
| Title | Hidden Gems |
| Subtitle | Discovering stories untold |
| Accent | Chapter Four |
| Doodles | Map Pin, Postcard |
| Image | Culture/discovery themed |

---

## Animation Specifications

### Page Load Timeline

| Step | Element | Animation | Duration | Easing |
|------|---------|-----------|----------|--------|
| 1 | Background lines | Draw SVG path (strokeDashoffset) | 2s | power2.inOut |
| 2 | Title words | y: 100→0, opacity: 0→1 | 0.8s | power3.out |
| 3 | Subtitle | y: 20→0, opacity: 0→1 | 0.6s | power3.out |
| 4 | Image | scale: 0.9→1, rotation: -5→0, opacity: 0→1 | 1s | power3.out |
| 5 | Doodles | scale: 0→1, opacity: 0→1 | 0.5s | back.out(1.7) |

### Stagger Timings
- **Title words**: 0.1s between each word
- **Doodles**: 0.1s between each doodle
- **Background lines**: 0.2s between each line

### Scroll-Triggered Transitions

```
Scroll Progress: 0%--------33%--------66%--------100%
                 |          |          |          |
              Scene 1    Scene 2    Scene 3    Scene 4
```

**Transition Animation (each scene change):**
- Current scene: opacity 1→0, scale 1→0.95
- Next scene: opacity 0→1, scale 1.05→1
- Duration: Tied to scroll (scrub: 1)
- Doodles: Fade in with y offset after scene transition

### Floating Doodle Animation
```javascript
{
  y: "random(-10, 10)",
  x: "random(-5, 5)",
  rotation: "random(-5, 5)",
  duration: "random(2, 4)",
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
}
```

---

## Component Structure

```
components/hero/
├── Hero.tsx              # Main container, GSAP logic, scene orchestration
├── HeroScene.tsx         # Individual scene (title, image, doodles)
├── HeroTitle.tsx         # Animated title with word splitting
├── HeroImage.tsx         # Polaroid-style image frame
├── HeroSubtitle.tsx      # Scene description text
└── doodles/
    ├── index.ts          # Doodle registry/factory
    ├── BackgroundLines.tsx
    ├── AirplaneDoodle.tsx
    ├── CompassDoodle.tsx
    ├── DottedPath.tsx
    ├── WavesDoodle.tsx
    ├── MountainDoodle.tsx
    ├── MapPinDoodle.tsx
    └── StampDoodle.tsx
```

### Component Responsibilities

| Component | Responsibility |
|-----------|----------------|
| `Hero.tsx` | ScrollTrigger setup, pinning, scene data, page load timeline |
| `HeroScene.tsx` | Layout grid, positions text/image/doodles, manages visibility |
| `HeroTitle.tsx` | Splits text into words, wraps in spans for animation |
| `HeroImage.tsx` | Polaroid frame styling, Next.js Image optimization |
| `HeroSubtitle.tsx` | Simple styled paragraph |
| `doodles/*` | Individual SVG components with animation-ready paths |

---

## SVG Doodles Reference

### Background Lines
- 3 organic curved paths spanning full viewport width
- Decorative dots at various positions
- Uses `strokeDasharray` and `strokeDashoffset` for draw animation

### Travel Doodles
| Doodle | Size | Style |
|--------|------|-------|
| Airplane | 60x60 | Hand-drawn outline with dotted trail |
| Compass | 50x50 | Simple compass rose |
| Waves | 80x40 | Flowing wave lines |
| Mountains | 70x50 | Mountain peak outlines |
| Map Pin | 40x50 | Location marker |
| Stamp | 60x60 | Passport stamp border |
| Dotted Path | 100x20 | Animated dotted line |

### Doodle Positioning
Doodles are positioned absolutely around the image:
```javascript
const positions = [
  { top: "-10%", right: "10%", transform: "rotate(15deg)" },
  { bottom: "20%", left: "-5%", transform: "rotate(-10deg)" },
  { top: "30%", right: "-8%", transform: "rotate(5deg)" },
  { bottom: "-5%", right: "30%", transform: "rotate(-5deg)" },
];
```

---

## Customization Guide

### Changing Scene Content
Edit the `scenes` array in `Hero.tsx`:
```typescript
const scenes = [
  {
    id: 1,
    title: "Your Title Here",
    subtitle: "Your subtitle text",
    image: "/images/hero/your-image.jpg",
    accentText: "Chapter One",
    doodles: ["airplane", "compass"], // Available: airplane, compass, waves, mountains, mapPin, stamp, dottedPath
  },
  // ... more scenes
];
```

### Changing Colors
Update CSS variables in `globals.css`:
```css
:root {
  --cream: #YOUR_COLOR;
  --terracotta: #YOUR_ACCENT;
  /* etc. */
}
```

### Changing Fonts
Update `layout.tsx` with different Google Fonts:
```typescript
import { Your_Font } from "next/font/google";

const yourFont = Your_Font({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

### Adjusting Animation Timing
In `Hero.tsx`, modify the timeline:
```typescript
// Page load animation timing
loadTl.from(".hero-title .word-inner", {
  duration: 0.8,    // Change duration
  stagger: 0.1,     // Change stagger
  // ...
});

// Scroll animation speed
const scrollTl = gsap.timeline({
  scrollTrigger: {
    end: "+=300%",  // Change scroll distance (300% = 3 viewport heights)
    scrub: 1,       // Change scrub smoothness (higher = smoother)
  },
});
```

### Adding/Removing Scenes
1. Add/remove objects from the `scenes` array
2. Adjust ScrollTrigger `end` value: `+=100%` per scene
3. Example: 5 scenes = `end: "+=400%"`

### Adding New Doodles
1. Create new SVG component in `doodles/` folder
2. Export from `doodles/index.ts`:
```typescript
import NewDoodle from "./NewDoodle";
const doodleMap = {
  // existing...
  newDoodle: NewDoodle,
};
```
3. Use in scene: `doodles: ["newDoodle"]`

---

## Performance Notes

### Optimizations Applied
- Only animating `transform` and `opacity` (GPU-accelerated)
- Using `will-change` sparingly during transitions
- Lazy loading non-initial images
- ScrollTrigger with `limitCallbacks: true`
- Proper GSAP cleanup with `useGSAP` hook

### Image Guidelines
- Recommended size: 800x1000px (4:5 aspect ratio for polaroid)
- Format: WebP preferred, JPEG fallback
- Optimize images before adding to `/public/images/hero/`

---

## File Dependencies

```
lib/gsap.ts
    └── Used by: components/hero/Hero.tsx

components/hero/Hero.tsx
    ├── components/hero/HeroScene.tsx
    │   ├── components/hero/HeroTitle.tsx
    │   ├── components/hero/HeroImage.tsx
    │   ├── components/hero/HeroSubtitle.tsx
    │   └── components/hero/doodles/index.ts
    │       └── All individual doodle components
    └── components/hero/doodles/BackgroundLines.tsx

app/page.tsx
    └── components/hero/Hero.tsx
```

---

## Quick Reference

### Key Files to Edit
| What to Change | File |
|----------------|------|
| Scene content (titles, images) | `components/hero/Hero.tsx` |
| Colors | `app/globals.css` |
| Fonts | `app/layout.tsx` |
| Animation timing | `components/hero/Hero.tsx` |
| Doodle designs | `components/hero/doodles/*.tsx` |
| Image frame styling | `components/hero/HeroImage.tsx` |

### GSAP Essentials
```typescript
// Import
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

// Basic animation
gsap.to(".element", { x: 100, duration: 1 });

// Timeline
const tl = gsap.timeline();
tl.to(".first", { opacity: 1 }).to(".second", { y: 0 });

// ScrollTrigger
gsap.to(".element", {
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
  },
  x: 100,
});
```
