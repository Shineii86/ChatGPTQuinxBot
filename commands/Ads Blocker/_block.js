/*CMD
  command: /block
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

var blockad = User.getProperty("bloockad")
if (blockad == undefined) {
  User.setProperty("blockad", "done", "string")
  HTTP.get({
    url:
      "https://alwayspolite.up.railway.app/adsblocker/set?token=" + bot.token,
    success: "/onsuc"
  })

  return
}
Bot.sendMessage("*You Bot Already Added*")

