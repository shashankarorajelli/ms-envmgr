goog.provide('sci.impl.macros');
sci.impl.macros.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 27, [new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"doseq","doseq",221164135,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"->","->",-2139605430,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"as->","as->",1430690540,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"when","when",1064114221,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"declare","declare",654042991,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),"null",new cljs.core.Symbol(null,"loop","loop",1244978678,null),"null",new cljs.core.Symbol(null,"cond","cond",1606708055,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"for","for",316745208,null),"null",new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"comment","comment",-2122229700,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null",new cljs.core.Symbol(null,"->>","->>",-1874332161,null),"null",new cljs.core.Symbol(null,"quote*","quote*",1608011487,null),"null"], null), null);
sci.impl.macros.check_permission_BANG_ = (function sci$impl$macros$check_permission_BANG_(p__64058,check_sym,sym){
var map__64059 = p__64058;
var map__64059__$1 = cljs.core.__destructure_map(map__64059);
var allow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64059__$1,new cljs.core.Keyword(null,"allow","allow",-1857325745));
var deny = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64059__$1,new cljs.core.Keyword(null,"deny","deny",1589338523));
if((cljs.core.truth_(allow)?cljs.core.contains_QMARK_(allow,check_sym):true)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
}

if((cljs.core.truth_(deny)?cljs.core.contains_QMARK_(deny,check_sym):false)){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
} else {
return null;
}
});
sci.impl.macros.lookup_env = (function sci$impl$macros$lookup_env(env,sym,sym_ns,sym_name){
var env__$1 = cljs.core.deref(env);
var or__4212__auto__ = cljs.core.find(env__$1,sym);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.truth_(sym_ns)){
var or__4212__auto____$1 = (function (){var G__64084 = env__$1;
var G__64084__$1 = (((G__64084 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__64084));
var G__64084__$2 = (((G__64084__$1 == null))?null:(sym_ns.cljs$core$IFn$_invoke$arity$1 ? sym_ns.cljs$core$IFn$_invoke$arity$1(G__64084__$1) : sym_ns.call(null,G__64084__$1)));
if((G__64084__$2 == null)){
return null;
} else {
return cljs.core.find(G__64084__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var temp__5753__auto__ = (function (){var G__64085 = env__$1;
var G__64085__$1 = (((G__64085 == null))?null:new cljs.core.Keyword(null,"aliases","aliases",1346874714).cljs$core$IFn$_invoke$arity$1(G__64085));
if((G__64085__$1 == null)){
return null;
} else {
return (sym_ns.cljs$core$IFn$_invoke$arity$1 ? sym_ns.cljs$core$IFn$_invoke$arity$1(G__64085__$1) : sym_ns.call(null,G__64085__$1));
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var aliased = temp__5753__auto__;
var temp__5753__auto____$1 = (function (){var G__64086 = env__$1;
var G__64086__$1 = (((G__64086 == null))?null:new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(G__64086));
var G__64086__$2 = (((G__64086__$1 == null))?null:(aliased.cljs$core$IFn$_invoke$arity$1 ? aliased.cljs$core$IFn$_invoke$arity$1(G__64086__$1) : aliased.call(null,G__64086__$1)));
if((G__64086__$2 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__64086__$2,sym_name);
}
})();
if(cljs.core.truth_(temp__5753__auto____$1)){
var v = temp__5753__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(aliased),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym_name)),v], null);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
}
});
sci.impl.macros.lookup = (function sci$impl$macros$lookup(p__64095,sym){
var map__64096 = p__64095;
var map__64096__$1 = cljs.core.__destructure_map(map__64096);
var ctx = map__64096__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64096__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64096__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var sym_ns = (function (){var G__64100 = cljs.core.namespace(sym);
if((G__64100 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__64100);
}
})();
var sym_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var vec__64097 = (function (){var or__4212__auto__ = (function (){var temp__5753__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__64105 = temp__5753__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64105,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64105,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,sci.impl.utils.mark_resolve_sym(k)], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var temp__5753__auto__ = (function (){var or__4212__auto____$1 = sci.impl.macros.lookup_env(env,sym,sym_ns,sym_name);
if(cljs.core.truth_(or__4212__auto____$1)){
return or__4212__auto____$1;
} else {
var or__4212__auto____$2 = (function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.macros.macros,sym);
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4212__auto____$2)){
return or__4212__auto____$2;
} else {
var or__4212__auto____$3 = cljs.core.find(sci.impl.namespaces.clojure_core,sym);
if(cljs.core.truth_(or__4212__auto____$3)){
return or__4212__auto____$3;
} else {
var or__4212__auto____$4 = (cljs.core.truth_(sym_ns)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null),sym_ns)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),sym_ns))))?(function (){var unqualified_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var or__4212__auto____$4 = (function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.macros.macros,unqualified_sym);
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4212__auto____$4)){
return or__4212__auto____$4;
} else {
return cljs.core.find(sci.impl.namespaces.clojure_core,unqualified_sym);
}
})():null):null);
if(cljs.core.truth_(or__4212__auto____$4)){
return or__4212__auto____$4;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),sym)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,sci.impl.utils.mark_resolve_sym(sym)], null);
} else {
return null;
}
}
}
}
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var vec__64119 = temp__5753__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64119,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64119,(1),null);
var kv = vec__64119;
sci.impl.macros.check_permission_BANG_(ctx,k,sym);

