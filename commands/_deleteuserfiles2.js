/*CMD
  command: /deleteuserfiles2
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

let keyword = message
var split2 = keyword.split('?start=')
var keyword2 = "" + split2[1]

  Api.sendMessage({
    text: "File link has been deleted ✅\n\n<blockquote>https://t.me/"+bot.name+"?start=" + keyword2+"</blockquote>",parse_mode: "HTML",reply_markup: {
inline_keyboard: [[{ text: "MY FILES", callback_data: "/myfiles" }]]}})

Bot.deleteProp(keyword2)
