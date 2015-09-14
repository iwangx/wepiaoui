/**
 * 表单验证辅助
 * 基于bootstrap
 */

;define(function(require, exports, module){
    require("lib/validate/jquery.validate");
    require("lib/validate/jquery.metadata");
    require("lib/validate/message_cn");

    var ValidatePlugin=function(formid,opts){
        var me=this, _cacheCom={},_cacheComEr={},_cacheSucc={};

        me.parentEl='ui-form-group';

        me.formatElid=function(el){
            return (el.indexOf('#')>-1&&el)||(el.indexOf('.')>-1&&el)||('[name="'+el+'"]')
        }
        //获取控件
        me.components =function(elid) {
            return elid&&(_cacheCom[elid]||(_cacheCom[elid]=$(me.formatElid(elid))));
        }

        //获取错误label
        me.componentsErr=function(elid,errtag) {
            errtag=errtag||'err';
            if(elid&&_cacheComEr[elid]){
                return _cacheComEr[elid];
            }else
            {
                return elid&&(_cacheComEr[elid]||(_cacheComEr[elid]=me.makeErrLabel(me.formatElid(elid),errtag)));
            }
        }

        //生成错误标签
        me.makeErrLabel=function(elid,errtag){
            errtag=errtag||'error';
            var element=$(elid),widget,h=element.height(),w=element.width(),
                pos=element.position(),widget=$('<label class="error-warning" data-tag="'+errtag+'"></label>'),_w=me.getParent(element,me.parentEl).find('label[data-tag="'+errtag+'"]');
            if(_w.length){
                return _w;
            }
            widget.insertAfter(element);
            return widget;
        }

        me.showError=function(el,error,cls) {
            cls = cls || 'error-warning';
            error ? me.componentsErr(el).text(error) && me.componentsErr(el).addClass(cls) && me.components(el).addClass(cls + '-border') :
            me.componentsErr(el).text('').addClass(cls)  && me.components(el).removeClass(cls + '-border');
        };

        me.getParent=ValidatePlugin.getParent;

        me.showErrors=function(map,list){
            _nowErrs={};
            $.each(list, function(index, error) {
                var _n=error.element.name;
                _cacheSucc[_n]=false;
                me.showError(error.element.name,error.message);
            });
            for(var a in me.validator.successList) {
               var _n=me.validator.successList[a].name;
                if(!_cacheSucc[_n]){
                    me.showError(me.validator.successList[a].name, null);
                    _cacheSucc[_n]=true;
                }
            }
        }

        me.validate=function(formid,opts){
            opts=opts||{};
            me.parentEl=opts.parentEl||me.parentEl;
            opts.showErrors=(typeof opts.showErrors)=="undefined"?me.showErrors:null;
            me.validator=$(formid).validate(opts);
            return me.validator;
        }

        return me.validate(formid,opts);
    }

    ValidatePlugin.getParent=function(el,cls){
        if(el){
            var p=el.parent();
            if(p.hasClass(cls)){
                return p;
            }
            return ValidatePlugin.getParent(p,cls);
        }
    }

    exports.ValidatePlugin=ValidatePlugin;
});