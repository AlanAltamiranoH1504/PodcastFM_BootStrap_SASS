const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//Funcion que compila el codigo de SASS
function css(done){
    src('src/scss/app.scss') //Indentificar el archivo principal
        .pipe(sass()) //Compilamos sass
        .pipe(dest('build/css')) //Exprtarlo o guardarlo en una ubicacion

    done();
}

//Funcion watcher para compilacion de cambios en hojas de estilos
function dev(done){
    watch('src/scss/**/*.scss', css);
}

exports.css = css;
exports.dev = dev;