const chai = require("chai");
const expect = chai.expect;

describe("Test를 Test하는 코드", function () {
  it("성공하는 테스트", function () {
    expect(true).to.be.true;
  });

  it("비동기를 테스트", function (done) {
    let result = false;

    this.timeout(4000);

    setTimeout(() => {
      result = true;
      expect(result).to.be.true;
      done();
    }, 3000);
  });
});
