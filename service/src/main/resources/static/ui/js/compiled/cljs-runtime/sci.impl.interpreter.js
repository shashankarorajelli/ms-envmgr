goog.provide('sci.impl.interpreter');
sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"->","->",-2139605430,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"as->","as->",1430690540,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"when","when",1064114221,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null",new cljs.core.Symbol(null,"->>","->>",-1874332161,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
if(cljs.core.empty_QMARK_(args)){
return true;
} else {
var vec__65559 = args;
var seq__65560 = cljs.core.seq(vec__65559);
var first__65561 = cljs.core.first(seq__65560);
var seq__65560__$1 = cljs.core.next(seq__65560);
var x = first__65561;
var xs = seq__65560__$1;
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(cljs.core.empty_QMARK_(xs)){
return v;
} else {
return (sci.impl.interpreter.eval_and.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_and.cljs$core$IFn$_invoke$arity$2(ctx,xs) : sci.impl.interpreter.eval_and.call(null,ctx,xs));
}
} else {
return v;
}
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
if(cljs.core.empty_QMARK_(args)){
return null;
} else {
var vec__65563 = args;
var seq__65564 = cljs.core.seq(vec__65563);
var first__65565 = cljs.core.first(seq__65564);
var seq__65564__$1 = cljs.core.next(seq__65564);
var x = first__65565;
var xs = seq__65564__$1;
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(cljs.core.empty_QMARK_(xs)){
return v;
} else {
return (sci.impl.interpreter.eval_or.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_or.cljs$core$IFn$_invoke$arity$2(ctx,xs) : sci.impl.interpreter.eval_or.call(null,ctx,xs));
}
}
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4824__auto__ = [];
var len__4818__auto___65697 = arguments.length;
var i__4819__auto___65698 = (0);
while(true){
if((i__4819__auto___65698 < len__4818__auto___65697)){
args__4824__auto__.push((arguments[i__4819__auto___65698]));

var G__65699 = (i__4819__auto___65698 + (1));
i__4819__auto___65698 = G__65699;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var G__65578 = let_bindings;
var vec__65581 = G__65578;
var seq__65582 = cljs.core.seq(vec__65581);
var first__65583 = cljs.core.first(seq__65582);
var seq__65582__$1 = cljs.core.next(seq__65582);
var let_name = first__65583;
var first__65583__$1 = cljs.core.first(seq__65582__$1);
var seq__65582__$2 = cljs.core.next(seq__65582__$1);
var let_val = first__65583__$1;
var rest_let_bindings = seq__65582__$2;
var ctx__$2 = ctx__$1;
var G__65578__$1 = G__65578;
while(true){
var ctx__$3 = ctx__$2;
var vec__65588 = G__65578__$1;
var seq__65589 = cljs.core.seq(vec__65588);
var first__65590 = cljs.core.first(seq__65589);
var seq__65589__$1 = cljs.core.next(seq__65589);
var let_name__$1 = first__65590;
var first__65590__$1 = cljs.core.first(seq__65589__$1);
var seq__65589__$2 = cljs.core.next(seq__65589__$1);
var let_val__$1 = first__65590__$1;
var rest_let_bindings__$1 = seq__65589__$2;
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$3,let_val__$1) : sci.impl.interpreter.interpret.call(null,ctx__$3,let_val__$1));
var ctx__$4 = cljs.core.assoc_in(ctx__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.empty_QMARK_(rest_let_bindings__$1)){
return ctx__$4;
} else {
var G__65705 = ctx__$4;
var G__65706 = rest_let_bindings__$1;
ctx__$2 = G__65705;
G__65578__$1 = G__65706;
continue;
}
break;
}
})();
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65570_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,p1__65570_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx__$1,p1__65570_SHARP_));
}),exprs));
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq65571){
var G__65572 = cljs.core.first(seq65571);
var seq65571__$1 = cljs.core.next(seq65571);
var G__65573 = cljs.core.first(seq65571__$1);
var seq65571__$2 = cljs.core.next(seq65571__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65572,G__65573,seq65571__$2);
}));

sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var exprs = cljs.core.rest(expr);
while(true){
var temp__5753__auto__ = cljs.core.first(exprs);
if(cljs.core.truth_(temp__5753__auto__)){
var expr__$1 = temp__5753__auto__;
var expr__$2 = sci.impl.macros.macroexpand(ctx,expr__$1);
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$2) : sci.impl.interpreter.interpret.call(null,ctx,expr__$2));
}catch (e65592){if((e65592 instanceof Error)){
var e = e65592;
return sci.impl.utils.re_throw_with_location_of_node(e,expr__$2);
} else {
throw e65592;

}
}})();
var temp__5751__auto__ = cljs.core.next(exprs);
if(temp__5751__auto__){
var n = temp__5751__auto__;
var G__65712 = n;
exprs = G__65712;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var vec__65594 = expr;
var _if = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65594,(0),null);
var cond = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65594,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65594,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65594,(3),null);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_when = (function sci$impl$interpreter$eval_when(ctx,expr){
var vec__65598 = expr;
var seq__65599 = cljs.core.seq(vec__65598);
var first__65600 = cljs.core.first(seq__65599);
var seq__65599__$1 = cljs.core.next(seq__65599);
var _when = first__65600;
var first__65600__$1 = cljs.core.first(seq__65599__$1);
var seq__65599__$2 = cljs.core.next(seq__65599__$1);
var cond = first__65600__$1;
var body = seq__65599__$2;
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return cljs.core.last(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65597_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__65597_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__65597_SHARP_));
}),body));
} else {
return null;
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__65601){
var vec__65602 = p__65601;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65602,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65602,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65602,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65602,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = (cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci","doc","sci/doc",1913179154),docstring], null):cljs.core.PersistentArrayMap.EMPTY);
var var_name__$1 = cljs.core.with_meta(var_name,m);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.assoc,var_name__$1,init__$1);

return init__$1;
});
sci.impl.interpreter.lookup = (function sci$impl$interpreter$lookup(p__65606,sym){
var map__65607 = p__65606;
var map__65607__$1 = cljs.core.__destructure_map(map__65607);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65607__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65607__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var or__4212__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.core.find(sci.impl.namespaces.clojure_core,sym);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = (function (){var temp__5753__auto__ = cljs.core.namespace(sym);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",ns)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cljs.core",ns)))){
return cljs.core.find(sci.impl.namespaces.clojure_core,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)));
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
if(cljs.core.truth_((function (){var G__65608 = sym;
var G__65608__$1 = (((G__65608 == null))?null:cljs.core.meta(G__65608));
if((G__65608__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","var.declared","sci.impl/var.declared",874674867).cljs$core$IFn$_invoke$arity$1(G__65608__$1);
}
})())){
return cljs.core.find(cljs.core.deref(env),sym);
} else {
return null;
}
}
}
}
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,expr){
return cljs.core.second((function (){var or__4212__auto__ = sci.impl.interpreter.lookup(ctx,expr);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var n = cljs.core.name(expr);
if(clojure.string.starts_with_QMARK_(n,"'")){
var v = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(n,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v], null);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)].join(''),expr);
}
}
})());
});
sci.impl.interpreter.parse_libspec_opts = (function sci$impl$interpreter$parse_libspec_opts(opts){
var opts_map = cljs.core.PersistentArrayMap.EMPTY;
var G__65612 = opts;
var vec__65613 = G__65612;
var seq__65614 = cljs.core.seq(vec__65613);
var first__65615 = cljs.core.first(seq__65614);
var seq__65614__$1 = cljs.core.next(seq__65614);
var opt_name = first__65615;
var first__65615__$1 = cljs.core.first(seq__65614__$1);
var seq__65614__$2 = cljs.core.next(seq__65614__$1);
var fst_opt = first__65615__$1;
var rst_opts = seq__65614__$2;
var opts_map__$1 = opts_map;
var G__65612__$1 = G__65612;
while(true){
var opts_map__$2 = opts_map__$1;
var vec__65620 = G__65612__$1;
var seq__65621 = cljs.core.seq(vec__65620);
var first__65622 = cljs.core.first(seq__65621);
var seq__65621__$1 = cljs.core.next(seq__65621);
var opt_name__$1 = first__65622;
var first__65622__$1 = cljs.core.first(seq__65621__$1);
var seq__65621__$2 = cljs.core.next(seq__65621__$1);
var fst_opt__$1 = first__65622__$1;
var rst_opts__$1 = seq__65621__$2;
if(cljs.core.not(opt_name__$1)){
return opts_map__$2;
} else {
var G__65623 = opt_name__$1;
var G__65623__$1 = (((G__65623 instanceof cljs.core.Keyword))?G__65623.fqn:null);
switch (G__65623__$1) {
case "as":
var G__65722 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts_map__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__65723 = rst_opts__$1;
opts_map__$1 = G__65722;
G__65612__$1 = G__65723;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__65724 = opts_map__$2;
var G__65725 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
opts_map__$1 = G__65724;
G__65612__$1 = G__65725;
continue;

break;
case "refer":
var G__65726 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts_map__$2,new cljs.core.Keyword(null,"refer","refer",-964295553),fst_opt__$1);
var G__65727 = rst_opts__$1;
opts_map__$1 = G__65726;
G__65612__$1 = G__65727;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65623__$1)].join('')));

}
}
break;
}
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,p__65624){
var vec__65626 = p__65624;
var seq__65627 = cljs.core.seq(vec__65626);
var first__65628 = cljs.core.first(seq__65627);
var seq__65627__$1 = cljs.core.next(seq__65627);
var lib_name = first__65628;
var opts = seq__65627__$1;
var map__65629 = sci.impl.interpreter.parse_libspec_opts(opts);
var map__65629__$1 = cljs.core.__destructure_map(map__65629);
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65629__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65629__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),(function (env){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env),lib_name);
if(cljs.core.truth_(temp__5751__auto__)){
var ns_data = temp__5751__auto__;
var env__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):env);
var env__$2 = (cljs.core.truth_(refer)?(function (){
if(cljs.core.sequential_QMARK_(refer)){
} else {
throw (new Error(":refer value must be a sequential collection of symbols"));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$2,sym){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$2,sym,(function (){var temp__5751__auto____$1 = cljs.core.find(ns_data,sym);
if(cljs.core.truth_(temp__5751__auto____$1)){
var vec__65630 = temp__5751__auto____$1;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65630,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65630,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
}),env__$1,refer);
})()
:env__$1);
return env__$2;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}));
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(ctx,expr){
var args = cljs.core.rest(expr);
return cljs.core.run_BANG_((function (p1__65637_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__65637_SHARP_);
}),args);
});
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__65638){
var vec__65639 = p__65638;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65639,(0),null);
var map__65642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65639,(1),null);
var map__65642__$1 = cljs.core.__destructure_map(map__65642);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65642__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65642__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65642__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__65643 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65643,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65643,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__65646 = ctx;
var G__65647 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65646,G__65647) : sci.impl.interpreter.interpret.call(null,G__65646,G__65647));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__65648 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__65648__$1 = cljs.core.__destructure_map(map__65648);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65648__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65648__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65648__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}catch (e65649){if((e65649 instanceof Error)){
var e = e65649;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = sci.impl.interpreter.resolve_symbol(ctx,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c));
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__65650 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__65651 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65650,G__65651) : sci.impl.interpreter.interpret.call(null,G__65650,G__65651));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__65652 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65652,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65652,(1),null);
return r;
} else {
throw e;
}
} else {
throw e65649;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});

