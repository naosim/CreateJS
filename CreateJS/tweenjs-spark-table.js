/// <reference path="definitions/createjs/tweenjs/Tween.d.ts"/>
/// <reference path="definitions/createjs/tweenjs/Ease.d.ts"/>
/// <reference path="definitions/createjs/easeljs/utils/Ticker.d.ts"/>
/// <reference path="definitions/createjs/easeljs/display/Stage.d.ts"/>
/// <reference path="definitions/createjs/easeljs/display/Shape.d.ts"/>
// -------------------------------------------------------------------------------------------------------------------
//		GLOBAL
// --------------------------------------------------------------------------------------------------------------------
window.onload = function () {
    if(window.top != window) {
        document.getElementById("header").style.display = "none";
    }
    var tweenSparkTable = new TweenJSSparkTable();
    tweenSparkTable.init();
};
var TweenJSSparkTable = (function () {
    // --------------------------------------------------------------------------------------------------------------------
    //		Constructor
    // --------------------------------------------------------------------------------------------------------------------
    function TweenJSSparkTable() {
        this.m_Eases = [
            createjs.Ease.none, 
            createjs.Ease.quadIn, 
            createjs.Ease.getPowIn(2.5), 
            createjs.Ease.cubicIn, 
            createjs.Ease.quartIn, 
            createjs.Ease.quintIn
        ];
    }
    // --------------------------------------------------------------------------------------------------------------------
    //		PUBLIC METHODS
    // --------------------------------------------------------------------------------------------------------------------
        TweenJSSparkTable.prototype.init = function () {
        this.m_Canvas = document.getElementById("canvas1");
        this.m_Stage = new createjs.Stage(this.m_Canvas);
        var graph = new createjs.Shape();
        var g = graph.graphics;
        this.m_Stage.addChild(graph);
        var w = this.m_Canvas.width - 10;
        var h = this.m_Canvas.height - 10;
        for(var j = 0, l = this.m_Eases.length; j < l; j++) {
            g.beginFill(createjs.Graphics.getHSL(j / l * 360, 50, 50));
            var ease = this.m_Eases[j];
            for(var i = 0; i < 100; i++) {
                var x = i / 100 * w + 5;
                var y = h - ease(i / 100) * h + 5;
                g.drawCircle(x, y, 3);
                g.closePath();
            }
        }
        this.m_Stage.update();
    };
    return TweenJSSparkTable;
})();
//@ sourceMappingURL=tweenjs-spark-table.js.map
