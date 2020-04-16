import gulp from 'gulp';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import doiuse from 'doiuse';
import stylelint from 'stylelint';
import reporter from 'postcss-reporter';
import mixins from 'postcss-mixins';
import postcssVars from 'postcss-simple-vars';
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';
import postcssHexrgba from 'postcss-hexrgba';
import minifyCSS from 'gulp-clean-css';
import sourcemaps from 'gulp-sourcemaps';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import usemin from 'gulp-usemin';
//import concat from 'gulp-concat';

import rev from 'gulp-rev-all';

import del from 'del';
import newer from 'gulp-newer';
import size from 'gulp-size';

import imagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminJpegRecompress from 'imagemin-jpeg-recompress';

//import babel from 'gulp-babel';
//import uglify from 'gulp-uglify';
import minifyJS from 'gulp-minify';

import webpack from 'webpack-stream';

// Step 0: import package from the node modules
import browserSync from 'browser-sync';

// Step 1: lets create a browser-sync object
const server = browserSync.create();

// Step 2: define a variable for loading the html files from base directory
export const serve = (done) => {
    server.init({
        notify: false, // disable the browser sync connected notification
        // proxy: "http://localhost/ecom-php", // either by proxy url or
        server: {
            // from base directory url
            baseDir: './src',
            browser: 'chrome'
        }
    });
    done();
};

// Step 3: reload the browser if any change is detected
export const reload = (done) => {
    server.reload();
    done();
};

// Step 4: for automatically detecting our files change we can use watch
export const watchall = (done) => {
    // if a changed is detected then it will refresh the page
    console.log('CSS task running.......');
    gulp.watch('src/assets/styles/**/*.css', gulp.series(styles, cssInject, reload));
    console.log('HTML task running.......');
    gulp.watch('src/index.html', reload);
    console.log('JavaScript task running.......');
    gulp.watch('src/assets/scripts/**/*.js', gulp.series(scripts, jsInject, reload));
    // image changes
    gulp.watch(paths.images.src, gulp.series(images, reload));
    done();
}; // now run 'gulp watch' to watch the task and ctrl+c to terminate the task

// Step 5: run gulp watch for loading the task
export const watch = gulp.series(serve, watchall);

const paths = {
    styles: {
        src: 'src/assets/styles/styles.css',
        dest: 'src/temp/styles/'
    },
    scripts: {
        src: 'src/assets/scripts/App.js',
        dest: 'src/temp/scripts/'
    },
    images: {
        src: 'src/assets/images/**/*',
        dest: 'build/assets/images/',
        minOptions: {
            optimizationLevel: 5,
            interlaced: true,
            quality: 75,
            progressive: true,
            svgoPlugins: [{
                removeViewBox: true,
                cleanupIDs: false
            }],
            verbose: true
        }
    }
};

/**************** clean task ****************/
/*
 * For small tasks you can export arrow functions
 */

export const clean = () => del(['./src/temp']);

/**************** clean task end ****************/

/**************** styles task  start ****************/
/*
 * You can also declare named functions and export them as tasks
 */

export function styles() {
    let plugins = [
        stylelint(), // Enable after defining the linting rules
        doiuse({
            browsers: ['ie >= 9', 'last 2 versions']
        }),
        reporter(),
        postcssImport,
        postcssVars,
        postcssNested,
        postcssHexrgba,
        mixins,
        autoprefixer()
    ];

    return (
        gulp
        .src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(plumberError())
        .pipe(postcss(plugins))
        // .on('error', (errorInfo) => {console.error('' + errorInfo)})
        .on('error', errorLog)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dest))
        // Now we want to minify the file and as well as add a .min extention at the end
        .pipe(
            minifyCSS({
                    debug: true
                },
                (details) => {
                    console.log(`${details.name}: ${details.stats.originalSize}`);
                    console.log(`${details.name}: ${details.stats.minifiedSize}`);
                }
            )
        )
        .pipe(
            rename({
                suffix: '.min'
            })
        )
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(server.stream())
    );
}

/**************** styles task  end ****************/

/**************** error information task start ****************/
export function errorLog(errorInfo) {
    console.log('' + errorInfo);
    this.emit('end');
}

/**************** error information task end ****************/

/**************** images task start ****************/

export function images() {
    let plugins = [imageminPngquant(), imageminJpegRecompress()];
    return gulp
        .src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin(paths.images.minOptions))
        .pipe(imagemin(plugins))
        .pipe(
            size({
                showFiles: true
            })
        )
        .pipe(gulp.dest(paths.images.dest));
}

/**************** images task  end ****************/

export function scripts() {
    return (
        gulp
        .src(paths.scripts.src)
        .pipe(sourcemaps.init())
        //        .pipe(babel())
        .pipe(webpack(require('./webpack.config.js')))
        .on('error', errorLog)
        // minify js file
        .pipe(
            minifyJS({
                ext: {
                    // src:'-min.js',
                    min: '.js'
                }
            })
        )
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(sourcemaps.write('./'))
        // Step 3: where do I save my compiled JS file
        // .pipe(dest('./build'))
        // .pipe(concat('main.min.js'))
        .pipe(gulp.dest(paths.scripts.dest))
    );

}

/**************** Plumber error task ****************/

export function plumberError() {
    return plumber({
        errorHandler: function (err) {
            notify.onError({
                templateOptions: {
                    date: new Date()
                },
                title: 'Gulp error in ' + err.plugin,
                message: err.formatted
            })(err);
            this.emit('end');
        }
    });
}

// Step 1: for automatically detecting our files change we can use watch
export const watchBundle = () => {
    // if a changed is detected then it will refresh the page
    gulp.watch('build/**/*.css', reload);
    gulp.watch('build/index.html', reload);
    gulp.watch('build/**/*.js', reload);
}; // now run 'gulp watch' to watch the task and ctrl+c to terminate the task

// Step 2: defines a variable for BrowserLoading the html files from base directory
export const serveBundle = (done) => {
    server.init({
        notify: false, // disable the browser sync connected notification
        // proxy: "http://localhost/ecom-php", // either by proxy url or
        server: {
            // from base directory url
            baseDir: './build',
            browser: 'google chrome'
        }
    });
    done();
};


//3. build the index.html file for correcting link and script tag in the build directory
export const buildHtml = () => {
    return gulp.src('src/*.html')
        .pipe(usemin({
            css: [rev.revision()],
            js: [rev.revision()]
        }))
        .pipe(gulp.dest('build'));
};

//4. Copying the styles and scripts files in the build directory
// export const copyFiles = () => {
//     return gulp.src(['src/temp/**/*']).pipe(gulp.dest('build/assets/'));
// };



export const cssInject = () => {
    return gulp.src('./src/temp/styles/styles.min.css')
        .pipe(browserSync.stream());
}
export const jsInject = () => {
    return gulp.src('./src/temp/scripts/App.min.js')
        .pipe(browserSync.stream());
}

export const cleanBundle = () => del(['./build', './src/temp']);

export const cssjs = gulp.series(clean, gulp.parallel(scripts, styles), watch);
// export const bundleCSS = gulp.series(clean, styles, copyFiles, serveBundle, watchBundle);
export const bundle = gulp.series(
    cleanBundle,
    gulp.parallel(styles, scripts, images),
    buildHtml,
    // copyFiles,
    serveBundle,
    watchBundle
);

export const dist = gulp.series(
    cleanBundle,
    gulp.parallel(styles, scripts, images),
    buildHtml
);
// export const dev = gulp.series(serve, watch); // run gulp dev for development environment
// export const build = gulp.series(clean, copy, serve1, watch1);

export default watch;