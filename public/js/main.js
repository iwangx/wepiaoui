/**
 * Created by wangxing on 2015/9/14.
 */
(function(fn) {
    typeof define === "function" ? define("main", fn) : fn()
})(function(require, exports, module){
    var menuList=$("#menuList");
    var itemList=[];
    var dia=document.getElementById("diaBtn");
    $("h2").each(function(){
        var $this=$(this);

        var guid=Guid.NewGuid().ToString("N");
        $this.before("<a class='anchor' name='"+guid+"'></a>")
        //this.previousElementSibling.setAttribute("name",guid);
        itemList.push("<li><a href='#"+guid+"'>"+this.innerHTML+"</a></li>");
    });
    menuList.append(itemList.join(""));

    var d= dialog({
        id:"",//指定在dialog内部建立id，可以通过dialog.get(id)方式获取弹出框
        width:100,//指定弹出框的宽度
        title:"这里是标题",//指定弹出框标题
        content:document.getElementById("dia"),//指定需要显示的内容，可以是语原生的dom对象，也可以是html字符串
        ok:function(){d.close()},//指定出现确定按钮并且为确定按钮绑定事件,如果不需要执行方法直接赋值为true即可,默认是点击后会马上关闭弹出框,可以通过return false阻止弹出框关闭
        cancel:function(){}//指定出现取消按钮并且为取消按钮绑定事件,如果不需要执行方法直接赋值为true即可,可以通过return false阻止弹出框关闭
    })//*指定显示出弹出框67

    dia.addEventListener("click",function(){
        d.showModal();
    });

    var ValidatePlugin= require("lib/validate/validatePlugin").ValidatePlugin;
    //自定义方法
    $.validator.addMethod("txt_define", function(value, element, params) {
        return   (new RegExp("123")).test(value);
    }, $.validator.format("请输入123才能验证通过"));
    new ValidatePlugin('#form',{
        rules:{
            "txt_name":{
                required: true
            },
            "txt_email":{
                required: true,
                email:true
            },
            "txt_number":{
                required: true,
                max:10,
                min:0
            },
            "txt_define":{
                "txt_define":true
            }
        }
    });
});