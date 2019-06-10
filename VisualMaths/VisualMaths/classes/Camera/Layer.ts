class Layer {
    public queue: any[] = [];

    constructor() {  }

    public render(camera: Camera): void {
        for (var i: number = 0; i < this.queue.length; i++) {
            this.queue[i].render(camera.canvas.ctx, camera.canvas, camera)
        }
    }


    public addToQueue(object: any, index?: number): void {
        index = Utils.exists(index) ? index : this.queue.length;

        this.queue.splice(index, 0, object);
    }

    public removeFromQueue(object: any): void {
        var index = this.queue.lastIndexOf(object);

        this.queue.splice(index, 1);
    }
}
