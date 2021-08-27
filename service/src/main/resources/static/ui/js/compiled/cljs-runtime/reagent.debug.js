goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__49611__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49611 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49612__i = 0, G__49612__a = new Array(arguments.length -  0);
while (G__49612__i < G__49612__a.length) {G__49612__a[G__49612__i] = arguments[G__49612__i + 0]; ++G__49612__i;}
  args = new cljs.core.IndexedSeq(G__49612__a,0,null);
} 
return G__49611__delegate.call(this,args);};
G__49611.cljs$lang$maxFixedArity = 0;
G__49611.cljs$lang$applyTo = (function (arglist__49613){
var args = cljs.core.seq(arglist__49613);
return G__49611__delegate(args);
});
G__49611.cljs$core$IFn$_invoke$arity$variadic = G__49611__delegate;
return G__49611;
})()
);

(o.error = (function() { 
var G__49614__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49614 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49615__i = 0, G__49615__a = new Array(arguments.length -  0);
while (G__49615__i < G__49615__a.length) {G__49615__a[G__49615__i] = arguments[G__49615__i + 0]; ++G__49615__i;}
  args = new cljs.core.IndexedSeq(G__49615__a,0,null);
} 
return G__49614__delegate.call(this,args);};
G__49614.cljs$lang$maxFixedArity = 0;
G__49614.cljs$lang$applyTo = (function (arglist__49616){
var args = cljs.core.seq(arglist__49616);
return G__49614__delegate(args);
});
G__49614.cljs$core$IFn$_invoke$arity$variadic = G__49614__delegate;
return G__49614;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
