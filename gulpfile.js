const { series, parallel, src, dest } = require('gulp');
const rimraf = require('rimraf');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const htmlmin = require('gulp-html-minifier2');

function clean(cb) {
  rimraf('public', cb);
}

function css() {
  const plugins = [
    autoprefixer({
      browsers: ['last 1 version'],
    }),
    cssnano(),
  ];
  return src('src/**/*.css')
    .pipe(postcss(plugins))
    .pipe(dest('public/'));
}

function html() {
  return src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('public/'));
}

function assets() {
  return src('src/assets/*').pipe(dest('public/assets'));
}

function publish(cb) {
  cb();
}

exports.default = series(clean, parallel(css, html, assets), publish);
