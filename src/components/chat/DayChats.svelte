<script lang="ts">
  const chatData = {
    iam: {
      name: "이태주",
    },
    talker: [
      {
        name: "김태민",
      },
    ],
    talk: {
      "2021-05-01": [
        {
          type: "photo",
          name: "김태민",
          time: "오후 7:08",
          content: null,
        },
        {
          type: "text",
          name: "김태민",
          time: "오후 7:08",
          content: "이거 2개 ㅇㄸ?",
        },
        {
          type: "text",
          name: "이태주",
          time: "오후 7:27",
          content: "오케 굿",
        },
      ],
      "2021-05-03": [
        {
          type: "pay-send",
          name: "김태민",
          time: "오전 9:40",
          content: "30,400원을 받으세요",
        },
        {
          type: "pay-receive",
          name: "이태주",
          time: "오전 11:32",
          content:
            "30,400원 받기 완료! 받은 카카오페이머니는 송금 및 온/오프라인 결제는 물론, 투자도 가능해요.",
        },
      ],
      "2021-05-13": [
        {
          type: "voice-talk-connect",
          name: "이태주",
          time: "오후 9:02",
          content: "보이스톡 해요",
        },
        {
          type: "voice-talk-end",
          name: "이태주",
          time: "오후 9:09",
          content: "보이스톡 0:17",
        },
      ],
    },
  };
</script>

<style>
</style>
