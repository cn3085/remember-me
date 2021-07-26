const { format } = require("date-fns");

const CONTENT_TYPE = {
  TEXT: "TEXT",
  PHOTO: "PHOTO",
  PAY_SEND: "PAY_SEND",
  PAY_RECEIVE: "PAY_RECEIVE",
  VOICE_TALK: "VOICE_TALK",
  VOICE_TALK_END: "VOICE_TALK_END",
};

const END_LINE_KEY = "\nBYEBYETEXTASDF";

const aDayRegex =
  /--------------- (\d{4})년 ([1-9]|[1][0-2])월 ([1-9]|[1-2][0-9]|[3][0-1])일 ([월|화|수|목|금|토|일]요일) ---------------[\n|\n\r\t|\r]((.|\n)+?)(?=--------------- (\d{4})년 ([1-9]|[1][0-2])월 ([1-9]|[1-2][0-9]|[3][0-1])일 ([월|화|수|목|금|토|일]요일) ---------------|BYEBYETEXTASDF)/gm;
const aLineRegex =
  /\[(.+)\] \[(오전|오후) (\d{1,2}:\d{1,2})\] ((.|\n)+?)(?=\[(.+)\] \[(오전|오후) (\d{1,2}:\d{1,2})\] |BYEBYETEXTASDF)/gm;

class KakaoParsedResult {
  constructor() {
    this.iam = {};
    this.talker = {};
    this.talk = {};
  }
}

// this.result = {
//   iam: {},
//   talker: {},
//   talk: {},
// };

const parse = (text) => {
  let targetText = text + END_LINE_KEY;
  let chunk;

  const result = new KakaoParsedResult();

  while ((chunk = aDayRegex.exec(targetText))) {
    let [, year, month, day, , content] = chunk;

    let date = format(new Date(year, month, day), "yyyy-MM-dd");
    result.talk[date] = [];
    let targetContent = content + END_LINE_KEY;
    parseAline(date, targetContent, result);
  }

  return result;
};

const parseAline = (date, content, result) => {
  let line;
  while ((line = aLineRegex.exec(content))) {
    let [, name, timeMark, time, talk] = line;

    result.talker[name] = {};
    result.talk[date].push({
      type: "text",
      name: name,
      time: `${timeMark} ${time}`,
      content: talk,
    });
  }
};

module.exports = { parse };
