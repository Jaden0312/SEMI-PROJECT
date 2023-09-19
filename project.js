//글로벌 변수 설정
const firstForm = document.getElementById('form-1');
const secondForm = document.getElementById('form-2');
const thirdForm = document.getElementById('form-3');

const firstNext = document.getElementById('next-1');
const secondNext = document.getElementById('next-2');
const firstBack = document.getElementById('back-1');
const secondBack = document.getElementById('back-2');

const progressBar = document.getElementById('progress-back');

const backgroundVideo = document.getElementById('background-video');

//Next,Back 버튼 클릭 시 form 및 진행바 변경
firstNext.addEventListener('click', () => {
    firstForm.style.left = '-450px';
    secondForm.style.left = '40px';
    progressBar.style.width = '240px';
})
firstBack.addEventListener('click', () => {
    firstForm.style.left = '40px';
    secondForm.style.left = '450px';
    progressBar.style.width = '120px';
    backgroundVideo.style.visibility = 'hidden';
})
secondNext.addEventListener('click', () => {
    secondForm.style.left = '-450px';
    thirdForm.style.left = '40px';
    progressBar.style.width = '360px';
    backgroundVideo.style.visibility = 'visible';
})
secondBack.addEventListener('click', () => {
    secondForm.style.left = '40px';
    thirdForm.style.left = '450px';
    progressBar.style.width = '240px';
    backgroundVideo.style.visibility = 'hidden';
})

