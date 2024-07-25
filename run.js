function talk(){
    var know = {
        "Who are you" : "Hello, Indrajit here",
        "How are you" : "Good :)",
        "What can I do for you" : "Please give us a follow & like.",
        "Your followers" : "I have my family of 5000 members, I don't have followers, I have a supportive family.",
        "ok" : "Thank you so much!",
        "Bye" : "Okay! Will meet soon..",
        "What's your favorite color" : "I love all colors, but blue is my favorite!",
        "What's your hobby" : "I enjoy coding, reading, and playing sports.",
        "Tell me a joke" : "Why don't scientists trust atoms? Because they make up everything!",
        "Who is your creator" : "I was created by a team of talented developers.",
        "What's the weather today" : "I'm not sure, but you can check your local weather app!",
        "Do you like music" : "Yes, I love listening to all kinds of music.",
        "Can you help me" : "Of course! What do you need help with?",
        "What’s your favorite food" : "I don't eat, but I hear pizza is quite popular!",
        "Tell me a fun fact" : "Did you know honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible!",
        "Where are you from" : "I'm from the digital world, but I'm here to help you!",
        "Do you have a pet" : "I don't have a pet, but I think dogs and cats are adorable.",
        "What's your name" : "You can call me Chatbot!",
        "How old are you" : "Age is just a number, and in my case, it's non-existent!"
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML += know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML += "Sorry, I didn't understand.<br>";
    }
}
