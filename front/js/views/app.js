import Canvas from "../models/Canvas.js";
import {Engine} from "../controllers/gameControllers/engine.js";

const app = {
    data() {
        return {
            engine: null,
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            Canvas.setCanvasNode(this.$refs.canvas)
            this.engine = new Engine()
        },
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