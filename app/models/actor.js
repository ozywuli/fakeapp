import DS from 'ember-data';
const { Model } = DS;
import ModelValidator from 'fakeapp-client/mixins/model-validator';

export default Model.extend(
  ModelValidator, {
  name: DS.attr('string'),
  movie: DS.belongsTo('movie'),

  validations: {
    name: {
      presence: {
        message: 'Name is required',
      }
    }
  }
});
