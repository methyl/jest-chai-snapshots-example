const chai = require('chai')
const jestExpect = global.expect
global.expect = chai.expect

chai.Assertion.addMethod("matchSnapshot", () =>
  jestExpect(this._obj).toMatchSnapshot()
)

