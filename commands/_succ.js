/*CMD
  command: /succ
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

let msg_id = options.result.message_id
try {
  var user = Libs.ResourcesLib.anotherChatRes("user", "global")
  var res = Libs.ResourcesLib.userRes("Request")
  var data = JSON.parse(content)
  var ans = data.answer

  if (!ans) {
    Bot.sendMessage("_Can't Do My Work, Please Try Again._")
    return
  }
  Api.sendChatAction({
    chat_id: chat.chatid,
    action: "typing"
  })
  Bot.editMessage("𝐒ᴇɴᴅɪɴɢ 𝐀ɴsᴡᴇʀ....", msg_id)
  var button = [
    [
      { title: "𝐀sᴋ 𝐀ɢᴀɪɴ", command: "/ask" },
      { title: "𝐁ᴜʏ 𝐘ᴏᴜʀ 𝐀ᴅs", url: "t.me/QuinxAds" }
    ],
    [{ title: "𝐂ʟᴏsᴇ", command: "/close" }]
  ]
  Bot.sendInlineKeyboard(button, "→ " + ans + "", { is_reply: true })
  Api.deleteMessage({ message_id: msg_id })
  res.add(1)
  user.add(1)
} catch (error) {
  console.error(error)
  // Handle the error here or display an error message to the user
  Bot.sendMessage("_😢 Oops! Something Went Wrong. Please Try Again Later._")
}

