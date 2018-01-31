define([
  'view/view1'
], function (
  View
) {
  'use strict';

  var controller = function () {

    var view = new View();
    view.render('kenko');

  };

  return controller;
});