return kv;
} else {
return null;
}
}
})();
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64097,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64097,(1),null);
var kv = vec__64097;
var temp__5751__auto__ = cljs.core.meta(k);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("sci","deref!","sci/deref!",153175030).cljs$core$IFn$_invoke$arity$1(m))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.deref(v)], null);
} else {
return kv;
}
} else {
return kv;
}
});
sci.impl.macros.resolve_symbol = (function sci$impl$macros$resolve_symbol(ctx,expr){
var res = cljs.core.second((function (){var or__4212__auto__ = sci.impl.macros.lookup(ctx,expr);
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
return res;
});
sci.impl.macros.expand_fn_args_PLUS_body = (function sci$impl$macros$expand_fn_args_PLUS_body(ctx,fn_name,p__64139){
var vec__64140 = p__64139;
var seq__64141 = cljs.core.seq(vec__64140);
var first__64142 = cljs.core.first(seq__64141);
var seq__64141__$1 = cljs.core.next(seq__64141);
var binding_vector = first__64142;
var body_exprs = seq__64141__$1;
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__64132_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__64132_SHARP_);
}),binding_vector);
var var_arg = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__64133_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),p1__64133_SHARP_);
}),binding_vector));
var fixed_arity = cljs.core.count(fixed_args);
var fixed_names = cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(fixed_arity,sci.impl.utils.gensym_STAR_));
var destructure_vec = cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(binding_vector,fixed_names));
var var_arg_name = (cljs.core.truth_(var_arg)?sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$0():null);
var destructure_vec__$1 = (cljs.core.truth_(var_arg)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(destructure_vec,var_arg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var_arg_name], 0)):destructure_vec);
var arg_bindings = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(fixed_names,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
var ctx__$1 = (function (){var G__64147 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge,arg_bindings);
if(cljs.core.truth_(var_arg)){
return cljs.core.assoc_in(G__64147,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),var_arg_name], null),null);
} else {
return G__64147;
}
})();
var destructured_vec = sci.impl.destructure.destructure(destructure_vec__$1);
var ctx__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge,cljs.core.zipmap(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),destructured_vec),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
var body_form = sci.impl.utils.mark_eval_call(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),null,(1),null)),(new cljs.core.List(null,destructured_vec,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64134_SHARP_){
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx__$2,p1__64134_SHARP_) : sci.impl.macros.macroexpand.call(null,ctx__$2,p1__64134_SHARP_));
}),body_exprs))], 0)))));
var arg_list = (cljs.core.truth_(var_arg)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fixed_names,new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([var_arg_name], 0)):fixed_names);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword("sci","arg-list","sci/arg-list",331954192),arg_list,new cljs.core.Keyword("sci","body","sci/body",-2048762364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_form], null),new cljs.core.Keyword("sci","fixed-arity","sci/fixed-arity",1586037288),fixed_arity,new cljs.core.Keyword("sci","destructure-vec","sci/destructure-vec",-1247261440),destructure_vec__$1,new cljs.core.Keyword("sci","fixed-names","sci/fixed-names",-947513273),fixed_names,new cljs.core.Keyword("sci","fixed-args","sci/fixed-args",1275937413),fixed_args,new cljs.core.Keyword("sci","var-arg-name","sci/var-arg-name",-1100185608),var_arg_name,new cljs.core.Keyword("sci","fn-name","sci/fn-name",-766676957),fn_name], null);
});
sci.impl.macros.expand_fn = (function sci$impl$macros$expand_fn(ctx,p__64159){
var vec__64162 = p__64159;
var seq__64163 = cljs.core.seq(vec__64162);
var first__64164 = cljs.core.first(seq__64163);
var seq__64163__$1 = cljs.core.next(seq__64163);
var _fn = first__64164;
var first__64164__$1 = cljs.core.first(seq__64163__$1);
var seq__64163__$2 = cljs.core.next(seq__64163__$1);
var name_QMARK_ = first__64164__$1;
var body = seq__64163__$2;
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var fn_name__$1 = (function (){var or__4212__auto__ = fn_name;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$1("fn");
}
})();
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var ctx__$1 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),fn_name__$1], null),null);
var arities = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64158_SHARP_){
return sci.impl.macros.expand_fn_args_PLUS_body(ctx__$1,fn_name__$1,p1__64158_SHARP_);
}),bodies));
return sci.impl.utils.mark_eval(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("sci","fn-bodies","sci/fn-bodies",1560088305),arities,new cljs.core.Keyword("sci","fn-name","sci/fn-name",-766676957),fn_name__$1,new cljs.core.Keyword("sci","fn","sci/fn",-1175412627),true], null));
});
sci.impl.macros.expand_fn_literal_body = (function sci$impl$macros$expand_fn_literal_body(ctx,expr){
var fn_body = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(expr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci","fn-bodies","sci/fn-bodies",1560088305),(0)], null));
var fixed_names = new cljs.core.Keyword("sci","fixed-names","sci/fixed-names",-947513273).cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = new cljs.core.Keyword("sci","var-arg-name","sci/var-arg-name",-1100185608).cljs$core$IFn$_invoke$arity$1(fn_body);
var bindings = (cljs.core.truth_(var_arg_name)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(fixed_names,var_arg_name):fixed_names);
var bindings__$1 = cljs.core.zipmap(bindings,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
var ctx__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.merge,bindings__$1);
return sci.impl.utils.mark_eval(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(expr,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci","fn-bodies","sci/fn-bodies",1560088305),(0),new cljs.core.Keyword("sci","body","sci/body",-2048762364),(0)], null),(function (expr__$1){
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx__$1,expr__$1) : sci.impl.macros.macroexpand.call(null,ctx__$1,expr__$1));
})));
});
sci.impl.macros.expand_let_STAR_ = (function sci$impl$macros$expand_let_STAR_(ctx,destructured_let_bindings,exprs){
var vec__64177 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__64181,p__64182){
var vec__64183 = p__64181;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64183,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64183,(1),null);
var vec__64186 = p__64182;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64186,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64186,(1),null);
var v = (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.macros.macroexpand.call(null,ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.assoc,binding_name,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64177,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64177,(1),null);
return sci.impl.utils.mark_eval_call(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"let","let",358118826,null),null,(1),null)),(new cljs.core.List(null,new_let_bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64176_SHARP_){
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx__$1,p1__64176_SHARP_) : sci.impl.macros.macroexpand.call(null,ctx__$1,p1__64176_SHARP_));
}),exprs))], 0)))));
});
/**
 * The let macro from clojure.core
 */
