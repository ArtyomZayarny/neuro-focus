# NeuroFocus — Next.js + Tailwind + i18n + Theming (Preview Landing)

## Quick start
```bash
npm i
npm run dev
```

Open http://localhost:3000 — you will be redirected to `/en`.
Try `/de` and `/ro` for German/Romanian.

### Storybook
```bash
npm run storybook
```

### Theming
Toggle Light/Dark in the top bar (saved to localStorage, applies `data-theme` to <html>).

### Customize
- Edit translations in `dictionaries/*.ts`
- Colors via CSS variables in `app/globals.css`