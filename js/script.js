// Select the seconds hand
const secondsHand = document.querySelector(".seconds-hand");
// Select the minutes hand
const minutesHand = document.querySelector(".mins-hand");
// Select the hours hand
const hoursHand = document.querySelector(".hours-hand");

function setDate() {
    // Get the current date
    const now = new Date();

    // Get the seconds and set the seconds hand
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; 
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // Get the minuts and set the minutes hand
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    // Get the hours and set the hours hand
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);