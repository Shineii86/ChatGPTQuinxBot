/*CMD
  command: /about
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

Api.sendMessage({
  text:
    "*🤖 Bot Information*\n*» Version:* ẞeta\n\n*👤 Developer*\n*» Name:* Shinei Nouzen 🇮🇳\n*» Username: * @Shineii86\n*» Email:* ikx7a@hotmail.com\n\n*💸 Sponsor*\n*» Name:* Haruno Yukki 🇯🇵\n*» Username:* @YukkiHaruno\n*» Pinterest:* [@YukkiHaruno](https://www.pinterest.com/YukkiHaruno)\n\n*🔗 Important Links*\n*» News:* @MaximXBots\n*» Status:* @MaximXStatus\n*» Support:* @MaximXGroup\n\n*🌐 Hosting Server*\n*» Bot Business:* [Source Code](https://app.bots.business)",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [[{ text: "𝗖𝗟𝗢𝗦𝗘", callback_data: "/close" }]]
  }
})

