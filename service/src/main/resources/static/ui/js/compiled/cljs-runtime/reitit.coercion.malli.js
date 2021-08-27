goog.provide('reitit.coercion.malli');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.coercion.malli.Coercer = (function (decoder,encoder,validator,explainer,__meta,__extmap,__hash){
this.decoder = decoder;
this.encoder = encoder;
this.validator = validator;
this.explainer = explainer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.coercion.malli.Coercer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k67379,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__67390 = k67379;
var G__67390__$1 = (((G__67390 instanceof cljs.core.Keyword))?G__67390.fqn:null);
switch (G__67390__$1) {
case "decoder":
return self__.decoder;

break;
case "encoder":
return self__.encoder;

break;
case "validator":
return self__.validator;

break;
case "explainer":
return self__.explainer;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67379,else__4464__auto__);

}
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__67394){
var vec__67395 = p__67394;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67395,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67395,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#reitit.coercion.malli.Coercer{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"decoder","decoder",1169558843),self__.decoder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"encoder","encoder",-1113127834),self__.encoder],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"explainer","explainer",-2002221924),self__.explainer],null))], null),self__.__extmap));
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67378){
var self__ = this;
var G__67378__$1 = this;
return (new cljs.core.RecordIter((0),G__67378__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"decoder","decoder",1169558843),new cljs.core.Keyword(null,"encoder","encoder",-1113127834),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword(null,"explainer","explainer",-2002221924)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new reitit.coercion.malli.Coercer(self__.decoder,self__.encoder,self__.validator,self__.explainer,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-763269459 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67380,other67381){
var self__ = this;
var this67380__$1 = this;
return (((!((other67381 == null)))) && ((((this67380__$1.constructor === other67381.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67380__$1.decoder,other67381.decoder)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67380__$1.encoder,other67381.encoder)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67380__$1.validator,other67381.validator)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67380__$1.explainer,other67381.explainer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67380__$1.__extmap,other67381.__extmap)))))))))))));
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoder","encoder",-1113127834),null,new cljs.core.Keyword(null,"validator","validator",-1966190681),null,new cljs.core.Keyword(null,"decoder","decoder",1169558843),null,new cljs.core.Keyword(null,"explainer","explainer",-2002221924),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new reitit.coercion.malli.Coercer(self__.decoder,self__.encoder,self__.validator,self__.explainer,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k67379){
var self__ = this;
var this__4468__auto____$1 = this;
var G__67418 = k67379;
var G__67418__$1 = (((G__67418 instanceof cljs.core.Keyword))?G__67418.fqn:null);
switch (G__67418__$1) {
case "decoder":
case "encoder":
case "validator":
case "explainer":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67379);

}
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__67378){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__67423 = cljs.core.keyword_identical_QMARK_;
var expr__67424 = k__4470__auto__;
if(cljs.core.truth_((pred__67423.cljs$core$IFn$_invoke$arity$2 ? pred__67423.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"decoder","decoder",1169558843),expr__67424) : pred__67423.call(null,new cljs.core.Keyword(null,"decoder","decoder",1169558843),expr__67424)))){
return (new reitit.coercion.malli.Coercer(G__67378,self__.encoder,self__.validator,self__.explainer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67423.cljs$core$IFn$_invoke$arity$2 ? pred__67423.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"encoder","encoder",-1113127834),expr__67424) : pred__67423.call(null,new cljs.core.Keyword(null,"encoder","encoder",-1113127834),expr__67424)))){
return (new reitit.coercion.malli.Coercer(self__.decoder,G__67378,self__.validator,self__.explainer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67423.cljs$core$IFn$_invoke$arity$2 ? pred__67423.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validator","validator",-1966190681),expr__67424) : pred__67423.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681),expr__67424)))){
return (new reitit.coercion.malli.Coercer(self__.decoder,self__.encoder,G__67378,self__.explainer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67423.cljs$core$IFn$_invoke$arity$2 ? pred__67423.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"explainer","explainer",-2002221924),expr__67424) : pred__67423.call(null,new cljs.core.Keyword(null,"explainer","explainer",-2002221924),expr__67424)))){
return (new reitit.coercion.malli.Coercer(self__.decoder,self__.encoder,self__.validator,G__67378,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.coercion.malli.Coercer(self__.decoder,self__.encoder,self__.validator,self__.explainer,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__67378),null));
}
}
}
}
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"decoder","decoder",1169558843),self__.decoder,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"encoder","encoder",-1113127834),self__.encoder,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"explainer","explainer",-2002221924),self__.explainer,null))], null),self__.__extmap));
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__67378){
var self__ = this;
var this__4460__auto____$1 = this;
return (new reitit.coercion.malli.Coercer(self__.decoder,self__.encoder,self__.validator,self__.explainer,G__67378,self__.__extmap,self__.__hash));
}));

