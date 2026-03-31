# @philiprehberger/framer-motion-presets

[![CI](https://github.com/philiprehberger/framer-motion-presets/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/framer-motion-presets/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/framer-motion-presets.svg)](https://www.npmjs.com/package/@philiprehberger/framer-motion-presets)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/framer-motion-presets)](https://github.com/philiprehberger/framer-motion-presets/commits/main)

Reusable Framer Motion animation presets, variants, and transitions

## Installation

```bash
npm install @philiprehberger/framer-motion-presets framer-motion
```

## Usage

```ts
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

### Reduced Motion

Use `prefersReducedMotion()` to check if the user has enabled "prefers-reduced-motion" in their OS settings:

```ts
import { prefersReducedMotion, fadeInUp } from '@philiprehberger/framer-motion-presets';

<motion.div variants={prefersReducedMotion() ? {} : fadeInUp} />
```

## API

### Transitions & Easing

| Export | Description |
|--------|-------------|
| `easing` | Easing curves (ease, easeIn, easeOut, etc.) |
| `transitions` | Named transitions: `fast`, `base`, `slow`, `bounce`, `spring` |

### Fade / Scale / Slide Variants

All have `initial`, `animate`, and optionally `exit` states:

| Export | Animation |
|--------|-----------|
| `fadeIn` | Opacity 0 → 1 |
| `fadeInUp` / `fadeInDown` / `fadeInLeft` / `fadeInRight` | Fade + directional slide |
| `scaleIn` / `scaleInBounce` | Scale from 0 with optional bounce |
| `slideInUp` / `slideInDown` / `slideInLeft` / `slideInRight` | Slide from edge |
| `pageTransition` / `pageFade` | Full-page transitions |

### Stagger

| Export | Description |
|--------|-------------|
| `staggerContainer` | Parent with `staggerChildren` in `animate.transition` |
| `staggerItem` | Child variant for stagger lists |
| `gridStagger` / `gridItem` | Grid-aware stagger |
| `waveStagger` / `waveItem` | Wave pattern stagger |

### Component Variants

| Export | Description |
|--------|-------------|
| `modalVariants` / `backdropVariants` | Modal open/close with backdrop |
| `toastVariants` | Toast slide-in and exit |
| `dropdownVariants` | Dropdown expand/collapse |

### Interactions

| Export | Description |
|--------|-------------|
| `hoverScale` / `tapScale` / `hoverLift` | Hover and tap micro-interactions |
| `dragConstraints` / `swipeVariants` / `magnetic` | Drag and gesture presets |

### Advanced

| Export | Description |
|--------|-------------|
| `createParallax(offset)` | Parallax scroll factory |
| `flip3D` / `cube3D` / `tilt3D` | 3D transform variants |
| `springBounce` / `springElastic` / `springWobble` | Spring physics presets |
| `createScrollReveal(options)` | Scroll-triggered reveal factory |
| `morphVariants` | Shape morphing variant |
| `textReveal` | Text reveal animation |
| `createCounterAnimation(from, to)` | Animated number counter factory |
| `pulse` / `shimmer` / `skeleton` | Loading state animations |

## Development

```bash
npm install
npm run build
npm test
```

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/framer-motion-presets)

🐛 [Report issues](https://github.com/philiprehberger/framer-motion-presets/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/framer-motion-presets/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)
