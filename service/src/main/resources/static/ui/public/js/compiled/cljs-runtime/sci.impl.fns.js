goog.provide('sci.impl.fns');
sci.impl.fns.parse_fn_args_PLUS_body = (function sci$impl$fns$parse_fn_args_PLUS_body(interpret,ctx,p__63373){
var map__63375 = p__63373;
var map__63375__$1 = cljs.core.__destructure_map(map__63375);
var _m = map__63375__$1;
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword("sci","fixed-arity","sci/fixed-arity",1586037288));
var fixed_names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword("sci","fixed-names","sci/fixed-names",-947513273));
var var_arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword("sci","var-arg-name","sci/var-arg-name",-1100185608));
var destructure_vec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword("sci","destructure-vec","sci/destructure-vec",-1247261440));
var _arg_list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword("sci","_arg-list","sci/_arg-list",1044192193));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63375__$1,new cljs.core.Keyword("sci","body","sci/body",-2048762364));
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
var m = (cljs.core.truth_(min_var_args_arity)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci","min-var-args-arity","sci/min-var-args-arity",1755354427),min_var_args_arity], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci","fixed-arity","sci/fixed-arity",1586037288),fixed_arity], null));
return cljs.core.with_meta((function() { 
var G__63433__delegate = function (args){
while(true){
if(cljs.core.truth_(var_arg_name)){
if((cljs.core.count(cljs.core.take.cljs$core$IFn$_invoke$arity$2(min_var_args_arity,args)) < min_var_args_arity)){
throw (new Error(["Wrong number of arguments. Expected at least: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min_var_args_arity),", got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('')));
} else {
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.take.cljs$core$IFn$_invoke$arity$2((fixed_arity + (1)),args)),fixed_arity)){
} else {
throw (new Error(["Wrong number of arguments. Expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_arity),", got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args)),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join('')));
}
}

var runtime_bindings = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(fixed_names,cljs.core.take.cljs$core$IFn$_invoke$arity$2(fixed_arity,args)));
var runtime_bindings__$1 = (cljs.core.truth_(var_arg_name)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(runtime_bindings,var_arg_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2(fixed_arity,args)], 0)):runtime_bindings);
var let_bindings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(runtime_bindings__$1,destructure_vec);
var form = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"let","let",358118826,null),let_bindings,body);
var ret = (function (){var G__63391 = ctx;
var G__63392 = sci.impl.utils.mark_eval_call(form);
return (interpret.cljs$core$IFn$_invoke$arity$2 ? interpret.cljs$core$IFn$_invoke$arity$2(G__63391,G__63392) : interpret.call(null,G__63391,G__63392));
})();
var m__$1 = cljs.core.meta(ret);
var recur_QMARK_ = new cljs.core.Keyword("sci.impl","recur","sci.impl/recur",-1324363695).cljs$core$IFn$_invoke$arity$1(m__$1);
if(cljs.core.truth_(recur_QMARK_)){
var G__63435 = ret;
args = G__63435;
continue;
} else {
return ret;
}
break;
}
};
var G__63433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63437__i = 0, G__63437__a = new Array(arguments.length -  0);
while (G__63437__i < G__63437__a.length) {G__63437__a[G__63437__i] = arguments[G__63437__i + 0]; ++G__63437__i;}
  args = new cljs.core.IndexedSeq(G__63437__a,0,null);
} 
return G__63433__delegate.call(this,args);};
G__63433.cljs$lang$maxFixedArity = 0;
G__63433.cljs$lang$applyTo = (function (arglist__63438){
var args = cljs.core.seq(arglist__63438);
return G__63433__delegate(args);
});
G__63433.cljs$core$IFn$_invoke$arity$variadic = G__63433__delegate;
return G__63433;
})()
,m);
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
return cljs.core.some((function (f){
var map__63395 = cljs.core.meta(f);
var map__63395__$1 = cljs.core.__destructure_map(map__63395);
var fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63395__$1,new cljs.core.Keyword("sci","fixed-arity","sci/fixed-arity",1586037288));
var min_var_args_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63395__$1,new cljs.core.Keyword("sci","min-var-args-arity","sci/min-var-args-arity",1755354427));
if(cljs.core.truth_((function (){var or__4212__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arity,fixed_arity);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto__ = min_var_args_arity;
if(cljs.core.truth_(and__4210__auto__)){
return (arity >= min_var_args_arity);
} else {
return and__4210__auto__;
}
}
})())){
return f;
} else {
return null;
}
}),arities);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,interpret,p__63412){
var map__63413 = p__63412;
var map__63413__$1 = cljs.core.__destructure_map(map__63413);
var f = map__63413__$1;
var fn_bodies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63413__$1,new cljs.core.Keyword("sci","fn-bodies","sci/fn-bodies",1560088305));
var fn_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63413__$1,new cljs.core.Keyword("sci","fn-name","sci/fn-name",-766676957));
var macro_QMARK_ = new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(f);
var self_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var call_self = (function() { 
var G__63447__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self_ref),args);
};
var G__63447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63450__i = 0, G__63450__a = new Array(arguments.length -  0);
while (G__63450__i < G__63450__a.length) {G__63450__a[G__63450__i] = arguments[G__63450__i + 0]; ++G__63450__i;}
  args = new cljs.core.IndexedSeq(G__63450__a,0,null);
} 
return G__63447__delegate.call(this,args);};
G__63447.cljs$lang$maxFixedArity = 0;
G__63447.cljs$lang$applyTo = (function (arglist__63451){
var args = cljs.core.seq(arglist__63451);
return G__63447__delegate(args);
});
G__63447.cljs$core$IFn$_invoke$arity$variadic = G__63447__delegate;
return G__63447;
})()
;
var ctx__$1 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name], null),call_self):ctx);
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63409_SHARP_){
return sci.impl.fns.parse_fn_args_PLUS_body(interpret,ctx__$1,p1__63409_SHARP_);
}),fn_bodies);
var f__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(arities)))?cljs.core.first(arities):(function() { 
var G__63452__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5751__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5751__auto__)){
var f__$1 = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,args);
} else {
throw (new Error(["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_count)," arguments."].join('')));
}
};
var G__63452 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63453__i = 0, G__63453__a = new Array(arguments.length -  0);
while (G__63453__i < G__63453__a.length) {G__63453__a[G__63453__i] = arguments[G__63453__i + 0]; ++G__63453__i;}
  args = new cljs.core.IndexedSeq(G__63453__a,0,null);
} 
return G__63452__delegate.call(this,args);};
G__63452.cljs$lang$maxFixedArity = 0;
G__63452.cljs$lang$applyTo = (function (arglist__63456){
var args = cljs.core.seq(arglist__63456);
return G__63452__delegate(args);
});
G__63452.cljs$core$IFn$_invoke$arity$variadic = G__63452__delegate;
return G__63452;
})()
),(function (p1__63410_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63410_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
}));
cljs.core.reset_BANG_(self_ref,f__$1);

return f__$1;
});

//# sourceMappingURL=sci.impl.fns.js.map
