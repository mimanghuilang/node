const assert = require('assert');
const domain = require('domain')
d1 = domain.create();
// d1.on('error',function (err) {
//     console.log(err);
// })
// d1.run(function () {
//     assert.equal(1,1,'不相等')
// })
assert.equal(1,1,'不相等')
assert.strictEqual(1,1,'不相等')
assert.notStrictEqual(1,3,'不相等')
assert.ok(-1,'ok')
// assert.ok(false,'ok')
console.log(Number(true))
// console.log(assert)
assert.throws(function () {
    throw new Error('this is a error')
},'我错了吗')

const crypto = require('crypto');
console.log(crypto.getCiphers())
console.log(crypto.getHashes())