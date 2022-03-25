const lib = require( '../src/lib')
var assert = require('assert')

describe('SumUp Tests', function () {
  describe('sum', function () {
    it('Sum array [1, 2, 3] ', function () {
      assert.equal( lib.sumArray([1, 2, 3]), 6)
    })
    it(' Empty array sum', function () {
        assert.equal( lib.sumArray([]), 0)
      })
  })

  describe('checksum', function () {
    it(' checksum 123 ', function () {
      assert.equal( lib.checksum(123), 6)
    })

    it(' checksum 987654321', function () {
      assert.equal( lib.checksum(987654321), 45)
    })
  })
})
