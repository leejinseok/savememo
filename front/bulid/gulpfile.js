const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cssbeautify = require('gulp-beautify');
const sourcemaps = require('gulp-sourcemaps');
const minify = require('gulp-minify');
const ngmin = require('gulp-ngmin');
const config = require('./config');


gulp.task('sass:app', () => {
    gulp.src(config.path.scss.app.src)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".css"
        }))
        .pipe(gulp.dest(config.dest.css));
});

gulp.task('js:app.default', () => {
    gulp.src(config.path.js.app.default.src)
        .pipe(minify({
            ext: {
                src: '-debug.js',
                min: '.min.js'
            }
        }))
        .on('error', swallowError)
        .pipe(gulp.dest(config.dest.js))
});

gulp.task('js:app.angular', () => {
    gulp.src(config.path.js.app.angular.src)
        .pipe(ngmin({dynamic: true}))
        .on('error', swallowError)
        .pipe(gulp.dest(config.dest.js))
});

gulp.task('dev', () => {
    gulp.start('exec');
    // scss build
    gulp.watch(config.path.scss.whole.src, ['sass:app']);

    // js build
    gulp.watch(config.path.js.app.default.src, ['js:app.default']);
    gulp.watch(config.path.js.app.angular.src, ['js:app.angular'])
});

gulp.task('exec', () => {
    gulp.start('sass:app');
    gulp.start('js:app.default');
    gulp.start('js:app.angular');
})

/**
 * swallowError - 에러 핸들링 (https://stackoverflow.com/questions/23971388/prevent-errors-from-breaking-crashing-gulp-watch)
 * @param  {obejct} error
 */
function swallowError (error) {
    console.log(error.toString());
    this.emit('end');
}
