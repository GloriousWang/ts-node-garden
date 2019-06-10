/**
 * Set the canvas' size
 *
 */
HTMLCanvasElement.prototype.setSize = function (width, height) {
    this.width = width;
    this.height = height;
};
/**
 * Set the canvas' size to the size of the screen (Only fired at a resize event)
 *
 */
HTMLCanvasElement.prototype.fixSize = function (event) {
    this.setSize(window.innerWidth, window.innerHeight);
};
/**
 * Clear the canvas
 *
 */
HTMLCanvasElement.prototype.clear = function (fillColor) {
    this.ctx.clearRect(0, 0, this.width, this.height);
};
/**
 * Creates a canvas with custom variables and methods
 * @param canvasID
 */
function createCanvas(canvasID) {
    var canvas = document.getElementById(canvasID);
    canvas.ctx = canvas.getContext("2d");
    canvas.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", canvas.fixSize.bind(canvas));
    return canvas;
}
//# sourceMappingURL=Canvas.js.map