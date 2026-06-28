# Work Image Convention

Place final project assets in:

`public/images/work/<slug>/`

Recommended names:

- `hero.jpg` for the project hero, Work card, and home frame.
- `visual-01.jpg`, `visual-02.jpg`, `visual-03.jpg`, `detail.jpg` for case study blocks.

Then update the matching project in `src/lib/projects.ts`:

```ts
heroImage: '/images/work/<slug>/hero.jpg',
images: [
  '/images/work/<slug>/visual-01.jpg',
  '/images/work/<slug>/visual-02.jpg',
  '/images/work/<slug>/visual-03.jpg',
  '/images/work/<slug>/detail.jpg',
],
```

If a path is omitted, the site keeps the dark gradient monogram fallback.
