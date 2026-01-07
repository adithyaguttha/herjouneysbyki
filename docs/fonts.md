# Typography

## Fonts

### Playfair Display
- **Usage:** Headings, titles
- **Style:** Elegant serif, editorial feel
- **Google Fonts:** https://fonts.google.com/specimen/Playfair+Display

### Inter
- **Usage:** Body text, paragraphs, UI elements
- **Style:** Clean, modern sans-serif, highly readable
- **Google Fonts:** https://fonts.google.com/specimen/Inter

### Caveat
- **Usage:** Accent text, quotes, handwritten feel
- **Style:** Casual handwriting, cursive
- **Google Fonts:** https://fonts.google.com/specimen/Caveat

## Next.js Implementation

```tsx
import { Playfair_Display, Inter, Caveat } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});
```

## CSS Variables

```css
--font-playfair: Playfair Display, serif;
--font-inter: Inter, sans-serif;
--font-caveat: Caveat, cursive;
```
