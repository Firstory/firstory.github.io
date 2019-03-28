const { series, parallel, src, dest } = require('gulp');
const rimraf = require('rimraf');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const htmlmin = require('gulp-html-minifier2');

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

function imageAssets() {
  return src('src/assets/*').pipe(dest('public/assets/'));
}

function configAssets() {
  return src([
    'src/browserconfig.xml',
    'src/manifest.json',
  ]).pipe(dest('public/'));
}

function faviconAssets() {
  return src('src/favicon/*').pipe(dest('public/favicon/'));
}

exports.default = series(
  parallel(css, html, imageAssets, configAssets, faviconAssets),
);
