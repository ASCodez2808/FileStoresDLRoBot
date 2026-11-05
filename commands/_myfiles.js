/*CMD
  command: /myfiles
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

if(params == "2"){
  Api.editMessageText({
    message_id: options.result.message_id,
    text: "Checking...",
    parse_mode: "HTML"
  })

  let filters = User.getProperty("filters", {});
  if (Object.keys(filters).length === 0) {
    Api.editMessageText({
      message_id: options.result.message_id,
      text: "No files link found ❎",
      parse_mode: "HTML"
      })
  } else {
    let filterList = "Your file link:\n\n";
    let keys = Object.keys(filters);
    
    for (let i = 0; i < keys.length; i++) {
      let keyword = keys[i];
      // Added (i + 1) to number each link sequentially starting from 1
      filterList += `(${i + 1}) https://t.me/` + bot.name + `?start=` + keyword + `\n`;
    }
    
    Api.editMessageText({
      message_id: options.result.message_id,
      text: filterList,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "REMOVE FILES", callback_data: "/deletefiles" }]]
      }
    });
  }

} else {
  Api.sendMessage({
    text: "Checking...",
    parse_mode: "HTML",
    on_result: "/myfiles 2"
    })
}
