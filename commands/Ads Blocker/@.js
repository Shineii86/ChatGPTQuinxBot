/*CMD
  command: @
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Ads Blocker

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid != 5572081489) {
  var mode = Bot.getProperty("mode")
  if (mode == "On") {
    Bot.sendMessage(
      "*🚧 BOT UNDER MAINTENANCE 🚧*\n\n_The bot is currently under maintenance.\nYou will receive a notification as soon as correct operation resumes._\n\n⚙️ Developed By [𝐒ʜɪɴᴇɪ 𝐍ᴏᴜᴢᴇɴ](tg://openmessage?user_id=5572081489)."
    )
    return
  }
}

