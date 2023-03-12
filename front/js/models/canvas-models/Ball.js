import {CanvasObject} from "./CanvasObject.js";

export class Ball extends CanvasObject {

    constructor() {
        super();
    }

    draw() {
        this.ctx.fillStyle = 'red'
        super.draw()
    }
}