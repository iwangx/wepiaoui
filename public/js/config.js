/**
 * Created by wangxing on 2015/9/14.
 */
seajs.config({
    paths: {

    },
    alias: {
        'common':'common',
        'main':'main',
        'dialog':"lib/artdialog/dialog",
        'laydate':'lib/laydate/laydate'
    },
    base: "./js/",
    charset: 'utf-8'
});

seajs.use(['dialog','common',"main"]);

