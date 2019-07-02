import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title() {
    return faker.company.companyName();
  },
  // afterCreate(movie, server) {
    // console.log(movie);
    // server.createList('actor', 5, { movie });
  // }
});
