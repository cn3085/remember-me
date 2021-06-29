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

  it("파일 불러오기", function () {
    const input = document.querySelector("input[name=files]");

    let file = input.files[0];

    const fr = new FileReader();
    let text;

    fr.onload = (e) => {
      text = e.target.result;
    };
  });
});
