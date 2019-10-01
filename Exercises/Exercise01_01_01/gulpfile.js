let gulp = require('gulp');

gulp.task('default', (done) => {
    console.log('Hello from gulp!');
    // passes a callback function as "done" to signal async completion
    done();
});