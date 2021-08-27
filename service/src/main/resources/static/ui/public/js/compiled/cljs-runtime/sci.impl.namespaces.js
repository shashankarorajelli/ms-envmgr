goog.provide('sci.impl.namespaces');
sci.impl.namespaces.macrofy = (function sci$impl$namespaces$macrofy(f){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__63610_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__63610_SHARP_,new cljs.core.Keyword("sci","macro","sci/macro",-868536151),true);
}));
});
sci.impl.namespaces.throw_STAR_ = (function sci$impl$namespaces$throw_STAR_(ex){
throw ex;
});
/**
 * dotimes from clojure.core
 */
sci.impl.namespaces.dotimes_STAR_ = (function sci$impl$namespaces$dotimes_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___63990 = arguments.length;
var i__4819__auto___63992 = (0);
while(true){
if((i__4819__auto___63992 < len__4818__auto___63990)){
args__4824__auto__.push((arguments[i__4819__auto___63992]));

var G__63993 = (i__4819__auto___63992 + (1));
i__4819__auto___63992 = G__63993;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sci.impl.namespaces.dotimes_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sci.impl.namespaces.dotimes_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (p__63639,body){
var vec__63644 = p__63639;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63644,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63644,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"n__63624__auto__","n__63624__auto__",-370259207,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","long","cljs.core/long",241154833,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"n__63624__auto__","n__63624__auto__",-370259207,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-inc","cljs.core/unchecked-inc",-501313167,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.namespaces.dotimes_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.namespaces.dotimes_STAR_.cljs$lang$applyTo = (function (seq63628){
var G__63629 = cljs.core.first(seq63628);
var seq63628__$1 = cljs.core.next(seq63628);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63629,seq63628__$1);
}));

/**
 * if-not from clojure.core
 */
sci.impl.namespaces.if_not_STAR_ = (function sci$impl$namespaces$if_not_STAR_(var_args){
var G__63674 = arguments.length;
switch (G__63674) {
case 2:
return sci.impl.namespaces.if_not_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.namespaces.if_not_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.namespaces.if_not_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (test,then){
return sci.impl.namespaces.if_not_STAR_.cljs$core$IFn$_invoke$arity$3(test,then,null);
}));

(sci.impl.namespaces.if_not_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0))));
}));

(sci.impl.namespaces.if_not_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * when-not from clojure.core
 */
sci.impl.namespaces.when_not_STAR_ = (function sci$impl$namespaces$when_not_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___64027 = arguments.length;
var i__4819__auto___64028 = (0);
while(true){
if((i__4819__auto___64028 < len__4818__auto___64027)){
args__4824__auto__.push((arguments[i__4819__auto___64028]));

var G__64029 = (i__4819__auto___64028 + (1));
i__4819__auto___64028 = G__64029;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sci.impl.namespaces.when_not_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sci.impl.namespaces.when_not_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (test,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test,(new cljs.core.List(null,null,(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(sci.impl.namespaces.when_not_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.namespaces.when_not_STAR_.cljs$lang$applyTo = (function (seq63714){
var G__63715 = cljs.core.first(seq63714);
var seq63714__$1 = cljs.core.next(seq63714);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63715,seq63714__$1);
}));

/**
 * doto from clojure.core
 */
sci.impl.namespaces.doto_STAR_ = (function sci$impl$namespaces$doto_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___64037 = arguments.length;
var i__4819__auto___64038 = (0);
while(true){
if((i__4819__auto___64038 < len__4818__auto___64037)){
args__4824__auto__.push((arguments[i__4819__auto___64038]));

var G__64039 = (i__4819__auto___64038 + (1));
i__4819__auto___64038 = G__64039;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sci.impl.namespaces.doto_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sci.impl.namespaces.doto_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gx,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return cljs.core.with_meta(((cljs.core.seq_QMARK_(f))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.first(f),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(f)], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)))))),cljs.core.meta(f));
}),forms),(new cljs.core.List(null,gx,null,(1),null))], 0))));
}));

(sci.impl.namespaces.doto_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.namespaces.doto_STAR_.cljs$lang$applyTo = (function (seq63732){
var G__63733 = cljs.core.first(seq63732);
var seq63732__$1 = cljs.core.next(seq63732);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63733,seq63732__$1);
}));

