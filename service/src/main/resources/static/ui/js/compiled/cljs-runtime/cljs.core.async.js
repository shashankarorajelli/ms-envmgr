goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__56344 = arguments.length;
switch (G__56344) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56365 = (function (f,blockable,meta56366){
this.f = f;
this.blockable = blockable;
this.meta56366 = meta56366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56367,meta56366__$1){
var self__ = this;
var _56367__$1 = this;
return (new cljs.core.async.t_cljs$core$async56365(self__.f,self__.blockable,meta56366__$1));
}));

(cljs.core.async.t_cljs$core$async56365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56367){
var self__ = this;
var _56367__$1 = this;
return self__.meta56366;
}));

(cljs.core.async.t_cljs$core$async56365.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async56365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async56365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56366","meta56366",-1353239493,null)], null);
}));

(cljs.core.async.t_cljs$core$async56365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56365");

(cljs.core.async.t_cljs$core$async56365.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async56365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56365.
 */
cljs.core.async.__GT_t_cljs$core$async56365 = (function cljs$core$async$__GT_t_cljs$core$async56365(f__$1,blockable__$1,meta56366){
return (new cljs.core.async.t_cljs$core$async56365(f__$1,blockable__$1,meta56366));
});

}

return (new cljs.core.async.t_cljs$core$async56365(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__56417 = arguments.length;
switch (G__56417) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__56455 = arguments.length;
switch (G__56455) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__56480 = arguments.length;
switch (G__56480) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_59487 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59487) : fn1.call(null,val_59487));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59487) : fn1.call(null,val_59487));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__56495 = arguments.length;
switch (G__56495) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___59500 = n;
var x_59502 = (0);
while(true){
if((x_59502 < n__4695__auto___59500)){
(a[x_59502] = x_59502);

var G__59503 = (x_59502 + (1));
x_59502 = G__59503;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56531 = (function (flag,meta56532){
this.flag = flag;
this.meta56532 = meta56532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56533,meta56532__$1){
var self__ = this;
var _56533__$1 = this;
return (new cljs.core.async.t_cljs$core$async56531(self__.flag,meta56532__$1));
}));

(cljs.core.async.t_cljs$core$async56531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56533){
var self__ = this;
var _56533__$1 = this;
return self__.meta56532;
}));

(cljs.core.async.t_cljs$core$async56531.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56531.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async56531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56532","meta56532",-1321868306,null)], null);
}));

(cljs.core.async.t_cljs$core$async56531.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56531");

(cljs.core.async.t_cljs$core$async56531.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async56531");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56531.
 */
cljs.core.async.__GT_t_cljs$core$async56531 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56531(flag__$1,meta56532){
return (new cljs.core.async.t_cljs$core$async56531(flag__$1,meta56532));
});

}

return (new cljs.core.async.t_cljs$core$async56531(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56553 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56553 = (function (flag,cb,meta56554){
this.flag = flag;
this.cb = cb;
this.meta56554 = meta56554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56555,meta56554__$1){
var self__ = this;
var _56555__$1 = this;
return (new cljs.core.async.t_cljs$core$async56553(self__.flag,self__.cb,meta56554__$1));
}));

(cljs.core.async.t_cljs$core$async56553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56555){
var self__ = this;
var _56555__$1 = this;
return self__.meta56554;
}));

(cljs.core.async.t_cljs$core$async56553.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56553.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async56553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56554","meta56554",1672525744,null)], null);
}));

(cljs.core.async.t_cljs$core$async56553.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56553");

(cljs.core.async.t_cljs$core$async56553.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async56553");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56553.
 */
cljs.core.async.__GT_t_cljs$core$async56553 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56553(flag__$1,cb__$1,meta56554){
return (new cljs.core.async.t_cljs$core$async56553(flag__$1,cb__$1,meta56554));
});

}

