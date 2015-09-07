module.exports = function(app) {
    var DOMParser = require('xmldom').DOMParser;
    var fs=require("fs");
    var path=require("path");
    var jsonPath = path.join(__dirname, '../public/version/version.json');
    var xml2js = require('xml2js');
    var builder=new xml2js.Builder();
    app.post('/', function (req, res) {
        var xml = new DOMParser().parseFromString(req.body.data, "text/xml");
        xml2js.parseString(xml, { explicitArray : false, ignoreAttrs : true }, function (err, result) {
            fs.readFile(jsonPath,{encoding:'utf-8'},function(err,bytesRead){
                var newVersion = JSON.parse(bytesRead);
                if(result.VersionInfo["@Version"]!== newVersion.Version) {
                    result.VersionInfo["Version"] = newVersion.Version;
                    result.VersionInfo["DownloadUrl"] = newVersion.DownloadUrl;
                    result.VersionInfo["IntroductionUrl"] = newVersion.IntroductionUrl;
                }
                var resData = builder.buildObject(result);
                res.send(resData);
            });
        });
    });

    app.get("/sassVar",function(req,res){
        res.render("sassVariable",{data:{unit:"$"}});
    });

    app.get("/lessVar",function(req,res){
        res.render("sassVariable",{data:{unit:"@"}});
    });

    app.get("/",function(req,res){
        res.render("app");
    });

    app.get("/upload",function(req,res){
        res.render("upload");
    });
};