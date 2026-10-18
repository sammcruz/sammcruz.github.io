# sammcruz.github.io

Source of my personal portfolio: [sammcruz.github.io](https://sammcruz.github.io).

Plain HTML, CSS and a little JavaScript. There is no build step: push to `main` and GitHub Pages serves it.

## Layout

| Path | What it is |
|---|---|
| `index.html` | Home page: work, projects, talks, writing, background, contact |
| `projects/jobradar.html` | Case study for [traceable-jobradar-poc](https://github.com/sammcruz/traceable-jobradar-poc) |
| `styles.css`, `script.js` | Shared styles (light and dark themes) and the theme toggle |
| `hangman/` | An older browser game, kept for the record |

The remaining images in the root belong to an earlier version of the site.

## Run it locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