sci.impl.macros.expand_let = (function sci$impl$macros$expand_let(ctx,p__64192){
var vec__64193 = p__64192;
var seq__64194 = cljs.core.seq(vec__64193);
var first__64195 = cljs.core.first(seq__64194);
var seq__64194__$1 = cljs.core.next(seq__64194);
var _let = first__64195;
var first__64195__$1 = cljs.core.first(seq__64194__$1);
var seq__64194__$2 = cljs.core.next(seq__64194__$1);
var let_bindings = first__64195__$1;
var exprs = seq__64194__$2;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.macros.expand_let_STAR_(ctx,let_bindings__$1,exprs);
});
/**
 * The -> macro from clojure.core.
 */
sci.impl.macros.expand__GT_ = (function sci$impl$macros$expand__GT_(ctx,p__64210){
var vec__64217 = p__64210;
var seq__64218 = cljs.core.seq(vec__64217);
var first__64219 = cljs.core.first(seq__64218);
var seq__64218__$1 = cljs.core.next(seq__64218);
var x = first__64219;
var forms = seq__64218__$1;
var expanded = (function (){var x__$1 = x;
var forms__$1 = forms;
while(true){
if(forms__$1){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.first(form),(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)),cljs.core.next(form)),cljs.core.meta(form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__64552 = threaded;
var G__64553 = cljs.core.next(forms__$1);
x__$1 = G__64552;
forms__$1 = G__64553;
continue;
} else {
return x__$1;
}
break;
}
})();
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,expanded) : sci.impl.macros.macroexpand.call(null,ctx,expanded));
});
/**
 * The ->> macro from clojure.core.
 */
