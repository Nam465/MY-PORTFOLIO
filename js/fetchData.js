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
    .catch(err => console.log(err));