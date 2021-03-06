'use strict';

require.config({

	baseURL: '/js',

	paths: {
		// Require.js modules
		'domReady': '../libs/require/domReady',
		'text': '../libs/require/text',

		// libs
		zepto:	'../libs/zepto/zepto.min',
		lodash:	'../libs/lodash/lodash.min',
		jszip:	'../libs/jszip/jszip.min',
		'jszip-utils': '../libs/jszip/jszip-utils.min',
		'file-saver': '../libs/FileSaver/FileSaver',
		'ace-editor': '../libs/ace-editor/ace',

		'beautify-html': '../libs/js-beautify/beautify-html',
		'beautify-css': '../libs/js-beautify/beautify-css',
		'beautify-js': '../libs/js-beautify/beautify-js',
		'beautify': '../libs/js-beautify/beautify'
	},

	shim: {
		zepto: {
			exports : '$'
		},
		'ace-editor': {
			exports : 'ace'
		},
		'templates': {
			exports : 'AppTemplate'
		}
	}
});

define(function(require, exports, module) {

	// Load Modules
	var App = require('app');

	// Init
	App.initialize();

});