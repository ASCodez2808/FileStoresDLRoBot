/*CMD
  command: /upload
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

User.deleteProp("my_counter")
    Api.sendMessage({
    text: "Send your content for sharing!",
    parse_mode: "HTML",
    reply_markup: {
      resize_keyboard: true,
      keyboard: [[{ text: "✅" },{text:"❎"}]]
    }
  })
  Bot.runCommand("/handle")
