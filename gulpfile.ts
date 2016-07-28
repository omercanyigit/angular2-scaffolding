
/// <reference path="typings/index.d.ts" />

"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');
const sass = require("gulp-sass");
const images = require('gulp-imagemin');

/**
 * Remove build directories.
 */
gulp.task('clean', (cb) => {
    return del(['build', 'src/app/styles/css', 'src/vendor', 'src/app/images/min'], cb);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/**
 * Scss to css
 **/
gulp.task("sass", () => {
    return gulp.src(["src/app/styles/scss/*.scss"])
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('src/app/styles/css'));
});

/**
 * Imagemin for all images
 **/
gulp.task("images", () => {
    return gulp.src(["src/app/images/*"])
        .pipe(images())
        .pipe(gulp.dest('src/app/images/min'));
});

/**
 * Imagemin watch
 **/
gulp.task("images:watch", () => {
    gulp.watch('src/app/images/*', ['images']);
});

/**
 * Copy all required libraries
 */
gulp.task("libs", () => {
    return gulp.src([
            'es6-shim/es6-shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("src/vendor/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["src/**/*.ts"]).on('change', function () {
    });
    gulp.watch(["src/**/*.html"]).on('change', function () {
    });
    gulp.watch('./src/app/styles/**/*.scss', ['sass']);
    gulp.watch('./src/app/images/**', ['images']);
});

/**
 * Build the project.
 */
gulp.task("build", ['tslint', 'sass', 'images', 'libs'], () => {
    console.log("Project is building...");
});