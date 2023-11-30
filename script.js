document.getElementById('submit').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
    document.body.classList.add('no-scroll');
})

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
    document.body.classList.remove('no-scroll');
});


const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = 'nav-close.svg'
    } else {
        navBtnImg.src = 'nav-open.svg'
    }
}

