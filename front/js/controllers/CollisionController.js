import Canvas from "../models/Canvas.js";


export class CollisionController {
    constructor(controllers) {
        const {ballsController} = controllers
        this.canvasRect = Canvas.getCanvasRect()
        this.ballsController = ballsController
    }

    frame() {
        // this.rebound()
        // this.ballsCollision()
    }

    rebound() {
        const balls = this.ballsController.getBalls()

        balls.forEach(ballController => {
            let isRebound = false;
            let state = ballController.getState()
            if (state.top <= 0) {
                state.position.y = state.radius + 1
                state.velocity.y = -state.velocity.y
                isRebound = true
            }
            if (state.bottom >= this.canvasRect.height) {
                state.position.y = this.canvasRect.height - state.radius - 1
                state.velocity.y = -state.velocity.y
                isRebound = true
            }
            if (state.left <= 0) {
                state.position.x = state.radius + 1
                state.velocity.x = -state.velocity.x
                isRebound = true
            }
            if (state.right >= this.canvasRect.width) {
                state.position.x = this.canvasRect.width - state.radius - 1
                state.velocity.x = -state.velocity.x
                isRebound = true
            }

            if (isRebound) {
                ballController.setState(state)
            }
        })
    }

    ballsCollision() {
        let balls = this.ballsController.getBalls()
        balls.forEach(mainBallController => {
            balls = balls.filter(item => item !== mainBallController)

            let mainState = mainBallController.getState()
            balls.forEach(secondBallController => {
                let secondState = secondBallController.getState()

                const dist = Math.hypot(
                    mainState.position.x - secondState.position.x,
                    mainState.position.y - secondState.position.y,
                )
                if (dist <= (mainState.radius + secondState.radius)) {
                    mainState.velocity.x = mainState.velocity.x
                    secondState.velocity.x = secondState.velocity.x
                }
            })
        })
    }
}