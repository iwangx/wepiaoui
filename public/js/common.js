/**
 * Created by wangxing on 2015/9/7.
 * commonjs 这里面包含了一些公用的功能
 */
(function(fn) {
    typeof define === "function" ? define("common", fn) : fn()
})(function(require, exports, module){
    /**************** 时间选择 ******************/
    require("laydate");
    var dom=$(document);
    dom.on("click",".tb-body-action",function(){
        $(this).addClass("active");
    })
    var start = {
        elem: '#start',
        format: 'YYYY-MM-DD',
        istoday: false,
        choose: function(datas){
            end.min = datas; //开始日选好后，重置结束日的最小日期
            end.start = datas //将结束日的初始值设定为开始日
        }
    };
    var end = {
        elem: '#end',
        format: 'YYYY-MM-DD',
        istoday: false,
        choose: function(datas){
            start.max = datas; //结束日选好后，重置开始日的最大日期
        }
    };

    //class名为date-input-date的input框在点击的时候都会触发文本框
    dom.on("click",".date-input-date",function(){
        if(this.id!="start" || this.id!="end"){
            laydate({
                format: 'YYYY-MM-DD',
                istoday: false
            })
        }
    });
    dom.on("click",".date-input-datetime",function(){
        if(this.id!="start" || this.id!="end"){
            laydate({
                format: 'YYYY-MM-DD hh:mm:ss',
                istoday: false,
                istime: true
            })
        }
    });

    $("#start").on("click",function(){
        if($(this).hasClass("date-input-datetime")){
            start.format="YYYY-MM-DD hh:mm:ss";
        }
        laydate(start);
    });
    $("#end").on("click",function(){
        if($(this).hasClass("date-input-datetime")){
            end.format="YYYY-MM-DD hh:mm:ss";
        }
        laydate(end);
    });
    /**************** 重写弹出框 ******************/
    window.confirm=function(msg,okCallBack,cancelCallBack){
        dialog({
            content:msg,
            title:"提示",
            ok:function(){
                if(okCallBack){
                    okCallBack.call(this);
                }
            },
            cancel:function(){
                if(cancelCallBack){
                    cancelCallBack.call(this);
                }
            }
        }).showModal();
    }

    window.alert=function(msg,okCallBack){
        dialog({
            content:"<p class='ui-alert'>"+msg+"</p>",
            title:"提示",
            cancelDisplay:false,
            ok:function(){
                if(okCallBack){
                    okCallBack.call(this);
                }
            },
            cancel:false
        }).showModal();
    }

    window.tip=function(msg){
        var tip = dialog({
            content: msg,
            cancelDisplay:false,
            padding:20
        }).show();
        setTimeout(function(){
            tip.close().remove();
        },2000);
    }

    window.loading=function(){
        if(window.loadingEle){
            window.loadingEle.close().remove();
        }
        window.loadingEle = dialog({
            cancelDisplay:false,
            padding:"10px 20px"
        }).showModal();
    }

    window.loadingClose=function(){
        if(window.loadingEle){
            window.loadingEle.close().remove();
        }
    };

    /**************** 重写弹出框 ******************/
    $.fn.imageUpload=function(){

        function getExt(extList,type){
            for(var i=0;i<extList.length;i++){
                if("image/"+extList[i]===type){
                    return true
                }
            }
            return false;
        }

        this.each(function(){
            var $this=$(this);
            var dataSet=this.dataset;
            var ext=dataSet.ext.split(",");
            var size=dataSet.size;
            this.style.height=dataSet.h+"px";
            this.style.width=dataSet.w+"px";
            this.removeAttribute("data-tip");
            this.removeAttribute("data-size");
            this.removeAttribute("data-ext");
            var file=$this.find(".ui-image-upload-file");
            var img=$this.find(".ui-image-upload-img");
            var tip=$this.find(".ui-image-upload-tip")
            tip.css("left",dataSet.w+"px");
            $this.on("change",function(){
                if(getExt(ext,file[0].files[0].type)){
                    if(size && !isNaN(parseInt(size))){
                        if(file[0].files[0].size>parseInt(size)){
                            alert("选择的文件大于上传限制，请压缩图片！");
                            $this.val();
                            return false;
                        }
                    }
                    var reader = new FileReader();
                    reader.onload=function(theFile){
                        img.attr("src",theFile.target.result);
                    };
                    reader.readAsDataURL(file[0].files[0]);
                }else{
                    alert("请选择"+ext.join(",")+"类型的文件！");
                    $this.val();
                }
            });
        });
    };
    $(".ui-image-upload").imageUpload();

    /************************ tab切换 *********************/
    $.fn.tab=function(){

        this.each(function(){
            var $this=$(this);
            var tabHeadList=$this.find(".ui-tab-head").find("li");
            var tabBodyList=$this.find(".ui-tab-body").find("li");
            tabHeadList.on("click",function(){
                var index =$(this).index();
                tabHeadList.removeClass("active");
                $(this).addClass("active");
                tabBodyList.removeClass("active");
                tabBodyList.eq(index).addClass("active");
                index =null;
            });
        });
    };

    $(".ui-tab").tab();
});
