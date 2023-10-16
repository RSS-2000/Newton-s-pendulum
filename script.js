function startAnimation() {
    let firstBall = document.querySelector('.ball:nth-child(1)');
    let lastBall = document.querySelector('.ball:nth-child(5)');

    let leftTop = document.querySelector('.thread-top1')
    let leftBott = document.querySelector('.thread-bottom1')
    let rightTop = document.querySelector('.thread-top5')
    let rightBott = document.querySelector('.thread-bottom5')

    firstBall.style.animation = 'none';
    lastBall.style.animation = 'none';

    leftTop.style.animation = 'none';
    leftBott.style.animation = 'none';
    rightTop.style.animation = 'none';
    rightBott.style.animation = 'none';


    let isAnimatingFirstBall = true;
    const audioElement = document.querySelector('audio')
    function toggleAnimation() {
        if (isAnimatingFirstBall) {
            firstBall.style.animation = 'none';
            leftTop.style.animation = 'none';
            leftBott.style.animation = 'none';
            rightTop.style.animation = 'thread-top5 0.6s linear infinite alternate-reverse';
            rightBott.style.animation = 'thread-bott5 0.6s linear infinite alternate-reverse';
            lastBall.style.animation = 'ball-2 0.6s linear infinite alternate-reverse';
        } else {
            lastBall.style.animation = 'none';
            rightTop.style.animation = 'none';
            rightBott.style.animation = 'none';
            leftTop.style.animation = 'thread-top1 0.6s linear infinite';
            leftBott.style.animation = 'thread-bott1 0.6s linear infinite alternate-reverse';

            firstBall.style.animation = 'ball-1 0.6s linear infinite alternate-reverse';
        }
        isAnimatingFirstBall = !isAnimatingFirstBall;
        audioElement.play();
    }
    toggleAnimation();
    setInterval(toggleAnimation, 600);
    audioElement.play();
}

let clikBall = document.querySelector('.ball-three')
clikBall.addEventListener('click', () => {
    setTimeout(() => { startAnimation() }, 200)
});