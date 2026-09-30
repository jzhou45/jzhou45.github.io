# jzhou45.github.io

My personal portfolio: projects, experience, and samplingNYC.

**Live at [jzhou45.github.io](https://jzhou45.github.io)**

## About the site

A boba-themed single-page site with three pages: Home, Projects, and About. Switching pages plays a transition where milk tea pours over the screen, tapioca pearls drop in, and the drink drains away to reveal the next page. Visitors who have reduced motion turned on skip the animation.

The layout is responsive, from phone width up to wide desktop screens.

## Built with

- React 18 (Create React App)
- Plain CSS with custom properties, no UI library
- Fraunces, DM Sans, and DM Mono from Google Fonts
- GitHub Pages for hosting

## Running locally

Requires Node.js.

```sh
npm install
npm start
```

The site opens at [http://localhost:3000](http://localhost:3000).

## Deploying

Pushing to `main` deploys automatically. The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages.
