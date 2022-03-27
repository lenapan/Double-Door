var gulp = require('gulp');
var bs = require('browser-sync').create(); // browser-sync start --server --files "*"
gulp.task('.', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});
gulp.watch('*').on('change', bs.reload);

//1. install node js 
//2. node -v
//3. npm -v

//4. sudo npm install browser-sync
//5. browser-sync --version
//6. npm install gulp
//7. gulp .