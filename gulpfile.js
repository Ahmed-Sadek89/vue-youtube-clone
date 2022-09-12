const { task, dest, src, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');

task('sass', () => {
    return src([
        './src/assets/SCSS/*.scss', 
        './src/components/**/*.scss',
        './src/views/**/*.scss',
        './src/*.scss',
    ])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefix('last 4 versions'))
    .pipe(dest('./src/assets/CSS'))
    
})

task('watch', () => {
    watch([
        './src/assets/SCSS/*.scss', 
        './src/components/**/*.scss',
        './src/views/**/*.scss',
        './src/*.scss',
        'src/components/**/*.vue', 
        './src/views/**/*.vue',
        'src/App.vue'
    ],
    series('sass')
    )
})