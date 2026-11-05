/*CMD
  command: @
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

if(user.telegramid != adm){
var mode = Bot.getProperty("mode")
if(mode == "On"){
Api.sendMessage({text:"👋🏻 Hi <a href='tg://user?id="+user.telegramid+"'>"+user.first_name+"</a>!\n\n🛠 Currently bot is under maintenance. we will be back soon.",parse_mode:"HTML",reply_to_message_id: request.message_id})
return
}
}

var RBan = Bot.getProperty("Ban"+user.telegramid)
if(RBan == "Ban"){
var but = [[{text: "❗Contact us❗",url:"tg://user?id="+adm+""}]]
Api.sendMessage({text:"You are banned to using bot",parse_mode:"HTML",reply_markup:{inline_keyboard:but}})
return
}

var broadcast = Bot.getProperty("Broadcast") ? Bot.getProperty("Broadcast") : []
if (!broadcast.includes(user.telegramid)) {
  broadcast.push(user.telegramid)
  Bot.setProperty("Broadcast", broadcast, "json")
 return
}
