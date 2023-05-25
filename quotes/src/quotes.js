const quotes = [
    {
        quote:  "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        quote:  "When you reach the end of your rope, tie a knot in it and hang on",
        author: "Franklin D. Roosevelt"
    },
    {
        quote:  "Always remember that you are absolutely unique. Just like everyone else",
        author: "Margaret Mead"
    },
    {
        quote:  "Don't judge each day by the harvest you reap but by the seeds that you plant",
        author: "Robert Louis Stevenson"
    },
    {
        quote:  "The future belongs to those who believe in the beauty of their dreams1",
        author: "-Eleanor Roosevelt1"
    },
    {
        quote:  "The future belongs to those who believe in the beauty of their dreams2",
        author: "-Eleanor Roosevelt2"
    },
    {
        quote:  "The future belongs to those who believe in the beauty of their dreams3",
        author: "-Eleanor Roosevelt3"
    },
    {
        quote:  "The future belongs to those who believe in the beauty of their dreams4",
        author: "-Eleanor Roosevelt4"
    },
    {
        quote:  "The future belongs to those who believe in the beauty of their dreams5",
        author: "-Eleanor Roosevelt5"
    },
    {
        quote:  "Don't judge each day by the harvest you reap but by the seeds that you plant2",
        author: "Robert Louis Stevenson"
    }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;