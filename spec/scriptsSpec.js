describe('data for the Table', function() {

      beforeEach(function () {

      });

    it('Should be able to populate data to the html', function() {

      var Handlebars = function(person) {
        return person.firstName + " " + person.lastName;
      };

      expect(Handlebars).toBeDefined();

    });

});
