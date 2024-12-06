namespace Vogelhaus {

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    function handleLoad(_event: Event): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawSky();
        drawSun();
        drawMountain(0, 1000, 1000, 1000, 500, 100, "#A9A9A9");
        drawMountain(500, 1000, 1200, 100, 2000, 1000, "#808080");
        drawCloud(600, 200, 200, 100);
        drawCloud(1300, 300, 200, 100);
        drawTree(400, 500)
        drawTree(600, 620)
        drawTree(900, 700)
        drawTree(1200, 600)
        drawTree(1500, 760)
        drawSnowman();
        drawBirdhouse();
        drawBird(700, 600, "darkblue")
        drawBird(800, 350, "darkblue")
        drawBird(1200, 750, "darkblue")
        drawBird(300, 580, "darkblue")
        drawBird(1400, 450, "darkblue")

        for (let i = 0; i < 30; i++) {
            drawSnowflake(Math.random() * canvas.width, Math.random() * canvas.height);
        }
    }

    function drawSky() {
        const gradient = crc2.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#87CEEB");
        gradient.addColorStop(1, "#f0f8ff");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawSun() {
        crc2.beginPath();
        crc2.arc(150, 150, 100, 0, Math.PI * 2);
        crc2.fillStyle = "yellow";
        crc2.globalAlpha = 0.8;
        crc2.fill();
        crc2.globalAlpha = 1;
    }

    function drawCloud(x: number, y: number, width: number, height: number) {
        crc2.beginPath();
        crc2.ellipse(x, y, width, height, 0, 0, Math.PI * 2);
        crc2.fillStyle = "white";
        crc2.globalAlpha = 0.9;
        crc2.fill();
        crc2.globalAlpha = 1;
    }

    function drawTree(x: number, y: number) {
        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 25, y - 100);
        crc2.lineTo(x + 50, y);
        crc2.closePath();
        crc2.fill();
    }

    function drawMountain(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, color: string) {
        crc2.beginPath();
        crc2.moveTo(x1, y1);
        crc2.lineTo(x2, y2);
        crc2.lineTo(x3, y3);
        crc2.closePath();
        crc2.fillStyle = color;
        crc2.fill();
    }

    function drawSnowman() {
        crc2.fillStyle = "white";
        crc2.beginPath();
        crc2.arc(200, 800, 100, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 650, 80, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 520, 60, 0, Math.PI * 2);
        crc2.fill();

        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.arc(180, 490, 10, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(230, 490, 10, 0, Math.PI * 2);
        crc2.fill();
        crc2.fillStyle = "orange";
        crc2.beginPath();
        crc2.moveTo(200, 500);
        crc2.lineTo(200, 520);
        crc2.lineTo(340, 530);
        crc2.closePath();
        crc2.fill();

        crc2.fillStyle = "brown";
        crc2.beginPath();
        crc2.arc(200, 610, 10, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 650, 10, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 690, 10, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 760, 10, 0, Math.PI * 2);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(200, 800, 10, 0, Math.PI * 2);
        crc2.fill();

        crc2.strokeStyle = "brown";
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.moveTo(120, 650);
        crc2.lineTo(20, 600);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(280, 650);
        crc2.lineTo(380, 600);
        crc2.stroke();
    }

    function drawBirdhouse() {
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(700, 1400, 80, 120);
        crc2.fillStyle = "#A0522D";
        crc2.beginPath();
        crc2.moveTo(750, 800);
        crc2.lineTo(850, 730);
        crc2.lineTo(950, 800);
        crc2.closePath();
        crc2.fill();

        crc2.fillStyle = "black";
        crc2.beginPath();
        crc2.arc(850, 770, 25, 0, Math.PI * 2);
        crc2.fill();

        crc2.strokeStyle = "brown";
        crc2.lineWidth = 5;
        crc2.beginPath();
        crc2.moveTo(845, 800);
        crc2.lineTo(820, 900);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(855, 800);
        crc2.lineTo(890, 900);
        crc2.stroke();
    }
    function drawBird(x: number, y: number, color: string) {
        crc2.fillStyle = color;
        crc2.beginPath();
        crc2.arc(x, y, 30, 10, Math.PI * 2);
        crc2.fill();
    }

    function drawSnowflake(x: number, y: number) {
        crc2.fillStyle = "white";
        crc2.beginPath();
        crc2.arc(x, y, 5, 0, Math.PI * 2);
        crc2.fill();
    }
}