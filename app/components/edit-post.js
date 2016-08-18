import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(post){
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        neighborhood: this.get('neighborhood'),
        address: this.get('address'),
        price: this.get('price'),
        rating: this.get('rating'),
        imgurl: this.get('imgurl'),
        text: this.get('text')
      };
      this.sendAction('edit', post, params);
    }
  }
});
