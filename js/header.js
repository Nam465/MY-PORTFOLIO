// function for header shink scroll

function styleWhenScrollTo(selector, y) {
    window.onscroll = () => {
        if (document.body.scrollTop > y || document.documentElement.scrollTop > y) {
            document.getElementById(selector).classList.add('bg-grey');
        }else {
            document.getElementById(selector).classList.remove('bg-grey');
        }

    };
}