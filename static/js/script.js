// Past experience modals

const companyLogos = document.querySelectorAll('.companyLogo');
const closeBtns = document.querySelectorAll('.close-experience');
const modalBackgrounds = document.querySelectorAll('.modal-background');


modalBackgrounds.forEach(bkgrd =>  {
    bkgrd.addEventListener('click', closeModal);
});

companyLogos.forEach(logo => {
    logo.addEventListener('click', openModal);
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
});

function openModal(e) {
    const companyName = e.target.alt;

    document.querySelector('html').style.overflow = 'hidden';
    document.getElementById(companyName).classList.add('is-active');
};


function closeModal(e) {
    let companyName;
    if (e.target.localName === 'button') {
        companyName = e.target.parentNode.parentNode.parentNode.id;
    }

    if (e.target.localName === 'div') {
        companyName = e.target.parentNode.id;
    }

    document.querySelector('html').style.overflow = 'visible';
    document.getElementById(companyName).classList.remove('is-active');
};