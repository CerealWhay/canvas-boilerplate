import Canvas from "../../models/Canvas.js";
import BallsController from "../modelControllers/balls/BallsController.js";

export class Engine {
    animationFrame;

    constructor() {
        this.canvas = Canvas
        this.ballsController = BallsController
        this.addBall()
        this.animationFrame = requestAnimationFrame(this.gameFrame.bind(this))
    }

    gameFrame() {
        this.canvas.clearCanvas();
        this.ballsController.frame()
        this.animationFrame = requestAnimationFrame(this.gameFrame.bind(this))
    }

    stopAnimation() {
        cancelAnimationFrame(this.animationFrame)
    }

    addBall() {
        let ballProps = {
            position: {x: 400, y: 250}, velocity: {x: 1, y: 1}, radius: 15,
        }
        this.ballsController.addBall(ballProps)
    }
}