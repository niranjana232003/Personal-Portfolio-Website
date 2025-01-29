function showAbout() {
    hideAll();
    document.getElementById('aboutMe').style.display = 'block';
}

function showProjects() {
    hideAll();
    document.getElementById('projects').style.display = 'block';
}

function showTechnologies() {
    hideAll();
    document.getElementById('technologies').style.display = 'block';
}

function showContact() {
    document.getElementById('contactModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

function hideAll() {
    document.getElementById('aboutMe').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('technologies').style.display = 'none';
}
