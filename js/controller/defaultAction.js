define([

], function (

) {
  'use strict';

  var defaultAction = function () {
    console.log('404');
    location.hash = 'module2';
  };
  
  return defaultAction;
});
