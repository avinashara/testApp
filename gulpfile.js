const gulp = require('gulp');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create(); //web-server to use
var devMode = false; //dev mode flag

//Gulp Tasks :

// task to concat all the styles files into single file name main.css under dest(Destination) folder.
gulp.task('css', function () {
    gulp.src(['./src/styles/*.css']).pipe(concat('main.css')).pipe(gulp.dest('./dest/css')).pipe(browserSync.reload({
        stream: true
    }));
});

// task to concat all the javascript files into single file name main.js under dest(Destination) folder.
gulp.task('js', function () {
    gulp.src(['./src/js/*.js','./src/js/**/*.js']).pipe(concat('main.js')).pipe(gulp.dest('./dest/js')).pipe(browserSync.reload({
        stream: true
    }));
});
// task to copy all the .html file into dest folder.
gulp.task('html', function () {
    gulp.src('./src/views/*.html').pipe(gulp.dest('./dest/template')).pipe(browserSync.reload({
        stream: true
    }));
});

//build task to run all the deployable task 
gulp.task('build', function () {
    gulp.start(['css', 'js', 'html']);
});

// task to sync the browser with the code changes 
gulp.task('browser-sync', function () {
    browserSync.init(null, {
        open: true,
        server: {
            baseDir: "src",
            routes: {
                "/node_modules": "node_modules"
            }
        }
    });
});

// default task to run when gulp command fires
gulp.task('start', function () {
    devMode = true;
    gulp.start(['build', 'browser-sync']); // starts running the task
    gulp.watch("./src/styles/*.css", ["css"]);
    gulp.watch("./src/js/**/*.js", ["js"]);
    gulp.watch("./src/views/*.html", ["html"]);
});