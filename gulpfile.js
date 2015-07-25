var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var babelify = require('babelify');
var uglify = require('gulp-uglify');


gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});


gulp.task('browserify', function() {

    return browserify('./js/app.js').transform(babelify).bundle()

        // vinyl-source-stream makes the bundle compatible with gulp
        .pipe(source('bundle.js')) // Desired filename
        // Output the file
        .pipe(gulp.dest('./'))



});


gulp.task('compress', function() {
  return gulp.src('bundle.js')
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

gulp.task('reload', function() {
  gulp.src('*.html')
    .pipe(connect.reload());

  console.log('detected change');
})

gulp.task('reloadcss', function() {
  gulp.src('style.css')
    .pipe(connect.reload());
    console.log('reloading css');
})

gulp.task('watch', function() {
  gulp.watch('./*.html', ['browserify']);
  gulp.watch('js/*.js', ['browserify']);
  gulp.watch('bundle.js', ['reload']);
  gulp.watch('style.css', ['reloadcss']);
})

gulp.task('default', ['webserver', 'watch', 'browserify']);
