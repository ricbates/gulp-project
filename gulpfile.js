var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),
	coffee_src = 'components/coffee/tagline.coffee',
	js_src = [
			'components/scripts/rclick.js',
	        'components/scripts/pixgrid.js',
	        'components/scripts/tagline.js',
	        'components/scripts/template.js'
	],
	sass_src = ['components/sass/style.scss'];
	
gulp.task('log', function () {
	gutil.log('workflows are awesome!');
});

gulp.task('coffee', function () {
	gulp.src(coffee_src)
		.pipe(coffee({ bare: true})
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});

gulp.task('js', function () {
	gulp.src(js_src)
		.pipe(concat('scripts.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))	
});
gulp.task('compass', function () {
	gulp.src(sass_src)
		.pipe(compass({
			sass: 'components/sass',
			image: 'builds/development/images',
			style: 'expanded'
		}))
		.on('error', gutil.log)
		.pipe(gulp.dest('builds/development/css'))	
});

