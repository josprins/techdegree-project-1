// Creat an array of quotes with at least properties
var quotes = [
     {
        quote: "Life is about making an impact, not making an income", 
        source: "Kevin Kruse",
        year: '2014',
        citation: ' '
     },
     {
         quote: "Strive not to be a success, but rather to be of value",
         source: "Albert Einstein",
         year: '1912',
         citation: ' '
     },
     {
         quote:"Whatever the mind of man can conceive and believe, it can achieve", 
         source: "Napoleon Hill",
         year: '1973',
         citation: ' '
     },
     {
         quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference", 
         source: "Robert Frost",
         year: '1992',
         citation: ' '
     },
     {
         quote: "You miss 100% of the shots you don’t take", 
         source: "Wayne Gretzky",
         year: '1989',
         citation: ' '
     },
     {
         quote: "Life is what happens to you while you’re busy making other plans", 
         source: "John Lennon",
         year: '1978',
         citation: 'Beautifull Boy'
     },
     {
         quote: "The best time to plant a tree was 20 years ago. The second best time is now", 
         source: "Chinese Proverb",
         year: '1455',
         citation: ' '
     }
];


// Create random number to get random quote
function getRandomQuote() {
    let random = Math.floor(Math.random() * quotes.length); 
    let randomQuote = quotes[random];
    return randomQuote;
} 

 
// Create print function 
function printQuote() {
    let getQuote = getRandomQuote();
    let quoteBox = document.querySelector('#quote-box');
    let message = '<div id="quote-box">' + '<p class="quote">' + getQuote.quote + '</p>'; 
    message += '<p class="source">' + getQuote.source; 
    message += '<span class="citation">' + getQuote.citation + '</span>';
    message +='<span class="year">' + getQuote.year + '</span></p>' + '</div>';
// Create if/else statement that doesn't add a for a missing citation 
    if (getQuote.citation === ' ') {
        message = '<div id="quote-box">' + '<p class="quote">' + getQuote.quote + '</p>'; 
        message += '<p class="source">' + getQuote.source; 
        message +='<span class="year">' + getQuote.year + '</span></p>' + '</div>'; 
        quoteBox.innerHTML = message;
    } else {
        quoteBox.innerHTML = message;
    }       
}
  
//Change quote every 5 seconds if button isn't pressed
setInterval(printQuote, 5000); 

// Create random color number
function getRandomColor () {
  let randomColor = Math.floor(Math.random() * 256);
  return randomColor;
}

// Function to change background and button color
function randomColor () {
  let red = getRandomColor();
  let green = getRandomColor();
  let blue = getRandomColor();
  const bodyClass = document.querySelector('.body');
  const button = document.querySelector('#loadQuote')
  bodyClass.style.backgroundColor = 'rgba(' + red + ',' + green + ',' + blue + ',1)';
  button.style.backgroundColor = 'rgba(' + red + ',' + green + ',' + blue + ',1)';
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);






