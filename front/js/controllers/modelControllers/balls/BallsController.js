import {BallController} from "./BallController.js";

class BallsController {

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

export default new BallsController()