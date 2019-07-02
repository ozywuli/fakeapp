import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveFakeModel() {
      // let fakeModel = this.store.findAll('movie');
      let fakeModel = this.store.peekRecord('movie', 1);
      console.log(fakeModel);

      if (fakeModel.validate()) {
        fakeModel.save().then(
          // Success
          () => {
            // Alert success
            console.log("ooooh yeah we just saved the FakeModel...");
          },
          // Error handling
          (error) => {
            // Alert failure
            console.log("There was a problem saving the FakeModel...");
            console.log(error);
          }
        );
      } else {
        fakeModel.get("errors");
      }
    }
  }
});
