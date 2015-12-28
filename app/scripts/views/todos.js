/*global YeomanTutorial, Backbone, JST*/

YeomanTutorial.Views = YeomanTutorial.Views || {};

(function () {
  'use strict';

  YeomanTutorial.Views.Todos = Backbone.View.extend({

    el: '#todos-app',

    template: JST['app/scripts/templates/todos.ejs'],

    // tagName: 'div',

    // id: '',

    className: '',

    events: {
      'submit': 'createTodo'
    },

    initialize: function () {

      this.render();

      this.listenTo(this.collection, 'add', this.addTodoItem);
      this.listenTo(this.collection, 'reset', this.addAllTodoItems);

      this.collection.fetch();
    },

    render: function () {
      this.$el.html(this.template());

      return this;
    },

    createTodo: function(event) {

    },
    
    addTodoItem: function (todoItem) {

    },

    addAllTodoItems: function (todoItems) {

    }

  });

})();
