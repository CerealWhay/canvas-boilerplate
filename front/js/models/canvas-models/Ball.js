import {CanvasObject} from "./CanvasObject.js";

export class Ball extends CanvasObject {

    constructor() {
        super();
        console.log(this)
    }

    draw() {
        this.ctx.fillStyle = 'red'
        super.draw()
    }
}