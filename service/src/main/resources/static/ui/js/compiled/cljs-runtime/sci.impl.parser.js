goog.provide('sci.impl.parser');
sci.impl.parser.opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentArrayMap(null, 5, ["`",(function (expr){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),(new cljs.core.List(null,expr,null,(1),null)),(2),null));
}),"~",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),(new cljs.core.List(null,expr,null,(1),null)),(2),null));
}),"@",(function (expr){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"unquote-splicing","unquote-splicing",-1359168213,null),(new cljs.core.List(null,expr,null,(1),null)),(2),null));
})], null),"'",(function (expr){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,expr,null,(1),null)),(2),null));
}),"@",(function (val){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"deref","deref",1494944732,null),(new cljs.core.List(null,val,null,(1),null)),(2),null));
}),"#",new cljs.core.PersistentArrayMap(null, 2, ["(",sci.impl.readers.read_fn,"\"",cljs.core.re_pattern], null)], null)], null);
sci.impl.parser.parse_next = (function sci$impl$parser$parse_next(r){
return edamame.impl.parser.parse_next(sci.impl.parser.opts,r);
});
sci.impl.parser.parse_string = (function sci$impl$parser$parse_string(s){
return edamame.core.parse_string.cljs$core$IFn$_invoke$arity$2(s,sci.impl.parser.opts);
});
sci.impl.parser.parse_string_all = (function sci$impl$parser$parse_string_all(s){
return edamame.core.parse_string_all.cljs$core$IFn$_invoke$arity$2(s,sci.impl.parser.opts);
});

//# sourceMappingURL=sci.impl.parser.js.map
