let inforUrl = 'https://raw.githubusercontent.com/xnameFV/MY-PORTFOLIO/master/data/information.json';

fetch(inforUrl)
    .then(res => res.json())
    .then(data => {
        renderHeroSection(data);
    })
    .catch(err => console.log(err));