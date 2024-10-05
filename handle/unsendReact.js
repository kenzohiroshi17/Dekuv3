async function unsendReact(api, event) {
  if (event.type == "message_reaction") {
    if (event.senderID == api.getCurrentUserID() && event.reaction == "👍") {
      return api.unsendMessage(event.messageID);
    }
  }
}
module["exports"] = unsendReact;