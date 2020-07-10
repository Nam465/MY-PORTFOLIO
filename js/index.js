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



// setup to apply mansory grid to projects grid.
mansorySetup();

// when user click on tab. color underline this tab.
function fosingTab() {
  let styleClass = 'nav__item--state-click';
  let tabs = document.querySelectorAll('.project-tabs .nav__item--green');
  tabs.forEach(tab => {
    tab.addEventListener('click', e => {
      // ...tab
      // ...styleClass
      let tabs = document.querySelectorAll('.project-tabs .nav__item--green');
      tabs.forEach(t => {t.classList.remove(styleClass)});
      tab.classList.add(styleClass);
    });
  });
}
fosingTab();