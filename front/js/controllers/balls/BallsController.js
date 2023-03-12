import {BallController} from "./BallController.js";

export class BallsController {

    constructor() {
        this.balls = []
    }

    frame() {
        this.balls.forEach(ball => {
            ball.frame()
        })
    }

    addBall(ballProps) {
        this.balls.push(new BallController(ballProps))
    }

    getBalls() {
        return this.balls
    }

}