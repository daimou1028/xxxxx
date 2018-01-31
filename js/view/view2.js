define([
	'text!template/tpl2.html'
], function (
	tpl
) {
	'use strict';

	var View2 = Backbone.View.extend({
		el: '#container',

		events: {
			// 使用代理监听交互，好处是界面即使重新rander了，
			// 事件还能触发，不需要重新绑定。
			// click button等同于jQuery的$('button').on('click', function)
			// 这里绑定的就是clickSpan事件
			// 如果使用jQuery手工逐个元素绑定，当元素刷新后，事件绑定就无效了
			// 这个事件代理机制，好处是，在路由切换的时候，可以轻松移除事件监听
			'click button': 'clickSpan'
		},

		// 执行的初始化逻辑
		initialize: function () {

			// 监听事件
			// 监听nameEvent这个消息，也就是model2抛出的事件
			// 收到这个通知，就更新界面
			this.model.on('nameEvent', this.render, this);

			// console.log('AAAAA');
			// app.router.navigate("#module1", {trigger: true});
			// app.router.navigate(this.model.get("_id") + "/edit", {trigger: true});
		},

		render: function () {
			// 类似java的DAO思想，一切通过get set操作
			this.$el.html(
				_.template(
					tpl, {
						name: this.model.get('name')
					}
				)
			);
		},

		clickSpan: function (e) {
			alert('you clicked the button');
		}
	});
	return View2;
});
