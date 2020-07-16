let inforUrl = 'https://raw.githubusercontent.com/xnameFV/MY-PORTFOLIO/master/data/information.json';
let aboutUrl = 'https://raw.githubusercontent.com/xnameFV/MY-PORTFOLIO/master/data/aboutMe.json';
let whatIDoUrl = 'https://raw.githubusercontent.com/xnameFV/MY-PORTFOLIO/master/data/whatIDo.json';
let skillUrl = 'https://raw.githubusercontent.com/xnameFV/MY-PORTFOLIO/master/data/skills.json';
let expUrl = 'https://raw.githubusercontent.com/xnameFV/MY-PORTFOLIO/master/data/experiences.json';
let projectsUrl = 'https://raw.githubusercontent.com/xnameFV/MY-PORTFOLIO/master/data/projects.json';

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
            openProjectPreview(p);
        });
    })
    .catch(err => console.log(err));


function openProjectPreview(p) {
    p.style.cursor = 'pointer';
    p.addEventListener('click', e=> {
        let url = p.getAttribute('data-preview-url');
        setupModal();
        openModal();
        fetch(url)
            .then(res => res.text())
            .then(data => {
                // convert markdown format to html tags.
                let rs = marked(data);
                addContentToModal(rs);
            })
            .catch(err => console.log(err));
    });
}
