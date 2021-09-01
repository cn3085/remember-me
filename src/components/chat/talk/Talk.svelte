<script lang="ts">
  import type { TalkObject } from "../type/talk.object";

  let talkObject: TalkObject = {
    isMe: true,
    profileImage: "./profile.gif",
    talkerName: "Someone",
    content: "test content",
    time: "18:58",
  };
</script>

<li class="incoming-message message">
  <img src={talkObject.profileImage} class="message__avatar" alt="" />
  <div class="message__content">
    <span class="message__author">{talkObject.talkerName}</span>
    <span class="message__bubble"> {talkObject.content} </span>
  </div>
  <span class="message__timestamp">{talkObject.time}</span>
</li>

<style>
  .message {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
  }

  .message .message__bubble {
    background-color: #a6c0d6;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 16px -8px,
      rgba(0, 0, 0, 0.024) 0px -6px 16px -6px;
    padding: 10px 20px;
    border-radius: 30px;
    display: block;
  }
  .message__timestamp {
    font-size: 12px;
  }

  .incoming-message {
    align-self: flex-start;
  }

  .incoming-message img {
    width: 50px;
    border-radius: 15px;
    margin-right: 20px;
  }

  .incoming-message .message__timestamp {
    margin-top: 25px;
    margin-left: 10px;
  }

  .incoming-message .message__author {
    margin-bottom: 15px;
    display: block;
    font-weight: 600;
    font-size: 12px;
  }

  .incoming-message .message__bubble {
    border-top-left-radius: 0px;
    background-color: white;
  }
</style>
