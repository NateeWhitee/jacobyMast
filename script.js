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