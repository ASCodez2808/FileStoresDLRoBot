/*CMD
  command: /deletefiles
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

if (params == "2") {
  Api.editMessageText({
    message_id: options.result.message_id,
    text: "Checking...",
    parse_mode: "HTML"
  })

  let filters = User.getProperty("filters", {})
  if (Object.keys(filters).length === 0) {
    Api.editMessageText({
      message_id: options.result.message_id,
      text: "No files link found ❎",
      parse_mode: "HTML"
      })
  } else {
    Api.editMessageText({
      message_id: options.result.message_id,
      text: "Send me your files link to delete",
      parse_mode: "HTML"
    })
    Bot.runCommand("/deletefiles2")
  }
} else {
  Api.sendMessage({
    text: "Checking...",
    parse_mode: "HTML",
    on_result: "/deletefiles 2"
    })
}