sci.impl.macros.expand__GT__GT_ = (function sci$impl$macros$expand__GT__GT_(ctx,p__64247){
var vec__64252 = p__64247;
var seq__64253 = cljs.core.seq(vec__64252);
var first__64254 = cljs.core.first(seq__64253);
var seq__64253__$1 = cljs.core.next(seq__64253);
var x = first__64254;
var forms = seq__64253__$1;
var expanded = (function (){var x__$1 = x;
var forms__$1 = forms;
while(true){
if(forms__$1){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cons(cljs.core.first(form),cljs.core.next(form)),(new cljs.core.List(null,x__$1,null,(1),null))),cljs.core.meta(form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__64562 = threaded;
var G__64563 = cljs.core.next(forms__$1);
x__$1 = G__64562;
forms__$1 = G__64563;
continue;
} else {
return x__$1;
}
break;
}
})();
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,expanded) : sci.impl.macros.macroexpand.call(null,ctx,expanded));
});
/**
 * The ->> macro from clojure.core.
 */
sci.impl.macros.expand_as__GT_ = (function sci$impl$macros$expand_as__GT_(ctx,p__64274){
var vec__64279 = p__64274;
var seq__64280 = cljs.core.seq(vec__64279);
var first__64281 = cljs.core.first(seq__64280);
var seq__64280__$1 = cljs.core.next(seq__64280);
var _as = first__64281;
var first__64281__$1 = cljs.core.first(seq__64280__$1);
var seq__64280__$2 = cljs.core.next(seq__64280__$1);
var expr = first__64281__$1;
var first__64281__$2 = cljs.core.first(seq__64280__$2);
var seq__64280__$3 = cljs.core.next(seq__64280__$2);
var name = first__64281__$2;
var forms = seq__64280__$3;
var vec__64282 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),cljs.core.butlast(forms))], 0))))),null,(1),null)),(new cljs.core.List(null,((cljs.core.empty_QMARK_(forms))?name:cljs.core.last(forms)),null,(1),null)))));
var seq__64283 = cljs.core.seq(vec__64282);
var first__64284 = cljs.core.first(seq__64283);
var seq__64283__$1 = cljs.core.next(seq__64283);
var let_bindings = first__64284;
var body = seq__64283__$1;
return sci.impl.macros.expand_let_STAR_(ctx,let_bindings,body);
});
sci.impl.macros.expand_def = (function sci$impl$macros$expand_def(ctx,p__64313){
var vec__64315 = p__64313;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64315,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64315,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64315,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64315,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.macros.macroexpand.call(null,ctx,init));
var m = (cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci","doc","sci/doc",1913179154),docstring], null):cljs.core.PersistentArrayMap.EMPTY);
var var_name__$1 = cljs.core.with_meta(var_name,m);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.assoc,var_name__$1,new cljs.core.Keyword("sci","var.unbound","sci/var.unbound",1718616093));

return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,var_name__$1,(new cljs.core.List(null,init__$1,null,(1),null)),(2),null)),(3),null)));
});
sci.impl.macros.expand_defn = (function sci$impl$macros$expand_defn(ctx,p__64321){
var vec__64324 = p__64321;
var seq__64325 = cljs.core.seq(vec__64324);
var first__64326 = cljs.core.first(seq__64325);
var seq__64325__$1 = cljs.core.next(seq__64325);
var op = first__64326;
var first__64326__$1 = cljs.core.first(seq__64325__$1);
var seq__64325__$2 = cljs.core.next(seq__64325__$1);
var fn_name = first__64326__$1;
var first__64326__$2 = cljs.core.first(seq__64325__$2);
var seq__64325__$3 = cljs.core.next(seq__64325__$2);
var docstring_QMARK_ = first__64326__$2;
var body = seq__64325__$3;
var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),op);
var docstring = ((typeof docstring_QMARK_ === 'string')?docstring_QMARK_:null);
var body__$1 = (cljs.core.truth_(docstring)?body:cljs.core.cons(docstring_QMARK_,body));
var fn_body = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn","fn",465265323,null),fn_name,body__$1);
var f = sci.impl.macros.expand_fn(ctx,fn_body);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),macro_QMARK_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.assoc,fn_name,new cljs.core.Keyword("sci","var.unbound","sci/var.unbound",1718616093));