return (new cljs.core.async.t_cljs$core$async56553(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56565_SHARP_){
var G__56597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56565_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56597) : fret.call(null,G__56597));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56566_SHARP_){
var G__56602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56566_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56602) : fret.call(null,G__56602));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__59511 = (i + (1));
i = G__59511;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___59512 = arguments.length;
var i__4819__auto___59513 = (0);
while(true){
if((i__4819__auto___59513 < len__4818__auto___59512)){
args__4824__auto__.push((arguments[i__4819__auto___59513]));

var G__59514 = (i__4819__auto___59513 + (1));
i__4819__auto___59513 = G__59514;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56637){
var map__56640 = p__56637;
var map__56640__$1 = cljs.core.__destructure_map(map__56640);
var opts = map__56640__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56631){
var G__56632 = cljs.core.first(seq56631);
var seq56631__$1 = cljs.core.next(seq56631);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56632,seq56631__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__56645 = arguments.length;
switch (G__56645) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__56206__auto___59522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_56706){
var state_val_56707 = (state_56706[(1)]);
if((state_val_56707 === (7))){
var inst_56702 = (state_56706[(2)]);
var state_56706__$1 = state_56706;
var statearr_56710_59524 = state_56706__$1;
(statearr_56710_59524[(2)] = inst_56702);

(statearr_56710_59524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (1))){
var state_56706__$1 = state_56706;
var statearr_56711_59525 = state_56706__$1;
(statearr_56711_59525[(2)] = null);

(statearr_56711_59525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (4))){
var inst_56675 = (state_56706[(7)]);
var inst_56675__$1 = (state_56706[(2)]);
var inst_56684 = (inst_56675__$1 == null);
var state_56706__$1 = (function (){var statearr_56713 = state_56706;
(statearr_56713[(7)] = inst_56675__$1);

return statearr_56713;
})();
if(cljs.core.truth_(inst_56684)){
var statearr_56714_59527 = state_56706__$1;
(statearr_56714_59527[(1)] = (5));

} else {
var statearr_56716_59528 = state_56706__$1;
(statearr_56716_59528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (13))){
var state_56706__$1 = state_56706;
var statearr_56720_59531 = state_56706__$1;
(statearr_56720_59531[(2)] = null);

(statearr_56720_59531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (6))){
var inst_56675 = (state_56706[(7)]);
var state_56706__$1 = state_56706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56706__$1,(11),to,inst_56675);
} else {
if((state_val_56707 === (3))){
var inst_56704 = (state_56706[(2)]);
var state_56706__$1 = state_56706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56706__$1,inst_56704);
} else {
if((state_val_56707 === (12))){
var state_56706__$1 = state_56706;
var statearr_56721_59536 = state_56706__$1;
(statearr_56721_59536[(2)] = null);

(statearr_56721_59536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (2))){
var state_56706__$1 = state_56706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56706__$1,(4),from);
} else {
if((state_val_56707 === (11))){
var inst_56695 = (state_56706[(2)]);
var state_56706__$1 = state_56706;
if(cljs.core.truth_(inst_56695)){
var statearr_56724_59537 = state_56706__$1;
(statearr_56724_59537[(1)] = (12));

} else {
var statearr_56725_59538 = state_56706__$1;
(statearr_56725_59538[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (9))){
var state_56706__$1 = state_56706;
var statearr_56726_59539 = state_56706__$1;
(statearr_56726_59539[(2)] = null);

(statearr_56726_59539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (5))){
var state_56706__$1 = state_56706;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56728_59540 = state_56706__$1;
(statearr_56728_59540[(1)] = (8));

} else {
var statearr_56729_59541 = state_56706__$1;
(statearr_56729_59541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (14))){
var inst_56700 = (state_56706[(2)]);
var state_56706__$1 = state_56706;
var statearr_56735_59542 = state_56706__$1;
(statearr_56735_59542[(2)] = inst_56700);

(statearr_56735_59542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (10))){
var inst_56692 = (state_56706[(2)]);
var state_56706__$1 = state_56706;
var statearr_56736_59544 = state_56706__$1;
(statearr_56736_59544[(2)] = inst_56692);

(statearr_56736_59544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56707 === (8))){
var inst_56688 = cljs.core.async.close_BANG_(to);
var state_56706__$1 = state_56706;
var statearr_56737_59545 = state_56706__$1;
(statearr_56737_59545[(2)] = inst_56688);

(statearr_56737_59545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55985__auto__ = null;
var cljs$core$async$state_machine__55985__auto____0 = (function (){
var statearr_56739 = [null,null,null,null,null,null,null,null];
(statearr_56739[(0)] = cljs$core$async$state_machine__55985__auto__);

(statearr_56739[(1)] = (1));

return statearr_56739;
});
var cljs$core$async$state_machine__55985__auto____1 = (function (state_56706){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_56706);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e56741){var ex__55988__auto__ = e56741;
var statearr_56742_59548 = state_56706;
(statearr_56742_59548[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_56706[(4)]))){
var statearr_56743_59552 = state_56706;
(statearr_56743_59552[(1)] = cljs.core.first((state_56706[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59553 = state_56706;
state_56706 = G__59553;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$state_machine__55985__auto__ = function(state_56706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55985__auto____1.call(this,state_56706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55985__auto____0;
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55985__auto____1;
return cljs$core$async$state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_56745 = f__56207__auto__();
(statearr_56745[(6)] = c__56206__auto___59522);

return statearr_56745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__56753){
var vec__56755 = p__56753;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56755,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56755,(1),null);
var job = vec__56755;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__56206__auto___59556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_56765){
var state_val_56766 = (state_56765[(1)]);
if((state_val_56766 === (1))){
var state_56765__$1 = state_56765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56765__$1,(2),res,v);
} else {
if((state_val_56766 === (2))){
var inst_56762 = (state_56765[(2)]);
var inst_56763 = cljs.core.async.close_BANG_(res);
var state_56765__$1 = (function (){var statearr_56784 = state_56765;
(statearr_56784[(7)] = inst_56762);

return statearr_56784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56765__$1,inst_56763);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0 = (function (){
var statearr_56790 = [null,null,null,null,null,null,null,null];
(statearr_56790[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__);

(statearr_56790[(1)] = (1));

return statearr_56790;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1 = (function (state_56765){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_56765);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e56793){var ex__55988__auto__ = e56793;
var statearr_56796_59559 = state_56765;
(statearr_56796_59559[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_56765[(4)]))){
var statearr_56800_59560 = state_56765;
(statearr_56800_59560[(1)] = cljs.core.first((state_56765[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59563 = state_56765;
state_56765 = G__59563;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__ = function(state_56765){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1.call(this,state_56765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_56807 = f__56207__auto__();
(statearr_56807[(6)] = c__56206__auto___59556);

return statearr_56807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__56821){
var vec__56822 = p__56821;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56822,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56822,(1),null);
var job = vec__56822;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___59565 = n;
var __59567 = (0);
while(true){
if((__59567 < n__4695__auto___59565)){
var G__56833_59568 = type;
var G__56833_59569__$1 = (((G__56833_59568 instanceof cljs.core.Keyword))?G__56833_59568.fqn:null);
switch (G__56833_59569__$1) {
case "compute":
var c__56206__auto___59571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59567,c__56206__auto___59571,G__56833_59568,G__56833_59569__$1,n__4695__auto___59565,jobs,results,process,async){
return (function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = ((function (__59567,c__56206__auto___59571,G__56833_59568,G__56833_59569__$1,n__4695__auto___59565,jobs,results,process,async){
return (function (state_56847){
var state_val_56848 = (state_56847[(1)]);
if((state_val_56848 === (1))){
var state_56847__$1 = state_56847;
var statearr_56852_59572 = state_56847__$1;
(statearr_56852_59572[(2)] = null);

(statearr_56852_59572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56848 === (2))){
var state_56847__$1 = state_56847;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56847__$1,(4),jobs);
} else {
if((state_val_56848 === (3))){
var inst_56845 = (state_56847[(2)]);
var state_56847__$1 = state_56847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56847__$1,inst_56845);
} else {
if((state_val_56848 === (4))){
var inst_56837 = (state_56847[(2)]);
var inst_56838 = process(inst_56837);
var state_56847__$1 = state_56847;
if(cljs.core.truth_(inst_56838)){
var statearr_56856_59573 = state_56847__$1;
(statearr_56856_59573[(1)] = (5));

} else {
var statearr_56858_59574 = state_56847__$1;
(statearr_56858_59574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56848 === (5))){
var state_56847__$1 = state_56847;
var statearr_56861_59576 = state_56847__$1;
(statearr_56861_59576[(2)] = null);

(statearr_56861_59576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56848 === (6))){
var state_56847__$1 = state_56847;
var statearr_56863_59582 = state_56847__$1;
(statearr_56863_59582[(2)] = null);

(statearr_56863_59582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56848 === (7))){
var inst_56843 = (state_56847[(2)]);
var state_56847__$1 = state_56847;
var statearr_56867_59583 = state_56847__$1;
(statearr_56867_59583[(2)] = inst_56843);

(statearr_56867_59583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__59567,c__56206__auto___59571,G__56833_59568,G__56833_59569__$1,n__4695__auto___59565,jobs,results,process,async))
;
return ((function (__59567,switch__55984__auto__,c__56206__auto___59571,G__56833_59568,G__56833_59569__$1,n__4695__auto___59565,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0 = (function (){
var statearr_56872 = [null,null,null,null,null,null,null];
(statearr_56872[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__);

(statearr_56872[(1)] = (1));

return statearr_56872;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1 = (function (state_56847){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_56847);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e56875){var ex__55988__auto__ = e56875;
var statearr_56876_59584 = state_56847;
(statearr_56876_59584[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_56847[(4)]))){
var statearr_56878_59585 = state_56847;
(statearr_56878_59585[(1)] = cljs.core.first((state_56847[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59586 = state_56847;
state_56847 = G__59586;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__ = function(state_56847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1.call(this,state_56847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__;
})()
;})(__59567,switch__55984__auto__,c__56206__auto___59571,G__56833_59568,G__56833_59569__$1,n__4695__auto___59565,jobs,results,process,async))
})();
var state__56208__auto__ = (function (){var statearr_56880 = f__56207__auto__();
(statearr_56880[(6)] = c__56206__auto___59571);

return statearr_56880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
});})(__59567,c__56206__auto___59571,G__56833_59568,G__56833_59569__$1,n__4695__auto___59565,jobs,results,process,async))
);


break;
case "async":
var c__56206__auto___59587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59567,c__56206__auto___59587,G__56833_59568,G__56833_59569__$1,n__4695__auto___59565,jobs,results,process,async){
return (function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = ((function (__59567,c__56206__auto___59587,G__56833_59568,G__56833_59569__$1,n__4695__auto___59565,jobs,results,process,async){
return (function (state_56899){
var state_val_56900 = (state_56899[(1)]);
if((state_val_56900 === (1))){
var state_56899__$1 = state_56899;
var statearr_56906_59594 = state_56899__$1;
(statearr_56906_59594[(2)] = null);

(statearr_56906_59594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56900 === (2))){
var state_56899__$1 = state_56899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56899__$1,(4),jobs);
} else {
if((state_val_56900 === (3))){
var inst_56894 = (state_56899[(2)]);
var state_56899__$1 = state_56899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56899__$1,inst_56894);
} else {
if((state_val_56900 === (4))){
var inst_56884 = (state_56899[(2)]);
var inst_56885 = async(inst_56884);
var state_56899__$1 = state_56899;
if(cljs.core.truth_(inst_56885)){
var statearr_56921_59596 = state_56899__$1;
(statearr_56921_59596[(1)] = (5));

} else {
var statearr_56922_59597 = state_56899__$1;
(statearr_56922_59597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56900 === (5))){
var state_56899__$1 = state_56899;
var statearr_56927_59598 = state_56899__$1;
(statearr_56927_59598[(2)] = null);

(statearr_56927_59598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56900 === (6))){
var state_56899__$1 = state_56899;
var statearr_56933_59599 = state_56899__$1;
(statearr_56933_59599[(2)] = null);

(statearr_56933_59599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56900 === (7))){
var inst_56892 = (state_56899[(2)]);
var state_56899__$1 = state_56899;
var statearr_56940_59600 = state_56899__$1;
(statearr_56940_59600[(2)] = inst_56892);

(statearr_56940_59600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__59567,c__56206__auto___59587,G__56833_59568,G__56833_59569__$1,n__4695__auto___59565,jobs,results,process,async))
;
return ((function (__59567,switch__55984__auto__,c__56206__auto___59587,G__56833_59568,G__56833_59569__$1,n__4695__auto___59565,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0 = (function (){
var statearr_56946 = [null,null,null,null,null,null,null];
(statearr_56946[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__);

(statearr_56946[(1)] = (1));

return statearr_56946;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1 = (function (state_56899){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_56899);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e56950){var ex__55988__auto__ = e56950;
var statearr_56951_59601 = state_56899;
(statearr_56951_59601[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_56899[(4)]))){
var statearr_56952_59602 = state_56899;
(statearr_56952_59602[(1)] = cljs.core.first((state_56899[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59604 = state_56899;
state_56899 = G__59604;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__ = function(state_56899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1.call(this,state_56899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__;
})()
;})(__59567,switch__55984__auto__,c__56206__auto___59587,G__56833_59568,G__56833_59569__$1,n__4695__auto___59565,jobs,results,process,async))
})();
var state__56208__auto__ = (function (){var statearr_56958 = f__56207__auto__();
(statearr_56958[(6)] = c__56206__auto___59587);

return statearr_56958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
});})(__59567,c__56206__auto___59587,G__56833_59568,G__56833_59569__$1,n__4695__auto___59565,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56833_59569__$1)].join('')));

}

var G__59606 = (__59567 + (1));
__59567 = G__59606;
continue;
} else {
}
break;
}

var c__56206__auto___59607 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_57002){
var state_val_57003 = (state_57002[(1)]);
if((state_val_57003 === (7))){
var inst_56993 = (state_57002[(2)]);
var state_57002__$1 = state_57002;
var statearr_57012_59608 = state_57002__$1;
(statearr_57012_59608[(2)] = inst_56993);

(statearr_57012_59608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57003 === (1))){
var state_57002__$1 = state_57002;
var statearr_57017_59609 = state_57002__$1;
(statearr_57017_59609[(2)] = null);

(statearr_57017_59609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57003 === (4))){
var inst_56973 = (state_57002[(7)]);
var inst_56973__$1 = (state_57002[(2)]);
var inst_56974 = (inst_56973__$1 == null);
var state_57002__$1 = (function (){var statearr_57019 = state_57002;
(statearr_57019[(7)] = inst_56973__$1);

return statearr_57019;
})();
if(cljs.core.truth_(inst_56974)){
var statearr_57022_59610 = state_57002__$1;
(statearr_57022_59610[(1)] = (5));

} else {
var statearr_57023_59611 = state_57002__$1;
(statearr_57023_59611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57003 === (6))){
var inst_56973 = (state_57002[(7)]);
var inst_56982 = (state_57002[(8)]);
var inst_56982__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_56983 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56984 = [inst_56973,inst_56982__$1];
var inst_56985 = (new cljs.core.PersistentVector(null,2,(5),inst_56983,inst_56984,null));
var state_57002__$1 = (function (){var statearr_57027 = state_57002;
(statearr_57027[(8)] = inst_56982__$1);

return statearr_57027;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57002__$1,(8),jobs,inst_56985);
} else {
if((state_val_57003 === (3))){
var inst_56997 = (state_57002[(2)]);
var state_57002__$1 = state_57002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57002__$1,inst_56997);
} else {
if((state_val_57003 === (2))){
var state_57002__$1 = state_57002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57002__$1,(4),from);
} else {
if((state_val_57003 === (9))){
var inst_56990 = (state_57002[(2)]);
var state_57002__$1 = (function (){var statearr_57032 = state_57002;
(statearr_57032[(9)] = inst_56990);

return statearr_57032;
})();
var statearr_57033_59613 = state_57002__$1;
(statearr_57033_59613[(2)] = null);

(statearr_57033_59613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57003 === (5))){
var inst_56976 = cljs.core.async.close_BANG_(jobs);
var state_57002__$1 = state_57002;
var statearr_57038_59615 = state_57002__$1;
(statearr_57038_59615[(2)] = inst_56976);

(statearr_57038_59615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57003 === (8))){
var inst_56982 = (state_57002[(8)]);
var inst_56988 = (state_57002[(2)]);
var state_57002__$1 = (function (){var statearr_57039 = state_57002;
(statearr_57039[(10)] = inst_56988);

return statearr_57039;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57002__$1,(9),results,inst_56982);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0 = (function (){
var statearr_57041 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57041[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__);

(statearr_57041[(1)] = (1));

return statearr_57041;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1 = (function (state_57002){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_57002);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e57046){var ex__55988__auto__ = e57046;
var statearr_57047_59618 = state_57002;
(statearr_57047_59618[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_57002[(4)]))){
var statearr_57049_59619 = state_57002;
(statearr_57049_59619[(1)] = cljs.core.first((state_57002[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59624 = state_57002;
state_57002 = G__59624;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__ = function(state_57002){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1.call(this,state_57002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_57056 = f__56207__auto__();
(statearr_57056[(6)] = c__56206__auto___59607);

return statearr_57056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


var c__56206__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_57107){
var state_val_57108 = (state_57107[(1)]);
if((state_val_57108 === (7))){
var inst_57103 = (state_57107[(2)]);
var state_57107__$1 = state_57107;
var statearr_57113_59625 = state_57107__$1;
(statearr_57113_59625[(2)] = inst_57103);

(statearr_57113_59625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (20))){
var state_57107__$1 = state_57107;
var statearr_57114_59626 = state_57107__$1;
(statearr_57114_59626[(2)] = null);

(statearr_57114_59626[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (1))){
var state_57107__$1 = state_57107;
var statearr_57117_59630 = state_57107__$1;
(statearr_57117_59630[(2)] = null);

(statearr_57117_59630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (4))){
var inst_57068 = (state_57107[(7)]);
var inst_57068__$1 = (state_57107[(2)]);
var inst_57069 = (inst_57068__$1 == null);
var state_57107__$1 = (function (){var statearr_57119 = state_57107;
(statearr_57119[(7)] = inst_57068__$1);

return statearr_57119;
})();
if(cljs.core.truth_(inst_57069)){
var statearr_57122_59631 = state_57107__$1;
(statearr_57122_59631[(1)] = (5));

} else {
var statearr_57126_59632 = state_57107__$1;
(statearr_57126_59632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (15))){
var inst_57081 = (state_57107[(8)]);
var state_57107__$1 = state_57107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57107__$1,(18),to,inst_57081);
} else {
if((state_val_57108 === (21))){
var inst_57098 = (state_57107[(2)]);
var state_57107__$1 = state_57107;
var statearr_57133_59633 = state_57107__$1;
(statearr_57133_59633[(2)] = inst_57098);

(statearr_57133_59633[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (13))){
var inst_57100 = (state_57107[(2)]);
var state_57107__$1 = (function (){var statearr_57137 = state_57107;
(statearr_57137[(9)] = inst_57100);

return statearr_57137;
})();
var statearr_57138_59634 = state_57107__$1;
(statearr_57138_59634[(2)] = null);

(statearr_57138_59634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (6))){
var inst_57068 = (state_57107[(7)]);
var state_57107__$1 = state_57107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57107__$1,(11),inst_57068);
} else {
if((state_val_57108 === (17))){
var inst_57093 = (state_57107[(2)]);
var state_57107__$1 = state_57107;
if(cljs.core.truth_(inst_57093)){
var statearr_57144_59635 = state_57107__$1;
(statearr_57144_59635[(1)] = (19));

} else {
var statearr_57145_59636 = state_57107__$1;
(statearr_57145_59636[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (3))){
var inst_57105 = (state_57107[(2)]);
var state_57107__$1 = state_57107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57107__$1,inst_57105);
} else {
if((state_val_57108 === (12))){
var inst_57078 = (state_57107[(10)]);
var state_57107__$1 = state_57107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57107__$1,(14),inst_57078);
} else {
if((state_val_57108 === (2))){
var state_57107__$1 = state_57107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57107__$1,(4),results);
} else {
if((state_val_57108 === (19))){
var state_57107__$1 = state_57107;
var statearr_57146_59637 = state_57107__$1;
(statearr_57146_59637[(2)] = null);

(statearr_57146_59637[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (11))){
var inst_57078 = (state_57107[(2)]);
var state_57107__$1 = (function (){var statearr_57151 = state_57107;
(statearr_57151[(10)] = inst_57078);

return statearr_57151;
})();
var statearr_57153_59638 = state_57107__$1;
(statearr_57153_59638[(2)] = null);

(statearr_57153_59638[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (9))){
var state_57107__$1 = state_57107;
var statearr_57157_59639 = state_57107__$1;
(statearr_57157_59639[(2)] = null);

(statearr_57157_59639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (5))){
var state_57107__$1 = state_57107;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57159_59641 = state_57107__$1;
(statearr_57159_59641[(1)] = (8));

} else {
var statearr_57162_59643 = state_57107__$1;
(statearr_57162_59643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (14))){
var inst_57081 = (state_57107[(8)]);
var inst_57087 = (state_57107[(11)]);
var inst_57081__$1 = (state_57107[(2)]);
var inst_57086 = (inst_57081__$1 == null);
var inst_57087__$1 = cljs.core.not(inst_57086);
var state_57107__$1 = (function (){var statearr_57165 = state_57107;
(statearr_57165[(8)] = inst_57081__$1);

(statearr_57165[(11)] = inst_57087__$1);

return statearr_57165;
})();
if(inst_57087__$1){
var statearr_57169_59645 = state_57107__$1;
(statearr_57169_59645[(1)] = (15));

} else {
var statearr_57171_59646 = state_57107__$1;
(statearr_57171_59646[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (16))){
var inst_57087 = (state_57107[(11)]);
var state_57107__$1 = state_57107;
var statearr_57175_59647 = state_57107__$1;
(statearr_57175_59647[(2)] = inst_57087);

(statearr_57175_59647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (10))){
var inst_57075 = (state_57107[(2)]);
var state_57107__$1 = state_57107;
var statearr_57182_59648 = state_57107__$1;
(statearr_57182_59648[(2)] = inst_57075);

(statearr_57182_59648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (18))){
var inst_57090 = (state_57107[(2)]);
var state_57107__$1 = state_57107;
var statearr_57186_59649 = state_57107__$1;
(statearr_57186_59649[(2)] = inst_57090);

(statearr_57186_59649[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57108 === (8))){
var inst_57072 = cljs.core.async.close_BANG_(to);
var state_57107__$1 = state_57107;
var statearr_57191_59650 = state_57107__$1;
(statearr_57191_59650[(2)] = inst_57072);

(statearr_57191_59650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0 = (function (){
var statearr_57197 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57197[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__);

(statearr_57197[(1)] = (1));

return statearr_57197;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1 = (function (state_57107){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_57107);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e57200){var ex__55988__auto__ = e57200;
var statearr_57201_59651 = state_57107;
(statearr_57201_59651[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_57107[(4)]))){
var statearr_57202_59652 = state_57107;
(statearr_57202_59652[(1)] = cljs.core.first((state_57107[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59653 = state_57107;
state_57107 = G__59653;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__ = function(state_57107){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1.call(this,state_57107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55985__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_57207 = f__56207__auto__();
(statearr_57207[(6)] = c__56206__auto__);

return statearr_57207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));

return c__56206__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__57217 = arguments.length;
switch (G__57217) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__57240 = arguments.length;
switch (G__57240) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__57275 = arguments.length;
switch (G__57275) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__56206__auto___59673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_57326){
var state_val_57327 = (state_57326[(1)]);
if((state_val_57327 === (7))){
var inst_57322 = (state_57326[(2)]);
var state_57326__$1 = state_57326;
var statearr_57333_59674 = state_57326__$1;
(statearr_57333_59674[(2)] = inst_57322);

(statearr_57333_59674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57327 === (1))){
var state_57326__$1 = state_57326;
var statearr_57335_59679 = state_57326__$1;
(statearr_57335_59679[(2)] = null);

(statearr_57335_59679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57327 === (4))){
var inst_57301 = (state_57326[(7)]);
var inst_57301__$1 = (state_57326[(2)]);
var inst_57302 = (inst_57301__$1 == null);
var state_57326__$1 = (function (){var statearr_57346 = state_57326;
(statearr_57346[(7)] = inst_57301__$1);

return statearr_57346;
})();
if(cljs.core.truth_(inst_57302)){
var statearr_57348_59683 = state_57326__$1;
(statearr_57348_59683[(1)] = (5));

} else {
var statearr_57353_59684 = state_57326__$1;
(statearr_57353_59684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57327 === (13))){
var state_57326__$1 = state_57326;
var statearr_57358_59685 = state_57326__$1;
(statearr_57358_59685[(2)] = null);

(statearr_57358_59685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57327 === (6))){
var inst_57301 = (state_57326[(7)]);
var inst_57307 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57301) : p.call(null,inst_57301));
var state_57326__$1 = state_57326;
if(cljs.core.truth_(inst_57307)){
var statearr_57362_59686 = state_57326__$1;
(statearr_57362_59686[(1)] = (9));

} else {
var statearr_57368_59688 = state_57326__$1;
(statearr_57368_59688[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57327 === (3))){
var inst_57324 = (state_57326[(2)]);
var state_57326__$1 = state_57326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57326__$1,inst_57324);
} else {
if((state_val_57327 === (12))){
var state_57326__$1 = state_57326;
var statearr_57369_59693 = state_57326__$1;
(statearr_57369_59693[(2)] = null);

(statearr_57369_59693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57327 === (2))){
var state_57326__$1 = state_57326;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57326__$1,(4),ch);
} else {
if((state_val_57327 === (11))){
var inst_57301 = (state_57326[(7)]);
var inst_57311 = (state_57326[(2)]);
var state_57326__$1 = state_57326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57326__$1,(8),inst_57311,inst_57301);
} else {
if((state_val_57327 === (9))){
var state_57326__$1 = state_57326;
var statearr_57374_59696 = state_57326__$1;
(statearr_57374_59696[(2)] = tc);

(statearr_57374_59696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57327 === (5))){
var inst_57304 = cljs.core.async.close_BANG_(tc);
var inst_57305 = cljs.core.async.close_BANG_(fc);
var state_57326__$1 = (function (){var statearr_57375 = state_57326;
(statearr_57375[(8)] = inst_57304);

return statearr_57375;
})();
var statearr_57376_59700 = state_57326__$1;
(statearr_57376_59700[(2)] = inst_57305);

(statearr_57376_59700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57327 === (14))){
var inst_57320 = (state_57326[(2)]);
var state_57326__$1 = state_57326;
var statearr_57380_59701 = state_57326__$1;
(statearr_57380_59701[(2)] = inst_57320);

(statearr_57380_59701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57327 === (10))){
var state_57326__$1 = state_57326;
var statearr_57381_59702 = state_57326__$1;
(statearr_57381_59702[(2)] = fc);

(statearr_57381_59702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57327 === (8))){
var inst_57313 = (state_57326[(2)]);
var state_57326__$1 = state_57326;
if(cljs.core.truth_(inst_57313)){
var statearr_57383_59706 = state_57326__$1;
(statearr_57383_59706[(1)] = (12));

} else {
var statearr_57384_59707 = state_57326__$1;
(statearr_57384_59707[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55985__auto__ = null;
var cljs$core$async$state_machine__55985__auto____0 = (function (){
var statearr_57385 = [null,null,null,null,null,null,null,null,null];
(statearr_57385[(0)] = cljs$core$async$state_machine__55985__auto__);

(statearr_57385[(1)] = (1));

return statearr_57385;
});
var cljs$core$async$state_machine__55985__auto____1 = (function (state_57326){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_57326);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e57388){var ex__55988__auto__ = e57388;
var statearr_57389_59708 = state_57326;
(statearr_57389_59708[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_57326[(4)]))){
var statearr_57391_59709 = state_57326;
(statearr_57391_59709[(1)] = cljs.core.first((state_57326[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59710 = state_57326;
state_57326 = G__59710;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$state_machine__55985__auto__ = function(state_57326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55985__auto____1.call(this,state_57326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55985__auto____0;
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55985__auto____1;
return cljs$core$async$state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_57393 = f__56207__auto__();
(statearr_57393[(6)] = c__56206__auto___59673);

return statearr_57393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__56206__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_57423){
var state_val_57424 = (state_57423[(1)]);
if((state_val_57424 === (7))){
var inst_57419 = (state_57423[(2)]);
var state_57423__$1 = state_57423;
var statearr_57433_59719 = state_57423__$1;
(statearr_57433_59719[(2)] = inst_57419);

(statearr_57433_59719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (1))){
var inst_57398 = init;
var inst_57399 = inst_57398;
var state_57423__$1 = (function (){var statearr_57442 = state_57423;
(statearr_57442[(7)] = inst_57399);

return statearr_57442;
})();
var statearr_57443_59721 = state_57423__$1;
(statearr_57443_59721[(2)] = null);

(statearr_57443_59721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (4))){
var inst_57403 = (state_57423[(8)]);
var inst_57403__$1 = (state_57423[(2)]);
var inst_57405 = (inst_57403__$1 == null);
var state_57423__$1 = (function (){var statearr_57444 = state_57423;
(statearr_57444[(8)] = inst_57403__$1);

return statearr_57444;
})();
if(cljs.core.truth_(inst_57405)){
var statearr_57445_59723 = state_57423__$1;
(statearr_57445_59723[(1)] = (5));

} else {
var statearr_57446_59724 = state_57423__$1;
(statearr_57446_59724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (6))){
var inst_57399 = (state_57423[(7)]);
var inst_57403 = (state_57423[(8)]);
var inst_57410 = (state_57423[(9)]);
var inst_57410__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_57399,inst_57403) : f.call(null,inst_57399,inst_57403));
var inst_57411 = cljs.core.reduced_QMARK_(inst_57410__$1);
var state_57423__$1 = (function (){var statearr_57447 = state_57423;
(statearr_57447[(9)] = inst_57410__$1);

return statearr_57447;
})();
if(inst_57411){
var statearr_57448_59725 = state_57423__$1;
(statearr_57448_59725[(1)] = (8));

} else {
var statearr_57449_59726 = state_57423__$1;
(statearr_57449_59726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (3))){
var inst_57421 = (state_57423[(2)]);
var state_57423__$1 = state_57423;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57423__$1,inst_57421);
} else {
if((state_val_57424 === (2))){
var state_57423__$1 = state_57423;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57423__$1,(4),ch);
} else {
if((state_val_57424 === (9))){
var inst_57410 = (state_57423[(9)]);
var inst_57399 = inst_57410;
var state_57423__$1 = (function (){var statearr_57450 = state_57423;
(statearr_57450[(7)] = inst_57399);

return statearr_57450;
})();
var statearr_57451_59727 = state_57423__$1;
(statearr_57451_59727[(2)] = null);

(statearr_57451_59727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (5))){
var inst_57399 = (state_57423[(7)]);
var state_57423__$1 = state_57423;
var statearr_57452_59728 = state_57423__$1;
(statearr_57452_59728[(2)] = inst_57399);

(statearr_57452_59728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (10))){
var inst_57417 = (state_57423[(2)]);
var state_57423__$1 = state_57423;
var statearr_57455_59729 = state_57423__$1;
(statearr_57455_59729[(2)] = inst_57417);

(statearr_57455_59729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (8))){
var inst_57410 = (state_57423[(9)]);
var inst_57413 = cljs.core.deref(inst_57410);
var state_57423__$1 = state_57423;
var statearr_57456_59730 = state_57423__$1;
(statearr_57456_59730[(2)] = inst_57413);

(statearr_57456_59730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__55985__auto__ = null;
var cljs$core$async$reduce_$_state_machine__55985__auto____0 = (function (){
var statearr_57457 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57457[(0)] = cljs$core$async$reduce_$_state_machine__55985__auto__);

(statearr_57457[(1)] = (1));

return statearr_57457;
});
var cljs$core$async$reduce_$_state_machine__55985__auto____1 = (function (state_57423){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_57423);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e57458){var ex__55988__auto__ = e57458;
var statearr_57459_59734 = state_57423;
(statearr_57459_59734[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_57423[(4)]))){
var statearr_57460_59735 = state_57423;
(statearr_57460_59735[(1)] = cljs.core.first((state_57423[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59736 = state_57423;
state_57423 = G__59736;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__55985__auto__ = function(state_57423){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__55985__auto____1.call(this,state_57423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__55985__auto____0;
cljs$core$async$reduce_$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__55985__auto____1;
return cljs$core$async$reduce_$_state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_57461 = f__56207__auto__();
(statearr_57461[(6)] = c__56206__auto__);

return statearr_57461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));

return c__56206__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__56206__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_57467){
var state_val_57468 = (state_57467[(1)]);
if((state_val_57468 === (1))){
var inst_57462 = cljs.core.async.reduce(f__$1,init,ch);
var state_57467__$1 = state_57467;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57467__$1,(2),inst_57462);
} else {
if((state_val_57468 === (2))){
var inst_57464 = (state_57467[(2)]);
var inst_57465 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_57464) : f__$1.call(null,inst_57464));
var state_57467__$1 = state_57467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57467__$1,inst_57465);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__55985__auto__ = null;
var cljs$core$async$transduce_$_state_machine__55985__auto____0 = (function (){
var statearr_57469 = [null,null,null,null,null,null,null];
(statearr_57469[(0)] = cljs$core$async$transduce_$_state_machine__55985__auto__);

(statearr_57469[(1)] = (1));

return statearr_57469;
});
var cljs$core$async$transduce_$_state_machine__55985__auto____1 = (function (state_57467){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_57467);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e57470){var ex__55988__auto__ = e57470;
var statearr_57471_59737 = state_57467;
(statearr_57471_59737[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_57467[(4)]))){
var statearr_57472_59738 = state_57467;
(statearr_57472_59738[(1)] = cljs.core.first((state_57467[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59743 = state_57467;
state_57467 = G__59743;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__55985__auto__ = function(state_57467){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__55985__auto____1.call(this,state_57467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__55985__auto____0;
cljs$core$async$transduce_$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__55985__auto____1;
return cljs$core$async$transduce_$_state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_57476 = f__56207__auto__();
(statearr_57476[(6)] = c__56206__auto__);

return statearr_57476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));

return c__56206__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__57479 = arguments.length;
switch (G__57479) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__56206__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_57505){
var state_val_57506 = (state_57505[(1)]);
if((state_val_57506 === (7))){
var inst_57487 = (state_57505[(2)]);
var state_57505__$1 = state_57505;
var statearr_57509_59747 = state_57505__$1;
(statearr_57509_59747[(2)] = inst_57487);

(statearr_57509_59747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57506 === (1))){
var inst_57481 = cljs.core.seq(coll);
var inst_57482 = inst_57481;
var state_57505__$1 = (function (){var statearr_57510 = state_57505;
(statearr_57510[(7)] = inst_57482);

return statearr_57510;
})();
var statearr_57511_59751 = state_57505__$1;
(statearr_57511_59751[(2)] = null);

(statearr_57511_59751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57506 === (4))){
var inst_57482 = (state_57505[(7)]);
var inst_57485 = cljs.core.first(inst_57482);
var state_57505__$1 = state_57505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57505__$1,(7),ch,inst_57485);
} else {
if((state_val_57506 === (13))){
var inst_57499 = (state_57505[(2)]);
var state_57505__$1 = state_57505;
var statearr_57516_59753 = state_57505__$1;
(statearr_57516_59753[(2)] = inst_57499);

(statearr_57516_59753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57506 === (6))){
var inst_57490 = (state_57505[(2)]);
var state_57505__$1 = state_57505;
if(cljs.core.truth_(inst_57490)){
var statearr_57520_59754 = state_57505__$1;
(statearr_57520_59754[(1)] = (8));

} else {
var statearr_57521_59756 = state_57505__$1;
(statearr_57521_59756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57506 === (3))){
var inst_57503 = (state_57505[(2)]);
var state_57505__$1 = state_57505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57505__$1,inst_57503);
} else {
if((state_val_57506 === (12))){
var state_57505__$1 = state_57505;
var statearr_57532_59758 = state_57505__$1;
(statearr_57532_59758[(2)] = null);

(statearr_57532_59758[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57506 === (2))){
var inst_57482 = (state_57505[(7)]);
var state_57505__$1 = state_57505;
if(cljs.core.truth_(inst_57482)){
var statearr_57541_59759 = state_57505__$1;
(statearr_57541_59759[(1)] = (4));

} else {
var statearr_57543_59760 = state_57505__$1;
(statearr_57543_59760[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57506 === (11))){
var inst_57496 = cljs.core.async.close_BANG_(ch);
var state_57505__$1 = state_57505;
var statearr_57550_59761 = state_57505__$1;
(statearr_57550_59761[(2)] = inst_57496);

(statearr_57550_59761[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57506 === (9))){
var state_57505__$1 = state_57505;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57551_59762 = state_57505__$1;
(statearr_57551_59762[(1)] = (11));

} else {
var statearr_57552_59763 = state_57505__$1;
(statearr_57552_59763[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57506 === (5))){
var inst_57482 = (state_57505[(7)]);
var state_57505__$1 = state_57505;
var statearr_57553_59764 = state_57505__$1;
(statearr_57553_59764[(2)] = inst_57482);

(statearr_57553_59764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57506 === (10))){
var inst_57501 = (state_57505[(2)]);
var state_57505__$1 = state_57505;
var statearr_57555_59765 = state_57505__$1;
(statearr_57555_59765[(2)] = inst_57501);

(statearr_57555_59765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57506 === (8))){
var inst_57482 = (state_57505[(7)]);
var inst_57492 = cljs.core.next(inst_57482);
var inst_57482__$1 = inst_57492;
var state_57505__$1 = (function (){var statearr_57561 = state_57505;
(statearr_57561[(7)] = inst_57482__$1);

return statearr_57561;
})();
var statearr_57562_59766 = state_57505__$1;
(statearr_57562_59766[(2)] = null);

(statearr_57562_59766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55985__auto__ = null;
var cljs$core$async$state_machine__55985__auto____0 = (function (){
var statearr_57565 = [null,null,null,null,null,null,null,null];
(statearr_57565[(0)] = cljs$core$async$state_machine__55985__auto__);

(statearr_57565[(1)] = (1));

return statearr_57565;
});
var cljs$core$async$state_machine__55985__auto____1 = (function (state_57505){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_57505);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e57566){var ex__55988__auto__ = e57566;
var statearr_57567_59771 = state_57505;
(statearr_57567_59771[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_57505[(4)]))){
var statearr_57570_59772 = state_57505;
(statearr_57570_59772[(1)] = cljs.core.first((state_57505[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59773 = state_57505;
state_57505 = G__59773;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$state_machine__55985__auto__ = function(state_57505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55985__auto____1.call(this,state_57505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55985__auto____0;
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55985__auto____1;
return cljs$core$async$state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_57575 = f__56207__auto__();
(statearr_57575[(6)] = c__56206__auto__);

return statearr_57575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));

return c__56206__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__57607 = arguments.length;
switch (G__57607) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_59806 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_59806(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_59813 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_59813(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_59814 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_59814(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_59829 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_59829(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57704 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57704 = (function (ch,cs,meta57705){
this.ch = ch;
this.cs = cs;
this.meta57705 = meta57705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57706,meta57705__$1){
var self__ = this;
var _57706__$1 = this;
return (new cljs.core.async.t_cljs$core$async57704(self__.ch,self__.cs,meta57705__$1));
}));

(cljs.core.async.t_cljs$core$async57704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57706){
var self__ = this;
var _57706__$1 = this;
return self__.meta57705;
}));

(cljs.core.async.t_cljs$core$async57704.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57704.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57704.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async57704.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async57704.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async57704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57705","meta57705",247506079,null)], null);
}));

(cljs.core.async.t_cljs$core$async57704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57704");

(cljs.core.async.t_cljs$core$async57704.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async57704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57704.
 */
cljs.core.async.__GT_t_cljs$core$async57704 = (function cljs$core$async$mult_$___GT_t_cljs$core$async57704(ch__$1,cs__$1,meta57705){
return (new cljs.core.async.t_cljs$core$async57704(ch__$1,cs__$1,meta57705));
});

}

return (new cljs.core.async.t_cljs$core$async57704(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__56206__auto___59844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_57882){
var state_val_57883 = (state_57882[(1)]);
if((state_val_57883 === (7))){
var inst_57877 = (state_57882[(2)]);
var state_57882__$1 = state_57882;
var statearr_57884_59845 = state_57882__$1;
(statearr_57884_59845[(2)] = inst_57877);

(statearr_57884_59845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (20))){
var inst_57766 = (state_57882[(7)]);
var inst_57780 = cljs.core.first(inst_57766);
var inst_57781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57780,(0),null);
var inst_57782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57780,(1),null);
var state_57882__$1 = (function (){var statearr_57886 = state_57882;
(statearr_57886[(8)] = inst_57781);

return statearr_57886;
})();
if(cljs.core.truth_(inst_57782)){
var statearr_57887_59847 = state_57882__$1;
(statearr_57887_59847[(1)] = (22));

} else {
var statearr_57888_59848 = state_57882__$1;
(statearr_57888_59848[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (27))){
var inst_57733 = (state_57882[(9)]);
var inst_57823 = (state_57882[(10)]);
var inst_57813 = (state_57882[(11)]);
var inst_57815 = (state_57882[(12)]);
var inst_57823__$1 = cljs.core._nth(inst_57813,inst_57815);
var inst_57826 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57823__$1,inst_57733,done);
var state_57882__$1 = (function (){var statearr_57890 = state_57882;
(statearr_57890[(10)] = inst_57823__$1);

return statearr_57890;
})();
if(cljs.core.truth_(inst_57826)){
var statearr_57891_59855 = state_57882__$1;
(statearr_57891_59855[(1)] = (30));

} else {
var statearr_57892_59856 = state_57882__$1;
(statearr_57892_59856[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (1))){
var state_57882__$1 = state_57882;
var statearr_57893_59857 = state_57882__$1;
(statearr_57893_59857[(2)] = null);

(statearr_57893_59857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (24))){
var inst_57766 = (state_57882[(7)]);
var inst_57787 = (state_57882[(2)]);
var inst_57788 = cljs.core.next(inst_57766);
var inst_57742 = inst_57788;
var inst_57743 = null;
var inst_57744 = (0);
var inst_57745 = (0);
var state_57882__$1 = (function (){var statearr_57895 = state_57882;
(statearr_57895[(13)] = inst_57743);

(statearr_57895[(14)] = inst_57787);

(statearr_57895[(15)] = inst_57744);

(statearr_57895[(16)] = inst_57742);

(statearr_57895[(17)] = inst_57745);

return statearr_57895;
})();
var statearr_57896_59858 = state_57882__$1;
(statearr_57896_59858[(2)] = null);

(statearr_57896_59858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (39))){
var state_57882__$1 = state_57882;
var statearr_57900_59859 = state_57882__$1;
(statearr_57900_59859[(2)] = null);

(statearr_57900_59859[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (4))){
var inst_57733 = (state_57882[(9)]);
var inst_57733__$1 = (state_57882[(2)]);
var inst_57734 = (inst_57733__$1 == null);
var state_57882__$1 = (function (){var statearr_57901 = state_57882;
(statearr_57901[(9)] = inst_57733__$1);

return statearr_57901;
})();
if(cljs.core.truth_(inst_57734)){
var statearr_57902_59863 = state_57882__$1;
(statearr_57902_59863[(1)] = (5));

} else {
var statearr_57903_59864 = state_57882__$1;
(statearr_57903_59864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (15))){
var inst_57743 = (state_57882[(13)]);
var inst_57744 = (state_57882[(15)]);
var inst_57742 = (state_57882[(16)]);
var inst_57745 = (state_57882[(17)]);
var inst_57762 = (state_57882[(2)]);
var inst_57763 = (inst_57745 + (1));
var tmp57897 = inst_57743;
var tmp57898 = inst_57744;
var tmp57899 = inst_57742;
var inst_57742__$1 = tmp57899;
var inst_57743__$1 = tmp57897;
var inst_57744__$1 = tmp57898;
var inst_57745__$1 = inst_57763;
var state_57882__$1 = (function (){var statearr_57905 = state_57882;
(statearr_57905[(13)] = inst_57743__$1);

(statearr_57905[(15)] = inst_57744__$1);

(statearr_57905[(16)] = inst_57742__$1);

(statearr_57905[(18)] = inst_57762);

(statearr_57905[(17)] = inst_57745__$1);

return statearr_57905;
})();
var statearr_57906_59865 = state_57882__$1;
(statearr_57906_59865[(2)] = null);

(statearr_57906_59865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (21))){
var inst_57791 = (state_57882[(2)]);
var state_57882__$1 = state_57882;
var statearr_57910_59866 = state_57882__$1;
(statearr_57910_59866[(2)] = inst_57791);

(statearr_57910_59866[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (31))){
var inst_57823 = (state_57882[(10)]);
var inst_57829 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57823);
var state_57882__$1 = state_57882;
var statearr_57917_59867 = state_57882__$1;
(statearr_57917_59867[(2)] = inst_57829);

(statearr_57917_59867[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (32))){
var inst_57812 = (state_57882[(19)]);
var inst_57813 = (state_57882[(11)]);
var inst_57815 = (state_57882[(12)]);
var inst_57814 = (state_57882[(20)]);
var inst_57831 = (state_57882[(2)]);
var inst_57832 = (inst_57815 + (1));
var tmp57907 = inst_57812;
var tmp57908 = inst_57813;
var tmp57909 = inst_57814;
var inst_57812__$1 = tmp57907;
var inst_57813__$1 = tmp57908;
var inst_57814__$1 = tmp57909;
var inst_57815__$1 = inst_57832;
var state_57882__$1 = (function (){var statearr_57926 = state_57882;
(statearr_57926[(19)] = inst_57812__$1);

(statearr_57926[(21)] = inst_57831);

(statearr_57926[(11)] = inst_57813__$1);

(statearr_57926[(12)] = inst_57815__$1);

(statearr_57926[(20)] = inst_57814__$1);

return statearr_57926;
})();
var statearr_57931_59874 = state_57882__$1;
(statearr_57931_59874[(2)] = null);

(statearr_57931_59874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (40))){
var inst_57844 = (state_57882[(22)]);
var inst_57848 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57844);
var state_57882__$1 = state_57882;
var statearr_57943_59875 = state_57882__$1;
(statearr_57943_59875[(2)] = inst_57848);

(statearr_57943_59875[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (33))){
var inst_57835 = (state_57882[(23)]);
var inst_57837 = cljs.core.chunked_seq_QMARK_(inst_57835);
var state_57882__$1 = state_57882;
if(inst_57837){
var statearr_57946_59876 = state_57882__$1;
(statearr_57946_59876[(1)] = (36));

} else {
var statearr_57951_59877 = state_57882__$1;
(statearr_57951_59877[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (13))){
var inst_57756 = (state_57882[(24)]);
var inst_57759 = cljs.core.async.close_BANG_(inst_57756);
var state_57882__$1 = state_57882;
var statearr_57956_59878 = state_57882__$1;
(statearr_57956_59878[(2)] = inst_57759);

(statearr_57956_59878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (22))){
var inst_57781 = (state_57882[(8)]);
var inst_57784 = cljs.core.async.close_BANG_(inst_57781);
var state_57882__$1 = state_57882;
var statearr_57959_59879 = state_57882__$1;
(statearr_57959_59879[(2)] = inst_57784);

(statearr_57959_59879[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (36))){
var inst_57835 = (state_57882[(23)]);
var inst_57839 = cljs.core.chunk_first(inst_57835);
var inst_57840 = cljs.core.chunk_rest(inst_57835);
var inst_57841 = cljs.core.count(inst_57839);
var inst_57812 = inst_57840;
var inst_57813 = inst_57839;
var inst_57814 = inst_57841;
var inst_57815 = (0);
var state_57882__$1 = (function (){var statearr_57967 = state_57882;
(statearr_57967[(19)] = inst_57812);

(statearr_57967[(11)] = inst_57813);

(statearr_57967[(12)] = inst_57815);

(statearr_57967[(20)] = inst_57814);

return statearr_57967;
})();
var statearr_57968_59880 = state_57882__$1;
(statearr_57968_59880[(2)] = null);

(statearr_57968_59880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (41))){
var inst_57835 = (state_57882[(23)]);
var inst_57850 = (state_57882[(2)]);
var inst_57851 = cljs.core.next(inst_57835);
var inst_57812 = inst_57851;
var inst_57813 = null;
var inst_57814 = (0);
var inst_57815 = (0);
var state_57882__$1 = (function (){var statearr_57973 = state_57882;
(statearr_57973[(25)] = inst_57850);

(statearr_57973[(19)] = inst_57812);

(statearr_57973[(11)] = inst_57813);

(statearr_57973[(12)] = inst_57815);

(statearr_57973[(20)] = inst_57814);

return statearr_57973;
})();
var statearr_57978_59881 = state_57882__$1;
(statearr_57978_59881[(2)] = null);

(statearr_57978_59881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (43))){
var state_57882__$1 = state_57882;
var statearr_57980_59882 = state_57882__$1;
(statearr_57980_59882[(2)] = null);

(statearr_57980_59882[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (29))){
var inst_57859 = (state_57882[(2)]);
var state_57882__$1 = state_57882;
var statearr_57983_59883 = state_57882__$1;
(statearr_57983_59883[(2)] = inst_57859);

(statearr_57983_59883[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (44))){
var inst_57869 = (state_57882[(2)]);
var state_57882__$1 = (function (){var statearr_57989 = state_57882;
(statearr_57989[(26)] = inst_57869);

return statearr_57989;
})();
var statearr_57992_59884 = state_57882__$1;
(statearr_57992_59884[(2)] = null);

(statearr_57992_59884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (6))){
var inst_57801 = (state_57882[(27)]);
var inst_57800 = cljs.core.deref(cs);
var inst_57801__$1 = cljs.core.keys(inst_57800);
var inst_57802 = cljs.core.count(inst_57801__$1);
var inst_57803 = cljs.core.reset_BANG_(dctr,inst_57802);
var inst_57811 = cljs.core.seq(inst_57801__$1);
var inst_57812 = inst_57811;
var inst_57813 = null;
var inst_57814 = (0);
var inst_57815 = (0);
var state_57882__$1 = (function (){var statearr_58001 = state_57882;
(statearr_58001[(27)] = inst_57801__$1);

(statearr_58001[(19)] = inst_57812);

(statearr_58001[(28)] = inst_57803);

(statearr_58001[(11)] = inst_57813);

(statearr_58001[(12)] = inst_57815);

(statearr_58001[(20)] = inst_57814);

return statearr_58001;
})();
var statearr_58006_59885 = state_57882__$1;
(statearr_58006_59885[(2)] = null);

(statearr_58006_59885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (28))){
var inst_57835 = (state_57882[(23)]);
var inst_57812 = (state_57882[(19)]);
var inst_57835__$1 = cljs.core.seq(inst_57812);
var state_57882__$1 = (function (){var statearr_58008 = state_57882;
(statearr_58008[(23)] = inst_57835__$1);

return statearr_58008;
})();
if(inst_57835__$1){
var statearr_58009_59886 = state_57882__$1;
(statearr_58009_59886[(1)] = (33));

} else {
var statearr_58010_59887 = state_57882__$1;
(statearr_58010_59887[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (25))){
var inst_57815 = (state_57882[(12)]);
var inst_57814 = (state_57882[(20)]);
var inst_57817 = (inst_57815 < inst_57814);
var inst_57818 = inst_57817;
var state_57882__$1 = state_57882;
if(cljs.core.truth_(inst_57818)){
var statearr_58014_59888 = state_57882__$1;
(statearr_58014_59888[(1)] = (27));

} else {
var statearr_58015_59889 = state_57882__$1;
(statearr_58015_59889[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (34))){
var state_57882__$1 = state_57882;
var statearr_58031_59890 = state_57882__$1;
(statearr_58031_59890[(2)] = null);

(statearr_58031_59890[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (17))){
var state_57882__$1 = state_57882;
var statearr_58040_59891 = state_57882__$1;
(statearr_58040_59891[(2)] = null);

(statearr_58040_59891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (3))){
var inst_57879 = (state_57882[(2)]);
var state_57882__$1 = state_57882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57882__$1,inst_57879);
} else {
if((state_val_57883 === (12))){
var inst_57796 = (state_57882[(2)]);
var state_57882__$1 = state_57882;
var statearr_58042_59893 = state_57882__$1;
(statearr_58042_59893[(2)] = inst_57796);

(statearr_58042_59893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (2))){
var state_57882__$1 = state_57882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57882__$1,(4),ch);
} else {
if((state_val_57883 === (23))){
var state_57882__$1 = state_57882;
var statearr_58047_59898 = state_57882__$1;
(statearr_58047_59898[(2)] = null);

(statearr_58047_59898[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (35))){
var inst_57857 = (state_57882[(2)]);
var state_57882__$1 = state_57882;
var statearr_58049_59899 = state_57882__$1;
(statearr_58049_59899[(2)] = inst_57857);

(statearr_58049_59899[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (19))){
var inst_57766 = (state_57882[(7)]);
var inst_57771 = cljs.core.chunk_first(inst_57766);
var inst_57772 = cljs.core.chunk_rest(inst_57766);
var inst_57774 = cljs.core.count(inst_57771);
var inst_57742 = inst_57772;
var inst_57743 = inst_57771;
var inst_57744 = inst_57774;
var inst_57745 = (0);
var state_57882__$1 = (function (){var statearr_58050 = state_57882;
(statearr_58050[(13)] = inst_57743);

(statearr_58050[(15)] = inst_57744);

(statearr_58050[(16)] = inst_57742);

(statearr_58050[(17)] = inst_57745);

return statearr_58050;
})();
var statearr_58054_59900 = state_57882__$1;
(statearr_58054_59900[(2)] = null);

(statearr_58054_59900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (11))){
var inst_57766 = (state_57882[(7)]);
var inst_57742 = (state_57882[(16)]);
var inst_57766__$1 = cljs.core.seq(inst_57742);
var state_57882__$1 = (function (){var statearr_58056 = state_57882;
(statearr_58056[(7)] = inst_57766__$1);

return statearr_58056;
})();
if(inst_57766__$1){
var statearr_58057_59903 = state_57882__$1;
(statearr_58057_59903[(1)] = (16));

} else {
var statearr_58059_59905 = state_57882__$1;
(statearr_58059_59905[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (9))){
var inst_57798 = (state_57882[(2)]);
var state_57882__$1 = state_57882;
var statearr_58060_59907 = state_57882__$1;
(statearr_58060_59907[(2)] = inst_57798);

(statearr_58060_59907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (5))){
var inst_57740 = cljs.core.deref(cs);
var inst_57741 = cljs.core.seq(inst_57740);
var inst_57742 = inst_57741;
var inst_57743 = null;
var inst_57744 = (0);
var inst_57745 = (0);
var state_57882__$1 = (function (){var statearr_58061 = state_57882;
(statearr_58061[(13)] = inst_57743);

(statearr_58061[(15)] = inst_57744);

(statearr_58061[(16)] = inst_57742);

(statearr_58061[(17)] = inst_57745);

return statearr_58061;
})();
var statearr_58066_59910 = state_57882__$1;
(statearr_58066_59910[(2)] = null);

(statearr_58066_59910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (14))){
var state_57882__$1 = state_57882;
var statearr_58070_59913 = state_57882__$1;
(statearr_58070_59913[(2)] = null);

(statearr_58070_59913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (45))){
var inst_57865 = (state_57882[(2)]);
var state_57882__$1 = state_57882;
var statearr_58071_59914 = state_57882__$1;
(statearr_58071_59914[(2)] = inst_57865);

(statearr_58071_59914[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (26))){
var inst_57801 = (state_57882[(27)]);
var inst_57861 = (state_57882[(2)]);
var inst_57862 = cljs.core.seq(inst_57801);
var state_57882__$1 = (function (){var statearr_58073 = state_57882;
(statearr_58073[(29)] = inst_57861);

return statearr_58073;
})();
if(inst_57862){
var statearr_58074_59918 = state_57882__$1;
(statearr_58074_59918[(1)] = (42));

} else {
var statearr_58076_59919 = state_57882__$1;
(statearr_58076_59919[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (16))){
var inst_57766 = (state_57882[(7)]);
var inst_57768 = cljs.core.chunked_seq_QMARK_(inst_57766);
var state_57882__$1 = state_57882;
if(inst_57768){
var statearr_58080_59921 = state_57882__$1;
(statearr_58080_59921[(1)] = (19));

} else {
var statearr_58081_59922 = state_57882__$1;
(statearr_58081_59922[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (38))){
var inst_57854 = (state_57882[(2)]);
var state_57882__$1 = state_57882;
var statearr_58082_59924 = state_57882__$1;
(statearr_58082_59924[(2)] = inst_57854);

(statearr_58082_59924[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (30))){
var state_57882__$1 = state_57882;
var statearr_58083_59928 = state_57882__$1;
(statearr_58083_59928[(2)] = null);

(statearr_58083_59928[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (10))){
var inst_57743 = (state_57882[(13)]);
var inst_57745 = (state_57882[(17)]);
var inst_57755 = cljs.core._nth(inst_57743,inst_57745);
var inst_57756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57755,(0),null);
var inst_57757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57755,(1),null);
var state_57882__$1 = (function (){var statearr_58084 = state_57882;
(statearr_58084[(24)] = inst_57756);

return statearr_58084;
})();
if(cljs.core.truth_(inst_57757)){
var statearr_58085_59936 = state_57882__$1;
(statearr_58085_59936[(1)] = (13));

} else {
var statearr_58086_59938 = state_57882__$1;
(statearr_58086_59938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (18))){
var inst_57794 = (state_57882[(2)]);
var state_57882__$1 = state_57882;
var statearr_58090_59940 = state_57882__$1;
(statearr_58090_59940[(2)] = inst_57794);

(statearr_58090_59940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (42))){
var state_57882__$1 = state_57882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57882__$1,(45),dchan);
} else {
if((state_val_57883 === (37))){
var inst_57733 = (state_57882[(9)]);
var inst_57835 = (state_57882[(23)]);
var inst_57844 = (state_57882[(22)]);
var inst_57844__$1 = cljs.core.first(inst_57835);
var inst_57845 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57844__$1,inst_57733,done);
var state_57882__$1 = (function (){var statearr_58092 = state_57882;
(statearr_58092[(22)] = inst_57844__$1);

return statearr_58092;
})();
if(cljs.core.truth_(inst_57845)){
var statearr_58093_59947 = state_57882__$1;
(statearr_58093_59947[(1)] = (39));

} else {
var statearr_58094_59948 = state_57882__$1;
(statearr_58094_59948[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57883 === (8))){
var inst_57744 = (state_57882[(15)]);
var inst_57745 = (state_57882[(17)]);
var inst_57749 = (inst_57745 < inst_57744);
var inst_57750 = inst_57749;
var state_57882__$1 = state_57882;
if(cljs.core.truth_(inst_57750)){
var statearr_58095_59950 = state_57882__$1;
(statearr_58095_59950[(1)] = (10));

} else {
var statearr_58097_59951 = state_57882__$1;
(statearr_58097_59951[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__55985__auto__ = null;
var cljs$core$async$mult_$_state_machine__55985__auto____0 = (function (){
var statearr_58104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58104[(0)] = cljs$core$async$mult_$_state_machine__55985__auto__);

(statearr_58104[(1)] = (1));

return statearr_58104;
});
var cljs$core$async$mult_$_state_machine__55985__auto____1 = (function (state_57882){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_57882);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e58110){var ex__55988__auto__ = e58110;
var statearr_58111_59956 = state_57882;
(statearr_58111_59956[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_57882[(4)]))){
var statearr_58118_59957 = state_57882;
(statearr_58118_59957[(1)] = cljs.core.first((state_57882[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59958 = state_57882;
state_57882 = G__59958;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__55985__auto__ = function(state_57882){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__55985__auto____1.call(this,state_57882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__55985__auto____0;
cljs$core$async$mult_$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__55985__auto____1;
return cljs$core$async$mult_$_state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_58127 = f__56207__auto__();
(statearr_58127[(6)] = c__56206__auto___59844);

return statearr_58127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__58130 = arguments.length;
switch (G__58130) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_59965 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_59965(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_59968 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_59968(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_59970 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_59970(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_59973 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_59973(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_59979 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_59979(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___59986 = arguments.length;
var i__4819__auto___59987 = (0);
while(true){
if((i__4819__auto___59987 < len__4818__auto___59986)){
args__4824__auto__.push((arguments[i__4819__auto___59987]));

var G__59988 = (i__4819__auto___59987 + (1));
i__4819__auto___59987 = G__59988;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__58169){
var map__58170 = p__58169;
var map__58170__$1 = cljs.core.__destructure_map(map__58170);
var opts = map__58170__$1;
var statearr_58171_59989 = state;
(statearr_58171_59989[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_58173_59990 = state;
(statearr_58173_59990[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_58174_59992 = state;
(statearr_58174_59992[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq58165){
var G__58166 = cljs.core.first(seq58165);
var seq58165__$1 = cljs.core.next(seq58165);
var G__58167 = cljs.core.first(seq58165__$1);
var seq58165__$2 = cljs.core.next(seq58165__$1);
var G__58168 = cljs.core.first(seq58165__$2);
var seq58165__$3 = cljs.core.next(seq58165__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58166,G__58167,G__58168,seq58165__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58180 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta58181){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta58181 = meta58181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58182,meta58181__$1){
var self__ = this;
var _58182__$1 = this;
return (new cljs.core.async.t_cljs$core$async58180(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta58181__$1));
}));

(cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58182){
var self__ = this;
var _58182__$1 = this;
return self__.meta58181;
}));

(cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58180.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async58180.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta58181","meta58181",1396627769,null)], null);
}));

(cljs.core.async.t_cljs$core$async58180.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58180");

(cljs.core.async.t_cljs$core$async58180.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async58180");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58180.
 */
cljs.core.async.__GT_t_cljs$core$async58180 = (function cljs$core$async$mix_$___GT_t_cljs$core$async58180(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta58181){
return (new cljs.core.async.t_cljs$core$async58180(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta58181));
});

}

return (new cljs.core.async.t_cljs$core$async58180(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56206__auto___60023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_58256){
var state_val_58257 = (state_58256[(1)]);
if((state_val_58257 === (7))){
var inst_58214 = (state_58256[(2)]);
var state_58256__$1 = state_58256;
if(cljs.core.truth_(inst_58214)){
var statearr_58258_60024 = state_58256__$1;
(statearr_58258_60024[(1)] = (8));

} else {
var statearr_58259_60025 = state_58256__$1;
(statearr_58259_60025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (20))){
var inst_58207 = (state_58256[(7)]);
var state_58256__$1 = state_58256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58256__$1,(23),out,inst_58207);
} else {
if((state_val_58257 === (1))){
var inst_58190 = calc_state();
var inst_58191 = cljs.core.__destructure_map(inst_58190);
var inst_58192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58191,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58191,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58191,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_58195 = inst_58190;
var state_58256__$1 = (function (){var statearr_58261 = state_58256;
(statearr_58261[(8)] = inst_58192);

(statearr_58261[(9)] = inst_58193);

(statearr_58261[(10)] = inst_58194);

(statearr_58261[(11)] = inst_58195);

return statearr_58261;
})();
var statearr_58262_60030 = state_58256__$1;
(statearr_58262_60030[(2)] = null);

(statearr_58262_60030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (24))){
var inst_58198 = (state_58256[(12)]);
var inst_58195 = inst_58198;
var state_58256__$1 = (function (){var statearr_58263 = state_58256;
(statearr_58263[(11)] = inst_58195);

return statearr_58263;
})();
var statearr_58264_60036 = state_58256__$1;
(statearr_58264_60036[(2)] = null);

(statearr_58264_60036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (4))){
var inst_58209 = (state_58256[(13)]);
var inst_58207 = (state_58256[(7)]);
var inst_58206 = (state_58256[(2)]);
var inst_58207__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58206,(0),null);
var inst_58208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58206,(1),null);
var inst_58209__$1 = (inst_58207__$1 == null);
var state_58256__$1 = (function (){var statearr_58266 = state_58256;
(statearr_58266[(13)] = inst_58209__$1);

(statearr_58266[(14)] = inst_58208);

(statearr_58266[(7)] = inst_58207__$1);

return statearr_58266;
})();
if(cljs.core.truth_(inst_58209__$1)){
var statearr_58267_60037 = state_58256__$1;
(statearr_58267_60037[(1)] = (5));

} else {
var statearr_58268_60038 = state_58256__$1;
(statearr_58268_60038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (15))){
var inst_58229 = (state_58256[(15)]);
var inst_58199 = (state_58256[(16)]);
var inst_58229__$1 = cljs.core.empty_QMARK_(inst_58199);
var state_58256__$1 = (function (){var statearr_58269 = state_58256;
(statearr_58269[(15)] = inst_58229__$1);

return statearr_58269;
})();
if(inst_58229__$1){
var statearr_58270_60039 = state_58256__$1;
(statearr_58270_60039[(1)] = (17));

} else {
var statearr_58271_60040 = state_58256__$1;
(statearr_58271_60040[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (21))){
var inst_58198 = (state_58256[(12)]);
var inst_58195 = inst_58198;
var state_58256__$1 = (function (){var statearr_58272 = state_58256;
(statearr_58272[(11)] = inst_58195);

return statearr_58272;
})();
var statearr_58273_60041 = state_58256__$1;
(statearr_58273_60041[(2)] = null);

(statearr_58273_60041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (13))){
var inst_58221 = (state_58256[(2)]);
var inst_58222 = calc_state();
var inst_58195 = inst_58222;
var state_58256__$1 = (function (){var statearr_58274 = state_58256;
(statearr_58274[(17)] = inst_58221);

(statearr_58274[(11)] = inst_58195);

return statearr_58274;
})();
var statearr_58277_60042 = state_58256__$1;
(statearr_58277_60042[(2)] = null);

(statearr_58277_60042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (22))){
var inst_58249 = (state_58256[(2)]);
var state_58256__$1 = state_58256;
var statearr_58280_60044 = state_58256__$1;
(statearr_58280_60044[(2)] = inst_58249);

(statearr_58280_60044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (6))){
var inst_58208 = (state_58256[(14)]);
var inst_58212 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58208,change);
var state_58256__$1 = state_58256;
var statearr_58285_60046 = state_58256__$1;
(statearr_58285_60046[(2)] = inst_58212);

(statearr_58285_60046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (25))){
var state_58256__$1 = state_58256;
var statearr_58288_60047 = state_58256__$1;
(statearr_58288_60047[(2)] = null);

(statearr_58288_60047[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (17))){
var inst_58208 = (state_58256[(14)]);
var inst_58200 = (state_58256[(18)]);
var inst_58231 = (inst_58200.cljs$core$IFn$_invoke$arity$1 ? inst_58200.cljs$core$IFn$_invoke$arity$1(inst_58208) : inst_58200.call(null,inst_58208));
var inst_58232 = cljs.core.not(inst_58231);
var state_58256__$1 = state_58256;
var statearr_58289_60048 = state_58256__$1;
(statearr_58289_60048[(2)] = inst_58232);

(statearr_58289_60048[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (3))){
var inst_58254 = (state_58256[(2)]);
var state_58256__$1 = state_58256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58256__$1,inst_58254);
} else {
if((state_val_58257 === (12))){
var state_58256__$1 = state_58256;
var statearr_58290_60049 = state_58256__$1;
(statearr_58290_60049[(2)] = null);

(statearr_58290_60049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (2))){
var inst_58198 = (state_58256[(12)]);
var inst_58195 = (state_58256[(11)]);
var inst_58198__$1 = cljs.core.__destructure_map(inst_58195);
var inst_58199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58198__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_58200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58198__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_58201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58198__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58256__$1 = (function (){var statearr_58292 = state_58256;
(statearr_58292[(12)] = inst_58198__$1);

(statearr_58292[(16)] = inst_58199);

(statearr_58292[(18)] = inst_58200);

return statearr_58292;
})();
return cljs.core.async.ioc_alts_BANG_(state_58256__$1,(4),inst_58201);
} else {
if((state_val_58257 === (23))){
var inst_58240 = (state_58256[(2)]);
var state_58256__$1 = state_58256;
if(cljs.core.truth_(inst_58240)){
var statearr_58293_60053 = state_58256__$1;
(statearr_58293_60053[(1)] = (24));

} else {
var statearr_58294_60054 = state_58256__$1;
(statearr_58294_60054[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (19))){
var inst_58235 = (state_58256[(2)]);
var state_58256__$1 = state_58256;
var statearr_58295_60055 = state_58256__$1;
(statearr_58295_60055[(2)] = inst_58235);

(statearr_58295_60055[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (11))){
var inst_58208 = (state_58256[(14)]);
var inst_58218 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_58208);
var state_58256__$1 = state_58256;
var statearr_58296_60056 = state_58256__$1;
(statearr_58296_60056[(2)] = inst_58218);

(statearr_58296_60056[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (9))){
var inst_58208 = (state_58256[(14)]);
var inst_58225 = (state_58256[(19)]);
var inst_58199 = (state_58256[(16)]);
var inst_58225__$1 = (inst_58199.cljs$core$IFn$_invoke$arity$1 ? inst_58199.cljs$core$IFn$_invoke$arity$1(inst_58208) : inst_58199.call(null,inst_58208));
var state_58256__$1 = (function (){var statearr_58297 = state_58256;
(statearr_58297[(19)] = inst_58225__$1);

return statearr_58297;
})();
if(cljs.core.truth_(inst_58225__$1)){
var statearr_58299_60057 = state_58256__$1;
(statearr_58299_60057[(1)] = (14));

} else {
var statearr_58300_60058 = state_58256__$1;
(statearr_58300_60058[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (5))){
var inst_58209 = (state_58256[(13)]);
var state_58256__$1 = state_58256;
var statearr_58302_60062 = state_58256__$1;
(statearr_58302_60062[(2)] = inst_58209);

(statearr_58302_60062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (14))){
var inst_58225 = (state_58256[(19)]);
var state_58256__$1 = state_58256;
var statearr_58303_60063 = state_58256__$1;
(statearr_58303_60063[(2)] = inst_58225);

(statearr_58303_60063[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (26))){
var inst_58245 = (state_58256[(2)]);
var state_58256__$1 = state_58256;
var statearr_58305_60064 = state_58256__$1;
(statearr_58305_60064[(2)] = inst_58245);

(statearr_58305_60064[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (16))){
var inst_58237 = (state_58256[(2)]);
var state_58256__$1 = state_58256;
if(cljs.core.truth_(inst_58237)){
var statearr_58307_60065 = state_58256__$1;
(statearr_58307_60065[(1)] = (20));

} else {
var statearr_58308_60067 = state_58256__$1;
(statearr_58308_60067[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (10))){
var inst_58251 = (state_58256[(2)]);
var state_58256__$1 = state_58256;
var statearr_58309_60071 = state_58256__$1;
(statearr_58309_60071[(2)] = inst_58251);

(statearr_58309_60071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (18))){
var inst_58229 = (state_58256[(15)]);
var state_58256__$1 = state_58256;
var statearr_58310_60076 = state_58256__$1;
(statearr_58310_60076[(2)] = inst_58229);

(statearr_58310_60076[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58257 === (8))){
var inst_58207 = (state_58256[(7)]);
var inst_58216 = (inst_58207 == null);
var state_58256__$1 = state_58256;
if(cljs.core.truth_(inst_58216)){
var statearr_58312_60084 = state_58256__$1;
(statearr_58312_60084[(1)] = (11));

} else {
var statearr_58314_60085 = state_58256__$1;
(statearr_58314_60085[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__55985__auto__ = null;
var cljs$core$async$mix_$_state_machine__55985__auto____0 = (function (){
var statearr_58317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58317[(0)] = cljs$core$async$mix_$_state_machine__55985__auto__);

(statearr_58317[(1)] = (1));

return statearr_58317;
});
var cljs$core$async$mix_$_state_machine__55985__auto____1 = (function (state_58256){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_58256);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e58318){var ex__55988__auto__ = e58318;
var statearr_58319_60089 = state_58256;
(statearr_58319_60089[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_58256[(4)]))){
var statearr_58320_60090 = state_58256;
(statearr_58320_60090[(1)] = cljs.core.first((state_58256[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60091 = state_58256;
state_58256 = G__60091;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__55985__auto__ = function(state_58256){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__55985__auto____1.call(this,state_58256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__55985__auto____0;
cljs$core$async$mix_$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__55985__auto____1;
return cljs$core$async$mix_$_state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_58322 = f__56207__auto__();
(statearr_58322[(6)] = c__56206__auto___60023);

return statearr_58322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_60098 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_60098(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_60110 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_60110(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_60115 = (function() {
var G__60116 = null;
var G__60116__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__60116__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__60116 = function(p,v){
switch(arguments.length){
case 1:
return G__60116__1.call(this,p);
case 2:
return G__60116__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60116.cljs$core$IFn$_invoke$arity$1 = G__60116__1;
G__60116.cljs$core$IFn$_invoke$arity$2 = G__60116__2;
return G__60116;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__58334 = arguments.length;
switch (G__58334) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60115(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60115(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__58338 = arguments.length;
switch (G__58338) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__58336_SHARP_){
if(cljs.core.truth_((p1__58336_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__58336_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__58336_SHARP_.call(null,topic)))){
return p1__58336_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58336_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58340 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58340 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58341){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58341 = meta58341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58342,meta58341__$1){
var self__ = this;
var _58342__$1 = this;
return (new cljs.core.async.t_cljs$core$async58340(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58341__$1));
}));

(cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58342){
var self__ = this;
var _58342__$1 = this;
return self__.meta58341;
}));

(cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async58340.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async58340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58341","meta58341",-1868310590,null)], null);
}));

(cljs.core.async.t_cljs$core$async58340.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58340");

(cljs.core.async.t_cljs$core$async58340.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async58340");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58340.
 */
cljs.core.async.__GT_t_cljs$core$async58340 = (function cljs$core$async$__GT_t_cljs$core$async58340(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58341){
return (new cljs.core.async.t_cljs$core$async58340(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58341));
});

}

return (new cljs.core.async.t_cljs$core$async58340(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56206__auto___60139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_58418){
var state_val_58419 = (state_58418[(1)]);
if((state_val_58419 === (7))){
var inst_58413 = (state_58418[(2)]);
var state_58418__$1 = state_58418;
var statearr_58420_60140 = state_58418__$1;
(statearr_58420_60140[(2)] = inst_58413);

(statearr_58420_60140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (20))){
var state_58418__$1 = state_58418;
var statearr_58421_60141 = state_58418__$1;
(statearr_58421_60141[(2)] = null);

(statearr_58421_60141[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (1))){
var state_58418__$1 = state_58418;
var statearr_58422_60142 = state_58418__$1;
(statearr_58422_60142[(2)] = null);

(statearr_58422_60142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (24))){
var inst_58396 = (state_58418[(7)]);
var inst_58405 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_58396);
var state_58418__$1 = state_58418;
var statearr_58423_60143 = state_58418__$1;
(statearr_58423_60143[(2)] = inst_58405);

(statearr_58423_60143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (4))){
var inst_58347 = (state_58418[(8)]);
var inst_58347__$1 = (state_58418[(2)]);
var inst_58348 = (inst_58347__$1 == null);
var state_58418__$1 = (function (){var statearr_58424 = state_58418;
(statearr_58424[(8)] = inst_58347__$1);

return statearr_58424;
})();
if(cljs.core.truth_(inst_58348)){
var statearr_58426_60144 = state_58418__$1;
(statearr_58426_60144[(1)] = (5));

} else {
var statearr_58427_60145 = state_58418__$1;
(statearr_58427_60145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (15))){
var inst_58390 = (state_58418[(2)]);
var state_58418__$1 = state_58418;
var statearr_58428_60147 = state_58418__$1;
(statearr_58428_60147[(2)] = inst_58390);

(statearr_58428_60147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (21))){
var inst_58410 = (state_58418[(2)]);
var state_58418__$1 = (function (){var statearr_58429 = state_58418;
(statearr_58429[(9)] = inst_58410);

return statearr_58429;
})();
var statearr_58430_60148 = state_58418__$1;
(statearr_58430_60148[(2)] = null);

(statearr_58430_60148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (13))){
var inst_58372 = (state_58418[(10)]);
var inst_58374 = cljs.core.chunked_seq_QMARK_(inst_58372);
var state_58418__$1 = state_58418;
if(inst_58374){
var statearr_58431_60152 = state_58418__$1;
(statearr_58431_60152[(1)] = (16));

} else {
var statearr_58432_60153 = state_58418__$1;
(statearr_58432_60153[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (22))){
var inst_58402 = (state_58418[(2)]);
var state_58418__$1 = state_58418;
if(cljs.core.truth_(inst_58402)){
var statearr_58433_60154 = state_58418__$1;
(statearr_58433_60154[(1)] = (23));

} else {
var statearr_58434_60155 = state_58418__$1;
(statearr_58434_60155[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (6))){
var inst_58347 = (state_58418[(8)]);
var inst_58396 = (state_58418[(7)]);
var inst_58398 = (state_58418[(11)]);
var inst_58396__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_58347) : topic_fn.call(null,inst_58347));
var inst_58397 = cljs.core.deref(mults);
var inst_58398__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58397,inst_58396__$1);
var state_58418__$1 = (function (){var statearr_58436 = state_58418;
(statearr_58436[(7)] = inst_58396__$1);

(statearr_58436[(11)] = inst_58398__$1);

return statearr_58436;
})();
if(cljs.core.truth_(inst_58398__$1)){
var statearr_58437_60156 = state_58418__$1;
(statearr_58437_60156[(1)] = (19));

} else {
var statearr_58438_60157 = state_58418__$1;
(statearr_58438_60157[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (25))){
var inst_58407 = (state_58418[(2)]);
var state_58418__$1 = state_58418;
var statearr_58439_60158 = state_58418__$1;
(statearr_58439_60158[(2)] = inst_58407);

(statearr_58439_60158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (17))){
var inst_58372 = (state_58418[(10)]);
var inst_58381 = cljs.core.first(inst_58372);
var inst_58382 = cljs.core.async.muxch_STAR_(inst_58381);
var inst_58383 = cljs.core.async.close_BANG_(inst_58382);
var inst_58384 = cljs.core.next(inst_58372);
var inst_58357 = inst_58384;
var inst_58358 = null;
var inst_58359 = (0);
var inst_58360 = (0);
var state_58418__$1 = (function (){var statearr_58440 = state_58418;
(statearr_58440[(12)] = inst_58383);

(statearr_58440[(13)] = inst_58359);

(statearr_58440[(14)] = inst_58360);

(statearr_58440[(15)] = inst_58357);

(statearr_58440[(16)] = inst_58358);

return statearr_58440;
})();
var statearr_58441_60161 = state_58418__$1;
(statearr_58441_60161[(2)] = null);

(statearr_58441_60161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (3))){
var inst_58415 = (state_58418[(2)]);
var state_58418__$1 = state_58418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58418__$1,inst_58415);
} else {
if((state_val_58419 === (12))){
var inst_58392 = (state_58418[(2)]);
var state_58418__$1 = state_58418;
var statearr_58443_60164 = state_58418__$1;
(statearr_58443_60164[(2)] = inst_58392);

(statearr_58443_60164[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (2))){
var state_58418__$1 = state_58418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58418__$1,(4),ch);
} else {
if((state_val_58419 === (23))){
var state_58418__$1 = state_58418;
var statearr_58444_60165 = state_58418__$1;
(statearr_58444_60165[(2)] = null);

(statearr_58444_60165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (19))){
var inst_58347 = (state_58418[(8)]);
var inst_58398 = (state_58418[(11)]);
var inst_58400 = cljs.core.async.muxch_STAR_(inst_58398);
var state_58418__$1 = state_58418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58418__$1,(22),inst_58400,inst_58347);
} else {
if((state_val_58419 === (11))){
var inst_58372 = (state_58418[(10)]);
var inst_58357 = (state_58418[(15)]);
var inst_58372__$1 = cljs.core.seq(inst_58357);
var state_58418__$1 = (function (){var statearr_58445 = state_58418;
(statearr_58445[(10)] = inst_58372__$1);

return statearr_58445;
})();
if(inst_58372__$1){
var statearr_58446_60167 = state_58418__$1;
(statearr_58446_60167[(1)] = (13));

} else {
var statearr_58447_60168 = state_58418__$1;
(statearr_58447_60168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (9))){
var inst_58394 = (state_58418[(2)]);
var state_58418__$1 = state_58418;
var statearr_58448_60169 = state_58418__$1;
(statearr_58448_60169[(2)] = inst_58394);

(statearr_58448_60169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (5))){
var inst_58354 = cljs.core.deref(mults);
var inst_58355 = cljs.core.vals(inst_58354);
var inst_58356 = cljs.core.seq(inst_58355);
var inst_58357 = inst_58356;
var inst_58358 = null;
var inst_58359 = (0);
var inst_58360 = (0);
var state_58418__$1 = (function (){var statearr_58450 = state_58418;
(statearr_58450[(13)] = inst_58359);

(statearr_58450[(14)] = inst_58360);

(statearr_58450[(15)] = inst_58357);

(statearr_58450[(16)] = inst_58358);

return statearr_58450;
})();
var statearr_58451_60172 = state_58418__$1;
(statearr_58451_60172[(2)] = null);

(statearr_58451_60172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (14))){
var state_58418__$1 = state_58418;
var statearr_58455_60173 = state_58418__$1;
(statearr_58455_60173[(2)] = null);

(statearr_58455_60173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (16))){
var inst_58372 = (state_58418[(10)]);
var inst_58376 = cljs.core.chunk_first(inst_58372);
var inst_58377 = cljs.core.chunk_rest(inst_58372);
var inst_58378 = cljs.core.count(inst_58376);
var inst_58357 = inst_58377;
var inst_58358 = inst_58376;
var inst_58359 = inst_58378;
var inst_58360 = (0);
var state_58418__$1 = (function (){var statearr_58456 = state_58418;
(statearr_58456[(13)] = inst_58359);

(statearr_58456[(14)] = inst_58360);

(statearr_58456[(15)] = inst_58357);

(statearr_58456[(16)] = inst_58358);

return statearr_58456;
})();
var statearr_58457_60176 = state_58418__$1;
(statearr_58457_60176[(2)] = null);

(statearr_58457_60176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (10))){
var inst_58359 = (state_58418[(13)]);
var inst_58360 = (state_58418[(14)]);
var inst_58357 = (state_58418[(15)]);
var inst_58358 = (state_58418[(16)]);
var inst_58365 = cljs.core._nth(inst_58358,inst_58360);
var inst_58366 = cljs.core.async.muxch_STAR_(inst_58365);
var inst_58367 = cljs.core.async.close_BANG_(inst_58366);
var inst_58369 = (inst_58360 + (1));
var tmp58452 = inst_58359;
var tmp58453 = inst_58357;
var tmp58454 = inst_58358;
var inst_58357__$1 = tmp58453;
var inst_58358__$1 = tmp58454;
var inst_58359__$1 = tmp58452;
var inst_58360__$1 = inst_58369;
var state_58418__$1 = (function (){var statearr_58459 = state_58418;
(statearr_58459[(13)] = inst_58359__$1);

(statearr_58459[(17)] = inst_58367);

(statearr_58459[(14)] = inst_58360__$1);

(statearr_58459[(15)] = inst_58357__$1);

(statearr_58459[(16)] = inst_58358__$1);

return statearr_58459;
})();
var statearr_58460_60181 = state_58418__$1;
(statearr_58460_60181[(2)] = null);

(statearr_58460_60181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (18))){
var inst_58387 = (state_58418[(2)]);
var state_58418__$1 = state_58418;
var statearr_58461_60182 = state_58418__$1;
(statearr_58461_60182[(2)] = inst_58387);

(statearr_58461_60182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58419 === (8))){
var inst_58359 = (state_58418[(13)]);
var inst_58360 = (state_58418[(14)]);
var inst_58362 = (inst_58360 < inst_58359);
var inst_58363 = inst_58362;
var state_58418__$1 = state_58418;
if(cljs.core.truth_(inst_58363)){
var statearr_58462_60188 = state_58418__$1;
(statearr_58462_60188[(1)] = (10));

} else {
var statearr_58463_60199 = state_58418__$1;
(statearr_58463_60199[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55985__auto__ = null;
var cljs$core$async$state_machine__55985__auto____0 = (function (){
var statearr_58465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58465[(0)] = cljs$core$async$state_machine__55985__auto__);

(statearr_58465[(1)] = (1));

return statearr_58465;
});
var cljs$core$async$state_machine__55985__auto____1 = (function (state_58418){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_58418);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e58466){var ex__55988__auto__ = e58466;
var statearr_58467_60200 = state_58418;
(statearr_58467_60200[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_58418[(4)]))){
var statearr_58468_60201 = state_58418;
(statearr_58468_60201[(1)] = cljs.core.first((state_58418[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60203 = state_58418;
state_58418 = G__60203;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$state_machine__55985__auto__ = function(state_58418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55985__auto____1.call(this,state_58418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55985__auto____0;
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55985__auto____1;
return cljs$core$async$state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_58469 = f__56207__auto__();
(statearr_58469[(6)] = c__56206__auto___60139);

return statearr_58469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__58471 = arguments.length;
switch (G__58471) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__58474 = arguments.length;
switch (G__58474) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__58477 = arguments.length;
switch (G__58477) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__56206__auto___60213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_58524){
var state_val_58525 = (state_58524[(1)]);
if((state_val_58525 === (7))){
var state_58524__$1 = state_58524;
var statearr_58526_60214 = state_58524__$1;
(statearr_58526_60214[(2)] = null);

(statearr_58526_60214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58525 === (1))){
var state_58524__$1 = state_58524;
var statearr_58528_60215 = state_58524__$1;
(statearr_58528_60215[(2)] = null);

(statearr_58528_60215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58525 === (4))){
var inst_58483 = (state_58524[(7)]);
var inst_58482 = (state_58524[(8)]);
var inst_58485 = (inst_58483 < inst_58482);
var state_58524__$1 = state_58524;
if(cljs.core.truth_(inst_58485)){
var statearr_58530_60216 = state_58524__$1;
(statearr_58530_60216[(1)] = (6));

} else {
var statearr_58531_60217 = state_58524__$1;
(statearr_58531_60217[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58525 === (15))){
var inst_58510 = (state_58524[(9)]);
var inst_58515 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_58510);
var state_58524__$1 = state_58524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58524__$1,(17),out,inst_58515);
} else {
if((state_val_58525 === (13))){
var inst_58510 = (state_58524[(9)]);
var inst_58510__$1 = (state_58524[(2)]);
var inst_58511 = cljs.core.some(cljs.core.nil_QMARK_,inst_58510__$1);
var state_58524__$1 = (function (){var statearr_58532 = state_58524;
(statearr_58532[(9)] = inst_58510__$1);

return statearr_58532;
})();
if(cljs.core.truth_(inst_58511)){
var statearr_58533_60218 = state_58524__$1;
(statearr_58533_60218[(1)] = (14));

} else {
var statearr_58534_60219 = state_58524__$1;
(statearr_58534_60219[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58525 === (6))){
var state_58524__$1 = state_58524;
var statearr_58535_60220 = state_58524__$1;
(statearr_58535_60220[(2)] = null);

(statearr_58535_60220[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58525 === (17))){
var inst_58517 = (state_58524[(2)]);
var state_58524__$1 = (function (){var statearr_58537 = state_58524;
(statearr_58537[(10)] = inst_58517);

return statearr_58537;
})();
var statearr_58538_60221 = state_58524__$1;
(statearr_58538_60221[(2)] = null);

(statearr_58538_60221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58525 === (3))){
var inst_58522 = (state_58524[(2)]);
var state_58524__$1 = state_58524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58524__$1,inst_58522);
} else {
if((state_val_58525 === (12))){
var _ = (function (){var statearr_58539 = state_58524;
(statearr_58539[(4)] = cljs.core.rest((state_58524[(4)])));

return statearr_58539;
})();
var state_58524__$1 = state_58524;
var ex58536 = (state_58524__$1[(2)]);
var statearr_58540_60222 = state_58524__$1;
(statearr_58540_60222[(5)] = ex58536);


if((ex58536 instanceof Object)){
var statearr_58541_60223 = state_58524__$1;
(statearr_58541_60223[(1)] = (11));

(statearr_58541_60223[(5)] = null);

} else {
throw ex58536;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58525 === (2))){
var inst_58481 = cljs.core.reset_BANG_(dctr,cnt);
var inst_58482 = cnt;
var inst_58483 = (0);
var state_58524__$1 = (function (){var statearr_58543 = state_58524;
(statearr_58543[(7)] = inst_58483);

(statearr_58543[(11)] = inst_58481);

(statearr_58543[(8)] = inst_58482);

return statearr_58543;
})();
var statearr_58545_60228 = state_58524__$1;
(statearr_58545_60228[(2)] = null);

(statearr_58545_60228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58525 === (11))){
var inst_58488 = (state_58524[(2)]);
var inst_58490 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_58524__$1 = (function (){var statearr_58546 = state_58524;
(statearr_58546[(12)] = inst_58488);

return statearr_58546;
})();
var statearr_58547_60229 = state_58524__$1;
(statearr_58547_60229[(2)] = inst_58490);

(statearr_58547_60229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58525 === (9))){
var inst_58483 = (state_58524[(7)]);
var _ = (function (){var statearr_58548 = state_58524;
(statearr_58548[(4)] = cljs.core.cons((12),(state_58524[(4)])));

return statearr_58548;
})();
var inst_58496 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_58483) : chs__$1.call(null,inst_58483));
var inst_58497 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_58483) : done.call(null,inst_58483));
var inst_58498 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_58496,inst_58497);
var ___$1 = (function (){var statearr_58549 = state_58524;
(statearr_58549[(4)] = cljs.core.rest((state_58524[(4)])));

return statearr_58549;
})();
var state_58524__$1 = state_58524;
var statearr_58550_60235 = state_58524__$1;
(statearr_58550_60235[(2)] = inst_58498);

(statearr_58550_60235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58525 === (5))){
var inst_58508 = (state_58524[(2)]);
var state_58524__$1 = (function (){var statearr_58551 = state_58524;
(statearr_58551[(13)] = inst_58508);

return statearr_58551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58524__$1,(13),dchan);
} else {
if((state_val_58525 === (14))){
var inst_58513 = cljs.core.async.close_BANG_(out);
var state_58524__$1 = state_58524;
var statearr_58552_60236 = state_58524__$1;
(statearr_58552_60236[(2)] = inst_58513);

(statearr_58552_60236[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58525 === (16))){
var inst_58520 = (state_58524[(2)]);
var state_58524__$1 = state_58524;
var statearr_58553_60238 = state_58524__$1;
(statearr_58553_60238[(2)] = inst_58520);

(statearr_58553_60238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58525 === (10))){
var inst_58483 = (state_58524[(7)]);
var inst_58501 = (state_58524[(2)]);
var inst_58502 = (inst_58483 + (1));
var inst_58483__$1 = inst_58502;
var state_58524__$1 = (function (){var statearr_58554 = state_58524;
(statearr_58554[(7)] = inst_58483__$1);

(statearr_58554[(14)] = inst_58501);

return statearr_58554;
})();
var statearr_58555_60240 = state_58524__$1;
(statearr_58555_60240[(2)] = null);

(statearr_58555_60240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58525 === (8))){
var inst_58506 = (state_58524[(2)]);
var state_58524__$1 = state_58524;
var statearr_58556_60241 = state_58524__$1;
(statearr_58556_60241[(2)] = inst_58506);

(statearr_58556_60241[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55985__auto__ = null;
var cljs$core$async$state_machine__55985__auto____0 = (function (){
var statearr_58557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58557[(0)] = cljs$core$async$state_machine__55985__auto__);

(statearr_58557[(1)] = (1));

return statearr_58557;
});
var cljs$core$async$state_machine__55985__auto____1 = (function (state_58524){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_58524);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e58558){var ex__55988__auto__ = e58558;
var statearr_58559_60243 = state_58524;
(statearr_58559_60243[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_58524[(4)]))){
var statearr_58563_60244 = state_58524;
(statearr_58563_60244[(1)] = cljs.core.first((state_58524[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60245 = state_58524;
state_58524 = G__60245;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$state_machine__55985__auto__ = function(state_58524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55985__auto____1.call(this,state_58524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55985__auto____0;
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55985__auto____1;
return cljs$core$async$state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_58564 = f__56207__auto__();
(statearr_58564[(6)] = c__56206__auto___60213);

return statearr_58564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__58573 = arguments.length;
switch (G__58573) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56206__auto___60250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_58610){
var state_val_58611 = (state_58610[(1)]);
if((state_val_58611 === (7))){
var inst_58586 = (state_58610[(7)]);
var inst_58585 = (state_58610[(8)]);
var inst_58585__$1 = (state_58610[(2)]);
var inst_58586__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58585__$1,(0),null);
var inst_58587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58585__$1,(1),null);
var inst_58588 = (inst_58586__$1 == null);
var state_58610__$1 = (function (){var statearr_58618 = state_58610;
(statearr_58618[(9)] = inst_58587);

(statearr_58618[(7)] = inst_58586__$1);

(statearr_58618[(8)] = inst_58585__$1);

return statearr_58618;
})();
if(cljs.core.truth_(inst_58588)){
var statearr_58620_60251 = state_58610__$1;
(statearr_58620_60251[(1)] = (8));

} else {
var statearr_58621_60252 = state_58610__$1;
(statearr_58621_60252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58611 === (1))){
var inst_58574 = cljs.core.vec(chs);
var inst_58575 = inst_58574;
var state_58610__$1 = (function (){var statearr_58623 = state_58610;
(statearr_58623[(10)] = inst_58575);

return statearr_58623;
})();
var statearr_58624_60262 = state_58610__$1;
(statearr_58624_60262[(2)] = null);

(statearr_58624_60262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58611 === (4))){
var inst_58575 = (state_58610[(10)]);
var state_58610__$1 = state_58610;
return cljs.core.async.ioc_alts_BANG_(state_58610__$1,(7),inst_58575);
} else {
if((state_val_58611 === (6))){
var inst_58605 = (state_58610[(2)]);
var state_58610__$1 = state_58610;
var statearr_58628_60263 = state_58610__$1;
(statearr_58628_60263[(2)] = inst_58605);

(statearr_58628_60263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58611 === (3))){
var inst_58607 = (state_58610[(2)]);
var state_58610__$1 = state_58610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58610__$1,inst_58607);
} else {
if((state_val_58611 === (2))){
var inst_58575 = (state_58610[(10)]);
var inst_58577 = cljs.core.count(inst_58575);
var inst_58578 = (inst_58577 > (0));
var state_58610__$1 = state_58610;
if(cljs.core.truth_(inst_58578)){
var statearr_58634_60264 = state_58610__$1;
(statearr_58634_60264[(1)] = (4));

} else {
var statearr_58635_60265 = state_58610__$1;
(statearr_58635_60265[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58611 === (11))){
var inst_58575 = (state_58610[(10)]);
var inst_58598 = (state_58610[(2)]);
var tmp58630 = inst_58575;
var inst_58575__$1 = tmp58630;
var state_58610__$1 = (function (){var statearr_58637 = state_58610;
(statearr_58637[(10)] = inst_58575__$1);

(statearr_58637[(11)] = inst_58598);

return statearr_58637;
})();
var statearr_58639_60267 = state_58610__$1;
(statearr_58639_60267[(2)] = null);

(statearr_58639_60267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58611 === (9))){
var inst_58586 = (state_58610[(7)]);
var state_58610__$1 = state_58610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58610__$1,(11),out,inst_58586);
} else {
if((state_val_58611 === (5))){
var inst_58603 = cljs.core.async.close_BANG_(out);
var state_58610__$1 = state_58610;
var statearr_58646_60268 = state_58610__$1;
(statearr_58646_60268[(2)] = inst_58603);

(statearr_58646_60268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58611 === (10))){
var inst_58601 = (state_58610[(2)]);
var state_58610__$1 = state_58610;
var statearr_58648_60269 = state_58610__$1;
(statearr_58648_60269[(2)] = inst_58601);

(statearr_58648_60269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58611 === (8))){
var inst_58587 = (state_58610[(9)]);
var inst_58575 = (state_58610[(10)]);
var inst_58586 = (state_58610[(7)]);
var inst_58585 = (state_58610[(8)]);
var inst_58593 = (function (){var cs = inst_58575;
var vec__58581 = inst_58585;
var v = inst_58586;
var c = inst_58587;
return (function (p1__58568_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__58568_SHARP_);
});
})();
var inst_58594 = cljs.core.filterv(inst_58593,inst_58575);
var inst_58575__$1 = inst_58594;
var state_58610__$1 = (function (){var statearr_58652 = state_58610;
(statearr_58652[(10)] = inst_58575__$1);

return statearr_58652;
})();
var statearr_58653_60272 = state_58610__$1;
(statearr_58653_60272[(2)] = null);

(statearr_58653_60272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55985__auto__ = null;
var cljs$core$async$state_machine__55985__auto____0 = (function (){
var statearr_58657 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58657[(0)] = cljs$core$async$state_machine__55985__auto__);

(statearr_58657[(1)] = (1));

return statearr_58657;
});
var cljs$core$async$state_machine__55985__auto____1 = (function (state_58610){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_58610);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e58659){var ex__55988__auto__ = e58659;
var statearr_58661_60273 = state_58610;
(statearr_58661_60273[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_58610[(4)]))){
var statearr_58662_60275 = state_58610;
(statearr_58662_60275[(1)] = cljs.core.first((state_58610[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60279 = state_58610;
state_58610 = G__60279;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$state_machine__55985__auto__ = function(state_58610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55985__auto____1.call(this,state_58610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55985__auto____0;
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55985__auto____1;
return cljs$core$async$state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_58666 = f__56207__auto__();
(statearr_58666[(6)] = c__56206__auto___60250);

return statearr_58666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__58672 = arguments.length;
switch (G__58672) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56206__auto___60285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_58704){
var state_val_58705 = (state_58704[(1)]);
if((state_val_58705 === (7))){
var inst_58683 = (state_58704[(7)]);
var inst_58683__$1 = (state_58704[(2)]);
var inst_58684 = (inst_58683__$1 == null);
var inst_58685 = cljs.core.not(inst_58684);
var state_58704__$1 = (function (){var statearr_58707 = state_58704;
(statearr_58707[(7)] = inst_58683__$1);

return statearr_58707;
})();
if(inst_58685){
var statearr_58710_60287 = state_58704__$1;
(statearr_58710_60287[(1)] = (8));

} else {
var statearr_58712_60288 = state_58704__$1;
(statearr_58712_60288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58705 === (1))){
var inst_58678 = (0);
var state_58704__$1 = (function (){var statearr_58713 = state_58704;
(statearr_58713[(8)] = inst_58678);

return statearr_58713;
})();
var statearr_58715_60290 = state_58704__$1;
(statearr_58715_60290[(2)] = null);

(statearr_58715_60290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58705 === (4))){
var state_58704__$1 = state_58704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58704__$1,(7),ch);
} else {
if((state_val_58705 === (6))){
var inst_58698 = (state_58704[(2)]);
var state_58704__$1 = state_58704;
var statearr_58719_60292 = state_58704__$1;
(statearr_58719_60292[(2)] = inst_58698);

(statearr_58719_60292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58705 === (3))){
var inst_58700 = (state_58704[(2)]);
var inst_58701 = cljs.core.async.close_BANG_(out);
var state_58704__$1 = (function (){var statearr_58721 = state_58704;
(statearr_58721[(9)] = inst_58700);

return statearr_58721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58704__$1,inst_58701);
} else {
if((state_val_58705 === (2))){
var inst_58678 = (state_58704[(8)]);
var inst_58680 = (inst_58678 < n);
var state_58704__$1 = state_58704;
if(cljs.core.truth_(inst_58680)){
var statearr_58722_60295 = state_58704__$1;
(statearr_58722_60295[(1)] = (4));

} else {
var statearr_58725_60296 = state_58704__$1;
(statearr_58725_60296[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58705 === (11))){
var inst_58678 = (state_58704[(8)]);
var inst_58689 = (state_58704[(2)]);
var inst_58691 = (inst_58678 + (1));
var inst_58678__$1 = inst_58691;
var state_58704__$1 = (function (){var statearr_58727 = state_58704;
(statearr_58727[(10)] = inst_58689);

(statearr_58727[(8)] = inst_58678__$1);

return statearr_58727;
})();
var statearr_58729_60297 = state_58704__$1;
(statearr_58729_60297[(2)] = null);

(statearr_58729_60297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58705 === (9))){
var state_58704__$1 = state_58704;
var statearr_58732_60299 = state_58704__$1;
(statearr_58732_60299[(2)] = null);

(statearr_58732_60299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58705 === (5))){
var state_58704__$1 = state_58704;
var statearr_58735_60301 = state_58704__$1;
(statearr_58735_60301[(2)] = null);

(statearr_58735_60301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58705 === (10))){
var inst_58695 = (state_58704[(2)]);
var state_58704__$1 = state_58704;
var statearr_58737_60302 = state_58704__$1;
(statearr_58737_60302[(2)] = inst_58695);

(statearr_58737_60302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58705 === (8))){
var inst_58683 = (state_58704[(7)]);
var state_58704__$1 = state_58704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58704__$1,(11),out,inst_58683);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55985__auto__ = null;
var cljs$core$async$state_machine__55985__auto____0 = (function (){
var statearr_58741 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58741[(0)] = cljs$core$async$state_machine__55985__auto__);

(statearr_58741[(1)] = (1));

return statearr_58741;
});
var cljs$core$async$state_machine__55985__auto____1 = (function (state_58704){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_58704);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e58743){var ex__55988__auto__ = e58743;
var statearr_58744_60309 = state_58704;
(statearr_58744_60309[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_58704[(4)]))){
var statearr_58747_60310 = state_58704;
(statearr_58747_60310[(1)] = cljs.core.first((state_58704[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60311 = state_58704;
state_58704 = G__60311;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$state_machine__55985__auto__ = function(state_58704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55985__auto____1.call(this,state_58704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55985__auto____0;
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55985__auto____1;
return cljs$core$async$state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_58751 = f__56207__auto__();
(statearr_58751[(6)] = c__56206__auto___60285);

return statearr_58751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58757 = (function (f,ch,meta58758){
this.f = f;
this.ch = ch;
this.meta58758 = meta58758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58759,meta58758__$1){
var self__ = this;
var _58759__$1 = this;
return (new cljs.core.async.t_cljs$core$async58757(self__.f,self__.ch,meta58758__$1));
}));

(cljs.core.async.t_cljs$core$async58757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58759){
var self__ = this;
var _58759__$1 = this;
return self__.meta58758;
}));

(cljs.core.async.t_cljs$core$async58757.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58757.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58757.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58757.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58757.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58768 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58768 = (function (f,ch,meta58758,_,fn1,meta58769){
this.f = f;
this.ch = ch;
this.meta58758 = meta58758;
this._ = _;
this.fn1 = fn1;
this.meta58769 = meta58769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58770,meta58769__$1){
var self__ = this;
var _58770__$1 = this;
return (new cljs.core.async.t_cljs$core$async58768(self__.f,self__.ch,self__.meta58758,self__._,self__.fn1,meta58769__$1));
}));

(cljs.core.async.t_cljs$core$async58768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58770){
var self__ = this;
var _58770__$1 = this;
return self__.meta58769;
}));

(cljs.core.async.t_cljs$core$async58768.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58768.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async58768.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58768.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__58754_SHARP_){
var G__58783 = (((p1__58754_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__58754_SHARP_) : self__.f.call(null,p1__58754_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__58783) : f1.call(null,G__58783));
});
}));

(cljs.core.async.t_cljs$core$async58768.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58758","meta58758",-340041184,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58757","cljs.core.async/t_cljs$core$async58757",1120894826,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58769","meta58769",1844581512,null)], null);
}));

(cljs.core.async.t_cljs$core$async58768.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58768");

(cljs.core.async.t_cljs$core$async58768.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async58768");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58768.
 */
cljs.core.async.__GT_t_cljs$core$async58768 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58768(f__$1,ch__$1,meta58758__$1,___$2,fn1__$1,meta58769){
return (new cljs.core.async.t_cljs$core$async58768(f__$1,ch__$1,meta58758__$1,___$2,fn1__$1,meta58769));
});

}

return (new cljs.core.async.t_cljs$core$async58768(self__.f,self__.ch,self__.meta58758,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__58791 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__58791) : self__.f.call(null,G__58791));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async58757.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58757.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async58757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58758","meta58758",-340041184,null)], null);
}));

(cljs.core.async.t_cljs$core$async58757.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58757");

(cljs.core.async.t_cljs$core$async58757.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async58757");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58757.
 */
cljs.core.async.__GT_t_cljs$core$async58757 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58757(f__$1,ch__$1,meta58758){
return (new cljs.core.async.t_cljs$core$async58757(f__$1,ch__$1,meta58758));
});

}

return (new cljs.core.async.t_cljs$core$async58757(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58803 = (function (f,ch,meta58804){
this.f = f;
this.ch = ch;
this.meta58804 = meta58804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58805,meta58804__$1){
var self__ = this;
var _58805__$1 = this;
return (new cljs.core.async.t_cljs$core$async58803(self__.f,self__.ch,meta58804__$1));
}));

(cljs.core.async.t_cljs$core$async58803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58805){
var self__ = this;
var _58805__$1 = this;
return self__.meta58804;
}));

(cljs.core.async.t_cljs$core$async58803.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58803.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58803.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58803.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58803.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58803.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async58803.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58804","meta58804",1348460741,null)], null);
}));

(cljs.core.async.t_cljs$core$async58803.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58803");

(cljs.core.async.t_cljs$core$async58803.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async58803");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58803.
 */
cljs.core.async.__GT_t_cljs$core$async58803 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async58803(f__$1,ch__$1,meta58804){
return (new cljs.core.async.t_cljs$core$async58803(f__$1,ch__$1,meta58804));
});

}

return (new cljs.core.async.t_cljs$core$async58803(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58823 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58823 = (function (p,ch,meta58824){
this.p = p;
this.ch = ch;
this.meta58824 = meta58824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58825,meta58824__$1){
var self__ = this;
var _58825__$1 = this;
return (new cljs.core.async.t_cljs$core$async58823(self__.p,self__.ch,meta58824__$1));
}));

(cljs.core.async.t_cljs$core$async58823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58825){
var self__ = this;
var _58825__$1 = this;
return self__.meta58824;
}));

(cljs.core.async.t_cljs$core$async58823.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58823.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58823.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58823.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58823.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58823.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58823.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async58823.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58824","meta58824",338408009,null)], null);
}));

(cljs.core.async.t_cljs$core$async58823.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58823");

(cljs.core.async.t_cljs$core$async58823.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async58823");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58823.
 */
cljs.core.async.__GT_t_cljs$core$async58823 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async58823(p__$1,ch__$1,meta58824){
return (new cljs.core.async.t_cljs$core$async58823(p__$1,ch__$1,meta58824));
});

}

return (new cljs.core.async.t_cljs$core$async58823(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__58848 = arguments.length;
switch (G__58848) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56206__auto___60365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_58874){
var state_val_58875 = (state_58874[(1)]);
if((state_val_58875 === (7))){
var inst_58870 = (state_58874[(2)]);
var state_58874__$1 = state_58874;
var statearr_58880_60366 = state_58874__$1;
(statearr_58880_60366[(2)] = inst_58870);

(statearr_58880_60366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58875 === (1))){
var state_58874__$1 = state_58874;
var statearr_58883_60371 = state_58874__$1;
(statearr_58883_60371[(2)] = null);

(statearr_58883_60371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58875 === (4))){
var inst_58855 = (state_58874[(7)]);
var inst_58855__$1 = (state_58874[(2)]);
var inst_58857 = (inst_58855__$1 == null);
var state_58874__$1 = (function (){var statearr_58885 = state_58874;
(statearr_58885[(7)] = inst_58855__$1);

return statearr_58885;
})();
if(cljs.core.truth_(inst_58857)){
var statearr_58887_60374 = state_58874__$1;
(statearr_58887_60374[(1)] = (5));

} else {
var statearr_58888_60375 = state_58874__$1;
(statearr_58888_60375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58875 === (6))){
var inst_58855 = (state_58874[(7)]);
var inst_58861 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_58855) : p.call(null,inst_58855));
var state_58874__$1 = state_58874;
if(cljs.core.truth_(inst_58861)){
var statearr_58892_60379 = state_58874__$1;
(statearr_58892_60379[(1)] = (8));

} else {
var statearr_58893_60386 = state_58874__$1;
(statearr_58893_60386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58875 === (3))){
var inst_58872 = (state_58874[(2)]);
var state_58874__$1 = state_58874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58874__$1,inst_58872);
} else {
if((state_val_58875 === (2))){
var state_58874__$1 = state_58874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58874__$1,(4),ch);
} else {
if((state_val_58875 === (11))){
var inst_58864 = (state_58874[(2)]);
var state_58874__$1 = state_58874;
var statearr_58897_60388 = state_58874__$1;
(statearr_58897_60388[(2)] = inst_58864);

(statearr_58897_60388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58875 === (9))){
var state_58874__$1 = state_58874;
var statearr_58898_60395 = state_58874__$1;
(statearr_58898_60395[(2)] = null);

(statearr_58898_60395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58875 === (5))){
var inst_58859 = cljs.core.async.close_BANG_(out);
var state_58874__$1 = state_58874;
var statearr_58899_60396 = state_58874__$1;
(statearr_58899_60396[(2)] = inst_58859);

(statearr_58899_60396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58875 === (10))){
var inst_58867 = (state_58874[(2)]);
var state_58874__$1 = (function (){var statearr_58900 = state_58874;
(statearr_58900[(8)] = inst_58867);

return statearr_58900;
})();
var statearr_58903_60400 = state_58874__$1;
(statearr_58903_60400[(2)] = null);

(statearr_58903_60400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58875 === (8))){
var inst_58855 = (state_58874[(7)]);
var state_58874__$1 = state_58874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58874__$1,(11),out,inst_58855);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55985__auto__ = null;
var cljs$core$async$state_machine__55985__auto____0 = (function (){
var statearr_58904 = [null,null,null,null,null,null,null,null,null];
(statearr_58904[(0)] = cljs$core$async$state_machine__55985__auto__);

(statearr_58904[(1)] = (1));

return statearr_58904;
});
var cljs$core$async$state_machine__55985__auto____1 = (function (state_58874){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_58874);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e58905){var ex__55988__auto__ = e58905;
var statearr_58906_60402 = state_58874;
(statearr_58906_60402[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_58874[(4)]))){
var statearr_58909_60403 = state_58874;
(statearr_58909_60403[(1)] = cljs.core.first((state_58874[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60404 = state_58874;
state_58874 = G__60404;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$state_machine__55985__auto__ = function(state_58874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55985__auto____1.call(this,state_58874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55985__auto____0;
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55985__auto____1;
return cljs$core$async$state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_58916 = f__56207__auto__();
(statearr_58916[(6)] = c__56206__auto___60365);

return statearr_58916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__58919 = arguments.length;
switch (G__58919) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__56206__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_59011){
var state_val_59012 = (state_59011[(1)]);
if((state_val_59012 === (7))){
var inst_59004 = (state_59011[(2)]);
var state_59011__$1 = state_59011;
var statearr_59018_60407 = state_59011__$1;
(statearr_59018_60407[(2)] = inst_59004);

(statearr_59018_60407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (20))){
var inst_58968 = (state_59011[(7)]);
var inst_58984 = (state_59011[(2)]);
var inst_58985 = cljs.core.next(inst_58968);
var inst_58950 = inst_58985;
var inst_58951 = null;
var inst_58952 = (0);
var inst_58953 = (0);
var state_59011__$1 = (function (){var statearr_59020 = state_59011;
(statearr_59020[(8)] = inst_58950);

(statearr_59020[(9)] = inst_58951);

(statearr_59020[(10)] = inst_58952);

(statearr_59020[(11)] = inst_58953);

(statearr_59020[(12)] = inst_58984);

return statearr_59020;
})();
var statearr_59022_60415 = state_59011__$1;
(statearr_59022_60415[(2)] = null);

(statearr_59022_60415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (1))){
var state_59011__$1 = state_59011;
var statearr_59025_60422 = state_59011__$1;
(statearr_59025_60422[(2)] = null);

(statearr_59025_60422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (4))){
var inst_58936 = (state_59011[(13)]);
var inst_58936__$1 = (state_59011[(2)]);
var inst_58937 = (inst_58936__$1 == null);
var state_59011__$1 = (function (){var statearr_59028 = state_59011;
(statearr_59028[(13)] = inst_58936__$1);

return statearr_59028;
})();
if(cljs.core.truth_(inst_58937)){
var statearr_59029_60423 = state_59011__$1;
(statearr_59029_60423[(1)] = (5));

} else {
var statearr_59030_60424 = state_59011__$1;
(statearr_59030_60424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (15))){
var state_59011__$1 = state_59011;
var statearr_59039_60425 = state_59011__$1;
(statearr_59039_60425[(2)] = null);

(statearr_59039_60425[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (21))){
var state_59011__$1 = state_59011;
var statearr_59048_60427 = state_59011__$1;
(statearr_59048_60427[(2)] = null);

(statearr_59048_60427[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (13))){
var inst_58950 = (state_59011[(8)]);
var inst_58951 = (state_59011[(9)]);
var inst_58952 = (state_59011[(10)]);
var inst_58953 = (state_59011[(11)]);
var inst_58962 = (state_59011[(2)]);
var inst_58963 = (inst_58953 + (1));
var tmp59032 = inst_58950;
var tmp59033 = inst_58951;
var tmp59034 = inst_58952;
var inst_58950__$1 = tmp59032;
var inst_58951__$1 = tmp59033;
var inst_58952__$1 = tmp59034;
var inst_58953__$1 = inst_58963;
var state_59011__$1 = (function (){var statearr_59050 = state_59011;
(statearr_59050[(8)] = inst_58950__$1);

(statearr_59050[(14)] = inst_58962);

(statearr_59050[(9)] = inst_58951__$1);

(statearr_59050[(10)] = inst_58952__$1);

(statearr_59050[(11)] = inst_58953__$1);

return statearr_59050;
})();
var statearr_59053_60428 = state_59011__$1;
(statearr_59053_60428[(2)] = null);

(statearr_59053_60428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (22))){
var state_59011__$1 = state_59011;
var statearr_59059_60429 = state_59011__$1;
(statearr_59059_60429[(2)] = null);

(statearr_59059_60429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (6))){
var inst_58936 = (state_59011[(13)]);
var inst_58945 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58936) : f.call(null,inst_58936));
var inst_58946 = cljs.core.seq(inst_58945);
var inst_58950 = inst_58946;
var inst_58951 = null;
var inst_58952 = (0);
var inst_58953 = (0);
var state_59011__$1 = (function (){var statearr_59061 = state_59011;
(statearr_59061[(8)] = inst_58950);

(statearr_59061[(9)] = inst_58951);

(statearr_59061[(10)] = inst_58952);

(statearr_59061[(11)] = inst_58953);

return statearr_59061;
})();
var statearr_59063_60430 = state_59011__$1;
(statearr_59063_60430[(2)] = null);

(statearr_59063_60430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (17))){
var inst_58968 = (state_59011[(7)]);
var inst_58976 = cljs.core.chunk_first(inst_58968);
var inst_58977 = cljs.core.chunk_rest(inst_58968);
var inst_58979 = cljs.core.count(inst_58976);
var inst_58950 = inst_58977;
var inst_58951 = inst_58976;
var inst_58952 = inst_58979;
var inst_58953 = (0);
var state_59011__$1 = (function (){var statearr_59072 = state_59011;
(statearr_59072[(8)] = inst_58950);

(statearr_59072[(9)] = inst_58951);

(statearr_59072[(10)] = inst_58952);

(statearr_59072[(11)] = inst_58953);

return statearr_59072;
})();
var statearr_59074_60441 = state_59011__$1;
(statearr_59074_60441[(2)] = null);

(statearr_59074_60441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (3))){
var inst_59006 = (state_59011[(2)]);
var state_59011__$1 = state_59011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59011__$1,inst_59006);
} else {
if((state_val_59012 === (12))){
var inst_58993 = (state_59011[(2)]);
var state_59011__$1 = state_59011;
var statearr_59084_60442 = state_59011__$1;
(statearr_59084_60442[(2)] = inst_58993);

(statearr_59084_60442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (2))){
var state_59011__$1 = state_59011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59011__$1,(4),in$);
} else {
if((state_val_59012 === (23))){
var inst_59002 = (state_59011[(2)]);
var state_59011__$1 = state_59011;
var statearr_59087_60445 = state_59011__$1;
(statearr_59087_60445[(2)] = inst_59002);

(statearr_59087_60445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (19))){
var inst_58988 = (state_59011[(2)]);
var state_59011__$1 = state_59011;
var statearr_59090_60446 = state_59011__$1;
(statearr_59090_60446[(2)] = inst_58988);

(statearr_59090_60446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (11))){
var inst_58950 = (state_59011[(8)]);
var inst_58968 = (state_59011[(7)]);
var inst_58968__$1 = cljs.core.seq(inst_58950);
var state_59011__$1 = (function (){var statearr_59093 = state_59011;
(statearr_59093[(7)] = inst_58968__$1);

return statearr_59093;
})();
if(inst_58968__$1){
var statearr_59098_60447 = state_59011__$1;
(statearr_59098_60447[(1)] = (14));

} else {
var statearr_59100_60448 = state_59011__$1;
(statearr_59100_60448[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (9))){
var inst_58995 = (state_59011[(2)]);
var inst_58996 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_59011__$1 = (function (){var statearr_59107 = state_59011;
(statearr_59107[(15)] = inst_58995);

return statearr_59107;
})();
if(cljs.core.truth_(inst_58996)){
var statearr_59109_60453 = state_59011__$1;
(statearr_59109_60453[(1)] = (21));

} else {
var statearr_59111_60454 = state_59011__$1;
(statearr_59111_60454[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (5))){
var inst_58939 = cljs.core.async.close_BANG_(out);
var state_59011__$1 = state_59011;
var statearr_59114_60456 = state_59011__$1;
(statearr_59114_60456[(2)] = inst_58939);

(statearr_59114_60456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (14))){
var inst_58968 = (state_59011[(7)]);
var inst_58971 = cljs.core.chunked_seq_QMARK_(inst_58968);
var state_59011__$1 = state_59011;
if(inst_58971){
var statearr_59116_60457 = state_59011__$1;
(statearr_59116_60457[(1)] = (17));

} else {
var statearr_59120_60458 = state_59011__$1;
(statearr_59120_60458[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (16))){
var inst_58991 = (state_59011[(2)]);
var state_59011__$1 = state_59011;
var statearr_59122_60459 = state_59011__$1;
(statearr_59122_60459[(2)] = inst_58991);

(statearr_59122_60459[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59012 === (10))){
var inst_58951 = (state_59011[(9)]);
var inst_58953 = (state_59011[(11)]);
var inst_58960 = cljs.core._nth(inst_58951,inst_58953);
var state_59011__$1 = state_59011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59011__$1,(13),out,inst_58960);
} else {
if((state_val_59012 === (18))){
var inst_58968 = (state_59011[(7)]);
var inst_58982 = cljs.core.first(inst_58968);
var state_59011__$1 = state_59011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59011__$1,(20),out,inst_58982);
} else {
if((state_val_59012 === (8))){
var inst_58952 = (state_59011[(10)]);
var inst_58953 = (state_59011[(11)]);
var inst_58955 = (inst_58953 < inst_58952);
var inst_58956 = inst_58955;
var state_59011__$1 = state_59011;
if(cljs.core.truth_(inst_58956)){
var statearr_59134_60467 = state_59011__$1;
(statearr_59134_60467[(1)] = (10));

} else {
var statearr_59135_60468 = state_59011__$1;
(statearr_59135_60468[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__55985__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__55985__auto____0 = (function (){
var statearr_59141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59141[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__55985__auto__);

(statearr_59141[(1)] = (1));

return statearr_59141;
});
var cljs$core$async$mapcat_STAR__$_state_machine__55985__auto____1 = (function (state_59011){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_59011);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e59144){var ex__55988__auto__ = e59144;
var statearr_59145_60471 = state_59011;
(statearr_59145_60471[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_59011[(4)]))){
var statearr_59148_60474 = state_59011;
(statearr_59148_60474[(1)] = cljs.core.first((state_59011[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60475 = state_59011;
state_59011 = G__60475;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__55985__auto__ = function(state_59011){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__55985__auto____1.call(this,state_59011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__55985__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__55985__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_59153 = f__56207__auto__();
(statearr_59153[(6)] = c__56206__auto__);

return statearr_59153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));

return c__56206__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__59159 = arguments.length;
switch (G__59159) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__59183 = arguments.length;
switch (G__59183) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__59192 = arguments.length;
switch (G__59192) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56206__auto___60483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_59223){
var state_val_59224 = (state_59223[(1)]);
if((state_val_59224 === (7))){
var inst_59218 = (state_59223[(2)]);
var state_59223__$1 = state_59223;
var statearr_59229_60484 = state_59223__$1;
(statearr_59229_60484[(2)] = inst_59218);

(statearr_59229_60484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (1))){
var inst_59195 = null;
var state_59223__$1 = (function (){var statearr_59231 = state_59223;
(statearr_59231[(7)] = inst_59195);

return statearr_59231;
})();
var statearr_59232_60485 = state_59223__$1;
(statearr_59232_60485[(2)] = null);

(statearr_59232_60485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (4))){
var inst_59201 = (state_59223[(8)]);
var inst_59201__$1 = (state_59223[(2)]);
var inst_59202 = (inst_59201__$1 == null);
var inst_59203 = cljs.core.not(inst_59202);
var state_59223__$1 = (function (){var statearr_59233 = state_59223;
(statearr_59233[(8)] = inst_59201__$1);

return statearr_59233;
})();
if(inst_59203){
var statearr_59234_60486 = state_59223__$1;
(statearr_59234_60486[(1)] = (5));

} else {
var statearr_59235_60487 = state_59223__$1;
(statearr_59235_60487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (6))){
var state_59223__$1 = state_59223;
var statearr_59236_60489 = state_59223__$1;
(statearr_59236_60489[(2)] = null);

(statearr_59236_60489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (3))){
var inst_59220 = (state_59223[(2)]);
var inst_59221 = cljs.core.async.close_BANG_(out);
var state_59223__$1 = (function (){var statearr_59237 = state_59223;
(statearr_59237[(9)] = inst_59220);

return statearr_59237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59223__$1,inst_59221);
} else {
if((state_val_59224 === (2))){
var state_59223__$1 = state_59223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59223__$1,(4),ch);
} else {
if((state_val_59224 === (11))){
var inst_59201 = (state_59223[(8)]);
var inst_59212 = (state_59223[(2)]);
var inst_59195 = inst_59201;
var state_59223__$1 = (function (){var statearr_59238 = state_59223;
(statearr_59238[(10)] = inst_59212);

(statearr_59238[(7)] = inst_59195);

return statearr_59238;
})();
var statearr_59239_60493 = state_59223__$1;
(statearr_59239_60493[(2)] = null);

(statearr_59239_60493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (9))){
var inst_59201 = (state_59223[(8)]);
var state_59223__$1 = state_59223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59223__$1,(11),out,inst_59201);
} else {
if((state_val_59224 === (5))){
var inst_59201 = (state_59223[(8)]);
var inst_59195 = (state_59223[(7)]);
var inst_59206 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59201,inst_59195);
var state_59223__$1 = state_59223;
if(inst_59206){
var statearr_59243_60494 = state_59223__$1;
(statearr_59243_60494[(1)] = (8));

} else {
var statearr_59244_60495 = state_59223__$1;
(statearr_59244_60495[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (10))){
var inst_59215 = (state_59223[(2)]);
var state_59223__$1 = state_59223;
var statearr_59245_60502 = state_59223__$1;
(statearr_59245_60502[(2)] = inst_59215);

(statearr_59245_60502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59224 === (8))){
var inst_59195 = (state_59223[(7)]);
var tmp59242 = inst_59195;
var inst_59195__$1 = tmp59242;
var state_59223__$1 = (function (){var statearr_59246 = state_59223;
(statearr_59246[(7)] = inst_59195__$1);

return statearr_59246;
})();
var statearr_59247_60503 = state_59223__$1;
(statearr_59247_60503[(2)] = null);

(statearr_59247_60503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55985__auto__ = null;
var cljs$core$async$state_machine__55985__auto____0 = (function (){
var statearr_59248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59248[(0)] = cljs$core$async$state_machine__55985__auto__);

(statearr_59248[(1)] = (1));

return statearr_59248;
});
var cljs$core$async$state_machine__55985__auto____1 = (function (state_59223){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_59223);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e59249){var ex__55988__auto__ = e59249;
var statearr_59250_60509 = state_59223;
(statearr_59250_60509[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_59223[(4)]))){
var statearr_59251_60510 = state_59223;
(statearr_59251_60510[(1)] = cljs.core.first((state_59223[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60513 = state_59223;
state_59223 = G__60513;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$state_machine__55985__auto__ = function(state_59223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55985__auto____1.call(this,state_59223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55985__auto____0;
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55985__auto____1;
return cljs$core$async$state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_59252 = f__56207__auto__();
(statearr_59252[(6)] = c__56206__auto___60483);

return statearr_59252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__59254 = arguments.length;
switch (G__59254) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56206__auto___60519 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_59292){
var state_val_59293 = (state_59292[(1)]);
if((state_val_59293 === (7))){
var inst_59288 = (state_59292[(2)]);
var state_59292__$1 = state_59292;
var statearr_59294_60520 = state_59292__$1;
(statearr_59294_60520[(2)] = inst_59288);

(statearr_59294_60520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59293 === (1))){
var inst_59255 = (new Array(n));
var inst_59256 = inst_59255;
var inst_59257 = (0);
var state_59292__$1 = (function (){var statearr_59295 = state_59292;
(statearr_59295[(7)] = inst_59257);

(statearr_59295[(8)] = inst_59256);

return statearr_59295;
})();
var statearr_59296_60527 = state_59292__$1;
(statearr_59296_60527[(2)] = null);

(statearr_59296_60527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59293 === (4))){
var inst_59260 = (state_59292[(9)]);
var inst_59260__$1 = (state_59292[(2)]);
var inst_59261 = (inst_59260__$1 == null);
var inst_59262 = cljs.core.not(inst_59261);
var state_59292__$1 = (function (){var statearr_59297 = state_59292;
(statearr_59297[(9)] = inst_59260__$1);

return statearr_59297;
})();
if(inst_59262){
var statearr_59298_60535 = state_59292__$1;
(statearr_59298_60535[(1)] = (5));

} else {
var statearr_59299_60539 = state_59292__$1;
(statearr_59299_60539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59293 === (15))){
var inst_59282 = (state_59292[(2)]);
var state_59292__$1 = state_59292;
var statearr_59300_60540 = state_59292__$1;
(statearr_59300_60540[(2)] = inst_59282);

(statearr_59300_60540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59293 === (13))){
var state_59292__$1 = state_59292;
var statearr_59302_60541 = state_59292__$1;
(statearr_59302_60541[(2)] = null);

(statearr_59302_60541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59293 === (6))){
var inst_59257 = (state_59292[(7)]);
var inst_59278 = (inst_59257 > (0));
var state_59292__$1 = state_59292;
if(cljs.core.truth_(inst_59278)){
var statearr_59304_60542 = state_59292__$1;
(statearr_59304_60542[(1)] = (12));

} else {
var statearr_59305_60543 = state_59292__$1;
(statearr_59305_60543[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59293 === (3))){
var inst_59290 = (state_59292[(2)]);
var state_59292__$1 = state_59292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59292__$1,inst_59290);
} else {
if((state_val_59293 === (12))){
var inst_59256 = (state_59292[(8)]);
var inst_59280 = cljs.core.vec(inst_59256);
var state_59292__$1 = state_59292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59292__$1,(15),out,inst_59280);
} else {
if((state_val_59293 === (2))){
var state_59292__$1 = state_59292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59292__$1,(4),ch);
} else {
if((state_val_59293 === (11))){
var inst_59272 = (state_59292[(2)]);
var inst_59273 = (new Array(n));
var inst_59256 = inst_59273;
var inst_59257 = (0);
var state_59292__$1 = (function (){var statearr_59306 = state_59292;
(statearr_59306[(7)] = inst_59257);

(statearr_59306[(10)] = inst_59272);

(statearr_59306[(8)] = inst_59256);

return statearr_59306;
})();
var statearr_59307_60551 = state_59292__$1;
(statearr_59307_60551[(2)] = null);

(statearr_59307_60551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59293 === (9))){
var inst_59256 = (state_59292[(8)]);
var inst_59270 = cljs.core.vec(inst_59256);
var state_59292__$1 = state_59292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59292__$1,(11),out,inst_59270);
} else {
if((state_val_59293 === (5))){
var inst_59257 = (state_59292[(7)]);
var inst_59265 = (state_59292[(11)]);
var inst_59260 = (state_59292[(9)]);
var inst_59256 = (state_59292[(8)]);
var inst_59264 = (inst_59256[inst_59257] = inst_59260);
var inst_59265__$1 = (inst_59257 + (1));
var inst_59266 = (inst_59265__$1 < n);
var state_59292__$1 = (function (){var statearr_59310 = state_59292;
(statearr_59310[(12)] = inst_59264);

(statearr_59310[(11)] = inst_59265__$1);

return statearr_59310;
})();
if(cljs.core.truth_(inst_59266)){
var statearr_59311_60556 = state_59292__$1;
(statearr_59311_60556[(1)] = (8));

} else {
var statearr_59312_60557 = state_59292__$1;
(statearr_59312_60557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59293 === (14))){
var inst_59285 = (state_59292[(2)]);
var inst_59286 = cljs.core.async.close_BANG_(out);
var state_59292__$1 = (function (){var statearr_59314 = state_59292;
(statearr_59314[(13)] = inst_59285);

return statearr_59314;
})();
var statearr_59315_60560 = state_59292__$1;
(statearr_59315_60560[(2)] = inst_59286);

(statearr_59315_60560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59293 === (10))){
var inst_59276 = (state_59292[(2)]);
var state_59292__$1 = state_59292;
var statearr_59316_60561 = state_59292__$1;
(statearr_59316_60561[(2)] = inst_59276);

(statearr_59316_60561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59293 === (8))){
var inst_59265 = (state_59292[(11)]);
var inst_59256 = (state_59292[(8)]);
var tmp59313 = inst_59256;
var inst_59256__$1 = tmp59313;
var inst_59257 = inst_59265;
var state_59292__$1 = (function (){var statearr_59317 = state_59292;
(statearr_59317[(7)] = inst_59257);

(statearr_59317[(8)] = inst_59256__$1);

return statearr_59317;
})();
var statearr_59318_60562 = state_59292__$1;
(statearr_59318_60562[(2)] = null);

(statearr_59318_60562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55985__auto__ = null;
var cljs$core$async$state_machine__55985__auto____0 = (function (){
var statearr_59320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59320[(0)] = cljs$core$async$state_machine__55985__auto__);

(statearr_59320[(1)] = (1));

return statearr_59320;
});
var cljs$core$async$state_machine__55985__auto____1 = (function (state_59292){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_59292);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e59322){var ex__55988__auto__ = e59322;
var statearr_59323_60565 = state_59292;
(statearr_59323_60565[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_59292[(4)]))){
var statearr_59324_60566 = state_59292;
(statearr_59324_60566[(1)] = cljs.core.first((state_59292[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60567 = state_59292;
state_59292 = G__60567;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$state_machine__55985__auto__ = function(state_59292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55985__auto____1.call(this,state_59292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55985__auto____0;
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55985__auto____1;
return cljs$core$async$state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_59325 = f__56207__auto__();
(statearr_59325[(6)] = c__56206__auto___60519);

return statearr_59325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__59330 = arguments.length;
switch (G__59330) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56206__auto___60574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56207__auto__ = (function (){var switch__55984__auto__ = (function (state_59380){
var state_val_59381 = (state_59380[(1)]);
if((state_val_59381 === (7))){
var inst_59376 = (state_59380[(2)]);
var state_59380__$1 = state_59380;
var statearr_59383_60576 = state_59380__$1;
(statearr_59383_60576[(2)] = inst_59376);

(statearr_59383_60576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59381 === (1))){
var inst_59334 = [];
var inst_59335 = inst_59334;
var inst_59336 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59380__$1 = (function (){var statearr_59385 = state_59380;
(statearr_59385[(7)] = inst_59336);

(statearr_59385[(8)] = inst_59335);

return statearr_59385;
})();
var statearr_59389_60584 = state_59380__$1;
(statearr_59389_60584[(2)] = null);

(statearr_59389_60584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59381 === (4))){
var inst_59339 = (state_59380[(9)]);
var inst_59339__$1 = (state_59380[(2)]);
var inst_59340 = (inst_59339__$1 == null);
var inst_59341 = cljs.core.not(inst_59340);
var state_59380__$1 = (function (){var statearr_59390 = state_59380;
(statearr_59390[(9)] = inst_59339__$1);

return statearr_59390;
})();
if(inst_59341){
var statearr_59391_60586 = state_59380__$1;
(statearr_59391_60586[(1)] = (5));

} else {
var statearr_59392_60590 = state_59380__$1;
(statearr_59392_60590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59381 === (15))){
var inst_59335 = (state_59380[(8)]);
var inst_59368 = cljs.core.vec(inst_59335);
var state_59380__$1 = state_59380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59380__$1,(18),out,inst_59368);
} else {
if((state_val_59381 === (13))){
var inst_59362 = (state_59380[(2)]);
var state_59380__$1 = state_59380;
var statearr_59394_60592 = state_59380__$1;
(statearr_59394_60592[(2)] = inst_59362);

(statearr_59394_60592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59381 === (6))){
var inst_59335 = (state_59380[(8)]);
var inst_59364 = inst_59335.length;
var inst_59365 = (inst_59364 > (0));
var state_59380__$1 = state_59380;
if(cljs.core.truth_(inst_59365)){
var statearr_59395_60593 = state_59380__$1;
(statearr_59395_60593[(1)] = (15));

} else {
var statearr_59397_60594 = state_59380__$1;
(statearr_59397_60594[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59381 === (17))){
var inst_59373 = (state_59380[(2)]);
var inst_59374 = cljs.core.async.close_BANG_(out);
var state_59380__$1 = (function (){var statearr_59399 = state_59380;
(statearr_59399[(10)] = inst_59373);

return statearr_59399;
})();
var statearr_59400_60595 = state_59380__$1;
(statearr_59400_60595[(2)] = inst_59374);

(statearr_59400_60595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59381 === (3))){
var inst_59378 = (state_59380[(2)]);
var state_59380__$1 = state_59380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59380__$1,inst_59378);
} else {
if((state_val_59381 === (12))){
var inst_59335 = (state_59380[(8)]);
var inst_59354 = cljs.core.vec(inst_59335);
var state_59380__$1 = state_59380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59380__$1,(14),out,inst_59354);
} else {
if((state_val_59381 === (2))){
var state_59380__$1 = state_59380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59380__$1,(4),ch);
} else {
if((state_val_59381 === (11))){
var inst_59343 = (state_59380[(11)]);
var inst_59335 = (state_59380[(8)]);
var inst_59339 = (state_59380[(9)]);
var inst_59351 = inst_59335.push(inst_59339);
var tmp59402 = inst_59335;
var inst_59335__$1 = tmp59402;
var inst_59336 = inst_59343;
var state_59380__$1 = (function (){var statearr_59406 = state_59380;
(statearr_59406[(7)] = inst_59336);

(statearr_59406[(8)] = inst_59335__$1);

(statearr_59406[(12)] = inst_59351);

return statearr_59406;
})();
var statearr_59407_60597 = state_59380__$1;
(statearr_59407_60597[(2)] = null);

(statearr_59407_60597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59381 === (9))){
var inst_59336 = (state_59380[(7)]);
var inst_59347 = cljs.core.keyword_identical_QMARK_(inst_59336,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_59380__$1 = state_59380;
var statearr_59408_60600 = state_59380__$1;
(statearr_59408_60600[(2)] = inst_59347);

(statearr_59408_60600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59381 === (5))){
var inst_59343 = (state_59380[(11)]);
var inst_59336 = (state_59380[(7)]);
var inst_59344 = (state_59380[(13)]);
var inst_59339 = (state_59380[(9)]);
var inst_59343__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59339) : f.call(null,inst_59339));
var inst_59344__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59343__$1,inst_59336);
var state_59380__$1 = (function (){var statearr_59409 = state_59380;
(statearr_59409[(11)] = inst_59343__$1);

(statearr_59409[(13)] = inst_59344__$1);

return statearr_59409;
})();
if(inst_59344__$1){
var statearr_59413_60602 = state_59380__$1;
(statearr_59413_60602[(1)] = (8));

} else {
var statearr_59414_60603 = state_59380__$1;
(statearr_59414_60603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59381 === (14))){
var inst_59343 = (state_59380[(11)]);
var inst_59339 = (state_59380[(9)]);
var inst_59356 = (state_59380[(2)]);
var inst_59357 = [];
var inst_59359 = inst_59357.push(inst_59339);
var inst_59335 = inst_59357;
var inst_59336 = inst_59343;
var state_59380__$1 = (function (){var statearr_59415 = state_59380;
(statearr_59415[(7)] = inst_59336);

(statearr_59415[(14)] = inst_59359);

(statearr_59415[(8)] = inst_59335);

(statearr_59415[(15)] = inst_59356);

return statearr_59415;
})();
var statearr_59416_60610 = state_59380__$1;
(statearr_59416_60610[(2)] = null);

(statearr_59416_60610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59381 === (16))){
var state_59380__$1 = state_59380;
var statearr_59417_60611 = state_59380__$1;
(statearr_59417_60611[(2)] = null);

(statearr_59417_60611[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59381 === (10))){
var inst_59349 = (state_59380[(2)]);
var state_59380__$1 = state_59380;
if(cljs.core.truth_(inst_59349)){
var statearr_59418_60613 = state_59380__$1;
(statearr_59418_60613[(1)] = (11));

} else {
var statearr_59419_60614 = state_59380__$1;
(statearr_59419_60614[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59381 === (18))){
var inst_59370 = (state_59380[(2)]);
var state_59380__$1 = state_59380;
var statearr_59420_60615 = state_59380__$1;
(statearr_59420_60615[(2)] = inst_59370);

(statearr_59420_60615[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59381 === (8))){
var inst_59344 = (state_59380[(13)]);
var state_59380__$1 = state_59380;
var statearr_59421_60616 = state_59380__$1;
(statearr_59421_60616[(2)] = inst_59344);

(statearr_59421_60616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55985__auto__ = null;
var cljs$core$async$state_machine__55985__auto____0 = (function (){
var statearr_59435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59435[(0)] = cljs$core$async$state_machine__55985__auto__);

(statearr_59435[(1)] = (1));

return statearr_59435;
});
var cljs$core$async$state_machine__55985__auto____1 = (function (state_59380){
while(true){
var ret_value__55986__auto__ = (function (){try{while(true){
var result__55987__auto__ = switch__55984__auto__(state_59380);
if(cljs.core.keyword_identical_QMARK_(result__55987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55987__auto__;
}
break;
}
}catch (e59442){var ex__55988__auto__ = e59442;
var statearr_59443_60618 = state_59380;
(statearr_59443_60618[(2)] = ex__55988__auto__);


if(cljs.core.seq((state_59380[(4)]))){
var statearr_59444_60619 = state_59380;
(statearr_59444_60619[(1)] = cljs.core.first((state_59380[(4)])));

} else {
throw ex__55988__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55986__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60621 = state_59380;
state_59380 = G__60621;
continue;
} else {
return ret_value__55986__auto__;
}
break;
}
});
cljs$core$async$state_machine__55985__auto__ = function(state_59380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55985__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55985__auto____1.call(this,state_59380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55985__auto____0;
cljs$core$async$state_machine__55985__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55985__auto____1;
return cljs$core$async$state_machine__55985__auto__;
})()
})();
var state__56208__auto__ = (function (){var statearr_59445 = f__56207__auto__();
(statearr_59445[(6)] = c__56206__auto___60574);

return statearr_59445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56208__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
