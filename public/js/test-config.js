/**
 * Created by wangxing on 2015/10/20.
 */
seajs.config({
    paths: {

    },
    alias: {
        'main':'test-main'
    },
    base: "./js/",
    charset: 'utf-8'
});

seajs.use(["main"]);
