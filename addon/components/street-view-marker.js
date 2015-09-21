/* global google */
import Ember from 'ember';
import StreetViewComponent from './street-view';

export default Ember.Component.extend({
  tagName: '',

  parentComponent: Ember.computed('property', function() {
    return this.nearestOfType(StreetViewComponent);
  }),

  panorama: Ember.computed.alias('parentComponent.panorama'),

  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      let marker = this.createMarker();
      marker.setMap(this.get('panorama'));
      this.set('marker', marker);
    });
  },

  createMarker() {
    let options = {};
    let optionsKeys = [
      'icon',
      'title'
    ];

    let lat = this.get('lat');
    let lng = this.get('lng');

    if (lat && lng) {
      options.position = {lat, lng};
    }

    optionsKeys.forEach(function(key) {
      let prop = Ember.get(this, key);
      if (prop) {
        options[key] = prop;
      }
    }, this);

    return new google.maps.Marker(options);
  },

  willDestroyElement() {
    let marker = this.get('marker');
    marker.setMap(null);
  }
});
