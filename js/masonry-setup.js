
// setup to apply mansory grid to projects grid.
let msy;
let removed = [];

function mansorySetup() {
    let tabs = document.querySelectorAll('.project-tabs .nav__item--green');
    imagesLoaded( '.grid', () => {
    msy = new Masonry('.grid', {itemSelector: '.grid-item'});
    tabs.forEach(tab => {
    tab.onclick = e => {
        let listProjects = msy.getItemElements();
        let condition = tab.getAttribute('data-category-condition');
        filterAndReloadGrid(condition, listProjects);
    }
    }); 
    } );
}

// render project to screen ,that match with condition.
function filterAndReloadGrid(condition, listProjects) {
    // 1. remove all project on screen, that not match with condition
    // 2. check all project in removed Array. which project match condition
    //    add to screen.
    let hold = [];

    // check any project in removed array
    removed.forEach(e => {
        let value = e.getAttribute('data-category-value');
        if (value.includes(condition)) {
            // add project to .grid if it match with condition.
            document.querySelector('.grid').appendChild(e);
            msy.appended(e);
            msy.layout();
        }else 
            // hold store all project is removed.
            hold.push(e);
    });
    
    listProjects.forEach(project => {
        let value = project.getAttribute('data-category-value');
        if (!value.includes(condition)) {
            msy.remove(project);
            hold.push(project);
            msy.layout();
    }
    });

    removed = hold;
}