var chai = require('chai');
var boolEqual = require('./index');
var expect = chai.expect;

describe('boolEqual test', function () {
	it('object test', function () {
		var obj1 = {
			key1: 1,
			key2: 7,
			key4: 6
		};
		var obj2 = {
			key2: 7,
			key4: 6,
			key1: 1
		};
		expect(boolEqual(obj1, obj2)).to.equal(true);
	});
	it('array test', function () {
		var arr1 = [
			{
				a: 1,
				b: 2
			},
			{
				j: 2,
				h: 8
			}
		];
		var arr2 = [
			{
				a: 1,
				b: 2
			},
			{
				j: 2,
				h: 8
			}
		];
		expect(boolEqual(arr1, arr2)).to.equal(true);
	});
	it('variable test', function () {
		var bool1 = true;
		var bool2 = false;
		expect.to.not.be(true);
	})
});


