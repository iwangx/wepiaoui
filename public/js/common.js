/**
 * Created by wangxing on 2015/9/11.
 */
(function(){
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
})();