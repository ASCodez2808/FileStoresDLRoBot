/*CMD
  command: /handle
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

var count = User.getProperty("my_counter")

if (message == "❎") {
  Api.sendMessage({ text: "Progress Cancelled", parse_mode: "HTML" })
  User.deleteProp("my_counter")
  return
}

if (message == "✅") {
  if (options && options.shrt) {
    var filesList = Bot.getProperty(options.shrt, [])
    if (filesList.length > 0) {
      Api.sendMessage({
        text:
          "Total files : " +
          count +
          "\n\nPreꜱꜱ the button or click to copy the link below to share your media!\n\nhttps://t.me/" +
          bot.name +
          "/?start=" +
          options.shrt +
          "\n\nPress the <a href='https://t.me/" +
          bot.name +
          "?start=" +
          options.shrt +
          "'>Button</a> to open the link",
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "SHARE",
                url:
                  "https://t.me/share/url?text=https://t.me/" +
                  bot.name +
                  "?start=" +
                  options.shrt
              },
              {
                text: "GET FILES",
                url: "https://t.me/" + bot.name + "?start=" + options.shrt
              }
            ]
          ]
        }
      })
      User.deleteProp("my_counter")
      
      let keyword = options.shrt
      let response = "Already"
      let filters = User.getProperty("filters", {})
      filters[keyword] = response
      User.setProperty("filters", filters, "json")
      
      return
    } else {
      Bot.sendMessage(
        "Error: No files uploaded to confirm\nuse: /upload to upload."
      )
      return
    }
  } else {
    Bot.sendMessage(
      "Error: No files uploaded to confirm\nuse: /upload to upload."
    )
    return
  }
}

var shrt = new Date().getTime().toString(36)
if (options && options.shrt) {
  shrt = options.shrt
}

var filesList = Bot.getProperty(shrt, [])
var fileEntry = {}

if (!count) {
    count = 0
  }
  count += 1
  User.setProperty("my_counter", count, "integer")

if (request.video && request.video.file_id) {
  fileEntry = {
    type: "video",
    file_id: request.video.file_id,
    caption: request.caption || ""
  }
} else if (
  request.photo &&
  request.photo.length > 0 &&
  request.photo[0].file_id
) {
  fileEntry = {
    type: "photo",
    file_id: request.photo[0].file_id,
    caption: request.caption || ""
  }
} else if (request.audio && request.audio.file_id) {
  fileEntry = {
    type: "audio",
    file_id: request.audio.file_id,
    caption: request.caption || ""
  }
} else if (request.sticker && request.sticker.file_id) {
  fileEntry = { type: "sticker", file_id: request.sticker.file_id }
} else if (request.document && request.document.file_id) {
  fileEntry = {
    type: "document",
    file_id: request.document.file_id,
    caption: request.caption || ""
  }
} else if (request.animation && request.animation.file_id) {
  fileEntry = {
    type: "animation",
    file_id: request.animation.file_id,
    caption: request.animation.caption || ""
  }
} else if (request.voice && request.voice.file_id) {
  fileEntry = {
    type: "voice",
    file_id: request.voice.file_id,
    caption: request.caption || ""
  }
}
Bot.sendMessage(
  "Total " + count + " files messages saved. send more or type ✅ to finish."
)

if (Object.keys(fileEntry).length > 0) {
  filesList.push(fileEntry)
  Bot.setProperty(shrt, filesList, "json")
  Bot.runCommand("/handle", { shrt: shrt })
} else {
  Bot.sendMessage(
    "No valid media file detected. please send a valid media file"
  )
}

