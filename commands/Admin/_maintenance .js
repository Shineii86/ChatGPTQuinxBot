/*CMD
  command: /maintenance 
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 5572081489) {
  var button = [
    [
      { title: "⏸ On ", command: "/on" },
      { title: "▶️ Off", command: "/off" }
    ],
    [{ title: "Home", command: "/admin" }]
  ]
  var cur = Bot.getProperty("mode")
  Bot.sendInlineKeyboard(
    button,
    "*♻️ Select Your Choice To On/Off The Maintainace Mode.\n\n💠 Current Mode = " +
      cur +
      "*"
  )
} else {
  Bot.sendMessage(
    "*Attention* This command is exclusively for administrators. Please refrain from using it if you are not authorized.\n\n🧑🏻‍💻 *Developer* [𝐒ʜɪɴᴇɪ 𝐍ᴏᴜᴢᴇɴ](tg://openmessage?user_id=5572081489)"
  )
}

