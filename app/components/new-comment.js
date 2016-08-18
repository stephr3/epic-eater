import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        name: this.get('name'),
        date: this.get('date'),
        text: this.get('text'),
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
      this.set('name', "");
      this.set('date', "");
      this.set('text', "");

    }
  }
});