sci.impl.namespaces.cond__GT__STAR_ = (function sci$impl$namespaces$cond__GT__STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___64049 = arguments.length;
var i__4819__auto___64051 = (0);
while(true){
if((i__4819__auto___64051 < len__4818__auto___64049)){
args__4824__auto__.push((arguments[i__4819__auto___64051]));

var G__64052 = (i__4819__auto___64051 + (1));
i__4819__auto___64051 = G__64052;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sci.impl.namespaces.cond__GT__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sci.impl.namespaces.cond__GT__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63845){
var vec__63848 = p__63845;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63848,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63848,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))], 0))));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps)),null,(1),null))], 0))));
}));

(sci.impl.namespaces.cond__GT__STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.namespaces.cond__GT__STAR_.cljs$lang$applyTo = (function (seq63818){
var G__63819 = cljs.core.first(seq63818);
var seq63818__$1 = cljs.core.next(seq63818);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63819,seq63818__$1);
}));

sci.impl.namespaces.cond__GT__GT__STAR_ = (function sci$impl$namespaces$cond__GT__GT__STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___64071 = arguments.length;
var i__4819__auto___64072 = (0);
while(true){
if((i__4819__auto___64072 < len__4818__auto___64071)){
args__4824__auto__.push((arguments[i__4819__auto___64072]));

var G__64079 = (i__4819__auto___64072 + (1));
i__4819__auto___64072 = G__64079;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sci.impl.namespaces.cond__GT__GT__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sci.impl.namespaces.cond__GT__GT__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__63871){
var vec__63872 = p__63871;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63872,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63872,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))], 0))));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps)),null,(1),null))], 0))));
}));

(sci.impl.namespaces.cond__GT__GT__STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.namespaces.cond__GT__GT__STAR_.cljs$lang$applyTo = (function (seq63865){
var G__63866 = cljs.core.first(seq63865);
var seq63865__$1 = cljs.core.next(seq63865);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63866,seq63865__$1);
}));

sci.impl.namespaces.if_let_STAR_ = (function sci$impl$namespaces$if_let_STAR_(var_args){
var G__63890 = arguments.length;
switch (G__63890) {
case 2:
return sci.impl.namespaces.if_let_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___64092 = arguments.length;
var i__4819__auto___64093 = (0);
while(true){
if((i__4819__auto___64093 < len__4818__auto___64092)){
args_arr__4839__auto__.push((arguments[i__4819__auto___64093]));

var G__64094 = (i__4819__auto___64093 + (1));
i__4819__auto___64093 = G__64094;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((3)),(0),null));
return sci.impl.namespaces.if_let_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4840__auto__);

}
});

