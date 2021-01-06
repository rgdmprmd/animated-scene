//  Movement animations components
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items that moves slower
const circle = document.querySelector('.circle');
const title = document.querySelector('.info h1');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.description');
const sizes = document.querySelector('.sizes');

// Moving animations event
container.addEventListener('mousemove', function(e) {
    let x = (window.innerWidth / 2 - e.pageX) / 25;
    let y = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Animate in
container.addEventListener('mouseenter', function(e) {
    card.style.transition = 'none';

    circle.style.transform = 'rotateZ(-270deg)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    title.style.transform = 'translateZ(150px)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(90px)';
});

// Animate out
container.addEventListener('mouseleave', function(e) {
    card.style.transition = 'all 0.8s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    circle.style.transform = 'rotateZ(0deg)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    title.style.transform = 'translateZ(0px)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
})