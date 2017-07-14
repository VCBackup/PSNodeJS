 var gulp = require('gulp');

 var jsFiles = ['*.js', 'src/**/*.js'];

 gulp.task('inject', function(){
     var wiredep = require('wiredep').stream;

     return gulp.src('./ssrc/views/*.html')
     .pipe(wiredep(options))
     .pipe(gulp.dest('.src/views'))
 })