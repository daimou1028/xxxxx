define([

], function (

) {
	'use strict';

	var Model2 = Backbone.Model.extend({

		// 模型默认的数据
		// 默认属性值
		// 读写这些属性，需要通过model.get/set接口，
		// 否则就是用toJSON返回整个对象，再不然就解剖式的使用model.attributes.xxx
		defaults: function () {
			return {
				name: "noname"
			};
		},

		// 定义一些方法
		// 自定义方法
		// 模拟http请求，这是很常规的做法了，
		// 不过这个例子没使用backbone的rest化接口
		fetch: function () {
			var o = this;
			// 可以做一些http请求
			setTimeout(function(){
				o.set({
					name: 'vivi'
				});
				// 数据返回后，使用backbone内建的trigger触发事件，
				// 通知监听者，也就是view层
				o.trigger('nameEvent');	// 向view触发事件
			}, 1000);
		}

	});

	return Model2;
});
