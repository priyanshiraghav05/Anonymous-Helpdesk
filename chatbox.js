function sendMessage() {
    var msg= document.getElementById("text");
    var text=msg.value;

    if (text.trim() !== "") {
        let chat=document.querySelector(".chats");
        let newMessage= document.createElement("div");
        newMessage.className="mySide";
        newMessage.textContent=text;

        chat.appendChild(newMessage);
        
        // Clear the input field after sending the message
        msg.value = "";
    }
}