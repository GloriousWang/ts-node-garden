var canvas: HTMLCanvasElement;
var cacheCanvas: HTMLCanvasElement;

var room: Room;


window.onload = function (): void {
    initialize();
}


function initialize(): void {
    canvas = createCanvas("main-canvas");
    cacheCanvas = createCanvas("cache-canvas")

    room = new NodeGarden();
    room.updateSetting("nodes", "amount", 200);
    room.updateSetting("nodes", "maxDistance", 250);
    room.updateSetting("nodes", "size", 1);
    room.updateSetting("nodes", "lineWidth", 0.15);
    room.updateSetting("nodes", "color", "#efefef");
    room.updateSetting("nodes", "lineColor", "#efefef");
    room.updateSetting("room", "backgroundColor", "#101010");
    step();
}


function step() {
    room.step(1);
    room.camera.render();

    window.requestAnimationFrame(step);
}