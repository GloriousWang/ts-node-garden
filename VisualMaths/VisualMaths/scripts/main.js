var canvas;
var cacheCanvas;
var room;
window.onload = function () {
    initialize();
};
function initialize() {
    canvas = createCanvas("main-canvas");
    cacheCanvas = createCanvas("cache-canvas");
    room = new NodeGarden();
    room.updateSetting("nodes", "amount", 300);
    room.updateSetting("nodes", "isWidthMulByDist", true);
    room.updateSetting("nodes", "maxDistance", 300);
    room.updateSetting("nodes", "size", 1);
    room.updateSetting("nodes", "lineWidth", 0.2);
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
//# sourceMappingURL=main.js.map