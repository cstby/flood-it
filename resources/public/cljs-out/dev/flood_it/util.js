// Compiled by ClojureScript 1.10.520 {}
goog.provide('flood_it.util');
goog.require('cljs.core');
goog.require('re_frame.core');
flood_it.util.map_kv = (function flood_it$util$map_kv(f,coll){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,f.call(null,v));
}),cljs.core.empty.call(null,coll),coll);
});

//# sourceMappingURL=util.js.map
