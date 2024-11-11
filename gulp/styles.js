import { dest, src } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import concat from 'gulp-concat'
import gulpSass from 'gulp-sass'
import * as sass from 'sass'

import { browserSync } from '../gulpfile.js'

const scss = gulpSass(sass)

export function styles() {
	return src('./src/scss/main.scss')
		.pipe(concat('style.min.css'))
		.pipe(scss({ outputStyle: 'compressed' }))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'] }))
		.pipe(dest('./src/css'))
		.pipe(browserSync.stream())
}
