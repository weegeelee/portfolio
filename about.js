const companies = document.querySelectorAll('.company-name');
const contentsElment = document.querySelectorAll('.content');

for (let i = 0; i < companies.length; i++) {
    companies[i].setAttribute('index', i);
    companies[i].addEventListener('click', changeElment);   
}

function changeElment() {
    for (let i = 0; i < companies.length; i++) {
        companies[i].className = '';
    }
    this.className = 'current';
    let index = this.getAttribute('index');
    console.log(index);
    for (let i = 0; i < companies.length; i++) {
        contentsElment[i].style.display = 'none';
    }
    contentsElment[index].style.display = 'block';
}