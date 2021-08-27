goog.provide('jelli.hackday_environ_manager.core');
jelli.hackday_environ_manager.core.dev_setup = (function jelli$hackday_environ_manager$core$dev_setup(){
if(jelli.hackday_environ_manager.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
jelli.hackday_environ_manager.core.mount_root = (function jelli$hackday_environ_manager$core$mount_root(){
jelli.hackday_environ_manager.routes.init_routes_BANG_();

re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jelli.hackday_environ_manager.views.main_panel], null),document.getElementById("app"));
});
jelli.hackday_environ_manager.core.init = (function jelli$hackday_environ_manager$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("jelli.hackday-environ-manager.events","initialize-db","jelli.hackday-environ-manager.events/initialize-db",-2074449732)], null));

jelli.hackday_environ_manager.core.dev_setup();

return jelli.hackday_environ_manager.core.mount_root();
});

//# sourceMappingURL=jelli.hackday_environ_manager.core.js.map
