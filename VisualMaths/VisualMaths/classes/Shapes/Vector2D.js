var Vector2D = (function () {
    function Vector2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2D.prototype.add = function (vector) {
        var x = this.x + vector.x;
        var y = this.y + vector.y;
        return new Vector2D(x, y);
    };
    Vector2D.prototype.sub = function (vector) {
        var x = this.x - vector.x;
        var y = this.y - vector.y;
        return new Vector2D(x, y);
    };
    Vector2D.prototype.mult = function (factor) {
        var x = this.x * factor;
        var y = this.y * factor;
        return new Vector2D(x, y);
    };
    Vector2D.prototype.div = function (factor) {
        var x = this.x / factor;
        var y = this.y / factor;
        return new Vector2D(x, y);
    };
    Vector2D.prototype.mag = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector2D.prototype.magSquared = function () {
        return this.x * this.x + this.y * this.y;
    };
    /**
     * Get angle between vector or x axis if param is ignored
     * @param vector
     */
    Vector2D.prototype.getAngle = function (vector) {
        if (Utils.exists(vector)) {
            return Math.atan2(this.y, this.x) - Math.atan2(vector.y, vector.x);
        }
        else {
            return Math.atan2(this.y, this.x);
        }
    };
    Vector2D.prototype.dot = function (vector) {
        return this.x * vector.x + this.y * vector.y;
    };
    /**
     * Projects this vector onto the specified vector
     */
    Vector2D.prototype.project = function (vector) {
        return vector.mult(vector.dot(this) / vector.magSquared());
    };
    /**
     * Projects this vector onto the specified vector and returns the length of the projection
     */
    Vector2D.prototype.projectionMag = function (vector) {
        return vector.dot(this) / vector.mag();
    };
    Vector2D.prototype.norm = function () {
        var mag = this.magSquared();
        if (mag > 0) {
            var vector = new Vector2D(this.x * this.x, this.y * this.y);
            return vector.div(mag);
        }
        return this;
    };
    Vector2D.prototype.hat = function () {
        return new Vector2D(-this.y, this.x);
    };
    Vector2D.prototype.clone = function () {
        return new Vector2D(this.x, this.y);
    };
    return Vector2D;
}());
//# sourceMappingURL=Vector2D.js.map