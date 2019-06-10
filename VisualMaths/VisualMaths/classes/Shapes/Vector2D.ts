class Vector2D{
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public add(vector: Vector2D): Vector2D {
        var x = this.x + vector.x;
        var y = this.y + vector.y;
        return new Vector2D(x, y);
    }

    public sub(vector: Vector2D): Vector2D {
        var x = this.x - vector.x;
        var y = this.y - vector.y;
        return new Vector2D(x, y);
    }


    public mult(factor: number): Vector2D {
        var x = this.x * factor;
        var y = this.y * factor;
        return new Vector2D(x, y);
    }

    public div(factor: number): Vector2D {
        var x = this.x / factor;
        var y = this.y / factor;
        return new Vector2D(x, y);
    }


    public mag(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    public magSquared(): number {
        return this.x * this.x + this.y * this.y
    }



    /**
     * Get angle between vector or x axis if param is ignored
     * @param vector
     */
    public getAngle(vector?: Vector2D) {
        if (Utils.exists(vector)) {
            return Math.atan2(this.y, this.x) - Math.atan2(vector.y, vector.x);
        } else {
            return Math.atan2(this.y, this.x);
        }
    }


    public dot(vector: Vector2D): number {
        return this.x * vector.x + this.y * vector.y;
    }

    /**
     * Projects this vector onto the specified vector
     */
    public project(vector: Vector2D): Vector2D {
        return vector.mult(vector.dot(this) / vector.magSquared());
    }

    /**
     * Projects this vector onto the specified vector and returns the length of the projection
     */
    public projectionMag(vector: Vector2D): number {
        return vector.dot(this) / vector.mag();
    }

    public norm(): Vector2D {
        var mag = this.magSquared();

        if (mag > 0) {
            var vector = new Vector2D(this.x * this.x, this.y * this.y);
            return vector.div(mag);
        }

        return this;
    }


    public hat(): Vector2D {
        return new Vector2D(-this.y, this.x);
    }


    public clone(): Vector2D {
        return new Vector2D(this.x, this.y);
    }
}