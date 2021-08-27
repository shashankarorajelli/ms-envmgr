goog.provide('re_com.debug');
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354)], 0))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__51454){
var map__51455 = p__51454;
var map__51455__$1 = cljs.core.__destructure_map(map__51455);
var args = map__51455__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51455__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51455__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if(cljs.core.not(re_com.config.debug_QMARK_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
goog.object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var user_ref_fn = temp__5753__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__51456 = src;
var map__51456__$1 = cljs.core.__destructure_map(map__51456);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51456__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51456__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__51462 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51462,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__51462;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__51464 = arguments.length;
switch (G__51464) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),goog.object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__51504_51710 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__51502_SHARP_,p2__51501_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__51501_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__51502_SHARP_ + (1)));
}),stack));
var chunk__51505_51711 = null;
var count__51506_51712 = (0);
var i__51507_51713 = (0);
while(true){
if((i__51507_51713 < count__51506_51712)){
var map__51538_51714 = chunk__51505_51711.cljs$core$IIndexed$_nth$arity$2(null,i__51507_51713);
var map__51538_51715__$1 = cljs.core.__destructure_map(map__51538_51714);
var i_51716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51538_51715__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_51717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51538_51715__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_51718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51538_51715__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_51719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51538_51715__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_51720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51538_51715__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_51718)){
if(cljs.core.truth_(src_51719)){
var vec__51547_51727 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_51719,/:/);
var file_51728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51547_51727,(0),null);
var line_51729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51547_51727,(1),null);
if(cljs.core.truth_(args_51720)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51716),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_51718)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_51728),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51729),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_51720,el_51717);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51716),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_51718)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_51728),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51729),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_51717);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51716),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_51718)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_51720,el_51717);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51716),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_51717);
}


var G__51736 = seq__51504_51710;
var G__51737 = chunk__51505_51711;
var G__51738 = count__51506_51712;
var G__51739 = (i__51507_51713 + (1));
seq__51504_51710 = G__51736;
chunk__51505_51711 = G__51737;
count__51506_51712 = G__51738;
i__51507_51713 = G__51739;
continue;
} else {
var temp__5753__auto___51740 = cljs.core.seq(seq__51504_51710);
if(temp__5753__auto___51740){
var seq__51504_51741__$1 = temp__5753__auto___51740;
if(cljs.core.chunked_seq_QMARK_(seq__51504_51741__$1)){
var c__4638__auto___51742 = cljs.core.chunk_first(seq__51504_51741__$1);
var G__51743 = cljs.core.chunk_rest(seq__51504_51741__$1);
var G__51744 = c__4638__auto___51742;
var G__51745 = cljs.core.count(c__4638__auto___51742);
var G__51746 = (0);
seq__51504_51710 = G__51743;
chunk__51505_51711 = G__51744;
count__51506_51712 = G__51745;
i__51507_51713 = G__51746;
continue;
} else {
var map__51551_51747 = cljs.core.first(seq__51504_51741__$1);
var map__51551_51748__$1 = cljs.core.__destructure_map(map__51551_51747);
var i_51749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51551_51748__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_51750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51551_51748__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_51751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51551_51748__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_51752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51551_51748__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_51753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51551_51748__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_51751)){
if(cljs.core.truth_(src_51752)){
var vec__51553_51755 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_51752,/:/);
var file_51756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51553_51755,(0),null);
var line_51757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51553_51755,(1),null);
if(cljs.core.truth_(args_51753)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51749),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_51751)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_51756),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51757),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_51753,el_51750);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51749),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_51751)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_51756),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51757),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_51750);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51749),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_51751)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_51753,el_51750);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_51749),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_51750);
}


