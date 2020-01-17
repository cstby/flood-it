// Compiled by ClojureScript 1.10.520 {}
goog.provide('flood_it.view');
goog.require('cljs.core');
goog.require('flood_it.logic');
goog.require('reagent.core');
goog.require('re_frame.core');
flood_it.view.square = (function flood_it$view$square(i,j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"x","x",2099068185),i,new cljs.core.Keyword(null,"y","y",-1757859776),j,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732)], null))).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))),new cljs.core.Keyword(null,"transition","transition",765692007),"fill 1s linear"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.not_EQ_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)),cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flood","flood",557419261),cljs.core.get_in.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-move","inc-move",-1890506383)], null));
} else {
return null;
}
})], null)], null);
});
flood_it.view.overlay_text = (function flood_it$view$overlay_text(text,on_click_event){
var with_let18795 = reagent.ratom.with_let_values.call(null,new cljs.core.Keyword(null,"with-let18795","with-let18795",-1865831021));
var temp__5461__auto___18797 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5461__auto___18797 == null)){
} else {
var c__15014__auto___18798 = temp__5461__auto___18797;
if((with_let18795.generation === c__15014__auto___18798.ratomGeneration)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

with_let18795.generation = c__15014__auto___18798.ratomGeneration;
}


var init18796 = (with_let18795.length === (0));
var color = ((init18796)?(with_let18795[(0)] = reagent.core.atom.call(null,"#3a3a3a")):(with_let18795[(0)]));
var res__15015__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),new cljs.core.Keyword(null,"x","x",2099068185)],["50%","middle",(0.15 * cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007)], null)))),((function (init18796,color,with_let18795){
return (function (e){
return cljs.core.reset_BANG_.call(null,color,"#3a3a3a");
});})(init18796,color,with_let18795))
,cljs.core.deref.call(null,color),((function (init18796,color,with_let18795){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_click_event], null));
});})(init18796,color,with_let18795))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.5s linear"], null),"middle",((function (init18796,color,with_let18795){
return (function (e){
return cljs.core.reset_BANG_.call(null,color,"#fafafa");
});})(init18796,color,with_let18795))
,"50%"]),text], null);

return res__15015__auto__;
});
flood_it.view.win_lose_overlay = (function flood_it$view$win_lose_overlay(){
if(cljs.core.truth_(flood_it.logic.win_QMARK_.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null)))))){
return flood_it.view.overlay_text.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null))),new cljs.core.Keyword(null,"next-level","next-level",-1215231698));
} else {
if((cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309)], null))) >= cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max","max",61366548)], null))))){
return flood_it.view.overlay_text.call(null,"Game Over",new cljs.core.Keyword(null,"game-over","game-over",-607322695));
} else {
return null;
}
}
});
flood_it.view.password_input = (function flood_it$view$password_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Enter password to skip to level: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
e.preventDefault();

cljs.core.reset_BANG_.call(null,value,e.target.value);

if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"passwords","passwords",-403324634)], null))))),cljs.core.deref.call(null,value))){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"go-to-level","go-to-level",-753870480),cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"passwords","passwords",-403324634)], null))),cljs.core.deref.call(null,value))], null));
} else {
return null;
}
})], null)], null)], null)], null);
});
flood_it.view.dashboard = (function flood_it$view$dashboard(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-class","div.my-class",-1888445414),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),"Move: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309)], null))),"/",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max","max",61366548)], null)))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"float","float",-1732389368),"right"], null)], null),"Level: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level-num","current-level-num",-1029201441)], null))),"/8"], null)], null);
});
flood_it.view.password = (function flood_it$view$password(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.my-class","div.my-class",-1888445414),((cljs.core._EQ_.call(null,(1),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-level-num","current-level-num",-1029201441)], null)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flood_it.view.password_input,reagent.core.atom.call(null,"")], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Password: ",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password","password",417022471)], null)))], null))], null);
});
flood_it.view.board = (function flood_it$view$board(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shape-rendering","shape-rendering",955846315),"crispEdges",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007)], null))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007)], null))))].join(''),new cljs.core.Keyword(null,"width","width",-384071477),(400),new cljs.core.Keyword(null,"height","height",1025178622),(400),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border-style","border-style",-485574304),"solid",new cljs.core.Keyword(null,"border-width","border-width",-1512605390),"10px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"10px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 5px 5px rgba(0,0,0,0.5)"], null)], null),(function (){var size = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"size","size",1098693007)], null)));
var iter__4523__auto__ = ((function (size){
return (function flood_it$view$board_$_iter__18799(s__18800){
return (new cljs.core.LazySeq(null,((function (size){
return (function (){
var s__18800__$1 = s__18800;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18800__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var i = cljs.core.first.call(null,xs__6012__auto__);
var iterys__4519__auto__ = ((function (s__18800__$1,i,xs__6012__auto__,temp__5457__auto__,size){
return (function flood_it$view$board_$_iter__18799_$_iter__18801(s__18802){
return (new cljs.core.LazySeq(null,((function (s__18800__$1,i,xs__6012__auto__,temp__5457__auto__,size){
return (function (){
var s__18802__$1 = s__18802;
while(true){
var temp__5457__auto____$1 = cljs.core.seq.call(null,s__18802__$1);
if(temp__5457__auto____$1){
var s__18802__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18802__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18802__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18804 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18803 = (0);
while(true){
if((i__18803 < size__4522__auto__)){
var j = cljs.core._nth.call(null,c__4521__auto__,i__18803);
cljs.core.chunk_append.call(null,b__18804,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flood_it.view.square,i,j], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null)));

var G__18805 = (i__18803 + (1));
i__18803 = G__18805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18804),flood_it$view$board_$_iter__18799_$_iter__18801.call(null,cljs.core.chunk_rest.call(null,s__18802__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18804),null);
}
} else {
var j = cljs.core.first.call(null,s__18802__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flood_it.view.square,i,j], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null)),flood_it$view$board_$_iter__18799_$_iter__18801.call(null,cljs.core.rest.call(null,s__18802__$2)));
}
} else {
return null;
}
break;
}
});})(s__18800__$1,i,xs__6012__auto__,temp__5457__auto__,size))
,null,null));
});})(s__18800__$1,i,xs__6012__auto__,temp__5457__auto__,size))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,size)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,flood_it$view$board_$_iter__18799.call(null,cljs.core.rest.call(null,s__18800__$1)));
} else {
var G__18806 = cljs.core.rest.call(null,s__18800__$1);
s__18800__$1 = G__18806;
continue;
}
} else {
return null;
}
break;
}
});})(size))
,null,null));
});})(size))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,size));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flood_it.view.win_lose_overlay], null)], null);
});
flood_it.view.flood_it = (function flood_it$view$flood_it(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Flood It!"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flood_it.view.dashboard], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flood_it.view.board], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [flood_it.view.password], null)], null);
});

//# sourceMappingURL=view.js.map
