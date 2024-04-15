/*CMD
  command: /ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🙋 𝐇ᴇʟʟᴏ 𝐓ʜᴇʀᴇ! 𝐇ᴏᴡ 𝐂ᴀɴ 𝐈 𝐀ssɪsᴛ 𝐘ᴏᴜ?

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
var key = message.length
var length = Libs.ResourcesLib.anotherChatRes("length", "global")
function canRun() {
  var lastrunat = User.getProperty("lastrunat");
  if (!lastrunat) {
    return true;
  }

  var seconds = (Date.now() - lastrunat) / 1000;

  if (seconds < 10) {
    Bot.sendMessage("♻️" + user.first_name + "! Please Wait For 10 Seconds Before Trying Again.", { is_reply: true });
    Bot.run({
      command: "/reminder",
      run_after: 10
    });
    return false;
  }
  return true;
}

if (!canRun()) {
  return;
}

User.setProperty("lastrunat", Date.now(), "integer");
Bot.sendMessage("*𝐑ᴇᴀᴅɪɴɢ 𝐐ᴜᴇsᴛɪᴏɴ 【" + message.length + "】 . . . .*", {
  on_result: "done",
  is_reply: true
});
length.add(key)
Api.sendChatAction({
  chat_id: chat.chatid,
  action: "typing"
});
HTTP.get({
  url: "https://chatgpt.apinepdev.workers.dev/?question=" + encodeURIComponent(message),
  success: "/succ"
});
var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  User.setProperty("already", "DONE", "string")
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
}





