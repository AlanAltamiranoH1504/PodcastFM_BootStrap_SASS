const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

//Aligerar Imagenes
const imagemin = require('gulp-imagemin');

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

//Funcion que aligera las imagenes
function imagenes(done){
    src('src/img/**/*')
        .pipe(imagemin({optimizationLevel: 3}))
        .pipe(dest('build/img'))

    done();
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;