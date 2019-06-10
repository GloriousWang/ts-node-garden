var Input = (function () {
    function Input() {
    }
    Input.keys = {};
    Input.buttons = {};
    Input.mousePos = null;
    /**
     * Initializes the Input module
     *
     */
    Input.init = function () {
        Input.mousePos = new Vector2D(0, 0);
        window.addEventListener("error", Input.onError);
        window.addEventListener("keydown", Input.onKeyDown);
        window.addEventListener("keyup", Input.onKeyUp);
        window.addEventListener("mousedown", Input.onMouseDown);
        window.addEventListener("mouseup", Input.onMouseUp);
        window.addEventListener("mousemove", Input.onMouseMove);
    };
    /**
     * Disposes the Input module
     *
     */
    Input.dispose = function () {
        window.removeEventListener("error", Input.onError);
        window.removeEventListener("keydown", Input.onKeyDown);
        window.removeEventListener("keyup", Input.onKeyUp);
        window.removeEventListener("mousedown", Input.onMouseDown);
        window.removeEventListener("mouseup", Input.onMouseUp);
        window.removeEventListener("mousemove", Input.onMouseMove);
        Input.keys = {};
        Input.buttons = {};
        Input.mousePos = null;
    };
    /**
     * Handles not-handled error events
     * @param event
     *
     */
    Input.onError = function (event) {
        throw event;
    };
    /**
     * Handles keydown events and updates keystates
     * @param event
     *
     */
    Input.onKeyDown = function (event) {
        Input.keys[event.key] = true;
    };
    /**
     * Handles keyup events and updates keystates
     * @param event
     *
     */
    Input.onKeyUp = function (event) {
        delete Input.keys[event.key];
    };
    /**
     * Check whether a given key is down
     * @param code
     *
     */
    Input.isKeyDown = function isKeyDown(key) {
        return Input.keys[key] === true;
    };
    /**
     * Handles mousedown events and updates buttonstates
     * @param event
     *
     */
    Input.onMouseDown = function (event) {
        Input.buttons[event.button] = true;
    };
    /**
     * Handles mouseup events and updates buttonstates
     * @param event
     *
     */
    Input.onMouseUp = function (event) {
        delete Input.buttons[event.button];
    };
    /**
     * Check whether a given button is down
     * 0 = left click
     * 1 = middle click
     * 2 = right click
     * @param button
     *
     */
    Input.isButtonDown = function (button) {
        return Input.buttons[button] === true;
    };
    /**
     * Handles mouse movement and update mousePos
     * @param event
     *
     */
    Input.onMouseMove = function (event) {
        Input.mousePos.x = event.clientX;
        Input.mousePos.y = event.clientY;
    };
    /**
     * Returns mousePos vector
     *
     */
    Input.getMousePos = function () {
        return Input.mousePos;
    };
    return Input;
}());
//# sourceMappingURL=Input.js.map