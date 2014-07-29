'use strict';
/* global Jtw, Ember */

//Jtw.ApplicationAdapter = DS.FixtureAdapter.extend();

Jtw.Router.map(function() {
    this.resource('jtw', {path: '/'});
});

Jtw.JtwRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('rtest');
    }
});