---
name: Synthetic Ingenuity
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#009eb9'
  on-tertiary-container: '#002f38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  unit: 8px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style
The design system is engineered for a high-end creative portfolio that bridges the gap between technical precision and artistic expression. The brand personality is **Futuristic, Sophisticated, and Precise**. It targets high-value clients in the tech and creative sectors who value both clean code and high-fidelity aesthetics.

The visual style is a fusion of **Dark-Mode Glassmorphism** and **Cyber-Minimalism**. It utilizes deep layers, subtle backdrop blurs, and neon "data-trails" to evoke an interactive, living interface. The experience should feel like a premium terminal—efficient yet visually arresting.

## Colors
The palette is rooted in a **Deep Navy (#0F172A)** foundation, providing a high-contrast environment for luminous accents. 

- **Primary (Electric Blue):** Used for primary actions, progress indicators, and core brand elements.
- **Accent (Vivid Purple):** Used for hover states, secondary highlights, and breaking visual monotony.
- **Surface Strategy:** Surfaces use semi-transparent layers of the background color with a 20px blur to achieve a glass-like depth.
- **Glows:** Key interactive elements utilize a low-opacity outer glow (drop-shadow) using the primary or secondary hex values to simulate light emission.

## Typography
The typography system balances geometric futurism with utilitarian clarity.

- **Headlines:** Use **Sora** for its wide, tech-forward stance. Large display headings should use tighter letter-spacing to appear more impactful.
- **Body:** **Inter** provides maximum readability for long-form project descriptions and technical documentation.
- **Technical/Labels:** **JetBrains Mono** is utilized for metadata, tags, and snippets of code, reinforcing the "Engineer" aspect of the brand.

## Layout & Spacing
The layout follows a **Fluid Grid** model with generous margins to create an editorial, high-end feel.

- **Desktop:** 12-column grid with a maximum width of 1280px. Use 80px (stack-lg) between major sections to allow the design to "breathe."
- **Tablet:** 8-column grid with 32px margins. 
- **Mobile:** 4-column grid with 16px margins.
- **Spacing Rhythm:** All spacing (padding, margins, gaps) must be multiples of the **8px unit** to maintain mathematical harmony.

## Elevation & Depth
Depth is created through **Luminous Layering** rather than traditional shadows.

1.  **Level 0 (Background):** Solid #0F172A.
2.  **Level 1 (Cards/Panels):** Background blur (20px) with a 1px border (rgba(255, 255, 255, 0.1)). This creates the frosted glass effect.
3.  **Level 2 (Active/Hover):** Increase border opacity and add a subtle primary-colored glow (`box-shadow: 0 0 20px rgba(59, 130, 246, 0.3)`).
4.  **Z-Index:** Navigation and floating action buttons should sit at the highest z-index with a more aggressive backdrop blur (40px) to separate them from the content.

## Shapes
The shape language is **Refined and Modern**. Standard containers utilize a 0.5rem (8px) radius to maintain a sleek look. Interactive elements like buttons and chips should utilize larger radii (1rem or full pill-shaped) to distinguish them from structural layout elements.

## Components
- **Glowing Buttons:** Primary buttons should feature a subtle gradient (Primary to Accent) and a light-bloom effect on hover. Transition timings should be 300ms ease-out.
- **Glassmorphism Cards:** Use a thin 1px top-down gradient border to simulate a light source from above. Background-filter: blur(12px) is mandatory.
- **Minimalist Navigation:** A fixed header or a floating "island" at the bottom of the screen. Icons should be thin-stroke (1.5px) paired with JetBrains Mono labels.
- **Interactive Tags/Chips:** Small, pill-shaped elements with a secondary color border and a low-opacity background fill.
- **Input Fields:** Bottom-border only or very subtle ghost-outline. Focus states should trigger a neon glow underneath the input field.
- **Project Grid:** Use asymmetrical layouts for project thumbnails to break the "standard template" feel, utilizing varied aspect ratios (16:9 and 4:5).