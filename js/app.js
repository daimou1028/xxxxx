define([
	// 'view/view1',
	// 'module/model2',
	// 'view/view2',
	// 'backbone'
], function (
	// View1,
	// Model2,
	// View2
) {
	'use strict';

	var routesMap = {
		// ''           : 'modules/index',
		// 'mypage'     : 'modules/mypage',
		// 'blog(/:id)' : 'modules/blog',

		// 'hoge': 'hoge',	// #hoge
		// 'hoge/:id': 'hoge',	// #hoge/1
		// 'hoge/:id': 'hoge',	// #hoge/1
		// 'hoge/:id/:title': 'hoge',	// #hoge/1/foo
		// 'hoge/:id/archive/:day': 'hoge',	// #moge/category/2/foo
		// 'moge': 'moge',	// #moge
		// 'moge/:id/:name': 'moge',	// #moge/2
		// 'moge/:id/*splat': 'moge',	// #moge/2/foo/bar/piyo/piyo
		// 'moge/:id(/:title)': 'moge',	// #moge/2/bar
		// 'moge/category/:id/:title': 'moge',	// #moge/category/2/foo

		// '' : 'modules/main',	//	/
		// 'topic' : 'modules/renderList',	// /#topic
		// 'topic/:id' : 'modules/renderDetail',	// /#topic/1023

		// 'module1': 'module1',
		// 'module2(/:name)': 'module2',
		// '*actions': 'defaultAction'

		// 原来应该是一个方法名，这里取巧改为模块路径
		'module1': 'controller/controller1',
		'module2(/:name)': 'controller/controller2',
		'*actions': 'controller/defaultAction',

		// '*error' : 'modules/renderError'
	};

	var Router = Backbone.Router.extend({

		routes: routesMap,

		// 路由初始化可以做一些事
		initialize: function () {



		},

		// initialize: function(options) {
		// 	this.mainApp = options.mainApp;
    // },
		// hoge: function() {
		// hoge: function(id) {
		// hoge: function(id) {
		// hoge: function(id, title) {
		// hoge: function(id, day) {
		// 	this.mainApp.hoge(id);
		// 	this.mainApp.hoge(id, title);
		// 	this.mainApp.hoge(id, day);
		// },
		// moge: function() {
		// moge: function(id, name) {
		// moge: function(id, splat) {
		// moge: function(id, title) {
		// moge: function(id, title) {
		// 	this.mainApp.moge(id, splat);
		// 	this.mainApp.moge(id, title);
		// 	this.mainApp.moge(id, title);
		// },

		// index: function index() {
		// 	// ハッシュなしでアクセスされたときの処理を書く
		// 	console.log('index', arguments);
		// },
		//
		// mypage: function mypage() {
		// 	// #mypageでアクセスされたときの処理を書く
		// 	console.log('mypage', arguments);
		// },
		//
		// blog: function blog(id) {
		// 	// #blog（または#blog/123など）でアクセスされたときの処理を書く
		// 	console.log('blog', arguments);
		// },

		// module1: function() {
		// 	var url = 'controller/controller1';
		// 	// 这里不能用模块依赖的写法，而改为url的写法，是为了grunt requirejs打包的时候断开依赖链，分开多个文件
		// 	// 关键的关键，这里使用了url，而且是独立变量的方式配置模块的js
		// 	require([url], function (controller) {
		// 		controller();
		// 	});
		// },
		//
		// // name跟路由配置里边的:name一致
		// module2: function(name) {
		// 	var url = 'controller/controller2';
		// 	require([url], function (controller) {
		// 		controller(name);
		// 	});
		// },
		//
		// defaultAction: function () {
		// 	console.log('404');
		// 	location.hash = 'module2';
		// }

	});

	// var View = Backbone.View.extend({
	// 	hoge: function(id, day) {
	// 		// #hoge/1 clicked
	// 		console.log('#hoge clicked');
	// 		console.log('#hoge/' + id + ' clicked');
	// 		console.log('#hoge/' + id + ' clicked');
	// 		console.log('#hoge/' + id + '/' + title + ' clicked');
	// 		console.log('#hoge/' + id + 'archive/' + day + ' clicked');
	// 	},
	// 	moge: function(id, title) {
	// 		// #moge/2 clicked
	// 		console.log('#moge clicked');
	// 		console.log('#moge/' + id + '/' + name ' clicked');
	// 		console.log('#moge/' + id + '/' + splat + ' clicked');
	// 		console.log('#moge/' + id + '/' + title + ' clicked');
	// 		console.log('#moge/category/' + id + '/title' + ' clicked');
	// 	}
	// });

	var router = new Router();
	// var router = new Router({ mainApp: new View() });

	// 彻底用on route接管路由的逻辑，这里route是路由对应的value
	// 善用一下这个接口，及时做一下事件解绑和一些清理工作
	router.on('route', function (route, params) {

		require([route], function (controller) {
			var currentController = router.currentController;
			if (currentController && currentController !== controller) {
				currentController.onRouteChange && currentController.onRouteChange();
			}
			router.currentController = controller;
			// 每个模块约定都返回controller
			controller.apply(null, params);
		});

		console.log('hash change', arguments);	// 这里route是路由对应的方法名
	});

	// return router;	// 这里必须的，让路由表执行

	// Export Global Variable.
	window.app = {};
	window.app.router = router;

	$(function() {
		Backbone.history.start();	// 開始監控 url 變化
		// Backbone.history.start({ root: "/" });
		// Backbone.history.start({pushState: true, root:"/app/"});
	});

});
