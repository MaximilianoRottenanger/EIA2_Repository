const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const crc2 = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(_min: number, _max: number): number {
    return Math.random() * (_max - _min) + _min;

}

function randomColor(): string {
    const h = Math.floor(random(0, 360));
    const s = Math.floor(random(50, 100));
    const l = Math.floor(random(40, 70));
    return `hsl(${h}, ${s}%, ${l}%)`;
}

function drawBackground() {
    const gradient = crc2.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, randomColor());
    gradient.addColorStop(1, randomColor());
    crc2.fillStyle = gradient;
    crc2.fillRect(0, 0, canvas.width, canvas.height);
}

function drawCircles(_count: number) {
    for (let i = 0; i < _count; i++) {
        let x = random(0, canvas.width);
        let y = random(0, canvas.height);
        let radius = random(20, 100);

        crc2.beginPath();
        crc2.arc(x, y, radius, 0, 2 * Math.PI);
        crc2.fillStyle = randomColor();
        crc2.globalAlpha = random(0.3, 0.8);
        crc2.fill();
    }
}

function drawLines(_count: number) {
    for (let i = 0; i < _count; i++) {
        crc2.beginPath();
        crc2.moveTo(random(0, canvas.width), random(0, canvas.height));
        for (let j = 0; j < random(3, 7); j++) {
            crc2.lineTo(random(0, canvas.width), random(0, canvas.height));
        }
        crc2.strokeStyle = randomColor();
        crc2.lineWidth = random(1, 5);
        crc2.globalAlpha = random(0.5, 1);
        crc2.stroke();
    }
}

function drawRectangles(_count: number) {
    for (let i = 0; i < _count; i++) {
        let x = random(0, canvas.width);
        let y = random(0, canvas.height);
        let width = random(50,200);
        let height = random(50,200);

        crc2.save();
        crc2.translate(x, y);
        crc2.rotate(random(0, Math.PI / 2));
        crc2.fillStyle = randomColor();
        crc2.globalAlpha = random(0.4, 0.9);
        crc2.fillRect(-width / 2, -height / 2, width, height);
        crc2.restore();
    }
}

function drawEllipses(_count: number) {
    for (let i = 0; i < _count; i++) {
        let x = random(0, canvas.width);
        let y = random(0, canvas.height);
        let radiusX = random(30 ,100);
        let radiusY = random(30, 100);

        crc2.beginPath();
        crc2.ellipse(x, y, radiusX, radiusY, random(0, Math.PI,), 0, 2 * Math.PI);
        crc2.fillStyle = randomColor();
        crc2.globalAlpha = random(0.2, 0.8);
        crc2.fill();
    }
}

function generateArt() {
    drawBackground();
    drawCircles(50);
    drawLines(30);
    drawRectangles(20);
    drawEllipses(20);
}

generateArt();