import { dest, src } from 'gulp';
import include from 'gulp-include';

import { browserSync } from '../gulpfile.js';

export function pages() {
	return src('./src/pages/**/*.html')
		.pipe(
			include({
				includePaths: './src/components',
			})
		)
		.pipe(dest('./src'))
		.pipe(browserSync.stream());
}
