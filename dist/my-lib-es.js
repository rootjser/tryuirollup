function n(n,e,t,o,i,d,c,r,s,l){"boolean"!=typeof c&&(s=r,r=c,c=!1);const u="function"==typeof t?t.options:t;let a;if(n&&n.render&&(u.render=n.render,u.staticRenderFns=n.staticRenderFns,u._compiled=!0,i&&(u.functional=!0)),o&&(u._scopeId=o),d?(a=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),e&&e.call(this,s(n)),n&&n._registeredComponents&&n._registeredComponents.add(d)},u._ssrRegister=a):e&&(a=c?function(n){e.call(this,l(n,this.$root.$options.shadowRoot))}:function(n){e.call(this,r(n))}),a)if(u.functional){const n=u.render;u.render=function(e,t){return a.call(t),n(e,t)}}else{const n=u.beforeCreate;u.beforeCreate=n?[].concat(n,a):[a]}return t}const e=n({},undefined,{data:function(){return{a:1}},methods:{onClick:function(){alert("11")}},render:function(){var n=arguments[0];return n("div",[n("button",["保存"])])}},undefined,undefined,undefined,!1,void 0,void 0,void 0);e.install=function(n){n.component("MyButton",e)};var t={select:{placeholder:"请选择"}},o=null,i={install:function(n){o||(o=new n({data:function(){return{locale:t}}}))},use:function(n){o.$data.locale=n||t}};const d={mixins:[{computed:{locale:function(){var n;return(null==o||null===(n=o.$data)||void 0===n?void 0:n.locale)||t}}}],methods:{onClick:function(){alert("11")}}};var c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n._v("\n  "+n._s(n.locale.select.placeholder)+"\n  "),t("select",{on:{click:n.onClick}},[t("option",[n._v("苹果")]),n._v(" "),t("option",[n._v("桃子")])])])};c._withStripped=!0;const r=n({render:c,staticRenderFns:[]},undefined,d,undefined,false,undefined,!1,void 0,void 0,void 0);r.install=function(n){n.use(i),n.component("MySelect",r)};const s=n({},undefined,{props:{name:String},render:function(){var n=arguments[0];return n("i",{class:"'el-icon-' + name"})}},undefined,undefined,undefined,!1,void 0,void 0,void 0);function l(n){n.use(e),n.use(r),n.use(s)}s.install=function(n){n.component("MyIcon",s)},window&&window.Vue&&Vue.use(l);export{e as button,l as default,s as icon,i as locale,r as select};
