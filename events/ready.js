module.exports = async (client) => {
  client.Ready = true, 
  client.user.setPresence({
    status: "idle",  // You can show online, idle, and dnd
    activity: {
        name: "Music",  // The message shown
        type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING,
    }
});
    
    console.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"

};
