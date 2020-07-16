// section render
function renderHeroSection(infor) {
    let {name , avataLink, email, phone, address, job, socialLinks} = infor;
    let socialIcons = document.querySelectorAll('.hero-panel__social-icons a');

    document.querySelector('.hero-panel__name').innerText = name;
    document.querySelector('.hero-panel__email').innerText = email;
    document.querySelector('.hero-panel__phone').innerText = phone;
    document.querySelector('.hero-panel__address').innerText = address;
    document.querySelector('.hero-panel__job').innerText = job;
    document.querySelector('.avata__bg').style.backgroundImage = avataLink;
    socialIcons.forEach(s => s.style.href=socialLinks);
}



// aboute render
function renderAboutSection(data) {
    
}



// what to do render
function renderWhatToDoSection(data) {

}



// skill render
function renderSkillSection(data) {

}



// experience render
function renderExperienceSection(data) {

}




// project render
function renderProjectSection(data) {
    
}