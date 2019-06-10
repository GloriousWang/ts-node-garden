var Camera = (function () {
    function Camera(canvas, layerAmount) {
        this.layerQueue = [];
        this.backgroundColor = "#fff";
        this.zoom = 1;
        this.maxZoom = 2;
        this.minZoom = 0.5;
        this.canvas = canvas;
        this.offset = new Vector2D(0, 0);
        if (Utils.exists(layerAmount)) {
            for (var i = 0; i < layerAmount; i++) {
                this.addLayer();
            }
        }
    }
    Camera.prototype.render = function () {
        this.fillCanvas();
        for (var i = 0; i < this.layerQueue.length; i++) {
            this.layerQueue[i].render(this);
        }
    };
    Camera.prototype.fillCanvas = function () {
        this.canvas.ctx.beginPath();
        this.canvas.ctx.fillStyle = this.backgroundColor;
        this.canvas.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.ctx.fill();
    };
    Camera.prototype.addLayer = function (index) {
        index = Utils.exists(index) ? index : this.layerQueue.length;
        this.layerQueue.splice(index, 0, new Layer());
    };
    Camera.prototype.removeLayer = function (index) {
        this.layerQueue.splice(index, 1);
    };
    Camera.prototype.getLayer = function (index) {
        return this.layerQueue[index];
    };
    Camera.prototype.toScreen = function (vector) {
        return new Vector2D((vector.x + this.offset.x) * this.zoom, (vector.y + this.offset.y) * this.zoom);
    };
    Camera.prototype.toWorld = function (vector) {
        return new Vector2D(vector.x / this.zoom - this.offset.x, vector.y / this.zoom - this.offset.y);
    };
    return Camera;
}());
//# sourceMappingURL=Camera.js.map