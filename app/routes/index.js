import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },
  actions: {
    destroyPost(post) {
      var comment_deletions = post.get('comments').map(function(comment){
        return comment.destroyRecord();
      });
      Ember.RSVP.all(comment_deletions).then(function(){
        return post.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
