goog.provide('sci.impl.exceptions');
sci.impl.exceptions.create_js_error = (function sci$impl$exceptions$create_js_error(msg){
return (new Error(msg));
});
sci.impl.exceptions.js_exception_bindings = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),Error,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),Error], null);
sci.impl.exceptions.exception_bindings = sci.impl.exceptions.js_exception_bindings;

//# sourceMappingURL=sci.impl.exceptions.js.map
