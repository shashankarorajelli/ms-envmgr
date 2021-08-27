goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__61193){
var map__61194 = p__61193;
var map__61194__$1 = cljs.core.__destructure_map(map__61194);
var m = map__61194__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61194__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61194__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__61200_61442 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61201_61443 = null;
var count__61202_61444 = (0);
var i__61203_61445 = (0);
while(true){
if((i__61203_61445 < count__61202_61444)){
var f_61452 = chunk__61201_61443.cljs$core$IIndexed$_nth$arity$2(null,i__61203_61445);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61452], 0));


var G__61455 = seq__61200_61442;
var G__61456 = chunk__61201_61443;
var G__61457 = count__61202_61444;
var G__61458 = (i__61203_61445 + (1));
seq__61200_61442 = G__61455;
chunk__61201_61443 = G__61456;
count__61202_61444 = G__61457;
i__61203_61445 = G__61458;
continue;
} else {
var temp__5753__auto___61459 = cljs.core.seq(seq__61200_61442);
if(temp__5753__auto___61459){
var seq__61200_61463__$1 = temp__5753__auto___61459;
if(cljs.core.chunked_seq_QMARK_(seq__61200_61463__$1)){
var c__4638__auto___61464 = cljs.core.chunk_first(seq__61200_61463__$1);
var G__61466 = cljs.core.chunk_rest(seq__61200_61463__$1);
var G__61467 = c__4638__auto___61464;
var G__61468 = cljs.core.count(c__4638__auto___61464);
var G__61469 = (0);
seq__61200_61442 = G__61466;
chunk__61201_61443 = G__61467;
count__61202_61444 = G__61468;
i__61203_61445 = G__61469;
continue;
} else {
var f_61470 = cljs.core.first(seq__61200_61463__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61470], 0));


var G__61471 = cljs.core.next(seq__61200_61463__$1);
var G__61472 = null;
var G__61473 = (0);
var G__61474 = (0);
seq__61200_61442 = G__61471;
chunk__61201_61443 = G__61472;
count__61202_61444 = G__61473;
i__61203_61445 = G__61474;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_61475 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_61475], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_61475)))?cljs.core.second(arglists_61475):arglists_61475)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__61216_61481 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61217_61482 = null;
var count__61218_61483 = (0);
var i__61219_61484 = (0);
while(true){
if((i__61219_61484 < count__61218_61483)){
var vec__61230_61485 = chunk__61217_61482.cljs$core$IIndexed$_nth$arity$2(null,i__61219_61484);
var name_61486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61230_61485,(0),null);
var map__61233_61487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61230_61485,(1),null);
var map__61233_61488__$1 = cljs.core.__destructure_map(map__61233_61487);
var doc_61489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61233_61488__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61233_61488__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61486], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61490], 0));

if(cljs.core.truth_(doc_61489)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61489], 0));
} else {
}


var G__61491 = seq__61216_61481;
var G__61492 = chunk__61217_61482;
var G__61493 = count__61218_61483;
var G__61494 = (i__61219_61484 + (1));
seq__61216_61481 = G__61491;
chunk__61217_61482 = G__61492;
count__61218_61483 = G__61493;
i__61219_61484 = G__61494;
continue;
} else {
var temp__5753__auto___61495 = cljs.core.seq(seq__61216_61481);
if(temp__5753__auto___61495){
var seq__61216_61496__$1 = temp__5753__auto___61495;
if(cljs.core.chunked_seq_QMARK_(seq__61216_61496__$1)){
var c__4638__auto___61498 = cljs.core.chunk_first(seq__61216_61496__$1);
var G__61502 = cljs.core.chunk_rest(seq__61216_61496__$1);
var G__61503 = c__4638__auto___61498;
var G__61504 = cljs.core.count(c__4638__auto___61498);
var G__61505 = (0);
seq__61216_61481 = G__61502;
chunk__61217_61482 = G__61503;
count__61218_61483 = G__61504;
i__61219_61484 = G__61505;
continue;
} else {
var vec__61237_61506 = cljs.core.first(seq__61216_61496__$1);
var name_61507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61237_61506,(0),null);
var map__61240_61508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61237_61506,(1),null);
var map__61240_61509__$1 = cljs.core.__destructure_map(map__61240_61508);
var doc_61510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61240_61509__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61240_61509__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_61507], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_61511], 0));

if(cljs.core.truth_(doc_61510)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_61510], 0));
} else {
}


var G__61512 = cljs.core.next(seq__61216_61496__$1);
var G__61513 = null;
var G__61514 = (0);
var G__61515 = (0);
seq__61216_61481 = G__61512;
chunk__61217_61482 = G__61513;
count__61218_61483 = G__61514;
i__61219_61484 = G__61515;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__61249 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__61250 = null;
var count__61251 = (0);
var i__61252 = (0);
while(true){
if((i__61252 < count__61251)){
var role = chunk__61250.cljs$core$IIndexed$_nth$arity$2(null,i__61252);
var temp__5753__auto___61516__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___61516__$1)){
var spec_61518 = temp__5753__auto___61516__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61518)], 0));
} else {
}


