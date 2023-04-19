//Beginning section of random message
const beginnings = [
  "Hey there, ",
  "Greetings, ",
  "Hello, ",
  "Hi, ",
  "What's up, ",
  "Good day, ",
  "Hiya, ",
  "Salutations, ",
  "Hola, ",
  "Aloha, ",
  "Hey, ",
  "Good to see you, ",
  "Yo, ",
  "Howdy, ",
  "Great to hear from you again! "
];
//Middle section of random message
const middles = [
  "I hope you're having a great day. ",
  "Just wanted to check in with you. ",
  "It's been a while since we last spoke. ",
  "I was just thinking about you. ",
  "I wanted to share some news with you when you're free. ",
  "You crossed my mind today. ",
  "I've got a funny story to tell you later. ",
  "You won't believe what happened today! Remind me to tell you another time. ",
  "I have a question to ask you later. ",
  "I came across something interesting today. ",
  "How's everything going? ",
  "You won't believe who I ran into today. ",
  "I want to ask for your advice on something when we have more time. ",
  "You were on my mind today. ",
  "I have an exciting update to share with you later. "
];
//End section of random message
const ends = [
  "Take care and talk to you soon.",
  "Looking forward to catching up.",
  "Let's chat when you have some time.",
  "Have a fantastic day!",
  "Stay in touch!",
  "Keep being awesome!",
  "Talk to you later!",
  "Don't be a stranger!",
  "Have a great day!",
  "Wishing you all the best!",
  "Stay safe and healthy!",
  "Keep smiling!",
  "Enjoy the rest of your day!",
  "Catch you on the flip side!",
  "Until next time!"
];

const asciiBeginnings = [
    "   .---.  \n / o   o \\ \n",
    "   .---.  \n / -   - \\ \n",
];
  
const asciiMiddles = [
    "|    ^    |\n",
    "|    >    |\n",
];

const asciiEnds = [
    " \\  \\_/  / \n  ------- \n",
    " \\  ---  / \n  ------- \n",
];

//Select a random element from an array
function getRandomComponent(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

function createRandomMessage() {
    const isAscii = Math.random(); //Random chance to return random text or ASCII art
    const beginning = getRandomComponent(isAscii ? asciiBeginnings : beginnings);
    const middle = getRandomComponent(isAscii ? asciiMiddles : middles);
    const end = getRandomComponent(isAscii ? asciiEnds : ends);
    return beginning + middle + end;
};

console.log(createRandomMessage());
