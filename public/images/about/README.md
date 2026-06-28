# About Image Convention

Place the studio portrait in:

`public/images/about/`

Recommended name:

- `portrait.jpg` — shot in a 4:5 (portrait) crop, dark and restrained to match the site.

Then set the source in `src/app/about/page.tsx`:

```ts
const PORTRAIT_SRC: string | undefined = '/images/about/portrait.jpg'
```

If the path is omitted, the page keeps the dark gradient monogram fallback.
