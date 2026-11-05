/*CMD
  command: /maintenance
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
var msg = request.message_id
User.setProp("msg2",msg,"String")

if (params == "off"){
if(user.telegramid == adm){
Bot.setProperty("mode","Off","string")
var but = [[{text:"🔙 BACK", callback_data:"/maintenance edit"},{text:"🔐 CLOSE", callback_data:"/close"}]]
Api.editMessageText({chat_id:request.message.chat.id,message_id:request.message.message_id,text:"♻️ Maintainance Mode Set To Off",parse_mode:"HTML",reply_markup:{inline_keyboard:but}})
return
}else{
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}
}

if (params == "on"){
if(user.telegramid == adm){
Bot.setProperty("mode","On","string")
var but2 = [[{text:"🔙 BACK", callback_data:"/maintenance edit"},{text:"🔐 CLOSE", callback_data:"/close"}]]
Api.editMessageText({chat_id:request.message.chat.id,message_id:request.message.message_id,text:"♻️ Maintainance Mode Set To On",parse_mode:"HTML",reply_markup:{inline_keyboard:but2}})
return
}else{
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}
}

if (params == "edit"){
if(user.telegramid == adm){
var but3 = [[{text:"⏸ ON",callback_data:"/maintenance on" },{ text:"▶️ OFF",callback_data: "/maintenance off"}],[{text:"🔐 CLOSE",callback_data:"/close"}]]
var cur = Bot.getProperty("mode")
Api.editMessageText({chat_id:request.message.chat.id,message_id:request.message.message_id,text:"♻️ Select Your Choice To On/Off The Maintainace Mode.\n\n💠 Maintenance Mode : "+cur+"",parse_mode:"HTML",reply_to_message_id:request.message_id,reply_markup:{inline_keyboard:but3}})
return
}else{
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}
}

if(user.telegramid == adm){
var cur = Bot.getProperty("mode")
var but4 = [[{text:"⏸ ON",callback_data:"/maintenance on" },{ text:"▶️ OFF",callback_data: "/maintenance off"}],[{text:"🔐 CLOSE",callback_data:"/close"}]]
Api.sendMessage({text:"♻️ Select Your Choice To On/Off The Maintainace Mode.\n\n💠 Maintenance Mode : "+cur+"",parse_mode:"HTML",reply_to_message_id:request.message_id,reply_markup:{inline_keyboard:but4}})
return
}else{
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}
