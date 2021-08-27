goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__65744,match){
var map__65745 = p__65744;
var map__65745__$1 = cljs.core.__destructure_map(map__65745);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65745__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65745__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65745__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4210__auto__ = identity;
if(cljs.core.truth_(and__4210__auto__)){
return parameters;
} else {
return and__4210__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4611__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__65746(s__65747){
return (new cljs.core.LazySeq(null,(function (){
var s__65747__$1 = s__65747;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__65747__$1);
if(temp__5753__auto__){
var s__65747__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65747__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__65747__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__65749 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__65748 = (0);
while(true){
if((i__65748 < size__4610__auto__)){
var vec__65751 = cljs.core._nth(c__4609__auto__,i__65748);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65751,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65751,(1),null);
cljs.core.chunk_append(b__65749,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__65792 = (i__65748 + (1));
i__65748 = G__65792;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65749),reitit$frontend$controllers$get_identity_$_iter__65746(cljs.core.chunk_rest(s__65747__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65749),null);
}
} else {
var vec__65759 = cljs.core.first(s__65747__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65759,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65759,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__65746(cljs.core.rest(s__65747__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
var G__65762 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__65762) : f.call(null,G__65762));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__65764_65800 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__65765_65801 = null;
var count__65766_65802 = (0);
var i__65767_65803 = (0);
while(true){
if((i__65767_65803 < count__65766_65802)){
var controller_65809 = chunk__65765_65801.cljs$core$IIndexed$_nth$arity$2(null,i__65767_65803);
reitit.frontend.controllers.apply_controller(controller_65809,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__65810 = seq__65764_65800;
var G__65811 = chunk__65765_65801;
var G__65812 = count__65766_65802;
var G__65813 = (i__65767_65803 + (1));
seq__65764_65800 = G__65810;
chunk__65765_65801 = G__65811;
count__65766_65802 = G__65812;
i__65767_65803 = G__65813;
continue;
} else {
var temp__5753__auto___65815 = cljs.core.seq(seq__65764_65800);
if(temp__5753__auto___65815){
var seq__65764_65816__$1 = temp__5753__auto___65815;
if(cljs.core.chunked_seq_QMARK_(seq__65764_65816__$1)){
var c__4638__auto___65818 = cljs.core.chunk_first(seq__65764_65816__$1);
var G__65819 = cljs.core.chunk_rest(seq__65764_65816__$1);
var G__65820 = c__4638__auto___65818;
var G__65821 = cljs.core.count(c__4638__auto___65818);
var G__65822 = (0);
seq__65764_65800 = G__65819;
chunk__65765_65801 = G__65820;
count__65766_65802 = G__65821;
i__65767_65803 = G__65822;
continue;
} else {
var controller_65823 = cljs.core.first(seq__65764_65816__$1);
reitit.frontend.controllers.apply_controller(controller_65823,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__65828 = cljs.core.next(seq__65764_65816__$1);
var G__65829 = null;
var G__65830 = (0);
var G__65831 = (0);
seq__65764_65800 = G__65828;
chunk__65765_65801 = G__65829;
count__65766_65802 = G__65830;
i__65767_65803 = G__65831;
continue;
}
} else {
}
}
break;
}

var seq__65775_65832 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__65776_65833 = null;
var count__65777_65834 = (0);
var i__65778_65835 = (0);
while(true){
if((i__65778_65835 < count__65777_65834)){
var controller_65836 = chunk__65776_65833.cljs$core$IIndexed$_nth$arity$2(null,i__65778_65835);
reitit.frontend.controllers.apply_controller(controller_65836,new cljs.core.Keyword(null,"start","start",-355208981));


var G__65837 = seq__65775_65832;
var G__65838 = chunk__65776_65833;
var G__65839 = count__65777_65834;
var G__65840 = (i__65778_65835 + (1));
seq__65775_65832 = G__65837;
chunk__65776_65833 = G__65838;
count__65777_65834 = G__65839;
i__65778_65835 = G__65840;
continue;
} else {
var temp__5753__auto___65841 = cljs.core.seq(seq__65775_65832);
if(temp__5753__auto___65841){
var seq__65775_65842__$1 = temp__5753__auto___65841;
if(cljs.core.chunked_seq_QMARK_(seq__65775_65842__$1)){
var c__4638__auto___65843 = cljs.core.chunk_first(seq__65775_65842__$1);
var G__65844 = cljs.core.chunk_rest(seq__65775_65842__$1);
var G__65845 = c__4638__auto___65843;
var G__65846 = cljs.core.count(c__4638__auto___65843);
var G__65847 = (0);
seq__65775_65832 = G__65844;
chunk__65776_65833 = G__65845;
count__65777_65834 = G__65846;
i__65778_65835 = G__65847;
continue;
} else {
var controller_65848 = cljs.core.first(seq__65775_65842__$1);
reitit.frontend.controllers.apply_controller(controller_65848,new cljs.core.Keyword(null,"start","start",-355208981));


var G__65849 = cljs.core.next(seq__65775_65842__$1);
var G__65850 = null;
var G__65851 = (0);
var G__65852 = (0);
seq__65775_65832 = G__65849;
chunk__65776_65833 = G__65850;
count__65777_65834 = G__65851;
i__65778_65835 = G__65852;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
