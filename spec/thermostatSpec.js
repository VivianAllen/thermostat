describe('Thermostat', function() {
  describe('default temperature', function () {
    it('starts at 20 degrees', function() {
      var thermostat = new Thermostat;
      expect(thermostat.temperature()).toEqual(20);
    });
  });
  describe('temperature up function', function() {
    it('increases the temperature by 1 degree', function() {
        var thermostat = new Thermostat;
        thermostat.up();
        expect(thermostat.temperature()).toEqual(21);
    });
  });
  describe('temperature down function', function() {
    it('decreases the temperature by 1 degree', function() {
        var thermostat = new Thermostat;
        thermostat.down();
        expect(thermostat.temperature()).toEqual(19);
    });
  });

});