(reitit.coercion.malli.Coercer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(reitit.coercion.malli.Coercer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"decoder","decoder",-1484876926,null),new cljs.core.Symbol(null,"encoder","encoder",527403693,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"explainer","explainer",-361690397,null)], null);
}));

(reitit.coercion.malli.Coercer.cljs$lang$type = true);

(reitit.coercion.malli.Coercer.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"reitit.coercion.malli/Coercer",null,(1),null));
}));

(reitit.coercion.malli.Coercer.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"reitit.coercion.malli/Coercer");
}));

/**
 * Positional factory function for reitit.coercion.malli/Coercer.
 */
reitit.coercion.malli.__GT_Coercer = (function reitit$coercion$malli$__GT_Coercer(decoder,encoder,validator,explainer){
return (new reitit.coercion.malli.Coercer(decoder,encoder,validator,explainer,null,null,null));
});

/**
 * Factory function for reitit.coercion.malli/Coercer, taking a map of keywords to field values.
 */
reitit.coercion.malli.map__GT_Coercer = (function reitit$coercion$malli$map__GT_Coercer(G__67385){
var extmap__4501__auto__ = (function (){var G__67443 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67385,new cljs.core.Keyword(null,"decoder","decoder",1169558843),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"encoder","encoder",-1113127834),new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword(null,"explainer","explainer",-2002221924)], 0));
if(cljs.core.record_QMARK_(G__67385)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67443);
} else {
return G__67443;
}
})();
return (new reitit.coercion.malli.Coercer(new cljs.core.Keyword(null,"decoder","decoder",1169558843).cljs$core$IFn$_invoke$arity$1(G__67385),new cljs.core.Keyword(null,"encoder","encoder",-1113127834).cljs$core$IFn$_invoke$arity$1(G__67385),new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(G__67385),new cljs.core.Keyword(null,"explainer","explainer",-2002221924).cljs$core$IFn$_invoke$arity$1(G__67385),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


/**
 * @interface
 */
reitit.coercion.malli.TransformationProvider = function(){};

var reitit$coercion$malli$TransformationProvider$_transformer$dyn_67643 = (function (this$,options){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (reitit.coercion.malli._transformer[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__4510__auto__.call(null,this$,options));
} else {
var m__4508__auto__ = (reitit.coercion.malli._transformer["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,options) : m__4508__auto__.call(null,this$,options));
} else {
throw cljs.core.missing_protocol("TransformationProvider.-transformer",this$);
}
}
});
reitit.coercion.malli._transformer = (function reitit$coercion$malli$_transformer(this$,options){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$malli$TransformationProvider$_transformer$arity$2 == null)))))){
return this$.reitit$coercion$malli$TransformationProvider$_transformer$arity$2(this$,options);
} else {
return reitit$coercion$malli$TransformationProvider$_transformer$dyn_67643(this$,options);
}
});

