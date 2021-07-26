const chai = require("chai");
const expect = chai.expect;

const fs = require("fs");
const FileReader = require("filereader");
const { File } = require("file-api");
const { compareAsc, format } = require("date-fns");
const { parse } = require("./src/talk-parse/parse-util");

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
  const chatLineRex =
    /\[(.+)\] \[(오전|오후) (\d{1,2}:\d{1,2})\] ((.|\n)+?)(?=\[(.+)\] \[(오전|오후) (\d{1,2}:\d{1,2})\] |BYEBYETEXTASDF)/gm;
  const aDayRex =
    /--------------- (\d{4})년 ([1-9]|[1][0-2])월 ([1-9]|[1-2][0-9]|[3][0-1])일 ([월|화|수|목|금|토|일]요일) ---------------[\n|\n\r\t|\r]((.|\n)+?)(?=--------------- (\d{4})년 ([1-9]|[1][0-2])월 ([1-9]|[1-2][0-9]|[3][0-1])일 ([월|화|수|목|금|토|일]요일) ---------------|BYEBYETEXTASDF)/gm;
  it("1-1. 이름/채팅방 정규식", function () {
    roomNameRex;
  });

  it("2-1.날짜 정규식", function () {
    chatDateRex;
  });

  it("3-1.사용자 이름:모든 문자", function () {
    chatLineRex;
  });

  it("4-1.하루 대화", function () {
    aDayRex;
  });

  it.only("4-2. parseUtil로 파싱", function () {
    const result = parse(text);
    const result2 = parse(text2);
    const result3 = parse(text3);

    console.log(result);
    console.log(result2);
    console.log(result3);
  });
});

let text = `김태민 님과 카카오톡 대화
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
[이태주] [오전 9:11] zzzz
[이태주] [오전 9:11] 안녕히가세요`;

let text2 = `xxx 김멍멍 매니저, xxx 박왈왈 님과 카카오톡 대화
저장한 날짜 : 2021-07-21 20:30:43

--------------- 2021년 7월 20일 화요일 ---------------
이지수님이 이태주님, 이태주님, xxx 박왈왈님을 초대하였습니다.
[xxx 김멍멍 매니저] [오전 10:01] 저기요
[xxx 김멍멍 매니저] [오전 10:01] 두분
[xxx 김멍멍 매니저] [오전 10:01] 결과없나요
[이태주] [오전 10:01] 아앗
[이태주] [오전 10:01] 음성입니다
[xxx 김멍멍 매니저] [오전 10:01] 뒤질래요?
[xxx 박왈왈] [오전 10:02] 나도 나도~~
[xxx 김멍멍 매니저] [오전 10:02] 문자받은거 보내세요
[이태주] [오전 10:02] ㅋㅋㅋㅋㅋㅋ
[xxx 김멍멍 매니저] [오전 10:02] 이사님들까지
[xxx 김멍멍 매니저] [오전 10:02] 보내는데
[xxx 김멍멍 매니저] [오전 10:02] 왜안보내?
[xxx 박왈왈] [오전 10:02] 아아 ...
[xxx 박왈왈] [오전 10:02] 미안ㅠ
[이태주] [오전 10:02] 이태주님 7월 18일 코로나19유전자검출검사(PCR) 결과 음성(이상없음)입니다.

- 중앙공원임시선별검사소 -
[이태주] [오전 10:02] 아앗...
[이태주] [오전 10:02] 깜빡...
[xxx 김멍멍 매니저] [오전 10:02] 햇빛을  오래보고싶지 않나봐요 두분
[xxx 박왈왈] [오전 10:03] [Web발신]
정상혁님 2021-07-18 송파구보건소 선별진료소 코로나19유전자검출검사(PCR) 결과 음성입니다 - 송파구보건소(02-2147-3478~9)
[xxx 박왈왈] [오전 10:03] 미안합니다 ~~
[이태주] [오전 10:03] 이모티콘
[이태주] [오전 10:03] 반성합니다
[xxx 박왈왈] [오전 10:03] ㅋㅋㅋㅋㅋㅋㅋ
[xxx 박왈왈] [오전 10:03] 사죄드립니다
[xxx 김멍멍 매니저] [오전 10:03] 네네 쉬세요 그럼
[이태주] [오전 10:03] 바이바이~~~~~~
[xxx 박왈왈] [오전 10:04] 쉬어라아~~`;

let text3 = `{ 출퇴근길 개발 읽기 } #3 님과 카카오톡 대화
저장한 날짜 : 2021-07-26 14:06:29

--------------- 2021년 7월 22일 목요일 ---------------
열공님이 들어왔습니다.운영정책을 위반한 메시지로 신고 접수 시 카카오톡 이용에 제한이 있을 수 있습니다. 
[Highjune] [오전 10:27] Video to GIF with WASM

https://fireship.io/lessons/wasm-video-to-gif/
[Highjune] [오전 10:28] 삭제된 메시지입니다.
[Highjune] [오전 10:28] 삭제된 메시지입니다.
[Highjune] [오전 10:29] 줌 인터넷 - 콜라보레이션 파일럿 프로젝트(INVESTING클론코딩, Vue)

https://zuminternet.github.io/zum-front-investing-clone/
[Highjune] [오전 10:30] Elasticsearch APM 

https://cheese10yun.github.io/elk-apm-1/
아자차님이 들어왔습니다.
--------------- 2021년 7월 23일 금요일 ---------------
[Integerous] [오후 3:12] Headless UI Library란?

https://jbee.io/react/headless-concept/
.님이 들어왔습니다.
아자차님이 나갔습니다.
b님이 들어왔습니다.
하이님이 들어왔습니다.
정거장님이 들어왔습니다.
--------------- 2021년 7월 24일 토요일 ---------------
AMAT님이 들어왔습니다.
--------------- 2021년 7월 25일 일요일 ---------------
개애발님이 들어왔습니다.
[Integerous] [오후 2:36] Conomi App ReactNative -> Native 전환과 관련된 이야기

https://medium.com/naver-place-dev/conomi-app-reactnative-native-%EC%A0%84%ED%99%98%EA%B3%BC-%EA%B4%80%EB%A0%A8%EB%90%9C-%EC%9D%B4%EC%95%BC%EA%B8%B0-3dec647f2eda
.님이 들어왔습니다.`;
