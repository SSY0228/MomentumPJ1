const quotes = [
  {
    quote: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote: "Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win.",
    author: "Stephen King",
  },
  {
    quote: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
    author: "George Bernard Shaw",
  },
  {
    quote: "Nobody realizes that some people expend tremendous energy merely to be normal.",
    author: "Albert Camus",
  },
  {
    quote: "Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.",
    author: "Roy T. Bennett",
  },
  {
    quote: "More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.",
    author: "Roy T. Bennett",
  },
  {
    quote: "Do I not destroy my enemies when I make them my friends?",
    author: "Abraham Lincoln",
  },
  ,
  {
    quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    author: "William Shakespeare",
  },
  {
    quote: "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
    author: "Mark Twain"
  },
  {
    quote: "Knowing yourself is the beginning of all wisdom.",
    author: "Aristotle",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates"
  },
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:"How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author:"Anne Frank",
  },
  {
    quote:"Man is the only creature who refuses to be what he is.",
    author:"Albert Camus",
  },
  {
    quote:"There is nothing either good or bad, but thinking makes it so.",
    author:"William Shakespear",
  },
  {
    quote:"Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
    author:"J.K.Rowling",
  },
  {
    quote:"The price good men pay for indifference to public affairs is to be ruled by evil men.",
    author:"Plato",
  },
  {
    quote:"Morality is simply the attitude we adopt towards people we personally dislike.",
    author:"Oscar Wilde",
  },
  {
    quote:"Life is really simple, but we insist on making it complicated.",
    author:"Confucius",
  },
  {
    quote:"Be kind, for everyone you meet is fighting a hard battle.",
    author:"Socrates",
  },
  {
    quote:"We accept the love we think we deserve.",
    author:"Stephen Chbosky",
  },
  {
    quote:"One is loved because one is loved. No reason is needed for loving.",
    author:"Paulo Coelho",
  },
  {
    quote:"Where there is love there is life.",
    author:"Mahatma Gandhi",
  },
  {
    quote: "We loved with a love that was more than love.",
    author: "Edgar Allen Poe",
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

function quoting() {
  const quotesNowOn = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = quotesNowOn.quote;
  author.innerText = "- " + quotesNowOn.author + " -";
}

window.addEventListener("load", quoting);
