/*CMD
  command: /stats
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

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
var userpayment = Libs.ResourcesLib.anotherChatRes("total_bot", "global")
var inline = [[{ title: "⧼⧼ Bᴀck", command: "/admin" }]]
Api.sendMessage({
  text:
    "📊 <b>Bot Live Statistics\n\n👥 Users = " +
    status.value().toFixed(0) +
    "\n\n🧑🏻‍💻 Developer </b><a href='tg://openmessage?user_id=5572081489'>𝐒ʜɪɴᴇɪ 𝐍ᴏᴜᴢᴇɴ</a>",
  parse_mode: "HTML"
})

