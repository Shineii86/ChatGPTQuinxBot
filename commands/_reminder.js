/*CMD
  command: /reminder
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

var button = [
  [
    { title: "𝐀sᴋ 𝐀ɢᴀɪɴ", command: "/ask" },
    { title: "𝐁ᴜʏ 𝐘ᴏᴜʀ 𝐀ᴅs", url: "t.me/QuinxAds" }
  ],
  [{ title: "𝐂ʟᴏsᴇ", command: "/close" }]
]
Bot.sendInlineKeyboard(
  button,
  "*→ 𝐎ᴋ " + user.first_name + ", 𝐘ᴏᴜ 𝐂ᴀɴ 𝐀sᴋ 𝐌ᴇ 𝐀ɢᴀɪɴ.*"
)

