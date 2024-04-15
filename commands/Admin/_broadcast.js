/*CMD
  command: /broadcast
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin
  answer: _Kindly Enter your Message for Broadcast_

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid !== 5572081489) {
  Bot.sendMessage("*You Are Not An Admin.*")
  return
  // Exit the code block if the user is not an admin
}

Bot.sendMessage("*Message sent to all users*")
// Notify admin that the message will be sent

// Run the "/message" command for all users
Bot.runAll({
  command: "/message",
  options: { chat_id: request.chat.id, message_id: request.message_id }
})

