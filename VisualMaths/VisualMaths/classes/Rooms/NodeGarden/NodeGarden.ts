class NodeGarden extends Room {
    public nodes: GNode[] = [];

    public settings: { [object: string]: { [setting: string]: any } } = {
        "room": {
            "backgrundColor": "#fff"
        },
        "nodes": {
            "doDrawNodes": true,
            "size": 10,
            "isRect": false,
            "color": "#000",
            "amount": 100,
            "maxSpeed": 3,
            "minSpeed": -3,
            "doBounce": false,
            "lineColor": "#000",
            "maxDistance": 150,
            "lineWidth": 1,
            "isWidthMulByDist": true,
        }
    }

    constructor() {
        super();

        for (var i: number = 0; i < this.settings["nodes"]["amount"]; i++) {
            this.addNode(
                new GNode(this, new Vector2D(Utils.random(0, canvas.width), Utils.random(0, canvas.height)))
            );
        }
    }


    public step(timescale: number): void {
        for (var nodeID in this.nodes) {
            this.nodes[nodeID].step(timescale);
        }
    }



    public updateSetting(object: string, setting: string, value: any) {
        if (object === "room") {
            if (setting === "backgroundColor") {
                this.camera.backgroundColor = value;
            }
        } else if (object === "nodes") {
            if (setting === "amount") {
                var difference = value - this.settings[object][setting];

                if (difference > 0) {
                    for (var i: number = 0; i < difference; i++) {
                        this.addNode(
                            new GNode(this, new Vector2D(Utils.random(0, canvas.width), Utils.random(0, canvas.height)))
                        )
                    }
                } else {
                    for (var i: number = this.nodes.length - 1; i > value - 1; i--) {
                        this.removeNode(this.nodes[i])
                    }
                }
            }
            else if (setting === "minSpeed") {
                for (var i: number = 0; i < this.nodes.length; i++) {
                    this.nodes[i].speedX = Utils.random(value, this.settings["nodes"]["maxSpeed"])
                    this.nodes[i].speedY = Utils.random(value, this.settings["nodes"]["maxSpeed"])
                }
            }
            else if (setting === "maxSpeed") {
                for (var i: number = 0; i < this.nodes.length; i++) {
                    this.nodes[i].speedX = Utils.random(this.settings["nodes"]["minSpeed"], value);
                    this.nodes[i].speedY = Utils.random(this.settings["nodes"]["minSpeed"], value);
                }
            }
        }


        this.settings[object][setting] = value;
    }


    public addNode(node: GNode) {
        this.nodes.push(node);
    }

    public removeNode(node: GNode) {
        var index = this.nodes.indexOf(node);
        this.nodes.splice(index, 1);

        node.removeFromLayer();
    }
}