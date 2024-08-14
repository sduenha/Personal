const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const ball = document.querySelector('.marker-gallery');
const img = document.querySelector('.project-img');
const balls = document.getElementsByClassName('ball');
const projectName = document.querySelector('.project-name');
const projectInfo = document.querySelector('.project-info-text');
let numSelectedBall = 0;
const projectsName = ["Dice game", "Omnifood", "Bankist", "Super Trunfo"];
const projectsInfo = ["This is a game for 2", "This is a site for food", "This is a bank", "This is a game for 1"];

leftArrow.addEventListener("click", function() {
    if (numSelectedBall == 0) {
        numSelectedBall = (balls.length) - 1;
        displayProject(numSelectedBall, 0);
    }
    else {
        numSelectedBall --;
        displayProject(numSelectedBall, numSelectedBall + 1)
    }
});

rightArrow.addEventListener("click", function() {
    if (numSelectedBall == balls.length - 1) {
        numSelectedBall = 0;
        displayProject(numSelectedBall, balls.length - 1);
    }
    else {
        numSelectedBall ++;
        displayProject(numSelectedBall, numSelectedBall - 1);
    }
});

ball.addEventListener("click", function(e) {
    const element = e.target;
    if(element.classList.value != 'marker_gallery') {
        let ballClick = parseInt((element.classList.value.split(' ')).slice(0));
        displayProject(ballClick, numSelectedBall);
        numSelectedBall = ballClick;
    };
});

function displayProject(now, before) {
    balls[before].classList.remove('select-ball');
    balls[now].classList.add('select-ball');
    img.src = `img/projects/project${now}.png`;
    projectName.innerHTML = projectsName[numSelectedBall];
    projectInfo.innerHTML = projectsInfo[numSelectedBall];
}