var G__51764 = cljs.core.next(seq__51504_51741__$1);
var G__51765 = null;
var G__51766 = (0);
var G__51767 = (0);
seq__51504_51710 = G__51764;
chunk__51505_51711 = G__51765;
count__51506_51712 = G__51766;
i__51507_51713 = G__51767;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__51558 = cljs.core.seq(problems);
var chunk__51559 = null;
var count__51560 = (0);
var i__51561 = (0);
while(true){
if((i__51561 < count__51560)){
var map__51581 = chunk__51559.cljs$core$IIndexed$_nth$arity$2(null,i__51561);
var map__51581__$1 = cljs.core.__destructure_map(map__51581);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51581__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51581__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51581__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51581__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51581__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__51586_51770 = problem;
var G__51586_51771__$1 = (((G__51586_51770 instanceof cljs.core.Keyword))?G__51586_51770.fqn:null);
switch (G__51586_51771__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__51775 = seq__51558;
var G__51776 = chunk__51559;
var G__51777 = count__51560;
var G__51778 = (i__51561 + (1));
seq__51558 = G__51775;
chunk__51559 = G__51776;
count__51560 = G__51777;
i__51561 = G__51778;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51558);
if(temp__5753__auto__){
var seq__51558__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51558__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__51558__$1);
var G__51785 = cljs.core.chunk_rest(seq__51558__$1);
var G__51786 = c__4638__auto__;
var G__51787 = cljs.core.count(c__4638__auto__);
var G__51788 = (0);
seq__51558 = G__51785;
chunk__51559 = G__51786;
count__51560 = G__51787;
i__51561 = G__51788;
continue;
} else {
var map__51592 = cljs.core.first(seq__51558__$1);
var map__51592__$1 = cljs.core.__destructure_map(map__51592);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51592__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51592__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51592__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51592__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51592__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__51593_51789 = problem;
var G__51593_51790__$1 = (((G__51593_51789 instanceof cljs.core.Keyword))?G__51593_51789.fqn:null);
switch (G__51593_51790__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__51799 = cljs.core.next(seq__51558__$1);
var G__51800 = null;
var G__51801 = (0);
var G__51802 = (0);
seq__51558 = G__51799;
chunk__51559 = G__51800;
count__51560 = G__51801;
i__51561 = G__51802;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__51604){
var map__51608 = p__51604;
var map__51608__$1 = cljs.core.__destructure_map(map__51608);
var src = map__51608__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51608__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51608__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (cljs.core.truth_(re_com.config.root_url_for_compiler_output)?[re_com.config.root_url_for_compiler_output,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__4824__auto__ = [];
var len__4818__auto___51818 = arguments.length;
var i__4819__auto___51819 = (0);
while(true){
if((i__4819__auto___51819 < len__4818__auto___51818)){
args__4824__auto__.push((arguments[i__4819__auto___51819]));

var G__51823 = (i__4819__auto___51819 + (1));
i__4819__auto___51819 = G__51823;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__51628){
var map__51629 = p__51628;
var map__51629__$1 = cljs.core.__destructure_map(map__51629);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51629__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51629__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51629__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__51827__delegate = function (p__51644){
var map__51645 = p__51644;
var map__51645__$1 = cljs.core.__destructure_map(map__51645);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51645__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51645__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51645__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__51827 = function (var_args){
var p__51644 = null;
if (arguments.length > 0) {
var G__51834__i = 0, G__51834__a = new Array(arguments.length -  0);
while (G__51834__i < G__51834__a.length) {G__51834__a[G__51834__i] = arguments[G__51834__i + 0]; ++G__51834__i;}
  p__51644 = new cljs.core.IndexedSeq(G__51834__a,0,null);
} 
return G__51827__delegate.call(this,p__51644);};
G__51827.cljs$lang$maxFixedArity = 0;
G__51827.cljs$lang$applyTo = (function (arglist__51835){
var p__51644 = cljs.core.seq(arglist__51835);
return G__51827__delegate(p__51644);
});
G__51827.cljs$core$IFn$_invoke$arity$variadic = G__51827__delegate;
return G__51827;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq51620){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51620));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__4824__auto__ = [];
var len__4818__auto___51836 = arguments.length;
var i__4819__auto___51837 = (0);
while(true){
if((i__4819__auto___51837 < len__4818__auto___51836)){
args__4824__auto__.push((arguments[i__4819__auto___51837]));

var G__51838 = (i__4819__auto___51837 + (1));
i__4819__auto___51837 = G__51838;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__51686){
var map__51687 = p__51686;
var map__51687__$1 = cljs.core.__destructure_map(map__51687);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51687__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51687__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__51840__delegate = function (p__51692){
var map__51694 = p__51692;
var map__51694__$1 = cljs.core.__destructure_map(map__51694);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51694__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51694__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__51840 = function (var_args){
var p__51692 = null;
if (arguments.length > 0) {
var G__51846__i = 0, G__51846__a = new Array(arguments.length -  0);
while (G__51846__i < G__51846__a.length) {G__51846__a[G__51846__i] = arguments[G__51846__i + 0]; ++G__51846__i;}
  p__51692 = new cljs.core.IndexedSeq(G__51846__a,0,null);
} 
return G__51840__delegate.call(this,p__51692);};
G__51840.cljs$lang$maxFixedArity = 0;
G__51840.cljs$lang$applyTo = (function (arglist__51849){
var p__51692 = cljs.core.seq(arglist__51849);
return G__51840__delegate(p__51692);
});
G__51840.cljs$core$IFn$_invoke$arity$variadic = G__51840__delegate;
return G__51840;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq51650){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51650));
}));


//# sourceMappingURL=re_com.debug.js.map
