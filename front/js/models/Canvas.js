class Canvas {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setCanvasNode(canvasNode) {
        this.canvas = canvasNode
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d')
    }

    getCtx() {
        return this.ctx
    }

    getCanvasRect() {
        return this.canvas.getBoundingClientRect()
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}
export default new Canvas(1000, 500)
