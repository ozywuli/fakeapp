import DS from 'ember-data';
const { Model } = DS;
import ModelValidator from 'fakeapp-client/mixins/model-validator';

export default Model.extend(
  ModelValidator, {
  title: DS.attr('string'),

  actors: DS.hasMany('actor'),
  happyWithMyRelation: DS.attr("boolean"),

	validations: {
		title: {
			presence: {
				message: "Title is required"
			}
    },
    happyWithMyRelation: {
      acceptance: true
    },
    actors: {
      relations: ['hasMany']
    }
	}
});
