var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NodeGarden = (function (_super) {
    __extends(NodeGarden, _super);
    function NodeGarden() {
        _super.call(this);
        this.nodes = [];
        this.settings = {
            "room": {
                "backgrundColor": "#000"
            },
            "nodes": {
                "doDrawNodes": true,
                "size": 10,
                "isRect": false,
                "color": "#000",
                "amount": 000,
                "maxSpeed": 3,
                "minSpeed": -3,
                "doBounce": false,
                "lineColor": "#f00",
                "maxDistance": 150,
                "lineWidth": 1,
                "isWidthMulByDist": true,
            }
        };
       
       
       
        var  FUCKOFFFFFFFFFF = {
            "doDrawNodes": true,
            "size": 10,
            "isRect": false,
            "color": "#000",
            "amount": 000,
            "maxSpeed": 3,
            "minSpeed": -3,
            "doBounce": false,
            "lineColor": "#f00",
            "maxDistance": 150,
            "lineWidth": 1,
            "isWidthMulByDist": true,
        };
        this.settings.nodes = FUCKOFFFFFFFFFF;
        console.log(this.settings.nodes);



        for (var i = 0; i < this.settings["nodes"]["amount"]; i++) {
            this.addNode(new GNode(this, new Vector2D(Utils.random(0, canvas.width), Utils.random(0, canvas.height))));
        }
    }
    NodeGarden.prototype.step = function (timescale) {
        for (var nodeID in this.nodes) {
            this.nodes[nodeID].step(timescale);
        }
    };
    NodeGarden.prototype.updateSetting = function (object, setting, value) {
        if (object === "room") {
            if (setting === "backgroundColor") {
                this.camera.backgroundColor = value;
            }
        }
        else if (object === "nodes") {
            if (setting === "amount") {
                var difference = value - this.settings[object][setting];
                if (difference > 0) {
                    for (var i = 0; i < difference; i++) {
                        this.addNode(new GNode(this, new Vector2D(Utils.random(0, canvas.width), Utils.random(0, canvas.height))));
                    }
                }
                else {
                    for (var i = this.nodes.length - 1; i > value - 1; i--) {
                        this.removeNode(this.nodes[i]);
                    }
                }
            }
            else if (setting === "minSpeed") {
                for (var i = 0; i < this.nodes.length; i++) {
                    this.nodes[i].speedX = Utils.random(value, this.settings["nodes"]["maxSpeed"]);
                    this.nodes[i].speedY = Utils.random(value, this.settings["nodes"]["maxSpeed"]);
                }
            }
            else if (setting === "maxSpeed") {
                for (var i = 0; i < this.nodes.length; i++) {
                    this.nodes[i].speedX = Utils.random(this.settings["nodes"]["minSpeed"], value);
                    this.nodes[i].speedY = Utils.random(this.settings["nodes"]["minSpeed"], value);
                }
            }
        }
        this.settings[object][setting] = value;
    };
    NodeGarden.prototype.addNode = function (node) {
        this.nodes.push(node);
    };
    NodeGarden.prototype.removeNode = function (node) {
        var index = this.nodes.indexOf(node);
        this.nodes.splice(index, 1);
        node.removeFromLayer();
    };
    return NodeGarden;
}(Room));
//# sourceMappingURL=NodeGarden.js.map