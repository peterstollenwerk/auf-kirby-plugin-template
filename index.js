(function () {var a={props:{after:String,before:String,disabled:Boolean,help:String,label:String,required:Boolean,value:String},data:function(){return{counter:1}},computed:{isCustom:function(){return this.counter+=1,"custom"===this.value}},methods:{onChange:function(t){this.$emit("input",t)}}};if(typeof a==="function"){a=a.options}Object.assign(a,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("k-field",{staticClass:"k-grid-field",attrs:{"disabled":_vm.disabled,"help":_vm.help,"label":_vm.label,"required":_vm.required}},[_c("k-input",{attrs:{"options":[{value:"main",text:"Main"},{value:"aside",text:"Aside"},{value:"custom",text:"Custom..."}],"name":"grid__column__class","type":"select","theme":"field"},on:{"input":_vm.onChange},model:{value:_vm.value,callback:function($$v){_vm.value=$$v},expression:"value"}}),_vm._v(" "),_c("p",[_vm._v("Yeah")]),_vm._v(" "),_vm.isCustom?_c("div",[_vm._v("Custom Column! ; )")]):_vm._e(),_vm._v(" "),_c("p",[_vm._v("Counter: "+_vm._s(_vm.counter))])],1)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());panel.plugin("auf/plugin",{fields:{aufpluginfield:a}});})();