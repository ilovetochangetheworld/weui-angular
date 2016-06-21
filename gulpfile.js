var gulp = require('gulp');
//引入gulp组件
//js语法检查
var jshint = require('gulp-jshint');
//sass预处理
var sass = require('gulp-sass');
//文件合并
var concat = require('gulp-concat');
//js压缩
var uglify = require('gulp-uglify');
//重命名
var rename = require('gulp-rename');
//server服务
var browserSync = require('browser-sync').create();
//rev
var rev = require('gulp-rev');
//gulp非覆盖式发布
var revCollector = require('gulp-rev-collector');

var jsFiles = [
  './node_modules/angular/angular.js',
  './node_modules/angular-ui-router/release/angular-ui-router.js',
  './node_modules/angular-animate/angular-animate.js',
  './node_modules/angular-cookies/angular-cookies.js',
  './node_modules/ng-file-upload/dist/ng-file-upload-shim.min.js',
  './node_modules/ng-file-upload/dist/ng-file-upload.min.js'
];


//检查脚本
gulp.task('lint', function() {
  console.log('lint start');
  gulp.src('./app/**/*.js')
          .pipe(jshint())
          .pipe(jshint.reporter('default'));
  console.log('lint end');
})

//编译Sass
gulp.task('sass', function() {
  console.log('sass start');
  gulp.src('./app/style/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/style'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/css'));
    console.log('sass end');
});

//合并、压缩js文件
gulp.task('scripts', function() {
  console.log('scripts start');
  var scripts = gulp.src(['./app/*.js', './app/views/*/*.module.js', './app/*/*.service.js', './app/views/*/*.controller.js', './app/directive/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'))
    console.log('scripts end');
    return scripts;
});

//合并、压缩来自npm的js资源文件
gulp.task('npmscripts', function() {
  console.log('npmscripts start');
  return gulp.src(jsFiles)
  .pipe(concat('npm.js'))
  .pipe(gulp.dest('./dist/js'))
  .pipe(rename('npm.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'));
  console.log('npmscripts end');
});

// gulp.task('revend', ['scripts'], function() {
//     console.log('rev start');
//     gulp.src(['./rev/*.json', './rev/index.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
//         .pipe(revCollector())                                   //- 执行文件内css名的替换
//         .pipe(gulp.dest('./app/'));                   //- 替换后的文件输出的目录
//         console.log('rev end');
// });

//使用connect启动一个Web服务器
gulp.task('browserSync', function () {
  browserSync.init({
         server: {
             baseDir: "./app/"
         }
     });
});

//默认任务
gulp.task('default' ,function() {
  gulp.run('npmscripts','sass','scripts');
  // gulpSequence('npmscripts','sass','scripts','revend');

//监听js变化
browserSync.init({
       server: {
           baseDir: "./"
       }
   });

gulp.watch('./app/**/*.js', ['lint', 'scripts']);

gulp.watch('./app/style/*.scss', ['sass']);

gulp.watch('./app/**', function() {
       console.log('reload');
       browserSync.reload();
   });

})
