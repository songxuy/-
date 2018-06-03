var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');


gulp.task('default',['hello'], function() {
    console.log('dayingyixia')
});
gulp.task('hello', function() {
    console.log('wolrd')
});
//css压缩 gulp-cssnano
gulp.task('cssnano', function() {
    return gulp.src('./src/style/main.css')//找到要压缩的文件
        .pipe(cssnano())//pipe是管道  main.css通过管道传输到下面
        .pipe(gulp.dest('./out'));//输出文件
});
//css 补全前缀gulp-autoprefixer
gulp.task('autoprefixer', () =>
    gulp.src('src/style/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],//向前几个版本
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);
//js 代码混淆  gulp-uglifyjs
gulp.task('compress', function (cb) {
            gulp.src('src/js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('dist'))
});
