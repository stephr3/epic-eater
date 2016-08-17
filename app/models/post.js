import DS from 'ember-data';

export default DS.Model.extend({
  imgurl: DS.attr(),
  title: DS.attr(),
  date: DS.attr(),
  neighborhood: DS.attr(),
  address: DS.attr(),
  price: DS.attr(),
  rating: DS.attr(),
  text: DS.attr()
});