sci.impl.interpreter.unquote_splicing_QMARK_ = (function sci$impl$interpreter$unquote_splicing_QMARK_(x){
return ((cljs.core.seq_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null),cljs.core.first(x))));
});
sci.impl.interpreter.process_seq = (function sci$impl$interpreter$process_seq(ctx,form){
var ret = (function (){var ret = cljs.core.PersistentVector.EMPTY;
var xs = form;
while(true){
if(cljs.core.seq(xs)){
var x = cljs.core.first(xs);
var uq_QMARK_ = (function (){var G__65656 = x;
var G__65656__$1 = (((G__65656 == null))?null:cljs.core.meta(G__65656));
if((G__65656__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","unquote-splicing","sci.impl/unquote-splicing",2047521727).cljs$core$IFn$_invoke$arity$1(G__65656__$1);
}
})();
var x_SINGLEQUOTE_ = (sci.impl.interpreter.walk_syntax_quote.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.walk_syntax_quote.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.walk_syntax_quote.call(null,ctx,x));
var ret__$1 = (cljs.core.truth_(uq_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(ret,x_SINGLEQUOTE_):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,x_SINGLEQUOTE_));
var G__65737 = ret__$1;
var G__65738 = cljs.core.rest(xs);
ret = G__65737;
xs = G__65738;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
})();
return ret;
});
sci.impl.interpreter.process_symbol = (function sci$impl$interpreter$process_symbol(p__65658,sym){
var map__65659 = p__65658;
var map__65659__$1 = cljs.core.__destructure_map(map__65659);
var ctx = map__65659__$1;
var gensyms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65659__$1,new cljs.core.Keyword(null,"gensyms","gensyms",248713782));
var m = cljs.core.meta(sym);
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","eval","sci.impl/eval",-210871022).cljs$core$IFn$_invoke$arity$1(m))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
} else {
if(cljs.core.truth_(cljs.core.namespace(sym))){
return sym;
} else {
var n = cljs.core.name(sym);
if(clojure.string.ends_with_QMARK_(n,"#")){
var temp__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(gensyms),sym);
if(cljs.core.truth_(temp__5751__auto__)){
var generated = temp__5751__auto__;
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,generated) : sci.impl.interpreter.interpret.call(null,ctx,generated));
} else {
var n__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(n,(0),(((n).length) - (1)));
var generated = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([n__$1,"__"].join(''));
var generated__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.name(generated),"__auto__"].join(''));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gensyms,cljs.core.assoc,sym,generated__$1);

return generated__$1;
}
} else {
return sym;
}
}
}
});
sci.impl.interpreter.walk_syntax_quote = (function sci$impl$interpreter$walk_syntax_quote(ctx,form){
if(cljs.core.list_QMARK_(form)){
var f = cljs.core.first(form);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),f)){
return (sci.impl.interpreter.eval_syntax_quote.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_syntax_quote.cljs$core$IFn$_invoke$arity$2(ctx,form) : sci.impl.interpreter.eval_syntax_quote.call(null,ctx,form));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,sci.impl.interpreter.process_seq(ctx,form));
}
} else {
if(cljs.core.seq_QMARK_(form)){
return sci.impl.interpreter.process_seq(ctx,form);
} else {
if(cljs.core.coll_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),sci.impl.interpreter.process_seq(ctx,form));
} else {
if((form instanceof cljs.core.Symbol)){
return sci.impl.interpreter.process_symbol(ctx,form);
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,form) : sci.impl.interpreter.interpret.call(null,ctx,form));

}
}
}
}
});
sci.impl.interpreter.eval_syntax_quote = (function sci$impl$interpreter$eval_syntax_quote(ctx,expr){
var gensyms = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"gensyms","gensyms",248713782),gensyms);
return sci.impl.interpreter.walk_syntax_quote(ctx__$1,cljs.core.second(expr));
});
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
if(cljs.core.empty_QMARK_(expr)){
return expr;
} else {
var f = cljs.core.first(expr);
var f__$1 = (function (){var or__4212__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),f))?new cljs.core.Symbol(null,"recur","recur",1202958259,null):null);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.interpreter.macros,f);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f));
}
}
})();
var G__65663 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__65663)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__65663)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__65663)){
return sci.impl.interpreter.eval_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__65663)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__65663)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"when","when",1064114221,null),G__65663)){
return sci.impl.interpreter.eval_when(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__65663)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__65663)){
return cljs.core.with_meta(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65661_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__65661_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__65661_SHARP_));
}),cljs.core.rest(expr)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","recur","sci.impl/recur",-1324363695),true], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__65663)){
return sci.impl.interpreter.eval_require(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__65663)){
return (new cljs.core.LazySeq(null,(function (){var G__65664 = ctx;
var G__65665 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__65664,G__65665) : sci.impl.interpreter.interpret.call(null,G__65664,G__65665));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),G__65663)){
return sci.impl.interpreter.eval_syntax_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__65663)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__65663)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
if(cljs.core.ifn_QMARK_(f__$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65662_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__65662_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__65662_SHARP_));
}),cljs.core.rest(expr)));
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
var m = cljs.core.meta(expr);
var eval_QMARK_ = new cljs.core.Keyword("sci.impl","eval","sci.impl/eval",-210871022).cljs$core$IFn$_invoke$arity$1(m);
var ret = ((cljs.core.not(eval_QMARK_))?(function (){

return expr;
})()
:(cljs.core.truth_(new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr))?sci.impl.interpreter.eval_try(ctx,expr):(cljs.core.truth_(new cljs.core.Keyword("sci","fn","sci/fn",-1175412627).cljs$core$IFn$_invoke$arity$1(expr))?sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,expr):(cljs.core.truth_(new cljs.core.Keyword("sci.impl","eval-call","sci.impl/eval-call",1503253387).cljs$core$IFn$_invoke$arity$1(m))?sci.impl.interpreter.eval_call(ctx,expr):(((expr instanceof cljs.core.Symbol))?sci.impl.interpreter.resolve_symbol(ctx,expr):((cljs.core.map_QMARK_(expr))?cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65666_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__65666_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__65666_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65667_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__65667_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__65667_SHARP_));
}),cljs.core.vals(expr))):((((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr))))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65668_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__65668_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__65668_SHARP_));
}),expr)):(function(){throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr)].join('')))})()
)))))));
var temp__5751__auto__ = new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var n = temp__5751__auto__;
return sci.impl.max_or_throw.max_or_throw(ret,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret;
}
});
sci.impl.interpreter.init_env_BANG_ = (function sci$impl$interpreter$init_env_BANG_(env,bindings,aliases,namespaces){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env,(function (env__$1){
var env_val = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env__$1,bindings], 0));
var namespaces__$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.namespaces.namespaces,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(env__$1),namespaces], 0));
var aliases__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sci.impl.namespaces.aliases,new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(env__$1),aliases], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env_val,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"aliases","aliases",1346874714),aliases__$1], 0));
}));
});
sci.impl.interpreter.presets = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"termination-safe","termination-safe",-1845225130),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deny","deny",1589338523),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"trampoline","trampoline",-71368916,null)], null),new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543),(100)], null)], null);
sci.impl.interpreter.strip_core_ns = (function sci$impl$interpreter$strip_core_ns(sym){
var G__65675 = cljs.core.namespace(sym);
switch (G__65675) {
case "clojure.core":
case "cljs.core":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));

break;
default:
return sym;

}
});
sci.impl.interpreter.process_permissions = (function sci$impl$interpreter$process_permissions(var_args){
var args__4824__auto__ = [];
var len__4818__auto___65771 = arguments.length;
var i__4819__auto___65772 = (0);
while(true){
if((i__4819__auto___65772 < len__4818__auto___65771)){
args__4824__auto__.push((arguments[i__4819__auto___65772]));

var G__65773 = (i__4819__auto___65772 + (1));
i__4819__auto___65772 = G__65773;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sci.impl.interpreter.process_permissions.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sci.impl.interpreter.process_permissions.cljs$core$IFn$_invoke$arity$variadic = (function (permissions){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cat,cljs.core.map.cljs$core$IFn$_invoke$arity$1(sci.impl.interpreter.strip_core_ns)),permissions));
}));

