var Layer = (function () {
    function Layer() {
        this.queue = [];
    }
    Layer.prototype.render = function (camera) {
        for (var i = 0; i < this.queue.length; i++) {
            this.queue[i].render(camera.canvas.ctx, camera.canvas, camera);
        }
    };
    Layer.prototype.addToQueue = function (object, index) {
        index = Utils.exists(index) ? index : this.queue.length;
        this.queue.splice(index, 0, object);
    };
    Layer.prototype.removeFromQueue = function (object) {
        var index = this.queue.lastIndexOf(object);
        this.queue.splice(index, 1);
    };
    return Layer;
}());
//# sourceMappingURL=Layer.js.map