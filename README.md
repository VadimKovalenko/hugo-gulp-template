# HUGO/Gulp start template

This is the template for HUGO static pages. In this template we are using Gulp to create /public/ folder for production with minify html/css/js
Also we can watch the changes for SASS and JS/HTML files and compile them into the minify CSS/JS/HTML without reloading dev server or rebuild the project

## Installation and usage

Install dependencies:
```
npm install
```
Run dev server, provided by HUGO:
```
hugo server
```

### In separate terminal:

Build the project (you will get the /public/ folder):
 ```
npm run build
 ```
When edit SASS/HTML/JS files in /static/ folder, run this command to auto-rebuild and watch the changes in realtime in browser:
 ```
npm run watch
 ```

### Additional info/TODOs:
For now minifying working only for ES5 syntax

### UPD 6 FEB 2017
Added jQuery and Bootstrap4 via (and with) the Bower package manager

### Reference:
https://ratson.name/blog/minify-hugo-generated-html/

https://gist.github.com/ratson/3fa6ed459c6770f02767