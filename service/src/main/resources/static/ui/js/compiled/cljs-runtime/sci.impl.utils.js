goog.provide('sci.impl.utils');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.error","realized-beyond-max","sci.error/realized-beyond-max",-1094268187),new cljs.core.Keyword("sci","error","sci/error",-979082803));
sci.impl.utils.sci_error_QMARK_ = (function sci$impl$utils$sci_error_QMARK_(e){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword("sci","error","sci/error",-979082803));
});
sci.impl.utils.constant_QMARK_ = (function sci$impl$utils$constant_QMARK_(x){
return ((typeof x === 'number') || (((typeof x === 'string') || ((x instanceof cljs.core.Keyword)))));
});
sci.impl.utils.mark_resolve_sym = (function sci$impl$utils$mark_resolve_sym(sym){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(sym,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","eval","sci.impl/eval",-210871022),true);
}));
});
sci.impl.utils.kw_identical_QMARK_ = (function sci$impl$utils$kw_identical_QMARK_(k,v){
return cljs.core.keyword_identical_QMARK_(k,v);
});
sci.impl.utils.gensym_STAR_ = (function sci$impl$utils$gensym_STAR_(var_args){
var G__63294 = arguments.length;
switch (G__63294) {
case 0:
return sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return sci.impl.utils.mark_resolve_sym(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
}));

(sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return sci.impl.utils.mark_resolve_sym(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(prefix));
}));

(sci.impl.utils.gensym_STAR_.cljs$lang$maxFixedArity = 1);

sci.impl.utils.mark_eval_call = (function sci$impl$utils$mark_eval_call(expr){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(expr,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("sci.impl","eval-call","sci.impl/eval-call",1503253387),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci.impl","eval","sci.impl/eval",-210871022),true], 0));
}));
});
sci.impl.utils.mark_eval = (function sci$impl$utils$mark_eval(expr){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(expr,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","eval","sci.impl/eval",-210871022),true);
}));
});
sci.impl.utils.throw_error_with_location = (function sci$impl$utils$throw_error_with_location(var_args){
var G__63299 = arguments.length;
switch (G__63299) {
case 2:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2 = (function (msg,iobj){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,iobj,cljs.core.PersistentArrayMap.EMPTY);
}));

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3 = (function (msg,iobj,data){
var map__63311 = cljs.core.meta(iobj);
var map__63311__$1 = cljs.core.__destructure_map(map__63311);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63311__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63311__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var msg__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," [at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join('');
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci","error","sci/error",-979082803),new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null),data], 0)));
}));

(sci.impl.utils.throw_error_with_location.cljs$lang$maxFixedArity = 3);

sci.impl.utils.re_throw_with_location_of_node = (function sci$impl$utils$re_throw_with_location_of_node(e,node){
var temp__5751__auto__ = e.message;
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
if(clojure.string.includes_QMARK_(m,"[at line")){
throw e;
} else {
var map__63318 = cljs.core.meta(node);
var map__63318__$1 = cljs.core.__destructure_map(map__63318);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63318__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63318__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
if(cljs.core.truth_((function (){var and__4210__auto__ = row;
if(cljs.core.truth_(and__4210__auto__)){
return col;
} else {
return and__4210__auto__;
}
})())){
var m__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)," [at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join('');
var new_exception = (function (){var temp__5751__auto____$1 = cljs.core.ex_data(e);
if(cljs.core.truth_(temp__5751__auto____$1)){
var d = temp__5751__auto____$1;
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci","error","sci/error",-979082803),new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null),d], 0)));
} else {
(e.message = m__$1);

return e;
}
})();
throw new_exception;
} else {
throw e;
}
}
} else {
throw e;
}
});
/**
 * Only adds metadata to obj if d is not nil and if meta on obj isn't already nil.
 */
sci.impl.utils.merge_meta = (function sci$impl$utils$merge_meta(obj,d){
if(cljs.core.truth_(d)){
var temp__5751__auto__ = cljs.core.meta(obj);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
return cljs.core.with_meta(obj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,d], 0)));
} else {
return obj;
}
} else {
return obj;
}
});

//# sourceMappingURL=sci.impl.utils.js.map
