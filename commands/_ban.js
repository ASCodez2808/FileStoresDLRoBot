/*CMD
  command: /ban
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
let reason = params.slice(2).join(" ");
if(!id){
  Api.sendMessage({text:"Usage : /ban {id} {reason}\n\nEx.<code>/ban 12345678 Spam</code>",parse_mode:"HTML", reply_to_message_id: request.message_id});
return;
}
Bot.sendMessageToChatWithId(id, "You Have Been Banned By Owner\n\n"+(reason ?"\nReason : "+reason :"")+"")
Bot.sendMessage("User "+id+" Has Been Banned")
Bot.setProperty("Ban"+id+"", "Ban", "string")
}else{
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}
