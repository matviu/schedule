"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var server = require("browser-sync").create();
var run = require("run-sequence");
var del = require("del");



gulp.task("style", function() {
  return gulp.src("sass/styles.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 version"
      ]}),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.reload({stream: true}))
});

gulp.task("images", function() {
  return gulp.src("build/img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationlevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("build/img"))
})

gulp.task("serve", function() {
  server.init({
    server: {
      baseDir: "build/"
    }
  });

  gulp.watch("sass/**/*.scss", ["style"]);
  gulp.watch("*.html", ["copy-html"]);
  gulp.watch("js/**/*.js", ["copy-js"]);
  gulp.watch("img/**/*.{png,jpg,gif}", ["copy-img"])
});

gulp.task("copy", function() {
  return gulp.src([
    "fonts/**/*.{woff,woff2}",
    "img/**",
    "js/**",
    "*.html"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"))
  .pipe(server.reload({stream: true}))
});

gulp.task("copy-html", function() {
  return gulp.src([
    "*.html"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"))
  .pipe(server.reload({stream: true}))
});

gulp.task("copy-js", function() {
  return gulp.src([
    "js/**"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"))
  .pipe(server.reload({stream: true}))
});

gulp.task("copy-img", function() {
  return gulp.src([
    "img/**"
  ], {
    base: "."
  })
  .pipe(gulp.dest("build"))
  .pipe(server.reload({stream: true}))
});

gulp.task("clean", function() {
  return del("build/**/*");
});

gulp.task("build", function(fn) {
  run(
    "clean",
    "copy",
    "style",
    "images",
    fn
  );
})
