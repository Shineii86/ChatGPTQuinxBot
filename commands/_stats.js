/*CMD
  command: /stats
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

var user = Libs.ResourcesLib.anotherChatRes("user", "global")
var length = Libs.ResourcesLib.anotherChatRes("length", "global")
var res =Libs.ResourcesLib.userRes("Request")
var fullBotUsers = Bot.getProperty("wholeUsers", null)

Bot.sendMessage(
  "*📊 Bot Live Stats *\n\n→ Request : "+user.value() +"\n→ Your request : "+res.value()+"\n→ Users : " +
    fullBotUsers.length +"\n→ Request Limit : Unlimited\n→ Message length : "+length.value()+"\n\n*★ Powered By* [Shinei Nouzen](https://t.me/Shineii86)",{disable_web_page_preview: true,is_reply: true })
