import { task, src, dest, series } from 'gulp';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';

// Task to minify and concatenate JS files
task('scripts', function () {
  return src('./resources/js/**/*.js') // Source JS files
    .pipe(concat('app.js'))               // Concatenate into app.js
    .pipe(uglify())                       // Minify JS
    .pipe(dest('public/js'));        // Output to public/js
});

// Task to minify CSS files
task('styles', function () {
  return src('./resources/css/**/*.css') // Source CSS files
    .pipe(concat('app.css'))                 // Concatenate into app.css
    .pipe(cleanCSS())                        // Minify CSS
    .pipe(dest('public/css'));         // Output to public/css
});

// Default task that runs both the JS and CSS tasks
task('default', series('scripts', 'styles'));