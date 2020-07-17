let inforUrl = 'https://raw.githubusercontent.com/xnameFV/MY-PORTFOLIO/master/data/information.json';
let aboutUrl = 'https://raw.githubusercontent.com/xnameFV/MY-PORTFOLIO/master/data/aboutMe.json';
let whatIDoUrl = 'https://raw.githubusercontent.com/xnameFV/MY-PORTFOLIO/master/data/whatIDo.json';
let skillUrl = 'https://raw.githubusercontent.com/xnameFV/MY-PORTFOLIO/master/data/skills.json';
let expUrl = 'https://raw.githubusercontent.com/xnameFV/MY-PORTFOLIO/master/data/experiences.json';
let projectsUrl = 'https://raw.githubusercontent.com/xnameFV/MY-PORTFOLIO/master/data/projects.json';
let gistUrl = 'https://api.github.com/users/xnameFV/gists';

fetch(inforUrl)
            .then(res => res.json())
            .then(data => {
                renderHeroSection(data);
            })
            .catch(err => console.log(err));



fetch(aboutUrl) 
            .then(res => res.json())
            .then(data => {
                renderAboutSection(data);
            })
            .catch(err => console.log(err));


fetch(whatIDoUrl) 
            .then(res => res.json())
            .then(data => {
                renderWhatToDoSection(data);
            })
            .catch(err => console.log(err));


fetch(skillUrl)
            .then(res => res.json())
            .then(data => {
                renderSkillSection(data);
            })
            .catch(err => console.log(err));


fetch(expUrl)
            .then(res => res.json())
            .then(data => {
                renderExperienceSection(data);
            })
            .catch(err => console.log(err));


fetch(projectsUrl) 
    .then(res => res.json())
    .then(data => {
        renderProjectSection(data);
    })
    .then(data => {
            // setup to apply mansory grid to projects grid and filter project function.
            mansorySetup();
            // when user click on tab. color underline this tab.
            function fosingTab() {
            let styleClass = 'nav__item--state-click';
            let tabs = document.querySelectorAll('.project-tabs .nav__item--green');
            tabs.forEach(tab => {
                tab.addEventListener('click', e => {
                let tabs = document.querySelectorAll('.project-tabs .nav__item--green');
                tabs.forEach(t => {t.classList.remove(styleClass)});
                tab.classList.add(styleClass);
                });
            });
            }
            fosingTab();
    })
    .then(data => {
        const pros = document.getElementById('all-projects');
        let ps = pros.querySelectorAll('.grid .project');
        ps.forEach(p => {
            let url = p.getAttribute('data-preview-url');
            openProjectPreview(p,url);
        });
    })
    .catch(err => console.log(err));



let take6 = gistUrl + '?per_page=6';
fetch(take6)
    .then(res => res.json())
    .then(listPost => {
        document.querySelector('#featured-posts .row').innerHTML = '';
        listPost.forEach(d => {
            renderPostSection(d);
        });
    })
    .then(listPost => {
        let cards = document.querySelectorAll('#featured-posts .row .card');
        cards.forEach(c => {
            let id = c.getAttribute('data-id');
            let url = 'https://api.github.com/gists/' + id;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    let key = Object.keys(data.files)[0];
                    let nurl = data.files[key].raw_url;
                    openProjectPreview(c, nurl);
                });

        });
    })
    .catch(err => console.log(err));



    function openProjectPreview(p, url) {
        p.style.cursor = 'pointer';
        p.addEventListener('click', e=> {
            setupModal();
            openModal();
            fetch(url)
                .then(res => res.text())
                .then(data => {
                    console.log(data);
                    // convert markdown format to html tags.
                    let rs = marked(data);
                    addContentToModal(rs);
                })
                .catch(err => console.log(err));
        });
    }