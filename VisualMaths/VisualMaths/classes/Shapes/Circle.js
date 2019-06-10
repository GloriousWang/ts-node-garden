var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Circle = (function (_super) {
    __extends(Circle, _super);
    function Circle(origin, radius) {
        _super.call(this, origin);
        this.radius = radius;
    }
    return Circle;
}(Shape));
//# sourceMappingURL=Circle.js.map