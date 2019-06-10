class Camera {
    private layerQueue: Layer[] = [];

    public canvas: HTMLCanvasElement;

    public offset: Vector2D;

    public backgroundColor: string = "#fff";

    public zoom: number = 1;
    public maxZoom: number = 2;
    public minZoom: number = 0.5;


    constructor(canvas: HTMLCanvasElement, layerAmount?: number) {
        this.canvas = canvas;

        this.offset = new Vector2D(0, 0);

        if (Utils.exists(layerAmount)) {
            for (var i = 0; i < layerAmount; i++) {
                this.addLayer();
            }
        }
    }


    public render(): void {
        this.fillCanvas();

        for (var i: number = 0; i < this.layerQueue.length; i++) {
            this.layerQueue[i].render(this);
        }
    }

    private fillCanvas() {
        this.canvas.ctx.beginPath();

        this.canvas.ctx.fillStyle = this.backgroundColor;

        this.canvas.ctx.rect(0, 0, this.canvas.width, this.canvas.height);

        this.canvas.ctx.fill();
    }


    public addLayer(index?: number): void {
        index = Utils.exists(index) ? index : this.layerQueue.length;

        this.layerQueue.splice(index, 0, new Layer())
    }

    public removeLayer(index: number): void {
        this.layerQueue.splice(index, 1);
    }

    public getLayer(index: number): Layer {
        return this.layerQueue[index];
    }


    public toScreen(vector: Vector2D): Vector2D {
        return new Vector2D(
            (vector.x + this.offset.x) * this.zoom,
            (vector.y + this.offset.y) * this.zoom
        );
    }

    public toWorld(vector: Vector2D): Vector2D {
        return new Vector2D(
            vector.x / this.zoom - this.offset.x,
            vector.y / this.zoom - this.offset.y
        );
    }
}