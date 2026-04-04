# kdugue.github.io

Personal site (GitHub Pages).

**Live site:** [kdugue.github.io](https://kdugue.github.io/)

## Local preview

This site uses **directory URLs** (e.g. `/talks/`, `/work/`). Browsers do not treat those like a real server when you open HTML files with **`file://`**—links may show a folder listing instead of the page.

Run a small HTTP server from the repo root, then open **`http://localhost:8000/`**:

```bash
cd kdugue.github.io
python3 -m http.server 8000
```

Use another port if `8000` is busy:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080/` in your browser.