reitit.coercion.malli._provider = (function reitit$coercion$malli$_provider(transformer){
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.malli !== 'undefined') && (typeof reitit.coercion.malli.t_reitit$coercion$malli67462 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.malli.TransformationProvider}
*/
reitit.coercion.malli.t_reitit$coercion$malli67462 = (function (transformer,meta67463){
this.transformer = transformer;
this.meta67463 = meta67463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.malli.t_reitit$coercion$malli67462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67464,meta67463__$1){
var self__ = this;
var _67464__$1 = this;
return (new reitit.coercion.malli.t_reitit$coercion$malli67462(self__.transformer,meta67463__$1));
}));

(reitit.coercion.malli.t_reitit$coercion$malli67462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67464){
var self__ = this;
var _67464__$1 = this;
return self__.meta67463;
}));

(reitit.coercion.malli.t_reitit$coercion$malli67462.prototype.reitit$coercion$malli$TransformationProvider$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.malli.t_reitit$coercion$malli67462.prototype.reitit$coercion$malli$TransformationProvider$_transformer$arity$2 = (function (_,p__67468){
var self__ = this;
var map__67469 = p__67468;
var map__67469__$1 = cljs.core.__destructure_map(map__67469);
var strip_extra_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67469__$1,new cljs.core.Keyword(null,"strip-extra-keys","strip-extra-keys",844924777));
var default_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67469__$1,new cljs.core.Keyword(null,"default-values","default-values",1480201073));
var ___$1 = this;
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(strip_extra_keys)?malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$0():null),self__.transformer,(cljs.core.truth_(default_values)?malli.transform.default_value_transformer():null)], 0));
}));

(reitit.coercion.malli.t_reitit$coercion$malli67462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transformer","transformer",147060907,null),new cljs.core.Symbol(null,"meta67463","meta67463",185250622,null)], null);
}));

(reitit.coercion.malli.t_reitit$coercion$malli67462.cljs$lang$type = true);

(reitit.coercion.malli.t_reitit$coercion$malli67462.cljs$lang$ctorStr = "reitit.coercion.malli/t_reitit$coercion$malli67462");

(reitit.coercion.malli.t_reitit$coercion$malli67462.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.coercion.malli/t_reitit$coercion$malli67462");
}));

/**
 * Positional factory function for reitit.coercion.malli/t_reitit$coercion$malli67462.
 */
reitit.coercion.malli.__GT_t_reitit$coercion$malli67462 = (function reitit$coercion$malli$_provider_$___GT_t_reitit$coercion$malli67462(transformer__$1,meta67463){
return (new reitit.coercion.malli.t_reitit$coercion$malli67462(transformer__$1,meta67463));
});

}

