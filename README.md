# @philiprehberger/framer-motion-presets

Reusable Framer Motion animation presets, variants, and transitions.

## Installation

```bash
npm install @philiprehberger/framer-motion-presets framer-motion
```

## Usage

```tsx
import { fadeInUp, staggerContainer, staggerItem, transitions } from '@philiprehberger/framer-motion-presets';
import { motion } from 'framer-motion';

function AnimatedList({ items }) {
  return (
    <motion.ul variants={staggerContainer} initial="initial" animate="animate">
      {items.map((item) => (
        <motion.li key={item.id} variants={staggerItem}>
          {item.name}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

## Features

- Easing functions and transition presets (fast, base, slow, bounce, spring)
- Fade, scale, and slide variants with enter/exit states
- Page transition and stagger animations
- Hover/tap interaction presets
- Component-specific variants (modal, backdrop, toast, dropdown)
- Parallax, 3D transforms, and spring physics
- Scroll-reveal, morphing, and text reveal animations
- Loading animations (pulse, shimmer, skeleton)
- `prefersReducedMotion` helper for accessibility

## License

MIT
