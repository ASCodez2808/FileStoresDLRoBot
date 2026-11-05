/*CMD
  command: /deleteMsg
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

Api.deleteMessage({
  chat_id: options.chat_id,
  message_id: options.message_id
})

if (options && options.chat_id && options.message_id) {
  Api.deleteMessage({
    chat_id: options.chat_id,
    message_id: options.message_id
  })
}
