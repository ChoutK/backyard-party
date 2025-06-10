// Typewriter effect intro
document.addEventListener("DOMContentLoaded", () => {
  const message = "Access Denied... <br><br> Joking <br><br> you are invited to -->";
  const typedText = document.querySelector(".typed-text");
  const main = document.getElementById("main-content");
  const intro = document.getElementById("intro-screen");

  let index = 0;

function typeNextChar() {
  if (index < message.length) {
    const char = message.charAt(index);

    if (char === "<" && message.slice(index, index + 4) === "<br>") {
      typedText.innerHTML += "<br>";
      index += 4;
    } else {
      typedText.innerHTML += char;
      index++;
    }

    setTimeout(typeNextChar, 85);
  } else {
    setTimeout(() => {
      intro.style.transition = "opacity 1s ease";
      intro.style.opacity = 0;
      setTimeout(() => {
        intro.style.display = "none";
        main.style.display = "block";
      }, 1000);
    }, 1100);
  }
}
  typeNextChar();
});


// Countdown Script
const countdown = document.getElementById("countdown");

// Set party date here
const partyDate = new Date("2025-06-27T20:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = partyDate - now;

  if (diff <= 0) {
    countdown.textContent = "Doors are open";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