return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,fn_name,(new cljs.core.List(null,f__$1,null,(1),null)),(2),null)),(3),null)));
});
/**
 * The comment macro from clojure.core.
 */
sci.impl.macros.expand_comment = (function sci$impl$macros$expand_comment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___64577 = arguments.length;
var i__4819__auto___64578 = (0);
while(true){
if((i__4819__auto___64578 < len__4818__auto___64577)){
args__4824__auto__.push((arguments[i__4819__auto___64578]));

var G__64581 = (i__4819__auto___64578 + (1));
i__4819__auto___64578 = G__64581;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sci.impl.macros.expand_comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sci.impl.macros.expand_comment.cljs$core$IFn$_invoke$arity$variadic = (function (_ctx,_body){
return null;
}));

(sci.impl.macros.expand_comment.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.macros.expand_comment.cljs$lang$applyTo = (function (seq64332){
var G__64333 = cljs.core.first(seq64332);
var seq64332__$1 = cljs.core.next(seq64332);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64333,seq64332__$1);
}));

sci.impl.macros.expand_loop = (function sci$impl$macros$expand_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var body = cljs.core.nnext(expr);
var G__64349 = ctx;
var G__64350 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.list,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,cljs.core.vec(arg_names),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null)),init_vals);
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(G__64349,G__64350) : sci.impl.macros.macroexpand.call(null,G__64349,G__64350));
});
sci.impl.macros.expand_lazy_seq = (function sci$impl$macros$expand_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),(new cljs.core.List(null,(function (){var G__64356 = ctx;
var G__64357 = (new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),(new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null));
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(G__64356,G__64357) : sci.impl.macros.macroexpand.call(null,G__64356,G__64357));
})(),null,(1),null)),(2),null)));
});
/**
 * The cond macro from clojure.core
 */
sci.impl.macros.expand_cond_STAR_ = (function sci$impl$macros$expand_cond_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___64590 = arguments.length;
var i__4819__auto___64591 = (0);
while(true){
if((i__4819__auto___64591 < len__4818__auto___64590)){
args__4824__auto__.push((arguments[i__4819__auto___64591]));

var G__64592 = (i__4819__auto___64591 + (1));
i__4819__auto___64591 = G__64592;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return sci.impl.macros.expand_cond_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(sci.impl.macros.expand_cond_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (clauses){
if(cljs.core.truth_(clauses)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,cljs.core.first(clauses),(new cljs.core.List(null,((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})()),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sci.impl.macros.expand_cond_STAR_,cljs.core.next(cljs.core.next(clauses))),null,(1),null)),(2),null)),(3),null)),(4),null));
} else {
return null;
}
}));

