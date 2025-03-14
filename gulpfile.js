const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//Funcion que compila el codigo de SASS
function css(done){
    src('src/scss/app.scss') //Indentificar el archivo principal
        .pipe(sass()) //Compilamos sass
        .pipe(dest('build/css')) //Exprtarlo o guardarlo en una ubicacion

    done();
}
exports.css = css;