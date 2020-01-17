// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__16799__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16799 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16800__i = 0, G__16800__a = new Array(arguments.length -  0);
while (G__16800__i < G__16800__a.length) {G__16800__a[G__16800__i] = arguments[G__16800__i + 0]; ++G__16800__i;}
  args = new cljs.core.IndexedSeq(G__16800__a,0,null);
} 
return G__16799__delegate.call(this,args);};
G__16799.cljs$lang$maxFixedArity = 0;
G__16799.cljs$lang$applyTo = (function (arglist__16801){
var args = cljs.core.seq(arglist__16801);
return G__16799__delegate(args);
});
G__16799.cljs$core$IFn$_invoke$arity$variadic = G__16799__delegate;
return G__16799;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__16802__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__16802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16803__i = 0, G__16803__a = new Array(arguments.length -  0);
while (G__16803__i < G__16803__a.length) {G__16803__a[G__16803__i] = arguments[G__16803__i + 0]; ++G__16803__i;}
  args = new cljs.core.IndexedSeq(G__16803__a,0,null);
} 
return G__16802__delegate.call(this,args);};
G__16802.cljs$lang$maxFixedArity = 0;
G__16802.cljs$lang$applyTo = (function (arglist__16804){
var args = cljs.core.seq(arglist__16804);
return G__16802__delegate(args);
});
G__16802.cljs$core$IFn$_invoke$arity$variadic = G__16802__delegate;
return G__16802;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
