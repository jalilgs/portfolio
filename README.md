# Abdeldjalil Gouas · Portfolio

Personal portfolio of a web developer based in Oran, Algeria.

**Live site:** https://jalilgs.github.io/portfolio/

Built by hand with plain HTML, CSS and JavaScript. There is no build step and no
framework, so the site loads fast and is easy to change.

## What's inside

- A mobile-first layout that adapts from small phones (320px) to wide desktops
- Selected work with live demos and source links
- A contact form that sends mail through [EmailJS](https://www.emailjs.com/) and has a spam trap
- Keyboard-friendly navigation, visible focus styles, and reduced-motion support

## Project structure

```
index.html            page content
assets/
  css/style.css       all styles (tokens at the top)
  js/script.js        menu, scroll progress, local time, contact form
  images/             optimized WebP screenshots and portrait
  og-image.jpg        social sharing preview (1200x630)
  favicon.svg
```

## Run it locally

Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Updating the site

- **Add a CV:** put your file at `assets/cv.pdf`, then remove the `hidden` attribute from the
  "Download CV" link in `index.html`.
- **Add a featured project:** copy one `<article class="work">` block, add a screenshot to
  `assets/images/` (WebP, 1200x750), and change the text and links.
- **Change colors:** edit the variables under `:root` at the top of `assets/css/style.css`.

## Deploy

Hosted on GitHub Pages from the `main` branch.
