/**
 * Created by wangxing on 2015/10/19.
 * canvas 画作为路径
 */
define(function (require, exports, module) {
    //画默认座位
    function drawDefault(graphics){
        graphics.moveTo(35.8,0);
        graphics.lineTo(34.4,0);
        graphics.bezierCurveTo(32.6,0,31.2,1.4,31.2,3.2);
        graphics.lineTo(31.2,4.9);
        graphics.lineTo(7.9,4.9);
        graphics.lineTo(7.9,3.2);
        graphics.bezierCurveTo(7.9,1.4,6.4,0,4.7,0);
        graphics.lineTo(3.2,0);
        graphics.bezierCurveTo(1.4,0,0,1.4,0,3.2);
        graphics.lineTo(0,7.2);
        graphics.lineTo(0,12.2);
        graphics.lineTo(0,33.7);
        graphics.bezierCurveTo(0,35,1,36,2.3,36);
        graphics.lineTo(36.699999999999996,36);
        graphics.bezierCurveTo(37.99999999999999,36,38.99999999999999,35,38.99999999999999,33.7);
        graphics.lineTo(38.99999999999999,12.2);
        graphics.lineTo(38.99999999999999,7.199999999999999);
        graphics.lineTo(38.99999999999999,3.1999999999999993);
        graphics.bezierCurveTo(39,1.4,37.6,0,35.8,0);
    }

    //画已选中的
    function drawSelected(graphics){
        graphics.moveTo(35.8,0);
        graphics.lineTo(34.4,0);
        graphics.bezierCurveTo(32.6,0,31.2,1.4,31.2,3.2);
        graphics.lineTo(31.2,4.9);
        graphics.lineTo(7.9,4.9);
        graphics.lineTo(7.9,3.2);
        graphics.bezierCurveTo(7.9,1.4,6.4,0,4.7,0);
        graphics.lineTo(3.2,0);
        graphics.bezierCurveTo(1.4,0,0,1.4,0,3.2);
        graphics.lineTo(0,7.2);
        graphics.lineTo(0,12.2);
        graphics.lineTo(0,33.7);
        graphics.bezierCurveTo(0,35,1,36,2.3,36);
        graphics.lineTo(36.699999999999996,36);
        graphics.bezierCurveTo(37.99999999999999,36,38.99999999999999,35,38.99999999999999,33.7);
        graphics.lineTo(38.99999999999999,12.2);
        graphics.lineTo(38.99999999999999,7.199999999999999);
        graphics.lineTo(38.99999999999999,3.1999999999999993);
        graphics.bezierCurveTo(39,1.4,37.6,0,35.8,0);
        graphics.closePath();
        graphics.moveTo(30.7,16.8);
        graphics.lineTo(16.6,30.7);
        graphics.lineTo(8.3,22.5);
        graphics.bezierCurveTo(7.800000000000001,22,7.800000000000001,21.2,8.3,20.7);
        graphics.bezierCurveTo(8.8,20.2,9.600000000000001,20.2,10.100000000000001,20.7);
        graphics.lineTo(16.6,27.2);
        graphics.lineTo(28.9,15);
        graphics.bezierCurveTo(29.4,14.5,30.2,14.5,30.7,15);
        graphics.bezierCurveTo(31.2,15.5,31.2,16.3,30.7,16.8);
    }

    //画只有头部的那个
    function drawHeader(graphics){
        graphics.moveTo(10,30.5);
        graphics.lineTo(11.2,30.5);
        graphics.bezierCurveTo(11.2,26.2,14.899999999999999,22.7,19.5,22.7);
        graphics.bezierCurveTo(24.1,22.7,27.8,26.2,27.8,30.5);
        graphics.lineTo(29,30.5);
        graphics.bezierCurveTo(29,26.5,26.2,23.2,22.4,22);
        graphics.bezierCurveTo(24.7,20.9,26.299999999999997,18.6,26.299999999999997,15.8);
        graphics.bezierCurveTo(26.299999999999997,12,23.199999999999996,9,19.499999999999996,9);
        graphics.bezierCurveTo(15.699999999999996,9,12.699999999999996,12.1,12.699999999999996,15.8);
        graphics.bezierCurveTo(12.699999999999996,18.5,14.299999999999995,20.9,16.599999999999994,22);
        graphics.bezierCurveTo(12.8,23.2,10,26.5,10,30.5);
        graphics.closePath();
        graphics.moveTo(13.8,15.9);
        graphics.bezierCurveTo(13.8,12.7,16.400000000000002,10.2,19.5,10.2);
        graphics.bezierCurveTo(22.7,10.2,25.2,12.799999999999999,25.2,15.899999999999999);
        graphics.bezierCurveTo(25.2,19.099999999999998,22.599999999999998,21.599999999999998,19.5,21.599999999999998);
        graphics.bezierCurveTo(16.3,21.6,13.8,19,13.8,15.9);
    }

    return {
        drawDefault:drawDefault,
        drawSelected:drawSelected,
        drawHeader:drawHeader
    }
});