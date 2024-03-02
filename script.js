const getDrawerbtnElement = document.getElementById('drawer-btn');
const getMobiledrawerElement = document.getElementById('mobile-drawer');
const getMainElement = document.querySelector('.hidden');

function openMobiledrawerList() {
    getMobiledrawerElement.classList.toggle('open'); 
    getMainElement.classList.toggle('open');
    getDrawerbtnElement.classList.toggle('open');

}

getDrawerbtnElement.addEventListener('click', openMobiledrawerList);