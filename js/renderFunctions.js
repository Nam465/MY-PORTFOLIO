// section render
function renderHeroSection(infor) {
    let {name , avataLink, email, phone, address, job, socialLinks} = infor;
    let socialIcons = document.querySelectorAll('.hero-panel__social-icons a');

    document.querySelector('.hero-panel__name').innerText = name;
    document.querySelector('.hero-panel__email').innerText = email;
    document.querySelector('.hero-panel__phone').innerText = phone;
    document.querySelector('.hero-panel__address').innerText = address;
    document.querySelector('.hero-panel__job').innerText = job;
    document.querySelector('.avata__bg').style.backgroundImage = `url(${avataLink})`;
    socialIcons.forEach(s => s.style.href=socialLinks);
}



// aboute render
function renderAboutSection(data) {
    let {about, tags} = data;
    let listTags = '';
    tags.forEach(tag => {
        listTags += `<span class="border text-1 mr-10">${tag}</span>`;
    });

    document.querySelector('.about__text').innerText = about;
    document.querySelector('.about__tags-container').innerHTML = listTags;
}



// what to do render
function renderWhatToDoSection(data) {
    let cards = document.querySelectorAll('.what-i-do .card');
    for (let i = 0; i < cards.length; i++) {
        let container = cards[i],
            h4 = cards[i].querySelector('h4'),
            cardBody = cards[i].querySelector('.what-i-do .card__body');
        h4.innerText = data[i].title;
        cardBody.innerText = data[i].text;
    }
}



// skill render
function renderSkillSection(data) {
    let {technical, professional} = data;
    let techContainer = document.querySelector('.skills__technical-container');
    let projessionalContainer = document.querySelector('.skills__professional-container');
    let techData = '';
    let proData = '';
    technical.forEach(t => {
        techData +=     `<div class="skill">
                            <i class="far fa-check-square skill__box"></i>
                            <div class="skill__content">${t}</div>
                        </div> `
    });
    professional.forEach(p => {
        proData += `<div class="skill">
                        <i class="far fa-check-square skill__box"></i>
                        <div class="skill__content">${p}</div>
                    </div> `
    });
    techContainer.innerHTML += techData;
    projessionalContainer.innerHTML += proData;
}



// experience render
function renderExperienceSection(data) {
    data.forEach(exp => {
        let type = exp.type,
            title = exp.title,
            time = exp.time,
            text = exp.text;
        if (type === 'education') {
           document.querySelector('.experience__education-container').innerHTML +=
           `<div class="card mb-30">
                <div class="card__head">
                    <h4>
                    ${title}
                    </h4>
                </div>
                <div class="card__body">
                    <div class="green mt-10 mb-10">${time}</div>
                    <div class="text-1">
                        ${text}
                    </div>
                </div>
            </div>`;
            
        }else if (type = 'work') {
            // do something
            document.querySelector('.experience__work-container').innerHTML +=
                `<div class="card mb-30">
                    <div class="card__head">
                        <h4>
                            ${title}
                        </h4>
                    </div>
                    <div class="card__body">
                        <div class="green mt-10 mb-10">${time}</div>
                        <div class="text-1">
                          ${text}
                        </div>
                    </div>
                </div>`;
        }
    });
}




// project render
function renderProjectSection(data) {
    let {type, projects} = data;
    let tabs = document.querySelector('.project-tabs');
    let projectContainer = document.querySelector('.all-projects');
    type.forEach(t => {
        let id = t.id,
            name = t.name;
        tabs.innerHTML += 
        `<div class="nav__item--green" data-category-condition="${id}">${name}</div>`;
    });
    projects.forEach(p => {
        
    });
}