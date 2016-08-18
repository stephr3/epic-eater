import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('new-post');
  this.route('edit', {path: '/edit/:post_id'});
  this.route('post', {path: '/post/:post_id'});
});

export default Router;
