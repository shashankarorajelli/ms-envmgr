goog.provide('edamame.core');
/**
 * Parses first EDN value from string.
 * 
 *   Supported options:
 * 
 *   `:dispatch`: a map of characters to functions which will receive the
 *   parsed EDN value when encountering the char. Map may be nested for
 *   dispatch characters. See README.md for examples.
 * 
 *   Additional arguments to tools.reader like `:readers` for passing
 *   reader tag functions.
 */
edamame.core.parse_string = (function edamame$core$parse_string(var_args){
var G__65497 = arguments.length;
switch (G__65497) {
case 1:
return edamame.core.parse_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.core.parse_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.core.parse_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return edamame.impl.parser.parse_string(s,null);
}));

(edamame.core.parse_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return edamame.impl.parser.parse_string(s,opts);
}));

(edamame.core.parse_string.cljs$lang$maxFixedArity = 2);

/**
 * Like parse-string but parses all values from string and returns them
 *   in a vector.
 */
edamame.core.parse_string_all = (function edamame$core$parse_string_all(var_args){
var G__65503 = arguments.length;
switch (G__65503) {
case 1:
return edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$1 = (function (s){
return edamame.impl.parser.parse_string_all(s,null);
}));

(edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return edamame.impl.parser.parse_string_all(s,opts);
}));

(edamame.core.parse_string_all.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=edamame.core.js.map
