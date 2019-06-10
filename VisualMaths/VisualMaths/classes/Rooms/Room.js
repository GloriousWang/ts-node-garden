var Room = (function () {
    function Room() {
        this.eventHandlers = {
            "keydown": this.onKeyDown.bind(this),
            "keyup": this.onKeyUp.bind(this),
            "mousedown": this.onMouseDown.bind(this),
            "mouseup": this.onMouseUp.bind(this),
            "mousemove": this.onMouseMove.bind(this),
            "wheel": this.onMouseWheel.bind(this),
            "resize": this.onScreenResize.bind(this),
            "visibilitychange": this.onFocusChange.bind(this)
        };
        this.camera = new Camera(canvas, 3);
    }
    Room.prototype.init = function () { };
    Room.prototype.step = function (timescale) { };
    Room.prototype.render = function () { };
    Room.prototype.addEventHandlers = function (exceptions) {
        for (var eventType in this.eventHandlers) {
            if (Utils.exists(exceptions)) {
                if (exceptions.indexOf(eventType) > -1) {
                    continue;
                }
            }
            window.addEventListener(eventType, this.eventHandlers[eventType]);
        }
    };
    Room.prototype.removeEventHandlers = function (exceptions) {
        for (var eventType in this.eventHandlers) {
            if (Utils.exists(exceptions)) {
                if (exceptions.indexOf(eventType) > -1) {
                    continue;
                }
            }
            window.removeEventListener(eventType, this.eventHandlers[eventType]);
        }
    };
    Room.prototype.onKeyDown = function (event) { };
    Room.prototype.onKeyUp = function (event) { };
    Room.prototype.onMouseDown = function (event) { };
    Room.prototype.onMouseUp = function (event) { };
    Room.prototype.onMouseMove = function (event) { };
    Room.prototype.onMouseWheel = function (event) { };
    Room.prototype.onScreenResize = function (event) { };
    Room.prototype.onFocusChange = function (event) { };
    return Room;
}());
//# sourceMappingURL=Room.js.map