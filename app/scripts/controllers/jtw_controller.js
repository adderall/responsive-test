'use strict';
/* global Jtw, Ember */

Jtw.JtwController = Ember.ArrayController.extend({
    actions: {

        /**
         * Adds a new size to the viewport
         *
         * @returns {boolean}
         */
        createViewport: function () {
            var url    = this.get('url');
            var width  = this.get('width');
            var height = this.get('height');
            var title  = this.get('title');

            // checks to see if anything was input
            if (! url || ! width || ! height || ! title) {
                return false;
            }

            // checks to make sure it wasn't just a space added
            if (! url.trim() || ! width.trim() || ! height.trim() || ! title.trim()) {
                return false;
            }

            // Forces the values into integers
            width  = parseInt(width);
            height = parseInt(height);

            var rtest = this.store.createRecord('rtest', {
                width: width,
                height: height,
                url: url.trim(),
                title: title.trim()
            });

            this.set('width', '');
            this.set('height', '');
            this.set('title', '');

            document.getElementById('width').focus();

            rtest.save();
        },

        removeViewport: function(viewport) {
            viewport.deleteRecord();
            viewport.save();
        },

        changeUrl: function() {
            var model = this.get('model'),
                url = this.get('url');

            model.forEach(function(item) {
                item.set('url', url);
                item.save();
            });
        },

        insertStandard: function () {
            var rtest1 = this.store.createRecord('rtest', {
                width: 320,
                height: 480,
                url: this.get('url'),
                title: 'Phone - Portrait'
            });

            rtest1.save();

            var rtest2 = this.store.createRecord('rtest', {
                width: 480,
                height: 320,
                url: this.get('url'),
                title: 'Phone - Landscape'
            });

            rtest2.save();

            var rtest3 = this.store.createRecord('rtest', {
                width: 768,
                height: 1024,
                url: this.get('url'),
                title: 'Tablet - Portrait'
            });

            rtest3.save();

            var rtest4 = this.store.createRecord('rtest', {
                width: 1024,
                height: 768,
                url: this.get('url'),
                title: 'Tablet - Landscape'
            });

            rtest4.save();

            var rtest5 = this.store.createRecord('rtest', {
                width: 1200,
                height: 1024,
                url: this.get('url'),
                title: 'Desktop'
            });

            rtest5.save();
        }
    }
});