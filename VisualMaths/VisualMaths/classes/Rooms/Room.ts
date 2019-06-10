class Room {
    private eventHandlers: { [eventType: string]: any } = {
        "keydown": this.onKeyDown.bind(this),
        "keyup": this.onKeyUp.bind(this),
        "mousedown": this.onMouseDown.bind(this),
        "mouseup": this.onMouseUp.bind(this),
        "mousemove": this.onMouseMove.bind(this),
        "wheel": this.onMouseWheel.bind(this),
        "resize": this.onScreenResize.bind(this),
        "visibilitychange": this.onFocusChange.bind(this)
    }
    public camera: Camera;


    constructor() {
        this.camera = new Camera(canvas, 3)
    }

    public init(): void {  }


    public step(timescale: number): void {  }
    public render(): void {  }


    private addEventHandlers(exceptions?: string[]): void {
        for (var eventType in this.eventHandlers) {
            if (Utils.exists(exceptions)) {
                if (exceptions.indexOf(eventType) > -1) {
                    continue;
                }
            }

            window.addEventListener(eventType, this.eventHandlers[eventType]);
        }
    }

    private removeEventHandlers(exceptions?: string[]): void {
        for (var eventType in this.eventHandlers) {
            if (Utils.exists(exceptions)) {
                if (exceptions.indexOf(eventType) > -1) {
                    continue;
                }
            }

            window.removeEventListener(eventType, this.eventHandlers[eventType]);
        }
    }

    private onKeyDown(event: KeyboardEvent): void {  }
    private onKeyUp(event: KeyboardEvent): void {  }

    private onMouseDown(event: MouseEvent): void {  }
    private onMouseUp(event: MouseEvent): void {  }
    private onMouseMove(event: MouseEvent): void {  }
    private onMouseWheel(event: WheelEvent): void {  }

    private onScreenResize(event: Event): void {  }
    private onFocusChange(event: Event): void {  }
}