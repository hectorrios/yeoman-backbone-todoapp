/*global YeomanTutorial, Backbone*/

YeomanTutorial.Models = YeomanTutorial.Models || {};

(function () {
  'use strict';

  YeomanTutorial.Models.Todo = Backbone.Model.extend({

    initialize: function() {
    },

    defaults: {
      title: '',
      completed: false
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    },

    toggle: function () {
      this.save({
        completed: !this.get('completed')
      });
    }
  });

})();
