var RenderObject = (function () {
    function RenderObject() {
        this.renderLayer = null;
    }
    RenderObject.prototype.addToLayer = function (layer, index) {
        this.renderLayer = layer;
        index = Utils.exists(index) ? index : null;
        this.renderLayer.addToQueue(this, index);
    };
    RenderObject.prototype.removeFromLayer = function () {
        this.renderLayer.removeFromQueue(this);
        this.renderLayer = null;
    };
    RenderObject.prototype.render = function (ctx, canvas, camera) { };
    return RenderObject;
}());
//# sourceMappingURL=RenderObject.js.map