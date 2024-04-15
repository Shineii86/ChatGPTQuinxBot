/*CMD
  command: /addadmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: 👮🏻‍♀️ Send the Telegram ID

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 5572081489){
Bot.sendMessageToChatWithId(""+message+"", "*Owner Made You Admin*")
Bot.sendMessage(message+" Promoted")
Bot.setProperty("admin"+message+"",""+message+"","string")
}else{
Bot.sendMessage("You Have To Become Owner")
}
