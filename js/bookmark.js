
// Them 1 onclick toi 1 element va cuon screen xuong vi tri cua element da duoc chi dinh
function handleBookmark(ele) {
    ele.onclick = e => {
        e.preventDefault();
        let beyond = ele.getAttribute('data-scroll-to-id');
        if (beyond != '') {
            // do with beyond
            let y = document.querySelector(beyond).offsetTop;
            window.scrollTo(0, y);
        }
    }
}