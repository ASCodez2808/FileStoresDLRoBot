/*CMD
  command: /broadcast
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
Bot.sendMessage("Kindly Enter Your Message For Broadcast")
Bot.runCommand("/broadcast_2")
}else{
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}

