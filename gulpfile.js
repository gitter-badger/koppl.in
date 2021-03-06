var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    sourceMaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    minifyCSS = require('gulp-cssnano'),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    base64 = require('gulp-base64'),
    cp = require('child_process');

gulp.task('build', function (done) {
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
        // tunnel: "kopplin"
    });
});

gulp.task('img', function(tmp) {
    gulp.src(['assets/images/**/*.jpg', 'assets/images/**/*.png'])
        .pipe(plumber())
        .pipe(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('build/assets/images'))
        .pipe(gulp.dest('assets/images'));
});

gulp.task('js', function() {
    return gulp.src([
            'bower_components/trianglify/dist/trianglify.min.js',
            'bower_components/smooth-scroll/dist/js/smooth-scroll.js',
            'bower_components/clipboard/dist/clipboard.js',
            'bower_components/simple-jekyll-search/dest/jekyll-search.js',
            'bower_components/fittext/fittext.js',
            '_scripts/index.js'
        ])
        .pipe(jshint())
        .pipe(plumber())
        .pipe(concat('app.js'))
        .on('error', gutil.log)
        .pipe(gulp.dest('build/assets/js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function() {
    return gulp.src('_sass/main.scss')
        .pipe(plumber())
        .pipe(base64())
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
           browsers: ['last 2 version'],
           cascade:  true
        }))
        .on('error', gutil.log)
        .pipe(sourceMaps.write())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('build/assets/css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function() {
    gulp.watch('_scripts/**', ['js']);
    gulp.watch('_sass/**', ['css']);
    gulp.watch('assets/images/**', ['img']);
    gulp.watch([
        '_drafts/*',
        '_includes/*',
        '_layouts/*',
        '_posts/*',
        '*.{html,md}'
    ], ['rebuild']);
});

gulp.task('default', function(){
    gulp.start('css', 'js', 'browserSync', 'watch');
    // gulp.start('css', 'js', 'img', 'browserSync', 'watch');
});
