class GNode extends RenderObject {
    private room: NodeGarden;
    public origin: Vector2D;
    public speedX: number;
    public speedY: number;


    constructor(room: NodeGarden, origin: Vector2D) {
        super();

        this.room = room;

        this.origin = origin;

        this.speedX = Utils.random(room.settings["nodes"]["minSpeed"], room.settings["nodes"]["maxSpeed"])
        this.speedY = Utils.random(room.settings["nodes"]["minSpeed"], room.settings["nodes"]["maxSpeed"])


        this.addToLayer(room.camera.getLayer(0));
    }


    public step(timecale: number): void {
        this.checkCollision(true);
        this.origin.x += this.speedX * timecale;
        this.checkCollision(false);
        this.origin.y += this.speedY * timecale;
    }

    public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, camera: Camera): void {
        var settings: { [setting: string]: any } = this.room.settings["nodes"];

        if (settings["doDrawNodes"]) {
            ctx.beginPath();

            ctx.fillStyle = settings["color"];

            var size = settings["size"];

            if (settings["isRect"]) {
                ctx.rect(this.origin.x + size * 0.5, this.origin.y + size * 0.5, size, size);
            } else {
                ctx.arc(this.origin.x, this.origin.y, size, 0, Math.PI * 2);
            }

            ctx.fill();
        }


        for (var i: number = 0; i < this.room.nodes.length; i++) {
            var node: GNode = this.room.nodes[i];
            var distance: Vector2D = new Vector2D(node.origin.x, node.origin.y).sub(new Vector2D(this.origin.x, this.origin.y));

            if (distance.magSquared() < settings["maxDistance"] * settings["maxDistance"]) {
                var ctx = this.room.camera.canvas.ctx;

                ctx.beginPath();

                ctx.strokeStyle = settings["lineColor"];
                ctx.lineWidth = settings["isWidthMulByDist"] ? settings["lineWidth"] * distance.norm().mag() : settings["lineWidth"];

                ctx.moveTo(this.origin.x, this.origin.y);
                ctx.lineTo(node.origin.x, node.origin.y);

                ctx.stroke();
            }
        }

    }


    public checkCollision(isX: boolean) {
        var settings: { [setting: string]: any } = this.room.settings["nodes"];

        var size = settings["size"];

        if (settings["doBounce"]) {
            if (isX) {
                if (this.origin.x - size <= 0) {
                    this.speedX = Math.abs(this.speedX);
                } else if (this.origin.x + size >= canvas.width) {
                    this.speedX = -Math.abs(this.speedX);
                }
            } else {
                if (this.origin.y - size <= 0) {
                    this.speedY = Math.abs(this.speedY);
                } else if (this.origin.y + size >= canvas.height) {
                    this.speedY = -Math.abs(this.speedY);
                }
            }
        } else {
            if (isX) {
                if (this.origin.x + size <= 0) {
                    this.origin.x = canvas.width + size;
                } else if (this.origin.x - size >= canvas.width) {
                    this.origin.x = 0 - size;
                }
            } else {
                if (this.origin.y + size <= 0) {
                    this.origin.y = canvas.height + size;
                } else if (this.origin.y - size >= canvas.height) {
                    this.origin.y = 0 - size;
                }
            }
        }
    }
}