// take all image with indentifer class '.lozad'

function lazyLoad(inder = 'lozad', inAdvance =100) {
    function x12() {
        let lozads = document.getElementsByClassName(inder);
        for (let i=0; i<lozads.length; i++) 
            isObeveser(lozads[i], inAdvance);
        
        mansorySetup();
        // check if all image is loaded, remove event listener.
    }
    function isObeveser(img, inAdvance) {
        const xy = img.getBoundingClientRect();
        if (xy.y < window.innerHeight + window.pageYOffset + inAdvance) {
            // do something to load image here.
            img.src = img.dataset.src;

            // remove image is loaded.
            img.classList.remove(inder);
        }
    }
    function removeLazyLoad() {
        window.removeEventListener('scroll', _.throttle(x12, 500));
        window.removeEventListener('resize', _.throttle(x12, 500));      
    }
    x12();
    window.addEventListener('scroll', _.throttle(x12, 300));
    window.addEventListener('resize', _.throttle(x12, 1000));

}