return (new reitit.coercion.malli.t_reitit$coercion$malli67462(transformer,cljs.core.PersistentArrayMap.EMPTY));
});
reitit.coercion.malli.string_transformer_provider = reitit.coercion.malli._provider(malli.transform.string_transformer());
reitit.coercion.malli.json_transformer_provider = reitit.coercion.malli._provider(malli.transform.json_transformer());
reitit.coercion.malli.default_transformer_provider = reitit.coercion.malli._provider(null);
reitit.coercion.malli._coercer = (function reitit$coercion$malli$_coercer(schema,type,transformers,f,encoder,opts){
if(cljs.core.truth_(schema)){
var __GT_coercer = (function (t){
if(cljs.core.truth_(t)){
return reitit.coercion.malli.__GT_Coercer(malli.core.decoder.cljs$core$IFn$_invoke$arity$3(schema,opts,t),malli.core.encoder.cljs$core$IFn$_invoke$arity$3(schema,opts,t),malli.core.validator.cljs$core$IFn$_invoke$arity$2(schema,opts),malli.core.explainer.cljs$core$IFn$_invoke$arity$2(schema,opts));
} else {
return null;
}
});
var map__67471 = (transformers.cljs$core$IFn$_invoke$arity$1 ? transformers.cljs$core$IFn$_invoke$arity$1(type) : transformers.call(null,type));
var map__67471__$1 = cljs.core.__destructure_map(map__67471);
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67471__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67471__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var default_coercer = __GT_coercer(default$);
var encode = (function (){var or__4212__auto__ = encoder;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (function (value,_format){
return value;
});
}
})();
var format_coercers = (function (){var G__67479 = (function (){var iter__4611__auto__ = (function reitit$coercion$malli$_coercer_$_iter__67480(s__67481){
return (new cljs.core.LazySeq(null,(function (){
var s__67481__$1 = s__67481;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__67481__$1);
if(temp__5753__auto__){
var s__67481__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67481__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__67481__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__67483 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__67482 = (0);
while(true){
if((i__67482 < size__4610__auto__)){
var vec__67485 = cljs.core._nth(c__4609__auto__,i__67482);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67485,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67485,(1),null);
cljs.core.chunk_append(b__67483,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f__$1,__GT_coercer(t)], null));

var G__67668 = (i__67482 + (1));
i__67482 = G__67668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67483),reitit$coercion$malli$_coercer_$_iter__67480(cljs.core.chunk_rest(s__67481__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67483),null);
}
} else {
var vec__67490 = cljs.core.first(s__67481__$2);
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67490,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67490,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f__$1,__GT_coercer(t)], null),reitit$coercion$malli$_coercer_$_iter__67480(cljs.core.rest(s__67481__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(formats);
})();
var G__67479__$1 = (((G__67479 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__67479));
var G__67479__$2 = (((G__67479__$1 == null))?null:cljs.core.seq(G__67479__$1));
if((G__67479__$2 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67479__$2);
}
})();
var get_coercer = (cljs.core.truth_(format_coercers)?(function (format){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(format_coercers,format);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default_coercer;
}
}):(cljs.core.truth_(default_coercer)?cljs.core.constantly(default_coercer):null));
if(cljs.core.truth_(get_coercer)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.Keyword(null,"decode","decode",-1306165281))){
return (function (value,format){
var temp__5751__auto__ = get_coercer(format);
if(cljs.core.truth_(temp__5751__auto__)){
var coercer = temp__5751__auto__;
var decoder = new cljs.core.Keyword(null,"decoder","decoder",1169558843).cljs$core$IFn$_invoke$arity$1(coercer);
var validator = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(coercer);
var transformed = (decoder.cljs$core$IFn$_invoke$arity$1 ? decoder.cljs$core$IFn$_invoke$arity$1(value) : decoder.call(null,value));
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(transformed) : validator.call(null,transformed)))){
return transformed;
} else {
var explainer = new cljs.core.Keyword(null,"explainer","explainer",-2002221924).cljs$core$IFn$_invoke$arity$1(coercer);
var error = (explainer.cljs$core$IFn$_invoke$arity$1 ? explainer.cljs$core$IFn$_invoke$arity$1(transformed) : explainer.call(null,transformed));
return reitit.coercion.map__GT_CoercionError(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"transformed","transformed",1969289512),transformed));
}
} else {
return value;
}
});
} else {
return (function (value,format){
var temp__5751__auto__ = get_coercer(format);
if(cljs.core.truth_(temp__5751__auto__)){
var coercer = temp__5751__auto__;
var decoder = new cljs.core.Keyword(null,"decoder","decoder",1169558843).cljs$core$IFn$_invoke$arity$1(coercer);
var validator = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(coercer);
var transformed = (decoder.cljs$core$IFn$_invoke$arity$1 ? decoder.cljs$core$IFn$_invoke$arity$1(value) : decoder.call(null,value));
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(transformed) : validator.call(null,transformed)))){
return (encode.cljs$core$IFn$_invoke$arity$2 ? encode.cljs$core$IFn$_invoke$arity$2(transformed,format) : encode.call(null,transformed,format));
} else {
var explainer = new cljs.core.Keyword(null,"explainer","explainer",-2002221924).cljs$core$IFn$_invoke$arity$1(coercer);
var error = (explainer.cljs$core$IFn$_invoke$arity$1 ? explainer.cljs$core$IFn$_invoke$arity$1(transformed) : explainer.call(null,transformed));
return reitit.coercion.map__GT_CoercionError(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"transformed","transformed",1969289512),transformed));
}
} else {
return value;
}
});
}
} else {
return null;
}
} else {
return null;
}
});
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.malli !== 'undefined') && (typeof reitit.coercion.malli.extract_parameter !== 'undefined')){
} else {
reitit.coercion.malli.extract_parameter = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__67515 = cljs.core.get_global_hierarchy;
return (fexpr__67515.cljs$core$IFn$_invoke$arity$0 ? fexpr__67515.cljs$core$IFn$_invoke$arity$0() : fexpr__67515.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.coercion.malli","extract-parameter"),(function (in$,_){
return in$;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
reitit.coercion.malli.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"body","body",-2049205669),(function (_,schema){
var swagger_schema = malli.swagger.transform.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),"body",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$2(swagger_schema,""),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(swagger_schema,""),new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"maybe","maybe",-314397560),malli.core.name.cljs$core$IFn$_invoke$arity$1(schema)),new cljs.core.Keyword(null,"schema","schema",-1582001791),swagger_schema], null)], null);
}));
reitit.coercion.malli.extract_parameter.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (in$,schema){
var map__67523 = malli.swagger.transform.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),in$,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parameter","parameter",1978789597)], null));
var map__67523__$1 = cljs.core.__destructure_map(map__67523);
var properties = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67523__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67523__$1,new cljs.core.Keyword(null,"required","required",1807647006));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__67526){
var vec__67527 = p__67526;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67527,(0),null);
var map__67530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67527,(1),null);
var map__67530__$1 = cljs.core.__destructure_map(map__67530);
var schema__$1 = map__67530__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67530__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.name(in$),new cljs.core.Keyword(null,"name","name",1843675177),k,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(schema__$1,""),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.contains_QMARK_(cljs.core.set(required),k)], null),schema__$1], 0));
}),properties);
}));
reitit.coercion.malli.default_options = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.malli.default_transformer_provider,new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.malli.json_transformer_provider], null)], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.malli.string_transformer_provider], null),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.malli.default_transformer_provider], null)], null),new cljs.core.Keyword(null,"error-keys","error-keys",633236228),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"errors","errors",-908790718),null,new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"coercion","coercion",904067157),null,new cljs.core.Keyword(null,"in","in",-1531184865),null,new cljs.core.Keyword(null,"humanized","humanized",-287672961),null], null), null),new cljs.core.Keyword(null,"compile","compile",608186429),malli.util.closed_schema,new cljs.core.Keyword(null,"strip-extra-keys","strip-extra-keys",844924777),true,new cljs.core.Keyword(null,"default-values","default-values",1480201073),true,new cljs.core.Keyword(null,"options","options",99638489),null], null);
reitit.coercion.malli.create = (function reitit$coercion$malli$create(var_args){
var G__67536 = arguments.length;
switch (G__67536) {
case 0:
return reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$0 = (function (){
return reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$1(null);
}));

(reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var map__67538 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.coercion.malli.default_options,opts], 0));
var map__67538__$1 = cljs.core.__destructure_map(map__67538);
var opts__$1 = map__67538__$1;
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67538__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67538__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67538__$1,new cljs.core.Keyword(null,"options","options",99638489));
var error_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67538__$1,new cljs.core.Keyword(null,"error-keys","error-keys",633236228));
var show_QMARK_ = (function (key){
return cljs.core.contains_QMARK_(error_keys,key);
});
var transformers__$1 = clojure.walk.prewalk((function (p1__67533_SHARP_){
if((((!((p1__67533_SHARP_ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__67533_SHARP_.reitit$coercion$malli$TransformationProvider$))))?true:(((!p1__67533_SHARP_.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(reitit.coercion.malli.TransformationProvider,p1__67533_SHARP_):false)):cljs.core.native_satisfies_QMARK_(reitit.coercion.malli.TransformationProvider,p1__67533_SHARP_))){
return reitit.coercion.malli._transformer(p1__67533_SHARP_,opts__$1);
} else {
return p1__67533_SHARP_;
}
}),transformers);
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.malli !== 'undefined') && (typeof reitit.coercion.malli.t_reitit$coercion$malli67541 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.malli.t_reitit$coercion$malli67541 = (function (opts,map__67538,transformers,compile,options,error_keys,show_QMARK_,meta67542){
this.opts = opts;
this.map__67538 = map__67538;
this.transformers = transformers;
this.compile = compile;
this.options = options;
this.error_keys = error_keys;
this.show_QMARK_ = show_QMARK_;
this.meta67542 = meta67542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.malli.t_reitit$coercion$malli67541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67543,meta67542__$1){
var self__ = this;
var _67543__$1 = this;
return (new reitit.coercion.malli.t_reitit$coercion$malli67541(self__.opts,self__.map__67538,self__.transformers,self__.compile,self__.options,self__.error_keys,self__.show_QMARK_,meta67542__$1));
}));

