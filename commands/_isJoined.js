/*CMD
  command: /isJoined
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

var status = options.result.status

var isJoined =
  status == "member" || status == "administrator" || status == "creator"

if (isJoined) {
  var button = [
    [{ title: "𝐒ᴛᴀʀᴛ 𝐀sᴋ 𝐍ᴏᴡ!", command: "/ask" }],
    [
      { title: "𝐔ᴘᴅᴀᴛᴇs", url: "https://t.me/MaximXBots" },
      { title: "𝐒ᴜᴘᴘᴏʀᴛ", url: "https://t.me/QuinxChat" }
    ],
    [
      { title: "𝐁ᴜʏ 𝐘ᴏᴜʀ 𝐀ᴅs", url: "https://t.me/QuinxAds" },
      { title: "𝐂ʟᴏsᴇ", command: "/close" }
    ]
  ]
  Bot.sendInlineKeyboard(
    button,
    "*💜 Hᴇʟʟᴏ " +
      user.first_name +
      "*\n\n→ ɪ ᴀᴍ ᴄʜᴀᴛ ɢᴘᴛ ҩᴜɪɴx ʙᴏᴛ, ᴍʏ ʙᴏᴛ ɪs ᴛᴏ ᴀɴsᴡᴇʀ ʏᴏᴜʀ ǫᴜᴇsᴛɪᴏɴs ᴍᴀᴅᴇ ʙʏ [sʜɪɴᴇɪ ɴᴏᴜᴢᴇɴ](https://t.me/Shineii86).\n\n*🌎 𝐖ʜᴀᴛ 𝐈s 𝐍ᴇᴡ?*\n→ Hᴀᴠᴇ ᴀ ғʀᴇᴇ ᴄʜᴀᴛ ɢᴘᴛ ʙᴏᴛ  sᴇʀᴠɪᴄᴇ ᴀᴛ ᴛʜᴇ ᴍᴏᴍᴇɴᴛ sᴏ ʏᴏᴜ ᴄᴀɴ ᴀsᴋ ᴀɴʏ ǫᴜᴇsᴛɪᴏɴs ʏᴏᴜ ᴡᴀɴᴛ.\n\n*🚀 𝐇ᴏᴡ 𝐔 𝐖ᴏʀᴋ?*\n→ ᴘʀᴇss ʙᴇʟᴏᴡ ᴛʜᴀɴ ᴇɴᴛᴇʀ ʏᴏᴜʀ ǫᴜᴇsᴛɪᴏɴ ɪɴ ᴀɴʏ ʟᴀɴɢᴜᴀɢᴇ ᴀɴᴅ I ᴡɪʟʟ ᴀɴsᴡᴇʀ ᴀs sᴏᴏɴ ᴀs ᴘᴏssɪʙʟᴇ😍.\n\n*⚠️ 𝐍ᴏᴛᴇ:*\n→ ᴍᴀᴋᴇ sᴜʀᴇ ʏᴏᴜʀ ǫᴜᴇsᴛɪᴏɴs ᴀʀᴇ ᴍᴇᴀɴɪɴɢғᴜʟ ǫᴜᴇsᴛɪᴏɴs ᴀɴᴅ ᴅᴏɴ'ᴛ ᴀsᴋ ᴍᴇ ᴛᴏ ᴛᴇsᴛ ᴍᴇ ʙᴇᴄᴀᴜsᴇ ɪ ᴄᴀɴ ғʀᴇᴇᴢᴇ ᴀɴᴅ ᴅᴏɴ'ᴛ ᴀsᴋ ᴀɢᴀɪɴ.",
    { disable_web_page_preview: true, is_reply: true }
  )
  return
}

Api.sendPhoto({
  photo: "https://telegra.ph/file/be9ad73326e879c130c97.jpg",
  caption:
    "*Please Join My Channel To Use This Bot!*\n\nDue To Telegram Users Traffic, Only Channel Subscribers Can Use The Bot!",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "𝗧𝗘𝗥𝗠𝗦 𝗔𝗡𝗗 𝗖𝗢𝗡𝗗𝗜𝗧𝗜𝗢𝗡𝗦",
          web_app: {
            url:
              "https://bot.telescope.workers.dev/open/BQACAgUAAx0EWiS9TAACEtNmFqkD-3YzrIzUhc8ad1ZpdVoz8AAC5AwAAk-puFTVTT5SAsjxGDQE/vTelegraphBot.html"
          }
        }
      ],
      [
        { text: "𝗨𝗣𝗗𝗔𝗧𝗘𝗦", url: "t.me/MaximXBots" },
        { text: "𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥", url: "t.me/Shineii86" }
      ],
      [{ text: "𝗖𝗟𝗢𝗦𝗘", callback_data: "/close" }]
    ]
  }
})

