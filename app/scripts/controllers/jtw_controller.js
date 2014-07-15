'use strict';
/* global Jtw, Ember */

Jtw.JtwController = Ember.ArrayController.extend({
    actions: {
        createSize: function() {
            var size = this.get('sizes');
            if (! size) {
                return false;
            }

            if (! size.trim()) {
                return;
            }

            var sizes = size.split('x');

            var url = this.get('url');

            if (! url) {
                return false;
            }

            if (! url.trim()) {
                return false;
            }

            var rtest = this.store.createRecord('rtest', {
                width: sizes[0].trim(),
                height: sizes[1].trim(),
                url: url,
                title: 'temp'
            });

            this.set('sizes', '');

            rtest.save();
        }
    }
});