(sci.impl.macros.expand_cond_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.macros.expand_cond_STAR_.cljs$lang$applyTo = (function (seq64360){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64360));
}));

sci.impl.macros.expand_cond = (function sci$impl$macros$expand_cond(ctx,expr){
var clauses = cljs.core.rest(expr);
var G__64373 = ctx;
var G__64374 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(sci.impl.macros.expand_cond_STAR_,clauses);
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(G__64373,G__64374) : sci.impl.macros.macroexpand.call(null,G__64373,G__64374));
});
sci.impl.macros.expand_case = (function sci$impl$macros$expand_case(ctx,expr){
var v = (function (){var G__64384 = ctx;
var G__64385 = cljs.core.second(expr);
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(G__64384,G__64385) : sci.impl.macros.macroexpand.call(null,G__64384,G__64385));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64377_SHARP_){
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,p1__64377_SHARP_) : sci.impl.macros.macroexpand.call(null,ctx,p1__64377_SHARP_));
}),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),(function (){var G__64390 = ctx;
var G__64391 = cljs.core.last(clauses);
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(G__64390,G__64391) : sci.impl.macros.macroexpand.call(null,G__64390,G__64391));
})()], null):null);
var case_map = cljs.core.zipmap(match_clauses,result_clauses);
var ret = sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"case","case",-1510733573,null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"case-map","case-map",955082964),case_map,new cljs.core.Keyword(null,"case-val","case-val",880926521),v,new cljs.core.Keyword(null,"case-default","case-default",1140470708),default$], null),(new cljs.core.List(null,default$,null,(1),null)),(2),null)),(3),null)));
return sci.impl.utils.mark_eval_call(ret);
});
sci.impl.macros.expand_try = (function sci$impl$macros$expand_try(ctx,expr){
var catches = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64398_SHARP_){
return ((cljs.core.seq_QMARK_(p1__64398_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"catch","catch",-1616370245,null),cljs.core.first(p1__64398_SHARP_))));
}),expr);
var catches__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__64415 = c;
var seq__64416 = cljs.core.seq(vec__64415);
var first__64417 = cljs.core.first(seq__64416);
var seq__64416__$1 = cljs.core.next(seq__64416);
var _ = first__64417;
var first__64417__$1 = cljs.core.first(seq__64416__$1);
var seq__64416__$2 = cljs.core.next(seq__64416__$1);
var ex = first__64417__$1;
var first__64417__$2 = cljs.core.first(seq__64416__$2);
var seq__64416__$3 = cljs.core.next(seq__64416__$2);
var binding = first__64417__$2;
var body = seq__64416__$3;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),sci.impl.macros.resolve_symbol(ctx,ex),new cljs.core.Keyword(null,"binding","binding",539932593),binding,new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__64419 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),binding], null),null);
var G__64420 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(G__64419,G__64420) : sci.impl.macros.macroexpand.call(null,G__64419,G__64420));
})()], null);
}),catches);
var finally$ = (function (){var l = cljs.core.last(expr);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"finally","finally",-1065347064,null),cljs.core.first(l))){
var G__64427 = ctx;
var G__64428 = cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.rest(l));
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(G__64427,G__64428) : sci.impl.macros.macroexpand.call(null,G__64427,G__64428));
} else {
return null;
}
})();
return sci.impl.utils.mark_eval(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__64429 = ctx;
var G__64430 = cljs.core.second(expr);
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(G__64429,G__64430) : sci.impl.macros.macroexpand.call(null,G__64429,G__64430));
})(),new cljs.core.Keyword(null,"catches","catches",-1478797617),catches__$1,new cljs.core.Keyword(null,"finally","finally",1589088705),finally$], null)], null));
});
sci.impl.macros.expand_syntax_quote = (function sci$impl$macros$expand_syntax_quote(ctx,expr){
var ret = clojure.walk.prewalk((function (x){
if(cljs.core.seq_QMARK_(x)){
var G__64433 = cljs.core.first(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),G__64433)){
var G__64437 = ctx;
var G__64438 = cljs.core.second(x);
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(G__64437,G__64438) : sci.impl.macros.macroexpand.call(null,G__64437,G__64438));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null),G__64433)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2((function (){var G__64439 = ctx;
var G__64440 = cljs.core.second(x);
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(G__64439,G__64440) : sci.impl.macros.macroexpand.call(null,G__64439,G__64440));
})(),(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","unquote-splicing","sci.impl/unquote-splicing",2047521727),true);
}));
} else {
return x;

}
}
} else {
return x;
}
}),cljs.core.second(expr));
return sci.impl.utils.mark_eval_call((new cljs.core.List(null,new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),(new cljs.core.List(null,ret,null,(1),null)),(2),null)));
});
sci.impl.macros.expand_declare = (function sci$impl$macros$expand_declare(ctx,p__64447){
var vec__64449 = p__64447;
var seq__64450 = cljs.core.seq(vec__64449);
var first__64451 = cljs.core.first(seq__64450);
var seq__64450__$1 = cljs.core.next(seq__64450);
var _declare = first__64451;
var names = seq__64450__$1;
var _expr = vec__64449;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),(function (env){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.zipmap(names,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.mark_eval(n),(function (p1__64445_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__64445_SHARP_,new cljs.core.Keyword("sci.impl","var.declared","sci.impl/var.declared",874674867),true);
}));
}),names)),env], 0));
}));

