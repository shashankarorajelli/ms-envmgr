goog.provide('jelli.hackday_environ_manager.forms');
jelli.hackday_environ_manager.forms.new_tab_href = (function jelli$hackday_environ_manager$forms$new_tab_href(link){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),link,new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null);
});
if((typeof jelli !== 'undefined') && (typeof jelli.hackday_environ_manager !== 'undefined') && (typeof jelli.hackday_environ_manager.forms !== 'undefined') && (typeof jelli.hackday_environ_manager.forms.data_driven_field !== 'undefined')){
} else {
jelli.hackday_environ_manager.forms.data_driven_field = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__58430 = cljs.core.get_global_hierarchy;
return (fexpr__58430.cljs$core$IFn$_invoke$arity$0 ? fexpr__58430.cljs$core$IFn$_invoke$arity$0() : fexpr__58430.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("jelli.hackday-environ-manager.forms","data-driven-field"),(function (field_def,cursor){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(field_def);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
jelli.hackday_environ_manager.forms.data_driven_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (field_def,cursor){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_def),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"class","class",-2030961996),"textarea",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_def),new cljs.core.Keyword(null,"model","model",331153215),cursor,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__58431_SHARP_){
return cljs.core.reset_BANG_(cursor,p1__58431_SHARP_);
})], null)], null);
}));
jelli.hackday_environ_manager.forms.data_driven_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("fields","bool","fields/bool",35512834),(function (field_def,cursor){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.checkbox,new cljs.core.Keyword(null,"model","model",331153215),cursor,new cljs.core.Keyword(null,"label-class","label-class",-2068991202),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__58432_SHARP_){
return cljs.core.reset_BANG_(cursor,p1__58432_SHARP_);
}),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_def)], null);
}));
jelli.hackday_environ_manager.forms.data_driven_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("fields","string","fields/string",-180388363),(function (field_def,cursor){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_def),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_def),new cljs.core.Keyword(null,"model","model",331153215),cursor,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__58433_SHARP_){
return cljs.core.reset_BANG_(cursor,p1__58433_SHARP_);
})], null)], null);
}));
jelli.hackday_environ_manager.forms.data_driven_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("fields","url","fields/url",1283290255),(function (field_def,cursor){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field.is-horizontal","div.field.is-horizontal",1659769810),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_def),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_def),new cljs.core.Keyword(null,"model","model",331153215),cursor,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__58434_SHARP_){
return cljs.core.reset_BANG_(cursor,p1__58434_SHARP_);
})], null)], null),((clojure.string.blank_QMARK_(cljs.core.deref(cursor)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),jelli.hackday_environ_manager.forms.new_tab_href(cljs.core.deref(cursor)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-open-in-new","span.icon>i.mdi.mdi-open-in-new",-1782948014)], null)], null))], null);
}));
jelli.hackday_environ_manager.forms.data_driven_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("fields","env-url","fields/env-url",-646618744),(function (field_def,cursor){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_def),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_def),new cljs.core.Keyword(null,"model","model",331153215),cursor,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__58435_SHARP_){
return cljs.core.reset_BANG_(cursor,p1__58435_SHARP_);
})], null)], null)], null);
}));
jelli.hackday_environ_manager.forms.data_driven_field.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("fields","env-url-map","fields/env-url-map",1658042647),(function (field_def,cursor){
var with_let58437 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let58437","with-let58437",-603769386));
var temp__5757__auto___58461 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___58461 == null)){
} else {
var c__50045__auto___58462 = temp__5757__auto___58461;
if((with_let58437.generation === c__50045__auto___58462.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let58437.generation = c__50045__auto___58462.ratomGeneration);
}

var init58438 = (with_let58437.length === (0));
var to_add_env_key = ((((init58438) || (cljs.core.not(with_let58437.hasOwnProperty((0))))))?(with_let58437[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let58437[(0)]));
var to_add_override = ((((init58438) || (cljs.core.not(with_let58437.hasOwnProperty((1))))))?(with_let58437[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let58437[(1)]));
var res58439 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box.field","div.box.field",1365637347),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_def)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.is-narrow","table.table.is-narrow",-357443234),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Env"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Override"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function jelli$hackday_environ_manager$forms$iter__58440(s__58441){
return (new cljs.core.LazySeq(null,(function (){
var s__58441__$1 = s__58441;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__58441__$1);
if(temp__5753__auto__){
var s__58441__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58441__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__58441__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__58443 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__58442 = (0);
while(true){
if((i__58442 < size__4610__auto__)){
var vec__58444 = cljs.core._nth(c__4609__auto__,i__58442);
var env_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58444,(0),null);
var override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58444,(1),null);
cljs.core.chunk_append(b__58443,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),env_key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),override], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a>span.icon.has-text-danger","a>span.icon.has-text-danger",-610681047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58442,vec__58444,env_key,override,c__4609__auto__,size__4610__auto__,b__58443,s__58441__$2,temp__5753__auto__,init58438,to_add_env_key,to_add_override,with_let58437){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,cljs.core.dissoc,env_key);
});})(i__58442,vec__58444,env_key,override,c__4609__auto__,size__4610__auto__,b__58443,s__58441__$2,temp__5753__auto__,init58438,to_add_env_key,to_add_override,with_let58437))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mdi.mdi-delete","i.mdi.mdi-delete",283399108)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),env_key], null)));

