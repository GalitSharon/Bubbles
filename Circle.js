class Circle {
    constructor(x, y, radios, color) {
        this.x = x;
        this.y = y;
        this.velocity = {
            x: (Math.random() - 0.5) * 15,
            y: (Math.random() - 0.5) * 15
        };
        this.radios = radios;
        this.color = color;
    }

    distance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    }

    update(circles, circleIdx) {
        for (let i = 0; i < circles.length; ++i) {
            if (this !== circles[i]) {
                if (this.distance(this.x, this.y, circles[i].x, circles[i].y) < (this.radios + circles[i].radios)) {
                    if (circleIdx < i) {
                        circles.splice(i, 1);
                        circles.splice(circleIdx, 1);
                    } else {
                        circles.splice(circleIdx, 1);
                        circles.splice(i, 1);
                    }
                }
            }
        }
        if (this.x + this.radios >= window.innerWidth || this.x - this.radios < 0) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.y + this.radios >= window.innerHeight || this.y - this.radios < 0) {
            this.velocity.y = -this.velocity.y;
        }
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }

}

export default Circle;