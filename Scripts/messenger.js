// IMPORTANT: These two keys must be populated for the code to work.
//      They were sent in the same email with my github URL
var myPublishKey = "";
var mySubscribeKey = "";

if (myPublishKey == "" || mySubscribeKey == ""){
    alert("Publish or Subscribe key is missing. Application will not work properly!!!");
}

var currentUser = "";
var pubnub;
var textInputBox = document.getElementById("messageInput");
var userInputBox = document.getElementById("userInput");

// Event listener that triggers the signIn function if the enter key is pressed
//      on the signIn textbox
userInputBox.addEventListener("keydown", function(e){
    if(e.key == 'Enter'){
        signIn();
    }
});

// Event listener that triggers the sendMessage function if the enter key is pressed
//      on the message textbox
textInputBox.addEventListener("keydown", function(e) {
    if(e.key == 'Enter'){
        sendMessage();
    }
});

// This function gets the username and attempts to create a connection to the
//      PubNub API using they publish key, subscriber key, and the given username.
//      The pubnub message listener will create a new DOM element each time a new
//      message is received.
//      The user is also automatically subscribed to the 'demo' text channel.
function signIn(){
    currentUser = document.getElementById("userInput").value;
    if(currentUser != ""){
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
        textInputBox.focus();
    }
    
}

// This function gets the value from the message box and attempts to
//      publish it to the pubnub channel 'demo'
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

