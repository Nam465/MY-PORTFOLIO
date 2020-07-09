
// setup to apply mansory grid to projects grid.
let msy;

function mansorySetup() {
imagesLoaded( '.grid', () => {
msy = new Masonry('.grid', {itemSelector: '.grid-item'});
let tabs = document.querySelectorAll('.project-tabs .nav__item--green');
let listProjects = msy.getItemElements();

tabs.forEach(tab => {
tab.onclick = e => {
let condition = tab.getAttribute('data-category-condition');
filterAndReloadGrid(condition, listProjects);
}
}); 
} );
}

// remove itemSlector and set display is none when a element not match with condition.
function filterAndReloadGrid(condition, listProjects) {
    listProjects.forEach(project => {
    let value = project.getAttribute('data-category-value');
    if (value.includes(condition)) {
        // add style display block to project element.
        // if project not have .grid-item class, add it.
        project.style.display = 'block';
        if (!project.classList.contains('.grid-item')) 
            project.classList.add('.grid-item');
            msy.layout();
    } else {
    // remove class .grid-item, and set display is none.
        project.classList.remove('.grid-item');
        project.style.display = 'none';
        msy.layout();
    }
    });
}