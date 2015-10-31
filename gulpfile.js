var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    sourceMaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    notify = require('gulp-notify'),
    minifyCSS = require('gulp-minify-css'),
    browserSync = require('browser-sync'),
    shell = require('gulp-shell'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    cp = require('child_process');

// gulp.task('build', function() {
//     shell.task('bundle exec jekyll build --watch --drafts');
// });

gulp.task('build', function (done) {
    browserSync.notify('Building Jekyll');
    return cp.spawn('bundle', ['exec', 'jekyll', 'build', '--drafts'], {stdio: 'inherit'})
        .on('close', done);
});

gulp.task('rebuild', ['build'], function () {
    browserSync.reload();
});

gulp.task('browserSync', ['build'], function() {
    browserSync({
        server: {
            baseDir: "build/"
        },
        open: false
    });
});

gulp.task('img', function(tmp) {
    gulp.src(['app/assets/images/**/*.jpg', 'app/assets/images/**/*.png'])
        .pipe(plumber())
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('build/assets/images'))
        .pipe(gulp.dest('app/assets/images'));
});

gulp.task('js', function() {
    return gulp.src(['app/_scripts/**/*.js'])
        .pipe(jshint())
        // .pipe(jshint.reporter('default'))
        .pipe(plumber())
        .pipe(concat('app.js'))
        .on('error', gutil.log)
        .pipe(gulp.dest('build/assets/js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/assets/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function() {
    return gulp.src('app/_sass/main.scss')
        .pipe(plumber())
        .pipe(sourceMaps.init())
        .pipe(sass({
              errLogToConsole: true
        }))
        .pipe(autoprefixer({
           browsers: ['last 2 version'],
           cascade:  true
        }))
        .on('error', gutil.log)
        .pipe(concat('main.css'))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('build/assets/css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function() {
    gulp.watch('app/_scripts/**', ['js']);
    gulp.watch('app/_sass/**', ['css']);
    gulp.watch('app/images/**', ['img']);
    gulp.watch('app/**/*.{html,markdown,md,xml,txt}', ['rebuild']);
});

gulp.task('default', function(){
    gulp.start('css', 'js', 'img', 'browserSync', 'watch');
});
