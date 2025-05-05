const configOverlayElementOne = document.querySelector('.cofig-overlay-one');
const configOverlayElementTwo = document.querySelector('.cofig-overlay-two');
const configOverlayElementThree = document.querySelector('.cofig-overlay-three');
const configOverlayElementFour = document.querySelector('.cofig-overlay-four');
const backdropElement = document.getElementById('backdrop');
const projectOneElement = document.querySelector('.project-one');
const projectTwoElement = document.querySelector('.project-two');
const projectThreeElement = document.querySelector('.project-three');
const projectFourElement = document.querySelector('.project-four');
const cancelConfigOverlayElementOne = document.querySelector('.overlay-cancel-btn-one');
const cancelConfigOverlayElementTwo = document.querySelector('.overlay-cancel-btn-two');
const cancelConfigOverlayElementThree = document.querySelector('.overlay-cancel-btn-three');
const cancelConfigOverlayElementFour = document.querySelector('.overlay-cancel-btn-four');

function openPlayerOverlayOne(event) {
    configOverlayElementOne.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerOverlayOne() {
    configOverlayElementOne.style.display = 'none';
    backdropElement.style.display = 'none';
}
function openPlayerOverlayTwo(event) {
    configOverlayElementTwo.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerOverlayTwo() {
    configOverlayElementTwo.style.display = 'none';
    backdropElement.style.display = 'none';
}

function openPlayerOverlayThree(event) {
    configOverlayElementThree.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerOverlayThree() {
    configOverlayElementThree.style.display = 'none';
    backdropElement.style.display = 'none';
}

function openPlayerOverlayFour(event) {
    configOverlayElementFour.style.display = 'block';
    backdropElement.style.display = 'block';
}

function closePlayerOverlayFour() {
    configOverlayElementFour.style.display = 'none';
    backdropElement.style.display = 'none';
}
projectOneElement.addEventListener('click', openPlayerOverlayOne);
projectTwoElement.addEventListener('click', openPlayerOverlayTwo);
projectThreeElement.addEventListener('click', openPlayerOverlayThree);
projectFourElement.addEventListener('click', openPlayerOverlayFour);
cancelConfigOverlayElementOne.addEventListener('click', closePlayerOverlayOne);
cancelConfigOverlayElementTwo.addEventListener('click', closePlayerOverlayTwo);
cancelConfigOverlayElementThree.addEventListener('click', closePlayerOverlayThree);
cancelConfigOverlayElementFour.addEventListener('click', closePlayerOverlayFour);