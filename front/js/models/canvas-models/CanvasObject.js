import Canvas from "../Canvas.js";

export class CanvasObject {

    constructor() {
        this.canvas = Canvas;
        this.ctx = this.canvas.getCtx();
    }

    setState(state) {
        const {position, radius} = state
        this.position = position || this.position
        this.radius = radius || this.radius
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(
            this.position.x,
            this.position.y,
            this.radius,
            0,
            Math.PI * 2,
            false
        );
        this.ctx.closePath();
        this.ctx.fill();
    }
}