var currentUser = "";
var pubnub;

function signIn(){
    currentUser = document.getElementById("userInput").value;
    pubnub = new PubNub({
        publishKey: "pub-c-704a0f78-208d-4280-a96b-ff2f8288873d",
        subscribeKey: "sub-c-7aabeede-59c5-11eb-bf6e-f20b4949e6d2",
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
    } else {
        alert("Empty Message or Username");
    }
}