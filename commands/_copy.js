/*CMD
  command: /copy
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

// Fire Effect
Api.sendMessage({
    chat_id: user.telegramid,
    text: "🔥 Fire effect message",
    parse_mode: "Markdown",
    message_effect_id: "5104841245755180586"
});

// Thumbs Up Effect
Api.sendMessage({
    chat_id: user.telegramid,
    text: "👍 Thumbs up effect message",
    parse_mode: "Markdown",
    message_effect_id: "5107584321108051014"
});

// Thumbs Down Effect
Api.sendMessage({
    chat_id: user.telegramid,
    text: "👎 Thumbs down effect message",
    parse_mode: "Markdown",
    message_effect_id: "5104858069142078462"
});

// Heart Effect
Api.sendMessage({
    chat_id: user.telegramid,
    text: "❤️ Heart effect message",
    parse_mode: "Markdown",
    message_effect_id: "5159385139981059251" //5044134455711629726
});

// Celebration Effect
Api.sendMessage({
    chat_id: user.telegramid,
    text: "🎉 Celebration effect message",
    parse_mode: "Markdown",
    message_effect_id: "5046509860389126442"
});

// Poop Effect
Api.sendMessage({
    chat_id: user.telegramid,
    text: "💩 Poop effect message",
    parse_mode: "Markdown",
    message_effect_id: "5046589136895476101"
});
