function addBookmarks() {
    document.body.onload = function() {
        let eleList = document.querySelectorAll('#header .nav .nav__item a'),
            holders = [];
        for (let i = 0; i < eleList.length; i++) {
            holders[i] = eleList[i];
        }
        holders[holders.length] = document.querySelector('#footer .footer__end i');
        
        holders.forEach(h => {
            h.onclick = e => {
                e.preventDefault();
                let beyond = h.getAttribute('data-scroll-to-id');
                if (beyond != '') {
                    // do with beyond
                    let y = document.querySelector(beyond).offsetTop;
                    window.scrollTo(0, y);
                }
            }
        });
    };

}