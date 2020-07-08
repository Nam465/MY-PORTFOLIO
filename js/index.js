styleWhenScrollTo('header', 10);

// each 3s add a new quote to #quote element 
setInterval(function renderQuote() {
    let {text, from} = getRandomQuote();
    document.querySelector('.inspire .inspire__text').innerText = text;
    document.querySelector('.inspire .inspire__from').innerText = from;
}, 7000);