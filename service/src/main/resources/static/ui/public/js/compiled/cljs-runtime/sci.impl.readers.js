goog.provide('sci.impl.readers');
sci.impl.readers.read_fn = (function sci$impl$readers$read_fn(expr){
var state = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),(0),new cljs.core.Keyword(null,"var-args?","var-args?",-1630678710),false], null));
var expr__$1 = clojure.walk.postwalk((function (elt){
if((elt instanceof cljs.core.Symbol)){
var temp__5751__auto__ = cljs.core.re_matches(/^%(.*)/,cljs.core.name(elt));
if(cljs.core.truth_(temp__5751__auto__)){
var vec__63754 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63754,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63754,(1),null);
if(cljs.core.empty_QMARK_(m)){
state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$4(state.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),cljs.core.max,(1)));

return new cljs.core.Symbol(null,"%1","%1",1309450150,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("&",m)){
state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"var-args?","var-args?",-1630678710),true));

return elt;
} else {
var n_63822 = parseInt(m);
state.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$4(state.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124),cljs.core.max,n_63822));

return elt;

}
}
} else {
return elt;
}
} else {
return elt;
}
}),expr);
var map__63731 = cljs.core.deref(state);
var map__63731__$1 = cljs.core.__destructure_map(map__63731);
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63731__$1,new cljs.core.Keyword(null,"max-fixed","max-fixed",166770124));
var var_args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63731__$1,new cljs.core.Keyword(null,"var-args?","var-args?",-1630678710));
var fixed_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63727_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63727_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(max_fixed + (1))));
var fixed_names__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.mark_resolve_sym,fixed_names);
var var_args_sym = sci.impl.utils.mark_resolve_sym(new cljs.core.Symbol(null,"%&","%&",-728707069,null));
var arg_list = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fixed_names__$1,(cljs.core.truth_(var_args_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),var_args_sym], null):null)));
var destructure_vec = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(fixed_names__$1,fixed_names__$1));
var destructure_vec__$1 = (cljs.core.truth_(var_args_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(destructure_vec,var_args_sym,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var_args_sym], 0)):destructure_vec);
var form = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("sci","fn","sci/fn",-1175412627),true,new cljs.core.Keyword("sci","fn-bodies","sci/fn-bodies",1560088305),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("sci","binding-vector","sci/binding-vector",472234633),arg_list,new cljs.core.Keyword("sci","body","sci/body",-2048762364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr__$1], null),new cljs.core.Keyword("sci","fixed-arity","sci/fixed-arity",1586037288),cljs.core.count(fixed_names__$1),new cljs.core.Keyword("sci","destructure-vec","sci/destructure-vec",-1247261440),destructure_vec__$1,new cljs.core.Keyword("sci","arg-list","sci/arg-list",331954192),arg_list,new cljs.core.Keyword("sci","fixed-names","sci/fixed-names",-947513273),fixed_names__$1,new cljs.core.Keyword("sci","var-arg-name","sci/var-arg-name",-1100185608),(cljs.core.truth_(var_args_QMARK_)?new cljs.core.Symbol(null,"%&","%&",-728707069,null):null)], null)], null)], null);
return form;
});

//# sourceMappingURL=sci.impl.readers.js.map
