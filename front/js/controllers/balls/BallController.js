import {Ball} from "../../models/canvas-models/Ball.js";
import store from "../../store";

export class BallController {

    constructor(ballProps) {
        const {position, velocity, radius} = ballProps

        this.ball = new Ball()
        this.state = {
            instance: this.ball,
            velocity: velocity,
            position: position,
            radius: radius,
            top: position.y - radius,
            bottom: position.y + radius,
            left: position.x - radius,
            right: position.x + radius,
        }
        this.ball.setState(this.state)

        const ball = {
            instance: this.ball,
            velocity: velocity,
            position: position,
            radius: radius,
        }
        store.dispatch('addBall', ball)
    }

    frame() {
        this.move()

        this.ball.setState(this.state)
        this.ball.draw()
    }

    move() {
        this.state.position = {
            x: this.state.position.x + this.state.velocity.x,
            y: this.state.position.y + this.state.velocity.y,
        }
    }
}