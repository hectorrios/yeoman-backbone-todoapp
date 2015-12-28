/*global YeomanTutorial, Backbone*/

YeomanTutorial.Collections = YeomanTutorial.Collections || {};

(function () {
  'use strict';

  YeomanTutorial.Collections.Todos = Backbone.Collection.extend({

    model: YeomanTutorial.Models.Todo,

    localStorage: new Backbone.LocalStorage('backbone-generator-todos')

  });

})();
