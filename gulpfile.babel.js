import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'
import runSequence from 'run-sequence'
import shell from 'gulp-shell'
import sass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import watch from 'gulp-watch'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import pump from 'pump'
import autoprefixer from 'gulp-autoprefixer'

gulp.task('hugo-build', shell.task(['hugo']))

gulp.task('minify-css', () => {
  return gulp.src('public/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('js', function() {
  return gulp.src([
    'public/libs/jquery/dist/jquery.min.js',
    'public/js/main.js', // Always at the end
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify()) // Mifify js (opt.)
  .pipe(gulp.dest('public/js'))
})

gulp.task('sass', function () {
  return gulp.src('static/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions']))
    .pipe(gulp.dest('static/css/'))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('stream', function () {
    gulp.watch('static/sass/*.sass', ['build'], { ignoreInitial: false });
    gulp.watch('static/js/*.js', ['build'], { ignoreInitial: false })
});

gulp.task('build', ['hugo-build'], (callback) => {
  runSequence('sass', 'js', 'minify-css', callback)
})