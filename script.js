let menuToggle = 2;

function showMenu() {
    if (menuToggle % 2 === 0) {
        document.getElementById('mainNav').style.display = 'inline';
        menuToggle += 1;
    } else {
        document.getElementById('mainNav').style.display = 'none';
        menuToggle += 1;
    }
}

function changeToVid(projectNumber) {
    document.getElementById(`project_${projectNumber}`).innerHTML = `<video src="project_${projectNumber}.mp4" type="video/mp4" controls>Your browser does not support videos.</video>`;
    console.log('Complete');
}

function closeFooter() {
    document.getElementById('socialMedia').style.bottom = '-100%';
}

function goToSocialPage(socialPage) {
    switch (socialPage) {
        case 'instagram':
            window.open('https://instagram.com/offical.mast.design?igshid=150os8b9zuge0', 'taget=_blank');
            break;
        case 'twitter':
            break;
        case 'facebook':
            break;
        case 'youtube':
            break;
    }
}