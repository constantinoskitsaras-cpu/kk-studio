# Store Image Convention

Place garment renders in:

`public/images/store/`

Recommended names (4:5 portrait crop, dark and restrained):

- `monogram-tee.jpg`
- `studio-tee.jpg`
- `dark-edition-tee.jpg`

Then add the `image` field to the matching item in `src/app/store/page.tsx`:

```ts
const collection = [
  { name: 'Monogram Tee',     detail: 'Heavyweight cotton · Lime mark',   image: '/images/store/monogram-tee.jpg' },
  { name: 'Studio Tee',       detail: 'Heavyweight cotton · Warm white',  image: '/images/store/studio-tee.jpg' },
  { name: 'Dark Edition Tee', detail: 'Heavyweight cotton · Near-black',  image: '/images/store/dark-edition-tee.jpg' },
]
```

If a path is omitted, the tile keeps the dark gradient monogram fallback. The
"Coming soon" tag stays regardless — remove it when the drop goes live.
