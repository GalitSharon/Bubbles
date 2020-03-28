import Circle from "./Circle.js";

const COLORS = ['#54123b', '#84142d', '#C02739', '#29c7ac', '#116979'];
const CIRCLE_SIZE_MAX = 40;
const CIRCLE_SIZE_MIN = 12;

let circles = [];

let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomColor() {
    return COLORS[Math.floor(Math.random() * (COLORS.length))];
}

function createCircle(x, y) {
    let radios = (Math.random() * CIRCLE_SIZE_MAX) + CIRCLE_SIZE_MIN;
    let color = randomColor();

    circles.push(new Circle(x, y, radios, color));
}

function draw(circle) {
    c.beginPath();
    c.arc(circle.x, circle.y, circle.radios, Math.PI * 2, false);
    c.fillStyle = circle.color;
    c.fill();
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let i = 0; i < circles.length; ++i) {
        let circle = circles[i];
        circle.update(circles, i);
        draw(circle);
    }
}

function start() {
    animate();
    let body = document.querySelector("body");
    body.addEventListener('click', (e) => {
        createCircle(e.clientX, e.clientY);
    });
}

start();