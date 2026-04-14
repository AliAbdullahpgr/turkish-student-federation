# Design System Document: Editorial Excellence in Community Leadership

## 1. Overview & Creative North Star

### The Creative North Star: "The Academic Heritage"
This design system is built to bridge the gap between traditional community values and modern educational excellence. We are moving away from the "standard non-profit" aesthetic toward a **High-End Editorial** experience. 

The system rejects the rigid, boxed-in layouts of common templates in favor of **Intentional Asymmetry** and **Tonal Depth**. We treat the screen as a digital broadsheet—using expansive white space, sophisticated layering, and a typographic hierarchy that feels authoritative yet welcoming. By utilizing a "dark mode" primary palette paired with "paper-like" surfaces, we create a rhythmic visual journey that mirrors the prestige of a high-end academic institution.

---

## 2. Colors

The palette is rooted in deep botanical greens (`primary: #003623`) and soft, off-white neutrals (`surface: #fcf9f8`). This creates a high-contrast environment that is easy on the eyes and exudes professional stability.

### The "No-Line" Rule
To achieve a premium feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined through background color shifts. Use `surface-container-low` to distinguish a new content area from the main `surface`. 

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of fine paper.
*   **Base:** `surface` (#fcf9f8)
*   **Sections:** `surface-container-low` (#f6f3f2)
*   **Primary Cards:** `surface-container-lowest` (#ffffff) to create a subtle "pop."
*   **Interactive Elements:** Use `primary-container` (#014f35) for deep immersion.

### Signature Textures & Glassmorphism
*   **The Depth Gradient:** For Hero sections or primary CTAs, use a subtle linear gradient from `primary` (#003623) to `primary-container` (#014f35) at a 135-degree angle.
*   **Frosted Overlays:** When placing text over imagery (common in "Latest Updates"), use a glassmorphism effect: `surface` at 70% opacity with a `20px` backdrop-blur. This ensures legibility without disconnecting the content from the visual.

---

## 3. Typography

The typographic system utilizes a dual-personality approach: **Plus Jakarta Sans** for modern, high-impact displays and **Work Sans** for scholarly, legible body text.

*   **Display & Headlines (Plus Jakarta Sans):** These are the "hooks." Use `display-lg` (3.5rem) with tight letter spacing (-0.02em) to create an editorial feel.
*   **Titles & Body (Work Sans):** Chosen for its humanist qualities. `body-lg` (1rem) should maintain a generous line height (1.6) to ensure the community-oriented content remains accessible and inviting.
*   **Labels (Inter):** Used for metadata, breadcrumbs, and small utility text. It provides a functional, "engineered" contrast to the more fluid Work Sans.

---

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** A card does not need a shadow to be "above" a background; it only needs to be a lighter tone. Place a `surface-container-lowest` card on a `surface-container-high` background for a natural, soft lift.
*   **Ambient Shadows:** Where floating elements (like Modals or Floating Action Buttons) are required, use an ambient shadow: `box-shadow: 0 20px 40px rgba(0, 33, 20, 0.06);`. Note the tint—the shadow uses a hint of the `on-primary-fixed` color rather than pure black.
*   **The Ghost Border Fallback:** If a container requires a border for accessibility, use `outline-variant` (#bfc9c1) at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
*   **Primary:** Filled with `primary`, text in `on-primary`. Roundedness: `full` (pill shape).
*   **Secondary:** Ghost style. No background, `outline-variant` at 20% for the border, text in `primary`.
*   **Interactions:** On hover, primary buttons should shift to `primary-container` with a subtle `sm` elevation.

### Cards (The "Editorial Tile")
*   **Style:** No borders. Use `surface-container-lowest`.
*   **Corner Radius:** Use `xl` (1.5rem) for main feature cards and `md` (0.75rem) for smaller info tiles.
*   **Spacing:** Content within cards must have a minimum of `2rem` padding to maintain the "high-end" breathing room.

### Inputs & Fields
*   **Field Style:** Use `surface-container-high` for the input background.
*   **Active State:** Transitions to a `1px` border of `secondary` (#006d41) with a soft outer glow of the same color at 10% opacity.

### Featured Component: The "Impact Highlight"
*   For statistics (e.g., "100,000+ Attendees"), use `display-sm` for the number and `label-md` for the descriptor. Enclose them in a circular `surface-variant` container to echo the organic nature of the brand.

---

## 6. Do's and Don'ts

### Do
*   **Use Intentional Asymmetry:** Overlap an image slightly over a text container to break the "grid" feel.
*   **Embrace Negative Space:** If a section feels crowded, increase the vertical margin by 1.5x.
*   **Prioritize Hierarchy:** Ensure the `display-lg` headline is the first thing a user sees.

### Don't
*   **No Hard Dividers:** Never use a `1px` black or gray line to separate list items. Use 16px of `surface-container-low` vertical space instead.
*   **Avoid Pure Black:** Use `on-background` (#1c1b1b) for text. Pure #000000 is too harsh for the "Academic Heritage" aesthetic.
*   **Don't Square the Corners:** Avoid `none` or `sm` roundedness for primary UI containers; it feels too "corporate" and cold for a community-oriented brand. Keep to `md` and `xl`.

---

**Director's Final Note:** 
Always design for the "Read": ensure the typography flows like a well-curated journal. Every element should feel like it was placed with a specific purpose, not just snapped to a grid.