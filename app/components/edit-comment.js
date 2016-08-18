import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateComment(comment) {
      var params = {
        name: this.get('name'),
        date: this.get('date'),
        text: this.get('text')
      };
      this.sendAction('updateComment', comment, params);
    },
    hideEditComment() {
      this.sendAction('hideEditComment');
    }
  }
});
