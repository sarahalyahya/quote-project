const quoteText = document.getElementById('quote-text');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const tweetBtn = document.getElementById('twitter-button');

// state
const apiUrl = 'https://type.fit/api/quotes';
let apiQuotes = [];

const getNewQuote = () => {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = quote.text;
    if (quote.author === null) {
        author.textContent = "Anon"
    } else {
        authorText.textContent = quote.author;
    }


}
const getQuotes = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json()
    apiQuotes = data;
    getNewQuote()
}

const tweet = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

newQuoteBtn.addEventListener('click', getNewQuote);
tweetBtn.addEventListener('click', tweet);

getQuotes();