(reitit.coercion.malli.t_reitit$coercion$malli67541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67543){
var self__ = this;
var _67543__$1 = this;
return self__.meta67542;
}));

(reitit.coercion.malli.t_reitit$coercion$malli67541.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.malli.t_reitit$coercion$malli67541.prototype.reitit$coercion$Coercion$_get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"malli","malli",814072082);
}));

(reitit.coercion.malli.t_reitit$coercion$malli67541.prototype.reitit$coercion$Coercion$_get_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.coercion.malli.t_reitit$coercion$malli67541.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = (function (_,specification,p__67548){
var self__ = this;
var map__67550 = p__67548;
var map__67550__$1 = cljs.core.__destructure_map(map__67550);
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67550__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var responses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67550__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var ___$1 = this;
var G__67551 = specification;
var G__67551__$1 = (((G__67551 instanceof cljs.core.Keyword))?G__67551.fqn:null);
switch (G__67551__$1) {
case "swagger":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4611__auto__ = (function reitit$coercion$malli$iter__67554(s__67555){
return (new cljs.core.LazySeq(null,(function (){
var s__67555__$1 = s__67555;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__67555__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__67560 = cljs.core.first(xs__6308__auto__);
var in$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67560,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67560,(1),null);
var iterys__4607__auto__ = ((function (s__67555__$1,vec__67560,in$,schema,xs__6308__auto__,temp__5753__auto__,G__67551,G__67551__$1,___$1,map__67550,map__67550__$1,parameters,responses,map__67538,map__67538__$1,opts__$1,transformers,compile,options,error_keys,show_QMARK_,transformers__$1){
return (function reitit$coercion$malli$iter__67554_$_iter__67556(s__67557){
return (new cljs.core.LazySeq(null,((function (s__67555__$1,vec__67560,in$,schema,xs__6308__auto__,temp__5753__auto__,G__67551,G__67551__$1,___$1,map__67550,map__67550__$1,parameters,responses,map__67538,map__67538__$1,opts__$1,transformers,compile,options,error_keys,show_QMARK_,transformers__$1){
return (function (){
var s__67557__$1 = s__67557;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__67557__$1);
if(temp__5753__auto____$1){
var s__67557__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__67557__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__67557__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__67559 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__67558 = (0);
while(true){
if((i__67558 < size__4610__auto__)){
var parameter = cljs.core._nth(c__4609__auto__,i__67558);
cljs.core.chunk_append(b__67559,parameter);

var G__67697 = (i__67558 + (1));
i__67558 = G__67697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67559),reitit$coercion$malli$iter__67554_$_iter__67556(cljs.core.chunk_rest(s__67557__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67559),null);
}
} else {
var parameter = cljs.core.first(s__67557__$2);
return cljs.core.cons(parameter,reitit$coercion$malli$iter__67554_$_iter__67556(cljs.core.rest(s__67557__$2)));
}
} else {
return null;
}
break;
}
});})(s__67555__$1,vec__67560,in$,schema,xs__6308__auto__,temp__5753__auto__,G__67551,G__67551__$1,___$1,map__67550,map__67550__$1,parameters,responses,map__67538,map__67538__$1,opts__$1,transformers,compile,options,error_keys,show_QMARK_,transformers__$1))
,null,null));
});})(s__67555__$1,vec__67560,in$,schema,xs__6308__auto__,temp__5753__auto__,G__67551,G__67551__$1,___$1,map__67550,map__67550__$1,parameters,responses,map__67538,map__67538__$1,opts__$1,transformers,compile,options,error_keys,show_QMARK_,transformers__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(reitit.coercion.malli.extract_parameter.cljs$core$IFn$_invoke$arity$2(in$,(self__.compile.cljs$core$IFn$_invoke$arity$1 ? self__.compile.cljs$core$IFn$_invoke$arity$1(schema) : self__.compile.call(null,schema)))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,reitit$coercion$malli$iter__67554(cljs.core.rest(s__67555__$1)));
} else {
var G__67699 = cljs.core.rest(s__67555__$1);
s__67555__$1 = G__67699;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(parameters);
})())], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"responses","responses",1257546453),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(responses),(function (){var iter__4611__auto__ = (function reitit$coercion$malli$iter__67569(s__67570){
return (new cljs.core.LazySeq(null,(function (){
var s__67570__$1 = s__67570;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__67570__$1);
if(temp__5753__auto__){
var s__67570__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67570__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__67570__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__67572 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__67571 = (0);
while(true){
if((i__67571 < size__4610__auto__)){
var vec__67574 = cljs.core._nth(c__4609__auto__,i__67571);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67574,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67574,(1),null);
cljs.core.chunk_append(b__67572,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
var $__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,""));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$2))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.compile),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.swagger.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
} else {
return $__$2;
}
})()], null));

var G__67711 = (i__67571 + (1));
i__67571 = G__67711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67572),reitit$coercion$malli$iter__67569(cljs.core.chunk_rest(s__67570__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67572),null);
}
} else {
var vec__67583 = cljs.core.first(s__67570__$2);
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67583,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67583,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,(function (){var $ = response;
var $__$1 = clojure.set.rename_keys($,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
var $__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,""));
if(cljs.core.truth_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1($__$2))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3($__$2,new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.compile),new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.swagger.transform,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
} else {
return $__$2;
}
})()], null),reitit$coercion$malli$iter__67569(cljs.core.rest(s__67570__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(responses);
})())], null):null)], 0));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Schema apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));

}
}));

