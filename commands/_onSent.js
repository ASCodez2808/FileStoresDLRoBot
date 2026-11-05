/*CMD
  command: /onSent
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

if (!options || !options.result || !options.result.chat ||
    !options.result.message_id) { return; }
const sent = options.result;
Bot.run({
  command: "/deleteMsg",
  run_after: 120,
  options: {
    chat_id: sent.chat.id,
    message_id: sent.message_id
  }
});


