import Ember from 'ember';

export default Ember.Component.extend({
  showEditComment: false,
  actions: {
    deleteComment(comment) {
      if (confirm("Are you sure you'd like to delete this comment?")) {
        this.sendAction('deleteComment', comment);
      }
    },
    showEditComment(){
      this.set("showEditComment", true);
    },
    updateComment(comment, params) {
      this.set("showEditComment", false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
