# HUGO/Gulp start template

This is the tamplate for hugo static pages. In this template we are using Gulp to create /public/ folder for production with minify html/css/js
Also we can watch the changes for SASS files nad compile them into the CSS without reloading dev server or rebuild the project

## Installation and usage

Install dependencies:
```
npm install
```
Run dev server, provided by HUGO:
```
hugo server
```

###In separate terminal:

Build the project (you will get the /public/ folder):
 ```
npm run build
 ```
When edit sass files in /static/ folder, run this command to watch the changes in realtime:
 ```
npm run watch
 ```