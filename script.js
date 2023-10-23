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
    let speed = 0.6;
    const audioElement = document.querySelector('audio')
    function toggleAnimation() {
        if (isAnimatingFirstBall) {
            firstBall.style.animation = 'none';
            leftTop.style.animation = 'none';
            leftBott.style.animation = 'none';
            rightTop.style.animation = `thread-top5 ${speed}s ease-in infinite alternate-reverse`;
            rightBott.style.animation = `thread-bott5 ${speed}s ease-in infinite alternate-reverse`;
            lastBall.style.animation = `ball-2 ${speed}s ease-in infinite alternate-reverse`;
            audioElement.load();
            audioElement.play();
            isAnimatingFirstBall = false;
        } else {
            lastBall.style.animation = 'none';
            rightTop.style.animation = 'none';
            rightBott.style.animation = 'none';
            leftTop.style.animation = `thread-top1 ${speed}s ease-in infinite alternate-reverse`;
            leftBott.style.animation = `thread-bott1 ${speed}s ease-in infinite alternate-reverse`;
            firstBall.style.animation = `ball-1 ${speed}s ease-in infinite alternate-reverse`;
            audioElement.load();
            audioElement.play();
            isAnimatingFirstBall = true;
        }
    }
    setInterval(toggleAnimation, speed * 1000);
}

let clikBall = document.querySelector('.ball-three')
clikBall.addEventListener('click', () => {
    startAnimation()
});