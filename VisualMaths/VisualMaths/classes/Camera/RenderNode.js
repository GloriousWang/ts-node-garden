var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RenderNode = (function (_super) {
    __extends(RenderNode, _super);
    function RenderNode(x, y) {
        _super.call(this, x, y);
        this.renderIndex = null;
        this.renderLayer = null;
    }
    RenderNode.prototype.addToLayer = function (layer, index) {
        if (!Utils.exists(layer)) {
            return;
        }
        ;
        this.renderIndex = Utils.exists(index) ? index : layer.queue.length;
        this.renderLayer = layer;
        this.renderLayer.queue.splice(this.renderIndex, 0, this);
    };
    RenderNode.prototype.removeFromLayer = function () {
        this.renderLayer.queue.splice(this.renderIndex, 1);
        this.renderIndex = null;
        this.renderLayer = null;
    };
    RenderNode.prototype.render = function (ctx, camera) { };
    return RenderNode;
}(Vector2D));
//# sourceMappingURL=RenderNode.js.map