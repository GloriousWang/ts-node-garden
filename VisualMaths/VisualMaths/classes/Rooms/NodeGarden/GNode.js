var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GNode = (function (_super) {
    __extends(GNode, _super);
    function GNode(room, origin) {
        _super.call(this);
        this.room = room;
        this.origin = origin;
        this.speedX = Utils.random(room.settings["nodes"]["minSpeed"], room.settings["nodes"]["maxSpeed"]);
        this.speedY = Utils.random(room.settings["nodes"]["minSpeed"], room.settings["nodes"]["maxSpeed"]);
        this.addToLayer(room.camera.getLayer(0));
    }
    GNode.prototype.step = function (timecale) {
        this.checkCollision(true);
        this.origin.x += this.speedX * timecale;
        this.checkCollision(false);
        this.origin.y += this.speedY * timecale;
    };
    GNode.prototype.render = function (ctx, canvas, camera) {
        var settings = this.room.settings.nodes;
        if (settings.doDrawNodes) {
            ctx.beginPath();
            ctx.fillStyle = settings.color;
            var size = settings.size;
            if (settings.isRect) {
                ctx.rect(this.origin.x + size * 0.5, this.origin.y + size * 0.5, size, size);
            }
            else {
                ctx.arc(this.origin.x, this.origin.y, size, 0, Math.PI * 2);
            }
            ctx.fill();
        }
        for (var i = 0; i < this.room.nodes.length; i++) {
            settings.lineColor = "#059";
            var node = this.room.nodes[i];
            var distance = new Vector2D(node.origin.x, node.origin.y).sub(new Vector2D(this.origin.x, this.origin.y));
            if (distance.magSquared() < settings.maxDistance * settings.maxDistance) {
                var ctx = this.room.camera.canvas.ctx;
                ctx.beginPath();
                ctx.strokeStyle = settings.lineColor;
                ctx.lineWidth = settings.isWidthMulByDist ? settings.lineWidth * settings.lineWidth * settings.maxDistance / distance.mag() : settings.lineWidth;
                ctx.moveTo(this.origin.x, this.origin.y);
                ctx.lineTo(node.origin.x, node.origin.y);
                ctx.stroke();
            }
        }
    };
    GNode.prototype.checkCollision = function (isX) {
        var settings = this.room.settings["nodes"];
        var size = settings["size"];
        if (settings["doBounce"]) {
            if (isX) {
                if (this.origin.x - size <= 0) {
                    this.speedX = Math.abs(this.speedX);
                }
                else if (this.origin.x + size >= canvas.width) {
                    this.speedX = -Math.abs(this.speedX);
                }
            }
            else {
                if (this.origin.y - size <= 0) {
                    this.speedY = Math.abs(this.speedY);
                }
                else if (this.origin.y + size >= canvas.height) {
                    this.speedY = -Math.abs(this.speedY);
                }
            }
        }
        else {
            if (isX) {
                if (this.origin.x + size <= -(0+settings["maxDistance"]+10)) {
                    this.origin.x = (canvas.width+settings["maxDistance"]+10) + size;
                }
                else if (this.origin.x - size >= (canvas.width+settings["maxDistance"]+10)) {
                    this.origin.x = -(0+settings["maxDistance"]+10) - size;
                }
            }
            else {
                if (this.origin.y + size <= -(0+settings["maxDistance"]+10)) {
                    this.origin.y = (canvas.height+settings["maxDistance"]+10) + size;
                }
                else if (this.origin.y - size >= (canvas.height+settings["maxDistance"]+10)) {
                    this.origin.y = -(0+settings["maxDistance"]+10) - size;
                }
            }
        }
    };
    return GNode;
}(RenderObject));
//# sourceMappingURL=GNode.js.map