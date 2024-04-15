/*CMD
  command: /off
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
  Bot.setProperty("mode", "Off", "string")
  Api.sendSticker({
    sticker:
      "CAACAgUAAxkBAAEESahmCh-59U6jGCwq7Ym-zGJ2c_AWHAACwQ0AAvI-UFSdLNlhGXCj8TQE"
  })

  Bot.sendMessage("*♻️ Maintainance Mode Set To Off*")
} else {
  Bot.sendMessage(
    "**Attention* This command is exclusively for administrators. Please refrain from using it if you are not authorized.\n\n🧑🏻‍💻 *Developer* [𝐒ʜɪɴᴇɪ 𝐍ᴏᴜᴢᴇɴ](tg://openmessage?user_id=5572081489)*"
  )
}

