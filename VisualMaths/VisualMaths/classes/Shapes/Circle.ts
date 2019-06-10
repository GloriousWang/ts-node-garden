class Circle extends Shape{
    public radius: number;


    constructor(origin: Vector2D, radius: number) {
        super(origin);

        this.radius = radius;
    }
}