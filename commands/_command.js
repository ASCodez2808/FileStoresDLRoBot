/*CMD
  command: /command
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
if(user.telegramid == adm){

var commands = [
  { command: "start",
    description: "✔️ Check bot alive or not"
    },
  {
    command: "upload",
    description: "📤 Upload your media"
    },
  { command: "myfiles",
    description: " 📝 Get your file list"
    },
  { command: "deletefiles",
    description: "🗑 Delete your files"
    },
  {
    command: "deleteuserfiles",
    description: "🗑️ Delete users files [Admin only]"
    },
  {
    command: "command",
    description: "⚙ Set commands [Admin only]"
    },
  {
    command: "ban",
    description: "🔒 User ban [Admin only]"
    },
  { command: "unban",
    description: "🔓 User unban [Admin only]"
    },
  { command: "maintenance",
    description: "🛠 Bot maintenance [Admin only]"
    },
  {
    command: "stats",
    description: "📊 Bot stats [Admin only]"
    },
  { command: "broadcast",
    description: "📣 Broadcast message to all users [Admin only]"
    }
]

HTTP.post({
  url: "https://api.telegram.org/bot" + bot.token + "/setMyCommands",
  body: {
    commands: commands,
    scope: { type: "default" }
  },
  headers: { "Content-type": "application/json" }
})
Bot.sendMessage("Command Set Successfully ✅")

}else{
Api.deleteMessage({chat_id:chat.chatid,message_id:request.message_id})
}

