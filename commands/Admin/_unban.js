/*CMD
  command: /unban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: 🚨 Send the Telegram ID

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin"+user.telegramid)
if(user.telegramid == 5572081489){
Bot.sendMessageToChatWithId(message, "You Have Been UnBanned By Owner")
var ba = 
Libs.ResourcesLib.anotherUserRes("balance",""+message+"")
var bbal = Bot.getProperty("Balance"+message)
ba.add(+bbal)
Bot.sendMessage("User "+message+" Has Been UnBanned")
Bot.setProperty("Ban"+message, "UnBan", "string")
}else{
Bot.sendMessage("You Are Not Admin")
}
