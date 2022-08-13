const { series, src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");

function compile() {
  return src("./src/components/theme-chalk/*.scss")
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(dest("./lib/theme-chalk"));
}

function copyfont() {
  return src("./src/components/theme-chalk/fonts/**")
    .pipe(cssmin())
    .pipe(dest("./lib/theme-chalk/fonts"));
}

function copyLocale() {
  return src("./src/components/locale/language/**").pipe(dest("./lib/locale"));
}

function moveMainCss() {
  return src("./lib/theme-chalk/index.css").pipe(dest("./dist/theme-chalk"));
}

exports.build = series(compile, copyfont, copyLocale, moveMainCss);