var G__58472 = (i__58442 + (1));
i__58442 = G__58472;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58443),jelli$hackday_environ_manager$forms$iter__58440(cljs.core.chunk_rest(s__58441__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58443),null);
}
} else {
var vec__58447 = cljs.core.first(s__58441__$2);
var env_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58447,(0),null);
var override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58447,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),env_key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),override], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a>span.icon.has-text-danger","a>span.icon.has-text-danger",-610681047),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__58447,env_key,override,s__58441__$2,temp__5753__auto__,init58438,to_add_env_key,to_add_override,with_let58437){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cursor,cljs.core.dissoc,env_key);
});})(vec__58447,env_key,override,s__58441__$2,temp__5753__auto__,init58438,to_add_env_key,to_add_override,with_let58437))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.mdi.mdi-delete","i.mdi.mdi-delete",283399108)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),env_key], null)),jelli$hackday_environ_manager$forms$iter__58440(cljs.core.rest(s__58441__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.deref(cursor));
})())], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field.is-horizontal","div.field.is-horizontal",1659769810),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown.is-hoverable","div.dropdown.is-hoverable",902302994),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-trigger>button.button","div.dropdown-trigger>button.button",-1109511132),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var or__4212__auto__ = cljs.core.deref(to_add_env_key);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "env";
}
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-chevron-down","span.icon>i.mdi.mdi-chevron-down",41346983)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.dropdown-menu>div.dropdown-content","div.dropdown-menu>div.dropdown-content",-808018625),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function jelli$hackday_environ_manager$forms$iter__58450(s__58451){
return (new cljs.core.LazySeq(null,(function (){
var s__58451__$1 = s__58451;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__58451__$1);
if(temp__5753__auto__){
var s__58451__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58451__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__58451__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__58453 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__58452 = (0);
while(true){
if((i__58452 < size__4610__auto__)){
var k = cljs.core._nth(c__4609__auto__,i__58452);
cljs.core.chunk_append(b__58453,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__58452,k,c__4609__auto__,size__4610__auto__,b__58453,s__58451__$2,temp__5753__auto__,init58438,to_add_env_key,to_add_override,with_let58437){
return (function (){
return cljs.core.reset_BANG_(to_add_env_key,k);
});})(i__58452,k,c__4609__auto__,size__4610__auto__,b__58453,s__58451__$2,temp__5753__auto__,init58438,to_add_env_key,to_add_override,with_let58437))
], null),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__58481 = (i__58452 + (1));
i__58452 = G__58481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58453),jelli$hackday_environ_manager$forms$iter__58450(cljs.core.chunk_rest(s__58451__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58453),null);
}
} else {
var k = cljs.core.first(s__58451__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item","a.dropdown-item",2124140477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (k,s__58451__$2,temp__5753__auto__,init58438,to_add_env_key,to_add_override,with_let58437){
return (function (){
return cljs.core.reset_BANG_(to_add_env_key,k);
});})(k,s__58451__$2,temp__5753__auto__,init58438,to_add_env_key,to_add_override,with_let58437))
], null),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),jelli$hackday_environ_manager$forms$iter__58450(cljs.core.rest(s__58451__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.subs","env-keys","jelli.hackday-environ-manager.subs/env-keys",-183117844)], null))));
})())], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"class","class",-2030961996),"input",new cljs.core.Keyword(null,"model","model",331153215),to_add_override,new cljs.core.Keyword(null,"width","width",-384071477),"45%",new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__58436_SHARP_){
return cljs.core.reset_BANG_(to_add_override,p1__58436_SHARP_);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-primary","button.button.is-primary",-883309392),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.assoc,cljs.core.deref(to_add_env_key),cljs.core.deref(to_add_override));

cljs.core.reset_BANG_(to_add_env_key,null);

return cljs.core.reset_BANG_(to_add_override,null);
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.boolean$(cljs.core.not((function (){var and__4210__auto__ = cljs.core.deref(to_add_env_key);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.deref(to_add_override);
} else {
return and__4210__auto__;
}
})()))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Add Override"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon>i.mdi.mdi-plus","span.icon>i.mdi.mdi-plus",-802878981)], null)], null)], null)], null);
return res58439;
}));
jelli.hackday_environ_manager.forms.data_driven_form = (function jelli$hackday_environ_manager$forms$data_driven_form(p__58454){
var map__58455 = p__58454;
var map__58455__$1 = cljs.core.__destructure_map(map__58455);
var field_defs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455__$1,new cljs.core.Keyword(null,"field-defs","field-defs",-852008759));
var data_atom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455__$1,new cljs.core.Keyword(null,"data-atom","data-atom",1035568414));
var on_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58455__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function jelli$hackday_environ_manager$forms$data_driven_form_$_iter__58456(s__58457){
return (new cljs.core.LazySeq(null,(function (){
var s__58457__$1 = s__58457;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__58457__$1);
if(temp__5753__auto__){
var s__58457__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58457__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__58457__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__58459 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__58458 = (0);
while(true){
if((i__58458 < size__4610__auto__)){
var field_def = cljs.core._nth(c__4609__auto__,i__58458);
var cursor = reagent.core.cursor(data_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(field_def)], null));
cljs.core.chunk_append(b__58459,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.forms.data_driven_field,field_def,cursor], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(field_def)], null)));

var G__58489 = (i__58458 + (1));
i__58458 = G__58489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58459),jelli$hackday_environ_manager$forms$data_driven_form_$_iter__58456(cljs.core.chunk_rest(s__58457__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58459),null);
}
} else {
var field_def = cljs.core.first(s__58457__$2);
var cursor = reagent.core.cursor(data_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(field_def)], null));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.forms.data_driven_field,field_def,cursor], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(field_def)], null)),jelli$hackday_environ_manager$forms$data_driven_form_$_iter__58456(cljs.core.rest(s__58457__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(field_defs);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-primary","button.button.is-primary",-883309392),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__58460 = cljs.core.deref(data_atom);
return (on_submit.cljs$core$IFn$_invoke$arity$1 ? on_submit.cljs$core$IFn$_invoke$arity$1(G__58460) : on_submit.call(null,G__58460));
})], null),"Save"], null)], null);
});

//# sourceMappingURL=jelli.hackday_environ_manager.forms.js.map