(reitit.coercion.malli.t_reitit$coercion$malli67541.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = (function (_,model,___$1){
var self__ = this;
var ___$2 = this;
return (self__.compile.cljs$core$IFn$_invoke$arity$1 ? self__.compile.cljs$core$IFn$_invoke$arity$1(model) : self__.compile.call(null,model));
}));

(reitit.coercion.malli.t_reitit$coercion$malli67541.prototype.reitit$coercion$Coercion$_open_model$arity$2 = (function (_,schema){
var self__ = this;
var ___$1 = this;
return schema;
}));

(reitit.coercion.malli.t_reitit$coercion$malli67541.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
var G__67593 = error;
var G__67593__$1 = (cljs.core.truth_((self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"humanized","humanized",-287672961)) : self__.show_QMARK_.call(null,new cljs.core.Keyword(null,"humanized","humanized",-287672961))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67593,new cljs.core.Keyword(null,"humanized","humanized",-287672961),malli.error.humanize.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"message","message",-406056002)], null))):G__67593);
var G__67593__$2 = (cljs.core.truth_((self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"schema","schema",-1582001791)) : self__.show_QMARK_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__67593__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.edn.write_string,self__.opts):G__67593__$1);
var G__67593__$3 = (cljs.core.truth_((self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.show_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"errors","errors",-908790718)) : self__.show_QMARK_.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718))))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$2(G__67593__$2,self__.opts),new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,(function (p1__67534_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__67534_SHARP_,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.edn.write_string,self__.opts);
}))):G__67593__$2);
if(cljs.core.seq(self__.error_keys)){
return cljs.core.select_keys(G__67593__$3,self__.error_keys);
} else {
return G__67593__$3;
}
}));

