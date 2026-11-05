/*CMD
  command: /start
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
if (!adm) {
  Bot.setProperty("adminID", chat.chatid)
  Bot.sendMessage(
    "🧑‍💻 Sᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ Lᴏɢɪɴ Aꜱ Aɴ Aᴅᴍɪɴ Wɪᴛʜ " + chat.chatid + " ID."
  )
}
var nm = Bot.getProperty("name")
if (!nm) {
  Bot.setProperty("name", user.first_name)
  var nm = Bot.getProperty("name")
  Bot.sendMessage("Sᴜᴄᴄᴇꜱꜱꜰᴜʟʟʏ Lᴏɢɪɴ Aꜱ Aɴ Aᴅᴍɪɴ Wɪᴛʜ " + nm)
}

  if (!params) {
    var but = [
      [
        { text: "👩‍💻 CREATOR", url: "tg://user?id=" + adm }
      ]
    ]
    Api.sendMessage({
      text:
        "Hello <a href='tg://user?id=" +
        user.telegramid +
        "'>" +
        user.first_name +
        "</a> ✨\n\nI am a permanent file store bot and users can access stored messages bu using a shareable link given by me",
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: but },
      reply_to_message_id: request.message_id
    })
    return
  }

  var hh = ""
  if (!User.getProperty("UserDone")) {
    User.setProperty("UserDone", true, "boolean")
    var stat = Libs.ResourcesLib.anotherChatRes("status", "global")
    stat.add(1)
    Api.sendMessage({
      chat_id: adm,
      text:
        "<b>➕ Nᴇᴡ Uꜱᴇʀ Nᴏᴛɪꜰɪᴄᴀᴛɪᴏɴ ➕\n\n👤 Uꜱᴇʀ : <a href='tg://user?id=" +
        user.telegramid +
        "'>" +
        user.first_name +
        (user.last_name ? " " + user.last_name : "") +
        "</a>" +
        hh +
        "\n📝 Uꜱᴇʀɴᴀᴍᴇ : @" +
        user.username +
        "\n🆔 Uꜱᴇʀ  ID : <code>" +
        user.telegramid +
        "</code>\n🌝 Tᴏᴛᴀʟ Uꜱᴇʀꜱ Cᴏᴜɴᴛ : " +
        stat.value() +
        "</b>",
      parse_mode: "html",
      disable_web_page_preview: true
    })
  }

  if (params) {
    var files = Bot.getProperty(params)
    if (files && files.length > 0) {
      Bot.sendMessage("Total files : " + files.length, { on_result: "/onSent" })
      Api.deleteMessage({
        chat_id: chat.chatid,
        message_id: request.message_id
      })
      files.forEach(file => {
        switch (file.type) {
          case "video":
            Api.sendVideo({
              video: file.file_id,
              caption: "<b>" + file.caption + "</b>" || "",
              parse_mode: "HTML",
              on_result: "/onSent"
            })
            break
          case "photo":
            Api.sendPhoto({
              photo: file.file_id,
              caption: "<b>" + file.caption + "</b>" || "",
              parse_mode: "HTML",
              on_result: "/onSent"
            })
            break
          case "audio":
            Api.sendAudio({
              audio: file.file_id,
              caption: "<b>" + file.caption + "</b>" || "",
              parse_mode: "HTML",
              on_result: "/onSent"
            })
            break
          case "sticker":
            Api.sendSticker({
              sticker: file.file_id,
              on_result: "/onSent"
            })
            break
          case "document":
            Api.sendDocument({
              document: file.file_id,
              caption: "<b>" + file.caption + "</b>" || "",
              parse_mode: "HTML",
              on_result: "/onSent"
            })
            break
          case "animation":
            Api.sendAnimation({
              animation: file.file_id,
              caption: "<b>" + file.caption + "</b>" || "",
              parse_mode: "HTML",
              on_result: "/onSent"
            })
            break
          case "voice":
            Api.sendVoice({
              voice: file.file_id,
              caption: "<b>" + file.caption + "</b>" || "",
              parse_mode: "HTML",
              on_result: "/onSent"
            })
            break
        }
      })
      Bot.sendMessage(
        "⚠️ This file will be deleted after 2 Minites! ⏳Please save it in your messages or forward it somewhere.📤\n\n🚫 Forward File to Your Saved Messages ASAP",
        { on_result: "/onSent" }
      )
    } else {
      Bot.sendMessage("No files found.")
    }
  }
