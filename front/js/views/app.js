import Canvas from "../models/Canvas.js";
import {BallsController} from "../controllers/balls/BallsController.js";
// import {CollisionController} from "../controllers/CollisionController.js";

const app = {
    data() {
        return {
            animationFrame: null,

            canvas: null,
            ctx: null,
            canvasRect: null,
            clearCanvas: null,

            ballsController: null,
            // collisionController: null,
        }
    },
    computed: {},
    mounted() {
        this.init()
        this.addBall()
    },
    methods: {
        init() {
            this.createCanvas()
            this.ballsController = new BallsController()
            // this.collisionController = new CollisionController({
            //     ballsController: this.ballsController
            // })
            this.animationFrame = requestAnimationFrame(this.animateFrame)
        },
        createCanvas() {
            this.canvas = Canvas
            this.canvas.setCanvasNode(this.$refs.canvas)
            this.ctx = this.canvas.getCtx();
            this.canvasRect = this.canvas.getCanvasRect();
        },
        animateFrame() {
            this.canvas.clearCanvas();
            // this.collisionController.frame()
            this.ballsController.frame()
            this.animationFrame = requestAnimationFrame(this.animateFrame)
        },

        addBall() {
            let ballProps = {
                position: {x: 400, y: 250},
                velocity: {x: 1, y: 1},
                radius: 15,
            }
            this.ballsController.addBall(ballProps);
        }
    },
    // language=Vue
    template: `

      <div class="app-wrapper">

      <canvas
          ref="canvas"
      ></canvas>

      </div>

    `
}

export default app