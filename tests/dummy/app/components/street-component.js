import Ember from 'ember';
import layout from '../templates/components/street-component';

export default Ember.Component.extend({
  layout: layout,
  lat: 40.729884,
  lng: -73.990988,
  zoom:0,
  pov: {
  	heading: 165,
  	pitch: 0
  },

  panoChanged: function(){
  	Ember.Logger.debug('pano_changed happened');
  },

  linksChanged: function(){
  	Ember.Logger.debug('links_changed happened');
  },

  positionChanged: function(){
  	Ember.Logger.debug('position_changed happened');
  },

  povChanged: function(){
  	Ember.Logger.debug('pov_changed happened');
  },

  actions: {
    toggle3rd() {
      this.toggleProperty('show3rd');
    },

    panoChanged() {
      Ember.Logger.debug('pano_changed happened');
    },

    linksChanged() {
      Ember.Logger.debug('links_changed happened');
    },

    positionChanged() {
      Ember.Logger.debug('position_changed happened');
    },

    povChanged() {
      Ember.Logger.debug('pov_changed happened');
    }
  }
});
