/**
 * Created by wangxing on 2015/10/20.
 */
(function(fn) {
    typeof define === "function" ? define("test-main", fn) : fn()
})(function(require, exports, module){
    require("lib/EaselJS/easeljs");
    var path=require("lib/seatPath/seatPath");
    var hammer=require("lib/hammer/hammer.min");
    var wrap=$("#wrap");
    var trans=$("#trans");
    var count=1000;
    var list=[];
    var row=0;
    var col=0;
    var colorGreen="#44cb83";
    for(var i=0;i<count;i++){
        var obj={
            id:i,
            isUsed:1
        };
        if(i%20==0){
            row++;
            col=0;
        }
        col++;
        obj.physic_row=row;
        obj.physic_col=col;
        list.push(obj);
        obj=null;
    }
    wrap.height(window.screen.availHeight);
    wrap.width(window.screen.availWidth);
    var canvas=document.getElementById("canvas");
    var stage=new createjs.Stage(canvas);
    stage.enableMouseOver(5);
    stage.mouseMoveOutside = true;
    var container = new createjs.Container();
    stage.addChild(container);
    var maxCol=0;
    var maxRow=0;
    for(var j=0;j<list.length;j++){
        var item=list[j];
        if(item.physic_col>maxCol){
            maxCol=item.physic_col;
        }
        if(item.physic_row>maxRow){
            maxRow=item.physic_row;
        }
        var shape= new createjs.Shape();
        shape.x=(item.physic_col-1)*44;
        shape.y=(item.physic_row-1)*44;
        shape.graphics.beginFill(colorGreen);
        path.drawDefault(shape.graphics);
        container.addChild(shape);
        item=null;
        shape=null;
    }

    var hammertime = new Hammer(canvas, {});
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    hammertime.on("panleft panright panup pandown tap press", function(ev) {
        //myElement.textContent = ev.type +" gesture detected.";
    });
    canvas.height=maxRow*44;
    canvas.width=maxCol*44;
    trans.css({height: canvas.height,width:canvas.width});
    stage.update();
    var scale=window.screen.availWidth/canvas.width;
    canvas.style.transform="scale("+scale+")";
});
