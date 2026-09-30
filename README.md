# Zeno Village — The Journey into Zeno

A cinematic, responsive resort website built with React, the Next.js-compatible Vinext runtime, Three.js / React Three Fiber, GSAP ScrollTrigger and Lenis.

## Run locally

Requires Node.js 22.13+ and the dependencies in package-lock.json.

```powershell
npm install
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Open http://127.0.0.1:3000. `npm run build` produces the Cloudflare Worker and browser assets in `dist/`. `npm start` serves the production build locally.

## Implementation

- `components/journey.tsx`: cinematic opening, scroll journey, HTML property guide, ten-stay horizontal explorer, room detail dialog, experiences, night scene, gallery, reviews, regional guide and booking.
- `components/landscape.tsx`: lazy atmospheric fog, scroll-driven camera, instanced conceptual property model and animated fire shader / sparks.
- `app/globals.css`: editorial forest / ivory theme and dedicated mobile layouts.
- `config/resort.ts`: contact details, booking provider, check-in/out times and room inventory.
- `public/assets/manifest.json`: source records for local photography and optimized WebP derivatives.

All substantive content remains in HTML. Scenes are omitted on small screens and for reduced motion, mounted only near the viewport, and protected by an error boundary. WebGL does not control booking. Room photographs use object-fit: contain. Gallery supports keyboard arrows, Escape and touch swipes. Native dialogs contain keyboard focus. The mobile menu traps focus and restores it on close.

## Content and booking

Room categories, amenities, contact, facilities, arrival times and short attributed guest review excerpts were checked against https://www.zenovillage.com/ on 2026-09-30. Regional destinations additionally reference Kerala Tourism. Photography belongs to its respective owner. The property and regional guides are conceptual, not geographic layouts.

WhatsApp enquiry composes the dates, adults, children and chosen stay for the guest to send. No message is sent automatically. Availability opens the official Zotel booking flow; it is not a live API integration, and selected dates are not injected into undocumented provider parameters. No prices, ratings, availability or review counts are invented. Email is null because it was not verified. Optional sound is synthesized ambience, initially off, with environmental filtering and automatic suspension when the page is hidden.

The source website includes some marketing illustrations. The downloaded trekking/campfire illustrations were excluded from the experience. The night scene uses a real forest photograph with a dark treatment and a procedural fire, not an asserted photograph of a particular night.

## Verification

- TypeScript `--noEmit`: passes.
- Production build: passes (the lazy Three.js chunk exceeds the bundler advisory threshold; it is not in the initial page chunk).
- Browser layout checks at 360, 375, 390 and 430px: no page horizontal overflow.
- Mobile menu, room detail, selected-room transfer to enquiry, gallery next/previous and Escape: checked.
- Invalid checkout date: rejected; checkout minimum advances to the day after arrival.
- No current runtime errors after preview restart.
- No reservation or WhatsApp message submitted during testing.

## Publishing status

This checkout belongs to the existing Site recorded in `.openai/hosting.json`. It was opened successfully through the Sites workflow. The installed Sites plugin directory became unavailable during this session, so its required source/archive publishing workflow could not be completed. No hosted URL is claimed. Source and the production build remain available locally; restore the Sites plugin to resume the registered Site's private publication without changing its audience.