var G__61519 = seq__61249;
var G__61520 = chunk__61250;
var G__61521 = count__61251;
var G__61522 = (i__61252 + (1));
seq__61249 = G__61519;
chunk__61250 = G__61520;
count__61251 = G__61521;
i__61252 = G__61522;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__61249);
if(temp__5753__auto____$1){
var seq__61249__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__61249__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__61249__$1);
var G__61523 = cljs.core.chunk_rest(seq__61249__$1);
var G__61524 = c__4638__auto__;
var G__61525 = cljs.core.count(c__4638__auto__);
var G__61526 = (0);
seq__61249 = G__61523;
chunk__61250 = G__61524;
count__61251 = G__61525;
i__61252 = G__61526;
continue;
} else {
var role = cljs.core.first(seq__61249__$1);
var temp__5753__auto___61527__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___61527__$2)){
var spec_61532 = temp__5753__auto___61527__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_61532)], 0));
} else {
}


var G__61533 = cljs.core.next(seq__61249__$1);
var G__61534 = null;
var G__61535 = (0);
var G__61536 = (0);
seq__61249 = G__61533;
chunk__61250 = G__61534;
count__61251 = G__61535;
i__61252 = G__61536;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__61540 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__61541 = cljs.core.ex_cause(t);
via = G__61540;
t = G__61541;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__61302 = datafied_throwable;
var map__61302__$1 = cljs.core.__destructure_map(map__61302);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61302__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61302__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61302__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__61303 = cljs.core.last(via);
var map__61303__$1 = cljs.core.__destructure_map(map__61303);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61303__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61303__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61303__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__61304 = data;
var map__61304__$1 = cljs.core.__destructure_map(map__61304);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61304__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61304__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61304__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__61305 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__61305__$1 = cljs.core.__destructure_map(map__61305);
var top_data = map__61305__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61305__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__61335 = phase;
var G__61335__$1 = (((G__61335 instanceof cljs.core.Keyword))?G__61335.fqn:null);
switch (G__61335__$1) {
case "read-source":
var map__61336 = data;
var map__61336__$1 = cljs.core.__destructure_map(map__61336);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61336__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61336__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__61337 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__61337__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61337,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61337);
var G__61337__$2 = (cljs.core.truth_((function (){var fexpr__61339 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61339.cljs$core$IFn$_invoke$arity$1 ? fexpr__61339.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61339.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61337__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61337__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61337__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61337__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__61340 = top_data;
var G__61340__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61340,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61340);
var G__61340__$2 = (cljs.core.truth_((function (){var fexpr__61349 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61349.cljs$core$IFn$_invoke$arity$1 ? fexpr__61349.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61349.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61340__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61340__$1);
var G__61340__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61340__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61340__$2);
var G__61340__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61340__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61340__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61340__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61340__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__61350 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61350,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61350,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61350,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61350,(3),null);
var G__61357 = top_data;
var G__61357__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61357,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__61357);
var G__61357__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61357__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__61357__$1);
var G__61357__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61357__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__61357__$2);
var G__61357__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61357__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61357__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61357__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61357__$4;
}

break;
case "execution":
var vec__61377 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61377,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61377,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61377,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61377,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__61287_SHARP_){
var or__4212__auto__ = (p1__61287_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__61384 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61384.cljs$core$IFn$_invoke$arity$1 ? fexpr__61384.cljs$core$IFn$_invoke$arity$1(p1__61287_SHARP_) : fexpr__61384.call(null,p1__61287_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__61389 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__61389__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61389,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__61389);
var G__61389__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61389__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61389__$1);
var G__61389__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61389__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__61389__$2);
var G__61389__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61389__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__61389__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61389__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61389__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61335__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__61394){
var map__61395 = p__61394;
var map__61395__$1 = cljs.core.__destructure_map(map__61395);
var triage_data = map__61395__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61395__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61395__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61395__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61395__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61395__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61395__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61395__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61395__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__61397 = phase;
var G__61397__$1 = (((G__61397 instanceof cljs.core.Keyword))?G__61397.fqn:null);
switch (G__61397__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__61399 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__61400 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61401 = loc;
var G__61402 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61405_61564 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61406_61565 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61407_61566 = true;
var _STAR_print_fn_STAR__temp_val__61408_61567 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61407_61566);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61408_61567);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61392_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61392_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61406_61565);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61405_61564);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61399,G__61400,G__61401,G__61402) : format.call(null,G__61399,G__61400,G__61401,G__61402));

break;
case "macroexpansion":
var G__61410 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__61411 = cause_type;
var G__61412 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61413 = loc;
var G__61414 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61410,G__61411,G__61412,G__61413,G__61414) : format.call(null,G__61410,G__61411,G__61412,G__61413,G__61414));

break;
case "compile-syntax-check":
var G__61415 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__61416 = cause_type;
var G__61417 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61418 = loc;
var G__61419 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61415,G__61416,G__61417,G__61418,G__61419) : format.call(null,G__61415,G__61416,G__61417,G__61418,G__61419));

break;
case "compilation":
var G__61421 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__61422 = cause_type;
var G__61423 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61424 = loc;
var G__61425 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61421,G__61422,G__61423,G__61424,G__61425) : format.call(null,G__61421,G__61422,G__61423,G__61424,G__61425));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__61427 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__61428 = symbol;
var G__61429 = loc;
var G__61430 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61431_61575 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61432_61576 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61433_61577 = true;
var _STAR_print_fn_STAR__temp_val__61434_61578 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61433_61577);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61434_61578);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61393_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61393_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61432_61576);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61431_61575);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61427,G__61428,G__61429,G__61430) : format.call(null,G__61427,G__61428,G__61429,G__61430));
} else {
var G__61437 = "Execution error%s at %s(%s).\n%s\n";
var G__61438 = cause_type;
var G__61439 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61440 = loc;
var G__61441 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61437,G__61438,G__61439,G__61440,G__61441) : format.call(null,G__61437,G__61438,G__61439,G__61440,G__61441));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61397__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
