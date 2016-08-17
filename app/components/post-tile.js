import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm("Are you sure you'd like to delete this post?")) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
