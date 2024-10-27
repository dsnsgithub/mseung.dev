class Particle {
    constructor(fov) {
        this.pos = createVector(sceneW / 2, sceneH / 2);
        this.rays = [];
        this.heading = 0;
        this.updateFOV(fov)
    }

    updateFOV(fov) {
        this.fov = fov;
        this.rays = [];
        const step = this.fov * da;
        for (let a = -this.fov / 2; a < this.fov / 2; a += step) {
            this.rays.push(new Ray(this.pos, radians(a) + this.heading, radians(a)));
        }
    }

    rotate(angle) {
        this.heading += angle;
        let index = 0;
        const step = this.fov * da;
        for (let a = -this.fov / 2; a < this.fov / 2; a += step) {
            this.rays[index].setAngle(radians(a) + this.heading, radians(a));
            index++
        }
    }

    move(amt) {
        const vel = p5.Vector.fromAngle(this.heading);
        vel.setMag(amt);
        this.pos.add(vel)
    }
    update(x, y) {
        this.pos.set(x, y)
    }
    look(walls) {
        const scene = [];
        for (let i = 0; i < this.rays.length; i++) {
            const ray = this.rays[i];
            let closest = null;
            let record = Infinity;
            for (let wall of walls) {
                const pt = ray.cast(wall);
                if (pt) {
                    let d = p5.Vector.dist(this.pos, pt);
                    if (d < record) {
                        record = d;
                        closest = pt;
                    }
                }
            }
            scene[i] = record * cos(ray.angleFromCenter);
        }
        return scene;
    }

}