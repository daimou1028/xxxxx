define([
	'module/model2',
	'view/view2'
], function (
	Model,
	View
) {
	'use strict';

	// controller负责的做的事就是揉合数据，放到view中
	// 先让view用默认数据渲染，再让model去拉取最新数据，最后通过事件机制更新界面
	// 这个controller并不是backbone规范，大家可以尽情发挥
	var controller = function (name) {

		var model = new Model();
		name && model.set({
			name:name	// 设置默认的属性值
		});

		var view = new View({
			model: model
		});
		view.render();	// 利用Model定义的默认属性初始化界面
		// model.fetch();	// 拉取cgi等等，获取数据，再触发事件，界面收到消息做相应的动作

		controller.onRouteChange = function () {
			// 可以做一些销毁工作，例如view.undelegateEvents()
			console.log('change');
			view.undelegateEvents();
		};

	};

	return controller;
});
