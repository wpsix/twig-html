## Twig-HTML

I made this package for my html templates to support latest twig.js. Easier to convert twig templates to html with npm scripts.

## Install

```text
npm i twig-html --save-dev
```

## Usage

Add script to your package.json like this:

```text
"scripts": {
  "html": "twig -s src/views/*.html -d src/data/*.json -o dist/"
}

Options:

-h, --help                output usage information
-V, --version             output the version number
-s, --source <directory>  define the source directory
-d, --data <path>         define the data path [optional]
-o, --output <directory>  define the output directory
```

Run the script.

```text
npm run html
```

More examples is available on the github repo.
