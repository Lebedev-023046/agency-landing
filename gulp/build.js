import { dest, series, src } from 'gulp'
import clean from 'gulp-clean'

function cleanDist() {
	return src('./build').pipe(clean())
}

function building() {
	return src(
		[
			'./src/assets/img/dist/**/*.*',
			'./src/assets/fonts/*.*',
			'./src/css/style.min.css',
			'./src/js/index.min.js',
			'./src/json/*.json',
			'./src/**/*.html',
			'!./src/components/**/*.html',
			'!./src/pages/**/*.html'
		],
		{ base: './src', encoding: false }
	).pipe(dest('./build'))
}

export const build = series(cleanDist, building)