(sci.impl.interpreter.process_permissions.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.interpreter.process_permissions.cljs$lang$applyTo = (function (seq65676){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65676));
}));

sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__65682 = arguments.length;
switch (G__65682) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,p__65685){
var map__65686 = p__65685;
var map__65686__$1 = cljs.core.__destructure_map(map__65686);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65686__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65686__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var allow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65686__$1,new cljs.core.Keyword(null,"allow","allow",-1857325745));
var deny = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65686__$1,new cljs.core.Keyword(null,"deny","deny",1589338523));
var realize_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65686__$1,new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
var preset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65686__$1,new cljs.core.Keyword(null,"preset","preset",777387345));
var aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65686__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65686__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var preset__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.interpreter.presets,preset);
var env__$1 = (function (){var or__4212__auto__ = env;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var _ = sci.impl.interpreter.init_env_BANG_(env__$1,bindings,aliases,namespaces);
var ctx = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),sci.impl.exceptions.exception_bindings,new cljs.core.Keyword(null,"allow","allow",-1857325745),sci.impl.interpreter.process_permissions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"allow","allow",-1857325745).cljs$core$IFn$_invoke$arity$1(preset__$1),allow], 0)),new cljs.core.Keyword(null,"deny","deny",1589338523),sci.impl.interpreter.process_permissions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"deny","deny",1589338523).cljs$core$IFn$_invoke$arity$1(preset__$1),deny], 0)),new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543),(function (){var or__4212__auto__ = realize_max;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543).cljs$core$IFn$_invoke$arity$1(preset__$1);
}
})(),new cljs.core.Keyword(null,"start-expression","start-expression",411256962),s], null);
var edn_vals = sci.impl.parser.parse_string_all(s);
var ret = sci.impl.interpreter.eval_do(ctx,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),edn_vals));
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
