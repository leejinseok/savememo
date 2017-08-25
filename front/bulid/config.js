module.exports = {
    dest: {
        js: '../static/js/',
        css: '../static/css/'
    },
    path: {
        scss: {
            whole: {
                src: './scss/**/*.scss'
            },
            app: {
                src: './scss/app.scss'
            },
            pages: {
                src: './scss/pages.scss'
            }
        },
        js: {
            whole: {
                src: './js/**/*.js'
            },
            app: {
                default: {
                    src: './js/app.js'
                },
                angular: {
                    src: './js/app.angular.js'
                }
            }
        }
    }
};
