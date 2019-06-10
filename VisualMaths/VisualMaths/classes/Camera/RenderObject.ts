class RenderObject {
    public renderLayer: Layer = null;


    constructor() {  }


    public addToLayer(layer: Layer, index?: number): void {
        this.renderLayer = layer;

        index = Utils.exists(index) ? index : null;

        this.renderLayer.addToQueue(this, index);
    }

    public removeFromLayer(): void {
        this.renderLayer.removeFromQueue(this);
        this.renderLayer = null;
    }


    public render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, camera: Camera): void {  }
}