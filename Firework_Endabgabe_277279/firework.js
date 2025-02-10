import { Particle } from "./particles.js";
export class Firework {
    positionX;
    positionY;
    particles;
    radius;
    shape;
    color;
    particleCount = 50; // Mehr Partikel für realistische Explosion
    constructor(positionX, positionY, radius, shape, color) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.radius = radius;
        this.shape = shape;
        this.color = color;
        this.particles = [];
        this.explode();
    }
    // 🟢 Explosion: Erstellt Partikel mit zufälliger Bewegung
    explode() {
        for (let i = 0; i < this.particleCount; i++) {
            const angle = Math.random() * Math.PI * 2; // Zufälliger Winkel
            const speed = Math.random() * (this.radius / 10) + 2; // Geschwindigkeit abhängig von Radius
            const velocityX = Math.cos(angle) * speed;
            const velocityY = Math.sin(angle) * speed;
            this.particles.push(new Particle(this.positionX, this.positionY, velocityX, velocityY, this.color, this.shape));
        }
    }
    // 🟢 Update: Bewegt Partikel & reduziert Lebensdauer
    update(ctx) {
        this.particles.forEach((particle, index) => {
            particle.update();
            particle.draw(ctx);
            // Entferne Partikel, wenn die Lebensdauer abgelaufen ist
            if (particle.lifetime <= 0) {
                this.particles.splice(index, 1);
            }
        });
    }
    // 🟢 Checkt, ob Explosion beendet ist (alle Partikel weg)
    isDone() {
        return this.particles.length === 0;
    }
}
//# sourceMappingURL=firework.js.map