return null;
});
sci.impl.macros.macroexpand_call = (function sci$impl$macros$macroexpand_call(ctx,expr){
if(cljs.core.empty_QMARK_(expr)){
return expr;
} else {
var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var f__$1 = (function (){var temp__5751__auto__ = cljs.core.namespace(f);
if(cljs.core.truth_(temp__5751__auto__)){
var ns = temp__5751__auto__;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",ns)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cljs.core",ns)))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(f));
} else {
return f;
}
} else {
return f;
}
})();
if(cljs.core.contains_QMARK_(sci.impl.macros.macros,f__$1)){
sci.impl.macros.check_permission_BANG_(ctx,f__$1,f__$1);

var G__64469 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__64469)){
return sci.impl.macros.expand_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),G__64469)){
return sci.impl.macros.expand_fn(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),G__64469)){
return sci.impl.macros.expand_defn(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"defn","defn",-126010802,null),G__64469)){
return sci.impl.macros.expand_defn(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"comment","comment",-2122229700,null),G__64469)){
return sci.impl.macros.expand_comment.cljs$core$IFn$_invoke$arity$variadic(ctx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__64469)){
return sci.impl.utils.mark_eval_call(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"loop","loop",1244978678,null),G__64469)){
return sci.impl.macros.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),G__64469)){
return sci.impl.macros.expand__GT__GT_(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"doseq","doseq",221164135,null),G__64469)){
var G__64472 = ctx;
var G__64473 = sci.impl.doseq_macro.expand_doseq(ctx,expr);
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(G__64472,G__64473) : sci.impl.macros.macroexpand.call(null,G__64472,G__64473));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__64469)){
return sci.impl.macros.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"declare","declare",654042991,null),G__64469)){
return sci.impl.macros.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),G__64469)){

return cljs.core.second(expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"for","for",316745208,null),G__64469)){
var G__64475 = ctx;
var G__64476 = sci.impl.for_macro.expand_for(ctx,expr);
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(G__64475,G__64476) : sci.impl.macros.macroexpand.call(null,G__64475,G__64476));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cond","cond",1606708055,null),G__64469)){
return sci.impl.macros.expand_cond(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__64469)){
return sci.impl.macros.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn","fn",465265323,null),G__64469)){
return sci.impl.macros.expand_fn(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__64469)){
return sci.impl.utils.mark_eval_call(cljs.core.cons(new cljs.core.Symbol(null,"require","require",1172530194,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64461_SHARP_){
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,p1__64461_SHARP_) : sci.impl.macros.macroexpand.call(null,ctx,p1__64461_SHARP_));
}),cljs.core.rest(expr))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"->","->",-2139605430,null),G__64469)){
return sci.impl.macros.expand__GT_(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"as->","as->",1430690540,null),G__64469)){
return sci.impl.macros.expand_as__GT_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__64469)){
return sci.impl.macros.expand_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),G__64469)){
return sci.impl.macros.expand_syntax_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__64469)){
return sci.impl.macros.expand_try(ctx,expr);
} else {
return sci.impl.utils.mark_eval_call(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64462_SHARP_){
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,p1__64462_SHARP_) : sci.impl.macros.macroexpand.call(null,ctx,p1__64462_SHARP_));
}),expr)));

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
}
}
}
}
}
}
}
} else {
var temp__5751__auto__ = sci.impl.macros.resolve_symbol(ctx,f__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var vf = temp__5751__auto__;
if(cljs.core.truth_(new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(vf)))){
var G__64484 = ctx;
var G__64485 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(vf,cljs.core.rest(expr));
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(G__64484,G__64485) : sci.impl.macros.macroexpand.call(null,G__64484,G__64485));
} else {
return sci.impl.utils.mark_eval_call(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64463_SHARP_){
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,p1__64463_SHARP_) : sci.impl.macros.macroexpand.call(null,ctx,p1__64463_SHARP_));
}),expr)));
}
} else {
return sci.impl.utils.mark_eval_call(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64464_SHARP_){
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,p1__64464_SHARP_) : sci.impl.macros.macroexpand.call(null,ctx,p1__64464_SHARP_));
}),expr)));
}
}
} else {
var ret = sci.impl.utils.mark_eval_call(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64465_SHARP_){
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,p1__64465_SHARP_) : sci.impl.macros.macroexpand.call(null,ctx,p1__64465_SHARP_));
}),expr)));
return ret;
}
}
});
sci.impl.macros.macroexpand = (function sci$impl$macros$macroexpand(ctx,expr){
var ret = ((sci.impl.utils.constant_QMARK_(expr))?expr:(((expr instanceof cljs.core.Symbol))?(function (){var v = sci.impl.macros.resolve_symbol(ctx,expr);
if(sci.impl.utils.kw_identical_QMARK_(new cljs.core.Keyword("sci","var.unbound","sci/var.unbound",1718616093),v)){
return null;
} else {
if(sci.impl.utils.constant_QMARK_(v)){
return v;
} else {
if(cljs.core.fn_QMARK_(v)){
return sci.impl.utils.merge_meta(v,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("sci.impl","eval","sci.impl/eval",-210871022),false], null));
} else {
return sci.impl.utils.merge_meta(v,cljs.core.meta(expr));

}
}
}
})():sci.impl.utils.merge_meta((cljs.core.truth_(new cljs.core.Keyword("sci","fn","sci/fn",-1175412627).cljs$core$IFn$_invoke$arity$1(expr))?sci.impl.macros.expand_fn_literal_body(ctx,expr):((cljs.core.map_QMARK_(expr))?sci.impl.utils.mark_eval(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64488_SHARP_){
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,p1__64488_SHARP_) : sci.impl.macros.macroexpand.call(null,ctx,p1__64488_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64489_SHARP_){
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,p1__64489_SHARP_) : sci.impl.macros.macroexpand.call(null,ctx,p1__64489_SHARP_));
}),cljs.core.vals(expr)))):((((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr))))?sci.impl.utils.mark_eval(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64490_SHARP_){
return (sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.macros.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,p1__64490_SHARP_) : sci.impl.macros.macroexpand.call(null,ctx,p1__64490_SHARP_));
}),expr))):((cljs.core.seq_QMARK_(expr))?sci.impl.macros.macroexpand_call(ctx,expr):expr
)))),cljs.core.select_keys(cljs.core.meta(expr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"col","col",-1959363084)], null)))
));
return ret;
});

//# sourceMappingURL=sci.impl.macros.js.map
