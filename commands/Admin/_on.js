/*CMD
  command: /on
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
  Bot.setProperty("mode", "On", "string")
  Api.sendSticker({
    sticker:
      "CAACAgUAAxkBAAEERapmCFXJb5Ro_SVAAAH8UA-A3ljuWQkAAtkNAAIIDxlXj1gSCahMGF40BA"
  })

  Bot.sendMessage("*♻️ Maintainance Mode Set To On*")
} else {
  Bot.sendMessage(
    "**Attention* This command is exclusively for administrators. Please refrain from using it if you are not authorized.\n\n🧑🏻‍💻 *Developer* [𝐒ʜɪɴᴇɪ 𝐍ᴏᴜᴢᴇɴ](tg://openmessage?user_id=5572081489)*"
  )
}

