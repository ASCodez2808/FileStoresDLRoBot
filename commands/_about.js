/*CMD
  command: /about
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

var nm = Bot.getProperty("name")
var adm = Bot.getProperty("adminID")

Api.sendMessage({text:"My Name : <a href='https://t.me/"+bot.name+"'>File Store Bot</a>\n\n\Vᴇʀsɪᴏɴ : 0.0.1-File_Store_Bot_TG_Beta\n\nLanguage : <a href='https://www.java.com'>Java</a>\n\nDevloper : <a href='tg://user?id="+adm+"'>"+nm+"</a>",parse_mode:"HTML", disable_web_page_preview: true})
