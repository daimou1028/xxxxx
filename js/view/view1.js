define([
  'text!template/tpl1.html'
], function(
  tpl
) {
  'use strict';

  var View1 = Backbone.View.extend({
    // 指向对应的视图dom元素
    // 用的是css选择器
    el: '#container',

    initialize: function() {},

    render: function(name) {
      // 在View中可以使用this.$el获取到这个jquery风格变量
      this.$el.html(_.template(tpl, {
          name: name
      }));
    }
  });

  return View1;
});
