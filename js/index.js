// change background of header when user scrool down.
styleWhenScrollTo('header', 10);



// show a new quote.
setInterval(function renderQuote() {
    let {text, from} = getRandomQuote();
    document.querySelector('.inspire .inspire__text').innerText = text;
    document.querySelector('.inspire .inspire__from').innerText = from;
}, 10000);




// bookmark function for nav item.
  let eleList = document.querySelectorAll('#header .nav .nav__item a'),
      holders = [];
  for (let i = 0; i < eleList.length; i++) {
      holders[i] = eleList[i];
  }
  holders[holders.length] = document.querySelector('#footer .footer__end i');
  
  holders.forEach(ele => {
    handleBookmark(ele)
  });




