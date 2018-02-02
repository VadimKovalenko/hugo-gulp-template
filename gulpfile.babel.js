import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'
import runSequence from 'run-sequence'
import shell from 'gulp-shell'
import sass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import watch from 'gulp-watch'

gulp.task('hugo-build', shell.task(['hugo']))

gulp.task('minify-html', () => {
  return gulp.src('public/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    }))
    .pipe(gulp.dest('./public'))
})

gulp.task('minify-css', () => {
  return gulp.src('public/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('sass', function () {
  return gulp.src('static/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('static/css/'))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('stream', function () {
    gulp.watch('static/sass/*.sass', ['build'], { ignoreInitial: false })
});

gulp.task('build', ['hugo-build'], (callback) => {
  runSequence('minify-html', 'sass', 'minify-css', callback)
})