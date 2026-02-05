let yesScale = 1;
let noScale = 1;
let noOpacity = 1;

const yesButton = document.getElementById('yes-button'); // დარწმუნდი რომ ID ემთხვევა
const noButton = document.getElementById('no-button');   // დარწმუნდი რომ ID ემთხვევა

noButton.addEventListener('click', () => {
    // 1. Yes ღილაკის გაზრდა
    yesScale += 0.5; 
    yesButton.style.transform = `scale(${yesScale})`;

    // 2. No ღილაკის დაპატარავება და გაქრობა
    noScale -= 0.15;
    noOpacity -= 0.15;

    if (noScale > 0) {
        noButton.style.transform = `scale(${noScale})`;
        noButton.style.opacity = noOpacity;
    } else {
        noButton.style.display = 'none'; // საბოლოოდ ქრება
    }
    
    // სურვილისამებრ: No-ს ტექსტის შეცვლა ყოველ დაჭერაზე
    const messages = ["Are you sure?😄", "Are you sure you sure?😅", "You better say yes😣", "Baby please😟", "please say yesssss :(", "please","please"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    noButton.innerText = randomMessage;
});