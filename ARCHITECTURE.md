# Zeno Village — architecture

Journey: skippable 3.6-second dark opening → photographic forest hero and lazy fog → sticky, scroll-scrubbed photographic descent with camera motion → ivory editorial story → conceptual 3D property guide → native horizontal stay explorer → selectable adventures → night grading and procedural campfire → editorial gallery/lightbox → attributed review rotation → illustrated regional guide → mist-toned enquiry.

HTML is the content layer. GSAP only enhances visual presentation. Each WebGL slot has an IntersectionObserver and an error boundary; it unmounts far from the viewport. Mobile (700px and below) and reduced-motion use photographs and all the same controls. DPR is capped at 1.5, tree meshes are instanced, and imagery is locally served as WebP. Native scroll-snap gives touch and keyboard-accessible stay navigation without long pinned empty tracks.

The property model is artistic and not the resort's surveyed layout. Regional contour lines and markers are illustrative; directions use verified Google Maps. No asset supports an actual 360-degree room tour, so room discovery uses photography and gentle pointer tilt.

Booking has explicit arrival/departure validation, guest controls and room preference. Date values are read from FormData when submitting. The verified official contact is centralized in config/resort.ts. WhatsApp only opens a prepared enquiry; the guest sends it. Live availability remains with the official booking provider.

Optional low-volume synthesized sound is user-initiated and changes filtering between forest, water and night. It stops when the page is hidden. Reviews have pause and navigation controls; reduced-motion disables automatic rotation. All room and gallery dialogs are native HTML dialogs with keyboard containment and Escape.
