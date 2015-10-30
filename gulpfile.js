var gulp = require('gulp'),
    shell = require('gulp-shell'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    cp = require('child_process');

var browserSync = require('browser-sync').create();

// gulp.task('build', shell.task(['bundle exec jekyll build --watch --drafts']));
gulp.task('build', shell.task(['jekyll build --watch --drafts']));

gulp.task('serve', function () {
    browserSync.init({
        server: { baseDir: 'build/' },
        open: false
    });
});

// gulp.task('clean', function() {
//   return gulp.src(['stylesheets', 'javascripts'], {read: false})
//     .pipe(clean());
// });

// gulp.task('scripts', function() {
//   return gulp.src('src/javascripts/**/*.js')
//     //.pipe(jshint('.jshintrc'))
//     //.pipe(jshint.reporter('default'))
//     .pipe(concat('site.js'))
//     .pipe(gulp.dest('javascripts'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('javascripts'))
//     .pipe(gulp.dest('_site/javascripts'))
//     .pipe(notify({ message: 'Scripts task complete' }));
// });

gulp.task('styles', function() {
    sass('_sass/main.scss', {
            sourcemap: true
        })
        .pipe(plumber())
        .pipe(autoprefixer('last 2 version'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(minifycss())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(notify({ message: 'Styles task complete' }));
});

// gulp.task('watch', function() {
//   // Watch .sass files
//   gulp.watch('src/sass/**/*.sass', ['styles']);
//   // Watch .js files
//   gulp.watch('src/javascripts/**/*.js', ['scripts']);
//   gulp.watch(['index.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
// });
//
// gulp.task('default', ['clean'], function() {
//     gulp.start('styles', 'scripts', 'browser-sync', 'watch');
// });

gulp.task('default', ['build', 'serve'], function () {
// gulp.task('default', ['styles', 'build', 'serve'], function () {
    // gulp.watch('build/**/*.*', ['styles']);
    // gulp.watch('_site/').on('change', browserSync.reload);
});
