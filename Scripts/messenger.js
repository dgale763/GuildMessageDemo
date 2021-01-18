var currentUser = "";
var pubnub;

function signIn(){
    currentUser = document.getElementById("userInput").value;
    pubnub = new PubNub({
        publishKey: myPublishKey,
        subscribeKey: mySubscribeKey,
        uuid: currentUser
    });
    pubnub.addListener({
        message: function(newMessage) {
            var ol = document.getElementById("messageList");
            var li = document.createElement("li");
            li.setAttribute('class', 'list-group-item');
            li.appendChild(document.createTextNode(newMessage.publisher + ": " + newMessage.message));
            ol.appendChild(li);
        }
    })
    pubnub.subscribe({channels:["demo"]});
    document.getElementById("signInPanel").hidden = true;
}

function sendMessage(){
    var messageText = document.getElementById("messageInput").value;
    if(messageText != "" && currentUser != ""){
        pubnub.publish({
            channel: "demo",
            message: messageText
        });
        document.getElementById("messageInput").value = "";
    } else {
        alert("Empty Message or Username");
    }
}