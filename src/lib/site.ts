// Single source of truth for studio identity, contact, and social links.
// Update a value here and it propagates to every consumer (footer, contact,
// contact CTA, store, root metadata, and the hero video embed).
//
// Plain data module — no 'use client' — so it can be imported by both server
// components (layout, store) and client components (footer, contact, hero).
export const site = {
  name: 'Konstantinos Kitsaras',
  // Production URL — update to the real domain at deploy (used by metadata,
  // sitemap, robots, and OG tags).
  url: 'https://konstantinoskitsaras.com',
  email: 'constantinos.kitsaras@gmail.com',
  social: {
    instagram: 'https://www.instagram.com/konstantinos.kitsaras/',
    linkedin: 'https://www.linkedin.com/in/constantinos-kitsaras-762a0513a/',
    youtube: 'https://www.youtube.com/@konstantinos.kitsaras',
    artstation: 'https://www.artstation.com/constantinos_kitsaras',
  },
  // Vimeo video id for the home hero background embed.
  vimeoId: '1203181805',
} as const
