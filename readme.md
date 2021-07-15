## Twig-HTML

I made this package for my html templates to support latest twig.js. Easier to convert twig templates to html with npm scripts.

## How to use

Install the package.

```text
npm i twig-html --save-dev
```

Add script to your package.json like this:

```text
"scripts": {
  "html": "twig src/views/*.html --data src/data/*.json --root src/views/ --output dist/"
}
```

Run the script.

```text
npm run html
```
