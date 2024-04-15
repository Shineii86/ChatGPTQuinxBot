/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var mode = Bot.getProperty("mode")
if (mode == "On") {
  Bot.sendMessage(
    "*🚧 BOT UNDER MAINTENANCE 🚧*\n\n_The bot is currently under maintenance.\nYou will receive a notification as soon as correct operation resumes._\n\n⚙️ Developed By [𝐒ʜɪɴᴇɪ 𝐍ᴏᴜᴢᴇɴ](tg://openmessage?user_id=5572081489)"
  )
} else {
  Api.getChatMember({
    chat_id: "@MaximXBots", // Replace it with your chat id
    user_id: user.telegramid,
    on_result: "/isJoined"
  })
  if (chat.just_created) {
    var statu = Libs.ResourcesLib.anotherChatRes("to", "global")
    statu.add(1)
    Api.sendMessage({
      chat_id: 5572081489, // admin tg id here
      text:
        "<b>⛱️ New Verify Request!\n\n🆔 User Telegram Id : </b><code>" +
        user.telegramid +
        "</code>\n\n<b>☣️ User First Name : </b><code>" +
        user.first_name +
        "</code>\n\n<b>♈ User Name : @" +
        user.username +
        "</b>",
      parse_mode: "html",
      reply_markup: { inline_keyboard: inline }
    })
  }
}

