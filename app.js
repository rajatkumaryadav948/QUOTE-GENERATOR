const quotes = [
    "Believe in yourself!",
    "Work hard, dream big.",
    "Every day is a second chance.",
    "Stay positive, work hard, make it happen.",
    "Doubt kills more dreams than failure ever will.",
    "The only thing we have to fear is fear itself.",
    "Keep your face to the sunshine and you cannot see a shadow.",
    "Live in the sunshine, swim the sea, drink the wild air."
];
function newQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[random];
}