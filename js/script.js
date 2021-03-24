/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 ***/

//"The only impossible journey is the one you never begin."-tony robbins
//"Success is not final; failure is not fatal: It is the courage to continue that counts." -Winston S. Churchill
//"The way to get started is to quit talking and begin doing." -Walt Disney
//"Do not let making a living prevent you from making a life." -John Wooden
//"Life is a long lesson in humility." -James M. Barrie
//"Love the life you live. Live the life you love." -Bob Marley
//"If life were predictable it would cease to be life, and be without flavor." -Eleanor Roosevelt
//"Life is what happens when you're busy making other plans." -John Lennon
//"Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin
//"Never let the fear of striking out keep you from playing the game." -Babe Ruth


//Quote Array of 10 quotes, authors, and tags
let quotes = [{
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
        tags: "Inspirational"
    },
    {
        quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
        author: "Winston S. Churchill",
        tags: "History"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        tags: "Motivational"
    },
    {
        quote: "Do not let making a living prevent you from making a life.",
        author: "John Wooden",
        tags: "Inspirational"
    },
    {
        quote: "Life is a long lesson in humility.",
        author: "James M. Barrie",
        tags: "Motivational"
    },
    {
        quote: "Love the life you live. Live the life you love.",
        author: "Bob Marley",
        tags: "Music"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt",
        tags: "History"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        tags: "Music"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin",
        tags: "History"
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth",
        tags: "Sports"
    }

];

/***
 * `getRandomQuote` function
 ***/



/***
 * `printQuote` function
 ***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);