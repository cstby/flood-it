// Compiled by ClojureScript 1.10.520 {}
goog.provide('flood_it.core');
goog.require('cljs.core');
goog.require('flood_it.db');
goog.require('flood_it.subs');
goog.require('flood_it.view');
goog.require('flood_it.events');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('re_frame.core');
flood_it.core.get_app_element = (function flood_it$core$get_app_element(){
return goog.dom.getElement("app");
});
flood_it.core.mount = (function flood_it$core$mount(el){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flood_it.view.flood_it], null),el);
});
flood_it.core.mount_app_element = (function flood_it$core$mount_app_element(){
var temp__5457__auto__ = flood_it.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return flood_it.core.mount.call(null,el);
} else {
return null;
}
});
flood_it.core.mount_app_element.call(null);
flood_it.core.on_reload = (function flood_it$core$on_reload(){
return flood_it.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
