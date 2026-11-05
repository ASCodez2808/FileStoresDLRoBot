/*CMD
  command: /unban
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
let params = message.split(" ");
let id = params[1];
if(!id){
  Api.sendMessage({text:"Usage : /unban {id}\n\nEx. <code>/unban 12345678</code>",parse_mode:"HTML",reply_to_message_id:request.message_id});
return;
}
Bot.sendMessageToChatWithId(id, "You Have Been UnBanned By Owner")
Bot.sendMessage("User "+id+" Has Been UnBanned")
Bot.setProperty("Ban"+id+"", "UnBan", "string")
}else{
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}
