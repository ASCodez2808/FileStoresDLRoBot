/*CMD
  command: /deleteuserfiles
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

var adm = Bot.getProperty("adminID")

if(user.telegramid == adm){
if (params == "2") {
  Api.editMessageText({
    message_id: options.result.message_id,
    text: "Checking...",
    parse_mode: "HTML"
  })

    Api.editMessageText({
      message_id: options.result.message_id,
      text: "Send me your files link to delete",
      parse_mode: "HTML"
    })
Bot.runCommand("/deleteuserfiles2")
  
}else{
  Api.sendMessage({
    text: "Checking...",
    parse_mode: "HTML",
    on_result: "/deleteuserfiles 2"
    })
}
}else{
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}