(reitit.coercion.malli.t_reitit$coercion$malli67541.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = (function (_,type,schema){
var self__ = this;
var ___$1 = this;
return reitit.coercion.malli._coercer((self__.compile.cljs$core$IFn$_invoke$arity$1 ? self__.compile.cljs$core$IFn$_invoke$arity$1(schema) : self__.compile.call(null,schema)),type,self__.transformers,new cljs.core.Keyword(null,"decode","decode",-1306165281),null,self__.options);
}));

(reitit.coercion.malli.t_reitit$coercion$malli67541.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = (function (_,schema){
var self__ = this;
var ___$1 = this;
var schema__$1 = (self__.compile.cljs$core$IFn$_invoke$arity$1 ? self__.compile.cljs$core$IFn$_invoke$arity$1(schema) : self__.compile.call(null,schema));
var encoder = reitit.coercion.malli._coercer(schema__$1,new cljs.core.Keyword(null,"body","body",-2049205669),self__.transformers,new cljs.core.Keyword(null,"encode","encode",-1753429702),null,self__.options);
return reitit.coercion.malli._coercer(schema__$1,new cljs.core.Keyword(null,"response","response",-1068424192),self__.transformers,new cljs.core.Keyword(null,"encode","encode",-1753429702),encoder,self__.options);
}));

