# GuildMessageDemo
Demonstration to showcase a simple messaging service

Instructions to Run -

IMPORTANT: The publish and subscriber keys for the PubNub API will be included in the same email that contains my github URL. These need to be added to the messenger.js file at the very top (there are 2 empty variables already there for this purpose).

- Should just be able to open two instances of the index.html file in any web browser (tested in Chrome).
- Sign in with different usernames, and you will be able to send messages between the two users. Also works for larger numbers of users, like a group chat.

My Process -
- After looking into multiple API's that can be used as a messaging service backend, I have decided to move forward with PubNub. This is because the initial setup to get basic messaging up and running looks relatively simple, and they have a free option (Which doesn't require a credit card) for up to 200 monthly active users or 1 million transactions. This is perfect for a demo like this, which I am treating like I would treat any sort of POC. Additionally, PubNub is HIPAA complient, so I can be pretty sure their security is up to standard.
- In my eyes, quick setup with easy to understand code/workflow are the two most important things for a POC. This way, my team can get back to me with feedback and we can more quickly see if the solution will work for our use case. This is why I have chosen to use an existing API (PubNub) to handle the more difficult back end code.
- For frameworks, I am chosing to move forward with Bootstrap. Bootstrap will allow for easy demonstration of the application accross all device sizes. For a larger, production ready product (rather than a small POC), I would have opted to use Node and/or React, to increase scalability.
- I gave myself a timeframe of 5 hours to work on this project, so that I could better understand the time it takes to get something like this up and running. I the 6 hours, I am happy with the progress I made, especially using a library I haven't used in a while (bootstrap) and a new IDE (Visual Studio Code). There are other features I would have liked to add, but as with real work, sometimes features have to be pushed to the next sprint!

Things that Went Well -
- Bootstrap made the creation of my UI pretty easy, and it should display well across all device sizes.
- PubNub was VERY easy to get up and running, and their documentation made it clear how to connect with their API and how to get setup in a short timeframe.


Things that Didn't Go Well -
- For some reason I had difficulties with my .gitignore file, and it kept uploading my publish and subscriber pubnub keys to the public repo. Fixing this and resecuring my keys took longer than it should have.
- I wanted messages to be sent on an 'enter' key press. This ended up being harder than I expected, as my old way of doing it using event.keyCode is now depricated. It took me some additional time to track down an alternative.