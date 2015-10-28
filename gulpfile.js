var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

// gulp.task('build', shell.task(['bundle exec jekyll build --watch --drafts']));
gulp.task('build', shell.task(['jekyll build --watch --drafts']));

gulp.task('serve', function () {
    browserSync.init({
        server: { baseDir: '_site/' },
        open: false
    });

    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);
