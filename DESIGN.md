# Design System Strategy: Kinetic Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"Kinetic Editorial."** This is not a standard fitness tracker; it is a high-performance digital magazine that moves with the user. We are moving away from the "grid of tiles" approach and toward a layout that feels like a choreographed workout—dynamic, asymmetric, and powerful.

By utilizing **Lexend** for headlines, we evoke an "Athletic Tech" feel—precise yet expansive. **Plus Jakarta Sans** provides a clean, modern geometric contrast for functional reading. The system breaks the "template" look by using extreme type scales and overlapping elements that break the container bounds, mimicking the explosive movement of an athlete.

## 2. Colors & Surface Architecture
The palette is rooted in deep obsidian tones, punctuated by high-frequency accents that represent "energy bursts."

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be achieved through background shifts. For example, a profile card (`surface-container-low`) should sit on the main `background` without a stroke. Separation is a result of tonal contrast, not structural lines.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the following hierarchy to create "nested" depth:
*   **Base:** `surface` (#0e0e0e) – The gym floor.
*   **Secondary Sections:** `surface-container-low` (#131313) – Large structural areas.
*   **Interactive Cards:** `surface-container` (#1a1a1a) – The primary touchpoints.
*   **Floating Elements:** `surface-bright` (#2c2c2c) – Temporary overlays or high-priority modals.

### The "Glass & Gradient" Rule
To escape a "flat" feel, use Glassmorphism for floating navigation and action bars. Apply `surface` at 60% opacity with a `20px` backdrop blur. For primary CTAs, use a **Signature Texture**: a linear gradient transitioning from `primary_dim` (#c1ed00) to `primary` (#f4ffc9) at a 135-degree angle. This provides a "pulse" of energy that flat color cannot replicate.

## 3. Typography
The typography is the engine of this system. It should feel loud and intentional.

*   **Display (Lexend):** Use `display-lg` for big motivational numbers (e.g., "98% Match"). This should be tracked tightly (-2%) to look "heavy" and authoritative.
*   **Headlines (Lexend):** Use `headline-lg` for screen titles. Don't be afraid to let these wrap or bleed slightly off-center for an editorial look.
*   **Body (Plus Jakarta Sans):** All functional text uses `body-md`. It’s geometric and legible, providing a "tech-forward" feel that balances the aggressive headlines.
*   **Labels (Lexend):** Used for "Fitness Tags" (e.g., POWERLIFTING). Always uppercase with `0.05rem` letter spacing to mimic athletic jersey typography.

## 4. Elevation & Depth
In this system, "Elevation" is a feeling of momentum, not just a shadow.

*   **The Layering Principle:** Depth is achieved by "stacking." A `surface-container-highest` card placed over a `surface-dim` background creates a natural, soft lift.
*   **Ambient Shadows:** When an element must "float" (like a FAB), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow should feel like a soft glow of darkness, not a hard edge.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility (e.g., in input fields), use the `outline_variant` token at **15% opacity**. Never use 100% opaque lines.
*   **Kinetic Glass:** For top navigation bars, use semi-transparent `surface_container` with a heavy backdrop blur. This allows the vibrant colors of user avatars and fitness badges to "bleed" through as the user scrolls, maintaining a sense of constant movement.

## 5. Components

### Buttons
*   **Primary:** Gradient of `primary` to `primary_dim`. Roundedness: `full`. No border. High-contrast `on_primary_fixed` text.
*   **Secondary:** `surface_container_high` background with `secondary` (#00e3fd) text.
*   **States:** On press, scale the button down to `0.96` to provide tactile, "spring-loaded" feedback.

### Kinetic Chips (Fitness Goals)
*   **Style:** Use `tertiary_container` (#ff5722) for high-energy goals (e.g., "HIIT"). Roundedness: `md` (0.75rem). 
*   **Layout:** Group chips with `spacing-2` gaps. Do not use dividers between them.

### Activity Cards
*   **Rule:** Forbid divider lines. Use `spacing-6` (1.5rem) of vertical white space to separate content blocks. 
*   **Visuals:** Use high-contrast badges using `secondary` for "Social" metrics and `tertiary` for "Intensity" metrics.

### Input Fields
*   **Style:** `surface_container_lowest` background. Ghost border (15% `outline`). Focus state shifts the ghost border to 100% `primary` with a soft `primary` outer glow.

### Additional Component: The "Match-Pulse" Meter
A custom component for this app. A circular progress ring using a gradient of `secondary` to `primary`. It should sit "behind" the user's profile image to create a layered, 3D editorial effect.

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetry:** Place headlines slightly off-grid to create a sense of motion.
*   **Exaggerate Scale:** Use `display-lg` for impact. Make the numbers the hero of the page.
*   **Color-Code Energy:** Use `tertiary` (Orange) for high-intensity actions and `secondary` (Blue) for social/community actions.

### Don't:
*   **Don't use 1px borders:** It kills the premium, editorial feel. Use color shifts.
*   **Don't use "Pure" Black:** Always use the `surface` tokens (#0e0e0e) to allow for subtle depth and shadow visibility.
*   **Don't Over-Round:** Stick to the scale. Use `full` for buttons but `md` for cards to keep an "athletic edge."