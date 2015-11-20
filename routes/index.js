module.exports = function(app) {
    app.get("/",function(req,res){
        res.render("index",{});
    });
    app.get("/test",function(req,res){
        res.render("test",{});
    });
    app.get("/toupiao",function(req,res){
    	
        res.render("toupiao",{ip:req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress});
    })
};