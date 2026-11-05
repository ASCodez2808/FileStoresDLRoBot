/*CMD
  command: /stats
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

var msg = request.message_id
User.setProp("msg2",msg,"String")
var adm = Bot.getProperty("adminID")
var nm = Bot.getProperty("name")

if(user.telegramid == adm){
var status = Libs.ResourcesLib.anotherChatRes("status", "global")
let free = new Date().toLocaleString("en-US", {
  timeZone: "Asia/kolkata"
})
var dt = Libs.DateTimeFormat.format(free, "dd/mm/yyyy")
var tm = Libs.DateTimeFormat.format(free, "h:MM:ss T")
var dxy = Libs.DateTimeFormat.format(free, " dddd")

var ph =
  "https://quickchart.io/chart?bkg=white&c={type:%27bar%27,data:{labels:['@" +
  bot.name +
  "'],datasets:[{label:%27Total+Users%27,data:[" +
  status.value().toFixed(0) +
  "]}]}}"
var but = [[{text: "🔐 CLOSE",callback_data:"/close"}]]
Api.sendPhoto({photo: ph,
  caption:
    "📊 Bot Live Statistics\n\n👥 Total-Users : " +
    status.value().toFixed(0) +" Users\n\n📅 Date : " +dt +"\n⏳ Time : " +tm +"M\n🗓 Day :"+dxy +"\n\n©️ Creator : <a href='tg://user?id="+adm+"'>"+nm+"</a>",
  parse_mode: "HTML",reply_to_message_id: request.message_id,
reply_markup:{inline_keyboard:but}})
return
}else{
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}