(sci.impl.namespaces.if_let_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(sci.impl.namespaces.if_let_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (bindings,then,else$,_oldform){
var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"temp__63883__auto__","temp__63883__auto__",1464546459,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__63883__auto__","temp__63883__auto__",1464546459,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__63883__auto__","temp__63883__auto__",1464546459,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(sci.impl.namespaces.if_let_STAR_.cljs$lang$applyTo = (function (seq63886){
var G__63887 = cljs.core.first(seq63886);
var seq63886__$1 = cljs.core.next(seq63886);
var G__63888 = cljs.core.first(seq63886__$1);
var seq63886__$2 = cljs.core.next(seq63886__$1);
var G__63889 = cljs.core.first(seq63886__$2);
var seq63886__$3 = cljs.core.next(seq63886__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63887,G__63888,G__63889,seq63886__$3);
}));

(sci.impl.namespaces.if_let_STAR_.cljs$lang$maxFixedArity = (3));

sci.impl.namespaces.when_let_STAR_ = (function sci$impl$namespaces$when_let_STAR_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___64108 = arguments.length;
var i__4819__auto___64109 = (0);
while(true){
if((i__4819__auto___64109 < len__4818__auto___64108)){
args__4824__auto__.push((arguments[i__4819__auto___64109]));

var G__64110 = (i__4819__auto___64109 + (1));
i__4819__auto___64109 = G__64110;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return sci.impl.namespaces.when_let_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(sci.impl.namespaces.when_let_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (bindings,body){
var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"temp__63902__auto__","temp__63902__auto__",1828838781,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__63902__auto__","temp__63902__auto__",1828838781,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__63902__auto__","temp__63902__auto__",1828838781,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.namespaces.when_let_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.namespaces.when_let_STAR_.cljs$lang$applyTo = (function (seq63903){
var G__63904 = cljs.core.first(seq63903);
var seq63903__$1 = cljs.core.next(seq63903);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63904,seq63903__$1);
}));

sci.impl.namespaces.clojure_core = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"unchecked-char","unchecked-char",1662742943,null),new cljs.core.Symbol(null,"sorted-set","sorted-set",992325424,null),new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"unchecked-byte","unchecked-byte",1091664664,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"reduce-kv","reduce-kv",1856296400,null),new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"nfirst","nfirst",-554736533,null),new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"butlast","butlast",1573039585,null),new cljs.core.Symbol(null,"partition-by","partition-by",-1329938249,null),new cljs.core.Symbol(null,"uri?","uri?",2029475116,null),new cljs.core.Symbol(null,"map-entry?","map-entry?",1140615277,null),new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),new cljs.core.Symbol(null,"into-array","into-array",-1875808354,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"unchecked-inc-int","unchecked-inc-int",1402783397,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,"partition","partition",-1479695018,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"fnext","fnext",1424835295,null),new cljs.core.Symbol(null,"bit-or","bit-or",-1144943723,null),new cljs.core.Symbol(null,"disj","disj",-1076545178,null),new cljs.core.Symbol(null,"unchecked-short","unchecked-short",27848057,null),new cljs.core.Symbol(null,"ffirst","ffirst",-694902000,null),new cljs.core.Symbol(null,"munge","munge",-174396700,null),new cljs.core.Symbol(null,"unchecked-negate-int","unchecked-negate-int",-825297602,null),new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),new cljs.core.Symbol(null,"reset!","reset!",527275632,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null),new cljs.core.Symbol(null,"select-keys","select-keys",-708556589,null),new cljs.core.Symbol(null,"reverse","reverse",752076261,null),new cljs.core.Symbol(null,"special-symbol?","special-symbol?",-731144617,null),new cljs.core.Symbol(null,"merge","merge",-163787882,null),new cljs.core.Symbol(null,"newline","newline",-864364446,null),new cljs.core.Symbol(null,"unchecked-multiply","unchecked-multiply",-1019161490,null),new cljs.core.Symbol(null,"chunked-seq?","chunked-seq?",1044846168,null),new cljs.core.Symbol(null,"random-sample","random-sample",-914181101,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"simple-ident?","simple-ident?",194189851,null),new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"bit-shift-left","bit-shift-left",-1814765981,null),new cljs.core.Symbol(null,"int","int",-100885395,null),new cljs.core.Symbol(null,"unchecked-negate","unchecked-negate",-1669067451,null),new cljs.core.Symbol(null,"unchecked-remainder-int","unchecked-remainder-int",1427188224,null),new cljs.core.Symbol(null,"byte","byte",-1970660549,null),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Symbol(null,"long-array","long-array",217579190,null),new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null),new cljs.core.Symbol(null,"unchecked-subtract","unchecked-subtract",-2137458667,null),new cljs.core.Symbol(null,"float?","float?",673884616,null),new cljs.core.Symbol(null,"second","second",1195829517,null),new cljs.core.Symbol(null,"chunk-first","chunk-first",1379046752,null),new cljs.core.Symbol(null,"unchecked-add-int","unchecked-add-int",-1821763285,null),new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"with-meta","with-meta",73674707,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"unchecked-add","unchecked-add",-2030665965,null),new cljs.core.Symbol(null,"floats","floats",513591110,null),new cljs.core.Symbol(null,"drop-while","drop-while",719206685,null),new cljs.core.Symbol(null,"bounded-count","bounded-count",1030640883,null),new cljs.core.Symbol(null,"take-while","take-while",2007268328,null),new cljs.core.Symbol(null,"sort","sort",-1700969851,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"cat","cat",182721320,null),new cljs.core.Symbol(null,"replace","replace",853943757,null),new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"keep","keep",-492807003,null),new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"bit-shift-right","bit-shift-right",884046498,null),new cljs.core.Symbol(null,"associative?","associative?",-141666771,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"chunk-next","chunk-next",-547810434,null),new cljs.core.Symbol(null,"bit-flip","bit-flip",809639606,null),new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"some-fn","some-fn",-490044165,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"unchecked-multiply-int","unchecked-multiply-int",-788546068,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"to-array","to-array",-585705189,null),new cljs.core.Symbol(null,"sorted-map","sorted-map",-521216771,null),new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"char","char",998943941,null),new cljs.core.Symbol(null,"ident?","ident?",-2061359468,null),new cljs.core.Symbol(null,"make-array","make-array",-1135103906,null),new cljs.core.Symbol(null,"chunk-buffer","chunk-buffer",789680287,null),new cljs.core.Symbol(null,"peek","peek",1349135202,null),new cljs.core.Symbol(null,"hash-unordered-coll","hash-unordered-coll",-240471618,null),new cljs.core.Symbol(null,"clj->js","clj->js",-1880244676,null),new cljs.core.Symbol(null,"sequence","sequence",-1727628355,null),new cljs.core.Symbol(null,"group-by","group-by",1261391725,null),new cljs.core.Symbol(null,"re-seq","re-seq",-2105554076,null),new cljs.core.Symbol(null,"unchecked-subtract-int","unchecked-subtract-int",-1899147615,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"vary-meta","vary-meta",-1580067831,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"keep-indexed","keep-indexed",-2020916352,null),new cljs.core.Symbol(null,"js-obj","js-obj",342383250,null),new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"bit-set","bit-set",-910710655,null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"char?","char?",-1072221244,null),new cljs.core.Symbol(null,"interleave","interleave",165488106,null),new cljs.core.Symbol(null,"split-at","split-at",-60953742,null),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),new cljs.core.Symbol(null,"drop-last","drop-last",-1123611530,null),new cljs.core.Symbol(null,"fnil","fnil",-187395162,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null),new cljs.core.Symbol(null,"next","next",1522830042,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"unchecked-double","unchecked-double",-1593778036,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"chunk-cons","chunk-cons",433801405,null),new cljs.core.Symbol(null,"js->clj","js->clj",1544462432,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"rand-int","rand-int",-495012157,null),new cljs.core.Symbol(null,"complement","complement",-913606051,null),new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Symbol(null,"aget","aget",1491056546,null),new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"chars","chars",545901210,null),new cljs.core.Symbol(null,"iterate","iterate",694501410,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Symbol(null,"hash-map","hash-map",-439030950,null),new cljs.core.Symbol(null,"unchecked-inc","unchecked-inc",-1170131490,null),new cljs.core.Symbol(null,"max-key","max-key",-2132814732,null),new cljs.core.Symbol(null,"qualified-ident?","qualified-ident?",-928894763,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Symbol(null,"reversible?","reversible?",314107817,null),new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"subvec","subvec",364611032,null),new cljs.core.Symbol(null,"not-every?","not-every?",-729672558,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"ex-data","ex-data",1331491268,null),new cljs.core.Symbol(null,"compare","compare",1109853757,null),new cljs.core.Symbol(null,"transduce","transduce",-2083619734,null),new cljs.core.Symbol(null,"range","range",-1014743483,null),new cljs.core.Symbol(null,"sorted?","sorted?",892797714,null),new cljs.core.Symbol(null,"frequencies","frequencies",1757430425,null),new cljs.core.Symbol(null,"cycle","cycle",-1944070485,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"into","into",1489695498,null),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"unsigned-bit-shift-right","unsigned-bit-shift-right",-1953076601,null),new cljs.core.Symbol(null,"pr-str","pr-str",-2066912145,null),new cljs.core.Symbol(null,"chunk","chunk",449371907,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"ensure-reduced","ensure-reduced",-1606421005,null),new cljs.core.Symbol(null,"object-array","object-array",206434647,null),new cljs.core.Symbol(null,"juxt","juxt",671085604,null),new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.Symbol(null,"interpose","interpose",-2078295140,null),new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"list*","list*",765415731,null),new cljs.core.Symbol(null,"subseq","subseq",-1558995241,null),new cljs.core.Symbol(null,"completing","completing",565832990,null),new cljs.core.Symbol(null,"unchecked-divide-int","unchecked-divide-int",1613116468,null),new cljs.core.Symbol(null,"shuffle","shuffle",-1393023609,null),new cljs.core.Symbol(null,"longs","longs",-1017696020,null),new cljs.core.Symbol(null,"unchecked-int","unchecked-int",1672898125,null),new cljs.core.Symbol(null,"nthrest","nthrest",1219890118,null),new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null),new cljs.core.Symbol(null,"nnext","nnext",-2065435598,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),new cljs.core.Symbol(null,"comparator","comparator",-509539107,null),new cljs.core.Symbol(null,"take-last","take-last",-41013151,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"bit-xor","bit-xor",-1334295033,null),new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"chunk-append","chunk-append",-1447349559,null),new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"re-pattern","re-pattern",1047705161,null),new cljs.core.Symbol(null,"repeat","repeat",-1821743682,null),new cljs.core.Symbol(null,"reduce","reduce",1358839360,null),new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"constantly","constantly",-271143939,null),new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"get","get",-971253014,null),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"bit-and-not","bit-and-not",-254338837,null),new cljs.core.Symbol(null,"mapcat","mapcat",-601348859,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"empty","empty",-1886564811,null),new cljs.core.Symbol(null,"counted?","counted?",1703071664,null),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Symbol(null,"alength","alength",-1268305401,null),new cljs.core.Symbol(null,"filterv","filterv",1977739179,null),new cljs.core.Symbol(null,"reductions","reductions",549963952,null),new cljs.core.Symbol(null,"booleans","booleans",756846088,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"reduced","reduced",-1189224808,null),new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"bit-and","bit-and",-479352589,null),new cljs.core.Symbol(null,"unreduced","unreduced",780976083,null),new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"partition-all","partition-all",-1985005385,null),new cljs.core.Symbol(null,"bit-not","bit-not",1508529851,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"trampoline","trampoline",-71368916,null),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),new cljs.core.Symbol(null,"re-matches","re-matches",-1865705768,null),new cljs.core.Symbol(null,"boolean?","boolean?",1790940868,null),new cljs.core.Symbol(null,"every-pred","every-pred",-1346958247,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.Symbol(null,"list","list",-1889078086,null),new cljs.core.Symbol(null,"sorted-set-by","sorted-set-by",899099765,null),new cljs.core.Symbol(null,"nthnext","nthnext",1677356670,null),new cljs.core.Symbol(null,"eduction","eduction",1445227968,null),new cljs.core.Symbol(null,"rand-nth","rand-nth",-1227719931,null),new cljs.core.Symbol(null,"partial","partial",1881673272,null),new cljs.core.Symbol(null,"rsubseq","rsubseq",-710070471,null),new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"shorts","shorts",107738238,null),new cljs.core.Symbol(null,"hash-set","hash-set",-1145168432,null),new cljs.core.Symbol(null,"take","take",871646627,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"split-with","split-with",1853047034,null),new cljs.core.Symbol(null,"vec","vec",982683596,null),new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"subs","subs",1453849536,null),new cljs.core.Symbol(null,"symbol","symbol",601958831,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"throw","throw",595905694,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"reduced?","reduced?",1361797384,null),new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"bytes","bytes",-1478569089,null),new cljs.core.Symbol(null,"unchecked-float","unchecked-float",1485658216,null),new cljs.core.Symbol(null,"bit-test","bit-test",543456753,null),new cljs.core.Symbol(null,"sorted-map-by","sorted-map-by",218894812,null),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Symbol(null,"rseq","rseq",-1719353554,null),new cljs.core.Symbol(null,"unchecked-long","unchecked-long",1306610949,null),new cljs.core.Symbol(null,"double","double",-1769548886,null),new cljs.core.Symbol(null,"tree-seq","tree-seq",-1800921632,null),new cljs.core.Symbol(null,"seqable?","seqable?",72462495,null),new cljs.core.Symbol(null,"swap!","swap!",-655677516,null),new cljs.core.Symbol(null,"array-map","array-map",1555038968,null),new cljs.core.Symbol(null,"dedupe","dedupe",-461856254,null),new cljs.core.Symbol(null,"short","short",-725675253,null),new cljs.core.Symbol(null,"update","update",-1608859373,null),new cljs.core.Symbol(null,"filter","filter",691993593,null),new cljs.core.Symbol(null,"unchecked-dec-int","unchecked-dec-int",1339067442,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"pop","pop",-94247249,null),new cljs.core.Symbol(null,"merge-with","merge-with",1025434534,null),new cljs.core.Symbol(null,"long","long",1469079434,null),new cljs.core.Symbol(null,"flatten","flatten",-1441633353,null),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Symbol(null,"map-indexed","map-indexed",-1391025435,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Symbol(null,"gensym","gensym",-1693147401,null),new cljs.core.Symbol(null,"add-watch","add-watch",1389887634,null),new cljs.core.Symbol(null,"not-any?","not-any?",-2114707554,null),new cljs.core.Symbol(null,"take-nth","take-nth",1378204353,null),new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"chunk-rest","chunk-rest",-1853526420,null),new cljs.core.Symbol(null,"int-array","int-array",459176616,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),new cljs.core.Symbol(null,"ints","ints",-1761239845,null),new cljs.core.Symbol(null,"identical?","identical?",-745864205,null),new cljs.core.Symbol(null,"indexed?","indexed?",1234610384,null),new cljs.core.Symbol(null,"min-key","min-key",246826648,null),new cljs.core.Symbol(null,"repeatedly","repeatedly",1199964457,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"remove","remove",1509103113,null),new cljs.core.Symbol(null,"re-find","re-find",1143444147,null)],[cljs.core.unchecked_char,cljs.core.sorted_set,cljs.core.true_QMARK_,cljs.core.unchecked_byte,sci.impl.namespaces.macrofy(sci.impl.namespaces.doto_STAR_),cljs.core.reduce_kv,cljs.core.update_in,cljs.core.nfirst,cljs.core.sort_by,cljs.core.keys,cljs.core.first,cljs.core.butlast,cljs.core.partition_by,cljs.core.uri_QMARK_,cljs.core.map_entry_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.into_array,cljs.core.rest,cljs.core.seq,cljs.core.unchecked_inc_int,cljs.core.odd_QMARK_,cljs.core.partition,cljs.core._GT__EQ_,cljs.core.fnext,cljs.core.bit_or,cljs.core.disj,cljs.core.unchecked_short,cljs.core.ffirst,cljs.core.munge,cljs.core.unchecked_negate_int,cljs.core.uuid_QMARK_,cljs.core.reset_BANG_,cljs.core.atom,cljs.core.select_keys,cljs.core.reverse,cljs.core.special_symbol_QMARK_,cljs.core.merge,cljs.core.newline,cljs.core.unchecked_multiply,cljs.core.chunked_seq_QMARK_,cljs.core.random_sample,cljs.core._GT_,cljs.core.count,cljs.core.simple_ident_QMARK_,cljs.core.last,cljs.core.bit_shift_left,cljs.core.int$,cljs.core.unchecked_negate,cljs.core.unchecked_remainder_int,cljs.core.byte$,cljs.core.int_QMARK_,cljs.core.long_array,cljs.core.find,cljs.core.vals,cljs.core.nil_QMARK_,cljs.core.hash,cljs.core.unchecked_subtract,cljs.core.float_QMARK_,cljs.core.second,cljs.core.chunk_first,cljs.core.unchecked_add_int,cljs.core.ex_info,cljs.core.inc,cljs.core._SLASH_,cljs.core.with_meta,cljs.core.map_QMARK_,cljs.core.vector_QMARK_,cljs.core.quot,cljs.core.unchecked_add,cljs.core.floats,cljs.core.drop_while,cljs.core.bounded_count,cljs.core.take_while,cljs.core.sort,cljs.core.false_QMARK_,cljs.core.cat,cljs.core.replace,cljs.core.drop,cljs.core.not,cljs.core.keep,cljs.core.cons,cljs.core.bit_shift_right,cljs.core.associative_QMARK_,sci.impl.namespaces.macrofy(sci.impl.namespaces.if_not_STAR_),cljs.core.chunk_next,cljs.core.bit_flip,cljs.core.aset,cljs.core.some_fn,sci.impl.namespaces.macrofy(sci.impl.namespaces.when_not_STAR_),cljs.core.unchecked_multiply_int,cljs.core.identity,cljs.core.to_array,cljs.core.sorted_map,cljs.core.concat,cljs.core.char$,cljs.core.ident_QMARK_,cljs.core.make_array,cljs.core.chunk_buffer,cljs.core.peek,cljs.core.hash_unordered_coll,cljs.core.clj__GT_js,cljs.core.sequence,cljs.core.group_by,cljs.core.re_seq,cljs.core.unchecked_subtract_int,cljs.core._LT__EQ_,cljs.core.vary_meta,cljs.core._EQ_,cljs.core.keep_indexed,cljs.core.js_obj,cljs.core.every_QMARK_,cljs.core.comp,cljs.core.bit_set,cljs.core.dissoc,cljs.core.min,cljs.core.char_QMARK_,cljs.core.interleave,cljs.core.split_at,cljs.core.neg_int_QMARK_,cljs.core.mapv,cljs.core.drop_last,cljs.core.fnil,sci.impl.namespaces.macrofy(sci.impl.namespaces.cond__GT__GT__STAR_),cljs.core.next,cljs.core._PLUS_,cljs.core.name,cljs.core.unchecked_double,sci.impl.namespaces.macrofy(sci.impl.namespaces.when_let_STAR_),cljs.core.symbol_QMARK_,cljs.core.chunk_cons,cljs.core.js__GT_clj,sci.impl.namespaces.macrofy(sci.impl.namespaces.dotimes_STAR_),cljs.core.rand_int,cljs.core.complement,cljs.core.list_QMARK_,cljs.core.aget,cljs.core.zipmap,cljs.core._EQ__EQ_,cljs.core.chars,cljs.core.iterate,cljs.core.boolean$,cljs.core.hash_map,cljs.core.unchecked_inc,cljs.core.max_key,cljs.core.qualified_ident_QMARK_,cljs.core.coll_QMARK_,cljs.core.reversible_QMARK_,cljs.core.apply,cljs.core.subvec,cljs.core.not_every_QMARK_,cljs.core.keyword_QMARK_,cljs.core.ex_data,cljs.core.compare,cljs.core.transduce,cljs.core.range,cljs.core.sorted_QMARK_,cljs.core.frequencies,cljs.core.cycle,cljs.core.max,cljs.core.simple_symbol_QMARK_,cljs.core.empty_QMARK_,cljs.core.into,cljs.core.integer_QMARK_,cljs.core._STAR_,cljs.core.unsigned_bit_shift_right,cljs.core.pr_str,cljs.core.chunk,cljs.core.distinct,cljs.core.ensure_reduced,cljs.core.object_array,cljs.core.juxt,cljs.core.some,cljs.core.interpose,cljs.core.get_in,cljs.core.meta,cljs.core.val,cljs.core.assoc_in,cljs.core.zero_QMARK_,cljs.core.list_STAR_,cljs.core.subseq,cljs.core.completing,cljs.core.unchecked_divide_int,cljs.core.shuffle,cljs.core.longs,cljs.core.unchecked_int,cljs.core.nthrest,cljs.core.doubles,cljs.core.nnext,cljs.core.dec,cljs.core.qualified_keyword_QMARK_,cljs.core.comparator,cljs.core.take_last,cljs.core.string_QMARK_,cljs.core.bit_xor,cljs.core.map,cljs.core.float$,cljs.core.chunk_append,cljs.core.deref,cljs.core.re_pattern,cljs.core.repeat,cljs.core.reduce,cljs.core.qualified_symbol_QMARK_,cljs.core.vector,cljs.core.not_EQ_,cljs.core.constantly,cljs.core.seq_QMARK_,cljs.core.get,cljs.core.key,cljs.core.bit_and_not,cljs.core.mapcat,sci.impl.namespaces.macrofy(sci.impl.namespaces.cond__GT__STAR_),cljs.core.nat_int_QMARK_,cljs.core.str,cljs.core.empty,cljs.core.counted_QMARK_,cljs.core.set_QMARK_,cljs.core.alength,cljs.core.filterv,cljs.core.reductions,cljs.core.booleans,cljs.core._LT_,cljs.core.reduced,cljs.core.keyword,cljs.core._,cljs.core.bit_and,cljs.core.unreduced,cljs.core.assoc,cljs.core.partition_all,cljs.core.bit_not,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.trampoline,cljs.core.rand,cljs.core.re_matches,cljs.core.boolean_QMARK_,cljs.core.every_pred,cljs.core.sequential_QMARK_,cljs.core.list,cljs.core.sorted_set_by,cljs.core.nthnext,cljs.core.eduction,cljs.core.rand_nth,cljs.core.partial,cljs.core.rsubseq,cljs.core.contains_QMARK_,cljs.core.shorts,cljs.core.hash_set,cljs.core.take,sci.impl.namespaces.macrofy(sci.impl.namespaces.if_let_STAR_),cljs.core.split_with,cljs.core.vec,cljs.core.nth,cljs.core.subs,cljs.core.symbol,cljs.core.mod,sci.impl.namespaces.throw_STAR_,cljs.core.number_QMARK_,cljs.core.reduced_QMARK_,cljs.core.conj,cljs.core.bytes,cljs.core.unchecked_float,cljs.core.bit_test,cljs.core.sorted_map_by,cljs.core.double_QMARK_,cljs.core.rseq,cljs.core.unchecked_long,cljs.core.double$,cljs.core.tree_seq,cljs.core.seqable_QMARK_,cljs.core.swap_BANG_,cljs.core.array_map,cljs.core.dedupe,cljs.core.short$,cljs.core.update,cljs.core.filter,cljs.core.unchecked_dec_int,cljs.core.rem,cljs.core.pop,cljs.core.merge_with,cljs.core.long$,cljs.core.flatten,cljs.core.distinct_QMARK_,cljs.core.map_indexed,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,cljs.core.gensym,cljs.core.add_watch,cljs.core.not_any_QMARK_,cljs.core.take_nth,cljs.core.not_empty,cljs.core.chunk_rest,cljs.core.int_array,cljs.core.pos_int_QMARK_,cljs.core.ints,cljs.core.identical_QMARK_,cljs.core.indexed_QMARK_,cljs.core.min_key,cljs.core.repeatedly,cljs.core.set,cljs.core.remove,cljs.core.re_find]);
sci.impl.namespaces.namespaces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"split","split",1041096409,null),new cljs.core.Symbol(null,"index-of","index-of",1275975485,null),new cljs.core.Symbol(null,"trimr","trimr",-1739157155,null),new cljs.core.Symbol(null,"upper-case","upper-case",1427515769,null),new cljs.core.Symbol(null,"lower-case","lower-case",1428172944,null),new cljs.core.Symbol(null,"reverse","reverse",752076261,null),new cljs.core.Symbol(null,"ends-with?","ends-with?",-346570208,null),new cljs.core.Symbol(null,"split-lines","split-lines",777513935,null),new cljs.core.Symbol(null,"last-index-of","last-index-of",215608200,null),new cljs.core.Symbol(null,"trim-newline","trim-newline",656815794,null),new cljs.core.Symbol(null,"blank?","blank?",1891979743,null),new cljs.core.Symbol(null,"replace","replace",853943757,null),new cljs.core.Symbol(null,"join","join",881669637,null),new cljs.core.Symbol(null,"trim","trim",-1880116002,null),new cljs.core.Symbol(null,"starts-with?","starts-with?",1014173927,null),new cljs.core.Symbol(null,"triml","triml",-286546306,null),new cljs.core.Symbol(null,"escape","escape",648929575,null),new cljs.core.Symbol(null,"includes?","includes?",-2049283381,null),new cljs.core.Symbol(null,"capitalize","capitalize",-2143275164,null),new cljs.core.Symbol(null,"replace-first","replace-first",-943534331,null)],[clojure.string.split,clojure.string.index_of,clojure.string.trimr,clojure.string.upper_case,clojure.string.lower_case,clojure.string.reverse,clojure.string.ends_with_QMARK_,clojure.string.split_lines,clojure.string.last_index_of,clojure.string.trim_newline,clojure.string.blank_QMARK_,clojure.string.replace,clojure.string.join,clojure.string.trim,clojure.string.starts_with_QMARK_,clojure.string.triml,clojure.string.escape,clojure.string.includes_QMARK_,clojure.string.capitalize,clojure.string.replace_first]),new cljs.core.Symbol(null,"clojure.set","clojure.set",-630955632,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"project","project",-1530041190,null),new cljs.core.Symbol(null,"map-invert","map-invert",1258886340,null),new cljs.core.Symbol(null,"select","select",-1506602266,null),new cljs.core.Symbol(null,"superset?","superset?",2074872204,null),new cljs.core.Symbol(null,"join","join",881669637,null),new cljs.core.Symbol(null,"union","union",-511498270,null),new cljs.core.Symbol(null,"rename","rename",-1146278156,null),new cljs.core.Symbol(null,"subset?","subset?",1551079215,null),new cljs.core.Symbol(null,"difference","difference",-738334373,null),new cljs.core.Symbol(null,"intersection","intersection",-650544759,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"rename-keys","rename-keys",355340888,null)],[clojure.set.project,clojure.set.map_invert,clojure.set.select,clojure.set.superset_QMARK_,clojure.set.join,clojure.set.union,clojure.set.rename,clojure.set.subset_QMARK_,clojure.set.difference,clojure.set.intersection,clojure.set.index,clojure.set.rename_keys])], null);
sci.impl.namespaces.aliases = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"clojure.string","clojure.string",-1415552165,null),new cljs.core.Symbol(null,"set","set",1945134081,null),new cljs.core.Symbol(null,"clojure.set","clojure.set",-630955632,null)], null);

//# sourceMappingURL=sci.impl.namespaces.js.map
