goog.provide('sci.core');
/**
 * Evaluates string `s` as one or multiple Clojure expressions using the Small Clojure Interpreter.
 * 
 *   The map `opts` may contain the following:
 * 
 *   - `:bindings`: a map of symbols to values, e.g.: `{'x 1}`. The
 *   symbols will acts as names bound to the corresponding values in the
 *   expressions.
 * 
 *   - `:namespaces`: a map of symbols to namespaces, where a namespace
 *   is a map with symbols to values, e.g.: `{'foo.bar {'x 1}}`. These
 *   namespaces can be used with `require`.
 * 
 *   - `:allow`: a seqable of allowed symbols. All symbols, even those
 *   brought in via `:bindings` or `:namespaces` have to be explicitly
 *   enumerated.
 * 
 *   - `:deny`: a seqable of disallowed symbols, e.g.: `[loop quote
 *   recur]`.
 * 
 *   - `:realize-max`: integer; when provided, program may realize a
 *   maximum number of elements from sequences, e.g. `(vec (range))` will
 *   throw for any number. This also applies to sequences returned from
 *   the expression to the caller.
 * 
 *   - `:preset`: a pretermined set of options. Currently only
 *   `:termination-safe` is supported, which will set `:realize-max` to
 *   `100` and disallows the symbols `loop`, `recur` and `trampoline`.
 */
sci.core.eval_string = (function sci$core$eval_string(var_args){
var G__65719 = arguments.length;
switch (G__65719) {
case 1:
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.core.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.core.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,opts);
}));

(sci.core.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.core.js.map
