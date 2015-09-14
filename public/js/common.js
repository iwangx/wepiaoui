/**
 * Created by wangxing on 2015/9/11.
 */
(function(fn) {
    typeof define === "function" ? define("common", fn) : fn()
})(function(require, exports, module){
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
        }).show();
    }

    window.loadingClose=function(){
        if(window.loadingEle){
            window.loadingEle.close().remove();
        }
    };
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
});
