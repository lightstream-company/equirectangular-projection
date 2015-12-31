var expect = require('chai').expect;
var equi = require('./index');

describe('equirectangular-projection', function() {

  it('should project longitude', function() {
    expect(equi.projectLng(-180, 100)).to.be.equal(0);
    expect(equi.projectLng(180, 100)).to.be.equal(100);
    expect(equi.projectLng(0, 100)).to.be.equal(50);
    expect(equi.projectLng(90, 100)).to.be.equal(75);
  });

  it('should project latitude', function() {
    expect(equi.projectLat(-90, 100)).to.be.equal(0);
    expect(equi.projectLat(90, 100)).to.be.equal(100);
    expect(equi.projectLat(0, 100)).to.be.equal(50);
    expect(equi.projectLat(45, 100)).to.be.equal(75);
  });

  it('should project latitude and longitude', function() {
    expect(equi.project(-180, -90, 100)).to.be.deep.equal({
      top: 0,
      left: 0
    });
    expect(equi.project(180, 90, 100)).to.be.deep.equal({
      top: 50,
      left: 100
    });
    expect(equi.project(0, 0, 100)).to.be.deep.equal({
      top: 25,
      left: 50
    });
    expect(equi.project(0, 0, 100)).to.be.deep.equal({
      top: 25,
      left: 50
    });
  });

  it('should throw an error because longitude is out of range', function() {
    expect(function() {
      equi.projectLng(-181, 100);
    }).to.throw('longitude is not valid');

    expect(function() {
      equi.projectLng(NaN, 100);
    }).to.throw('longitude is not valid');

    expect(function() {
      equi.projectLng('bad arguments', 100);
    }).to.throw('longitude is not valid');
  });

  it('should throw an error because latitude is out of range', function() {
    expect(function() {
      equi.projectLat(91, 100);
    }).to.throw('latitude is not valid');
  });

  it('should throw an error because viewport width is missing', function(){
    expect(function() {
      equi.projectLng(91);
    }).to.throw('viewport width is not valid');
  });

});
