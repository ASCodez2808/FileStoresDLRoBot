/*CMD
  command: /broadcast_2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adm = Bot.getProperty("adminID")

if(user.telegramid == adm){
  var broadcast = Bot.getProperty("Broadcast")

  for (var i in broadcast) {
    HTTP.post({
      url: "https://api.telegram.org/bot" + bot.token + "/copyMessage",
      body: JSON.stringify({
        chat_id: broadcast[i],
        from_chat_id: user.telegramid,
        message_id: request.message_id,
        disableWebPreview: true,
        protectContent: true,
        ispin: true
      })
    })
  }
  return
} else {
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}