(reitit.coercion.malli.t_reitit$coercion$malli67541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"map__67538","map__67538",371408618,null),new cljs.core.Symbol(null,"transformers","transformers",906329962,null),new cljs.core.Symbol(null,"compile","compile",-2046249340,null),new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"error-keys","error-keys",-2021199541,null),new cljs.core.Symbol(null,"show?","show?",-1110593642,null),new cljs.core.Symbol(null,"meta67542","meta67542",1502998282,null)], null);
}));

(reitit.coercion.malli.t_reitit$coercion$malli67541.cljs$lang$type = true);

(reitit.coercion.malli.t_reitit$coercion$malli67541.cljs$lang$ctorStr = "reitit.coercion.malli/t_reitit$coercion$malli67541");

(reitit.coercion.malli.t_reitit$coercion$malli67541.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"reitit.coercion.malli/t_reitit$coercion$malli67541");
}));

/**
 * Positional factory function for reitit.coercion.malli/t_reitit$coercion$malli67541.
 */
reitit.coercion.malli.__GT_t_reitit$coercion$malli67541 = (function reitit$coercion$malli$__GT_t_reitit$coercion$malli67541(opts__$2,map__67538__$2,transformers__$2,compile__$1,options__$1,error_keys__$1,show_QMARK___$1,meta67542){
return (new reitit.coercion.malli.t_reitit$coercion$malli67541(opts__$2,map__67538__$2,transformers__$2,compile__$1,options__$1,error_keys__$1,show_QMARK___$1,meta67542));
});

}

return (new reitit.coercion.malli.t_reitit$coercion$malli67541(opts__$1,map__67538__$1,transformers__$1,compile,options,error_keys,show_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","coercion","reitit.coercion/coercion",-866612966)], null)));
}));

(reitit.coercion.malli.create.cljs$lang$maxFixedArity = 1);

reitit.coercion.malli.coercion = reitit.coercion.malli.create.cljs$core$IFn$_invoke$arity$1(reitit.coercion.malli.default_options);

//# sourceMappingURL=reitit.coercion.malli.js.map
