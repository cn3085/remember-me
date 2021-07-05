const chai = require("chai");
const expect = chai.expect;

const fs = require("fs");
const FileReader = require("filereader");
const { File } = require("file-api");

describe("01. 파일 불러오기", function () {
  it("파일 불러오기", function (done) {
    //const input = document.querySelector("input[name=files]")
    //let file = input.files[0];
    //const fr = new FileReader();
    //let text;
    //fr.readAsText(file);
    //fr.onload = (e) => {
    //  text = e.target.result;
    //};
    const file = new File(
      "D:/99_PERSONAL/asdf/remember-me/test/data/kakao.txt"
    );

    const fr = new FileReader();
    let text = "";

    fr.readAsText(file);

    fr.onload = (e) => {
      text = e.target.result;
      console.log(text);
      done();
    };
  });
});
//
//
//
describe("**정규식 테스트", function () {
  const roomNameRex = /([a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]+) 님과 카카오톡 대화/gm;
  const chatDateRex =
    /--------------- (\d{4})년 ([1-9]|[1][0-2])월 ([1-9]|[1-2][0-9]|[3][0-1])일 ([월|화|수|목|금|토|일]요일) ---------------[\n|\n\r\t|\r]/gm;
  const chatLineRex_all = /\[(.+)\] \[(오전|오후) (\d{1,2}:\d{1,2})\] (.+)/gm;
  const chatLineRex_onlychar =
    /\[([a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ]+)\] \[(오전|오후) (\d{1,2}:\d{1,2})\] (.+)/gm;
  it("1-1. 이름/채팅방 정규식", function () {
    roomNameRex;
  });

  it("2-1.날짜 정규식", function () {
    chatDateRex;
  });

  it.only("3-1.사용자 이름:모든 문자", function () {
    chatLineRex_all;

    let line;

    while ((line = chatLineRex_all.exec(text))) {
      let [origin, name, timeMark, time, talk] = line;
      console.log(name, timeMark, time, talk);
    }
  });

  it("3-2.사용자 이름:특문 제외", function () {
    chatLineRex_onlychar;
  });

  it("4-1. 정규식으로 텍스트 파싱", function () {});
});
//
//
//
const text = `김태민 님과 카카오톡 대화
저장한 날짜 : 2021-06-24 09:11:52

--------------- 2021년 5월 1일 토요일 ---------------
[김태민] [오후 7:08] 사진
[김태민] [오후 7:08] 이거 2개 ㅇㄸ?
[이태주] [오후 7:27] 오케 굿
[이태주] [오후 7:27] 카카오 더치페이 보내삼
[김태민] [오후 8:24] ㄱㅊ 나중에 따로 하삼
[이태주] [오후 8:45] ㅇㅋ
--------------- 2021년 5월 3일 월요일 ---------------
[김태민] [오전 9:40] 30,400원을 받으세요.
[이태주] [오전 11:32] 30,400원 받기 완료! 받은 카카오페이머니는 송금 및 온/오프라인 결제는 물론, 투자도 가능해요.
--------------- 2021년 5월 13일 목요일 ---------------
[이태주] [오후 9:02] 보이스톡 해요
[이태주] [오후 9:03] 보이스톡 0:17
--------------- 2021년 6월 24일 목요일 ---------------
[이태주] [오전 9:11] [이태주] [오전 9:11] 안녕하세요
[이태주] [오전 9:11] 안녕히가세요`;
