require.config({
	// baseUrl: "js",	// 默认路径
	paths: {
		'underscore': '../lib/underscore',
		'jquery': '../lib/jquery',
		'backbone': '../lib/backbone',

		// "tag": "../lib/requirejs-plugins/tag",	// RequireJS で Riot の テンプレートファイルを読み込む
    // "css": "../lib/requirejs-plugins/css",	// RequireJS で CSS ファイルを読み込む
    "text": "../lib/requirejs-plugins/text",	// RequireJS で JSON ファイルを読み込む時が必要
    // "json": "../lib/requirejs-plugins/json",	// RequireJS で JSON ファイルを読み込む（API からデータをもらうことをシミュレーション）
	},
	shim: {
		'underscore': { exports: '_' },
		'jquery': { exports: '$' },
		'backbone': { deps: ['underscore', 'jquery'], exports: 'Backbone' }
	}
});

require([
	// 'app',
	'backbone'
], function(
	// app
) {
	'use strict';

	// Export Global Variable.
	// window.app = {};
	// window.app.router = app;

	require(['app']);

	// Backbone.history.start();	// 開始監控 url 變化
	// Backbone.history.start({pushState: true, root:"/app/"});
});
