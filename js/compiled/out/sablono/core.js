// Compiled by ClojureScript 0.0-3297 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__21928__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__21927 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__21927,(0),null);
var body = cljs.core.nthnext.call(null,vec__21927,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__21928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21929__i = 0, G__21929__a = new Array(arguments.length -  0);
while (G__21929__i < G__21929__a.length) {G__21929__a[G__21929__i] = arguments[G__21929__i + 0]; ++G__21929__i;}
  args = new cljs.core.IndexedSeq(G__21929__a,0);
} 
return G__21928__delegate.call(this,args);};
G__21928.cljs$lang$maxFixedArity = 0;
G__21928.cljs$lang$applyTo = (function (arglist__21930){
var args = cljs.core.seq(arglist__21930);
return G__21928__delegate(args);
});
G__21928.cljs$core$IFn$_invoke$arity$variadic = G__21928__delegate;
return G__21928;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__16823__auto__ = (function sablono$core$update_arglists_$_iter__21935(s__21936){
return (new cljs.core.LazySeq(null,(function (){
var s__21936__$1 = s__21936;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21936__$1);
if(temp__4425__auto__){
var s__21936__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21936__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__21936__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__21938 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__21937 = (0);
while(true){
if((i__21937 < size__16822__auto__)){
var args = cljs.core._nth.call(null,c__16821__auto__,i__21937);
cljs.core.chunk_append.call(null,b__21938,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__21939 = (i__21937 + (1));
i__21937 = G__21939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21938),sablono$core$update_arglists_$_iter__21935.call(null,cljs.core.chunk_rest.call(null,s__21936__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21938),null);
}
} else {
var args = cljs.core.first.call(null,s__21936__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__21935.call(null,cljs.core.rest.call(null,s__21936__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16823__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(){
var argseq__17109__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17109__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__16823__auto__ = (function sablono$core$iter__21941(s__21942){
return (new cljs.core.LazySeq(null,(function (){
var s__21942__$1 = s__21942;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21942__$1);
if(temp__4425__auto__){
var s__21942__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21942__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__21942__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__21944 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__21943 = (0);
while(true){
if((i__21943 < size__16822__auto__)){
var style = cljs.core._nth.call(null,c__16821__auto__,i__21943);
cljs.core.chunk_append.call(null,b__21944,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__21945 = (i__21943 + (1));
i__21943 = G__21945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21944),sablono$core$iter__21941.call(null,cljs.core.chunk_rest.call(null,s__21942__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21944),null);
}
} else {
var style = cljs.core.first.call(null,s__21942__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__21941.call(null,cljs.core.rest.call(null,s__21942__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16823__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq21940){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21940));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to21946 = (function sablono$core$link_to21946(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to21946.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});

sablono.core.link_to21946.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to21946.cljs$lang$maxFixedArity = (1);

sablono.core.link_to21946.cljs$lang$applyTo = (function (seq21947){
var G__21948 = cljs.core.first.call(null,seq21947);
var seq21947__$1 = cljs.core.next.call(null,seq21947);
return sablono.core.link_to21946.cljs$core$IFn$_invoke$arity$variadic(G__21948,seq21947__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to21946);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to21949 = (function sablono$core$mail_to21949(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to21949.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});

sablono.core.mail_to21949.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__21952){
var vec__21953 = p__21952;
var content = cljs.core.nth.call(null,vec__21953,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16069__auto__ = content;
if(cljs.core.truth_(or__16069__auto__)){
return or__16069__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to21949.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to21949.cljs$lang$applyTo = (function (seq21950){
var G__21951 = cljs.core.first.call(null,seq21950);
var seq21950__$1 = cljs.core.next.call(null,seq21950);
return sablono.core.mail_to21949.cljs$core$IFn$_invoke$arity$variadic(G__21951,seq21950__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to21949);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list21954 = (function sablono$core$unordered_list21954(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__16823__auto__ = (function sablono$core$unordered_list21954_$_iter__21959(s__21960){
return (new cljs.core.LazySeq(null,(function (){
var s__21960__$1 = s__21960;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21960__$1);
if(temp__4425__auto__){
var s__21960__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21960__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__21960__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__21962 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__21961 = (0);
while(true){
if((i__21961 < size__16822__auto__)){
var x = cljs.core._nth.call(null,c__16821__auto__,i__21961);
cljs.core.chunk_append.call(null,b__21962,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21963 = (i__21961 + (1));
i__21961 = G__21963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21962),sablono$core$unordered_list21954_$_iter__21959.call(null,cljs.core.chunk_rest.call(null,s__21960__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21962),null);
}
} else {
var x = cljs.core.first.call(null,s__21960__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list21954_$_iter__21959.call(null,cljs.core.rest.call(null,s__21960__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16823__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list21954);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list21964 = (function sablono$core$ordered_list21964(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__16823__auto__ = (function sablono$core$ordered_list21964_$_iter__21969(s__21970){
return (new cljs.core.LazySeq(null,(function (){
var s__21970__$1 = s__21970;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__21970__$1);
if(temp__4425__auto__){
var s__21970__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21970__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__21970__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__21972 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__21971 = (0);
while(true){
if((i__21971 < size__16822__auto__)){
var x = cljs.core._nth.call(null,c__16821__auto__,i__21971);
cljs.core.chunk_append.call(null,b__21972,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__21973 = (i__21971 + (1));
i__21971 = G__21973;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21972),sablono$core$ordered_list21964_$_iter__21969.call(null,cljs.core.chunk_rest.call(null,s__21970__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21972),null);
}
} else {
var x = cljs.core.first.call(null,s__21970__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list21964_$_iter__21969.call(null,cljs.core.rest.call(null,s__21970__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16823__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list21964);
/**
 * Create an image element.
 */
sablono.core.image21974 = (function sablono$core$image21974(){
var G__21976 = arguments.length;
switch (G__21976) {
case 1:
return sablono.core.image21974.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image21974.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image21974.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image21974.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image21974.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image21974);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__21978_SHARP_,p2__21979_SHARP_){
return [cljs.core.str(p1__21978_SHARP_),cljs.core.str("["),cljs.core.str(p2__21979_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__21980_SHARP_,p2__21981_SHARP_){
return [cljs.core.str(p1__21980_SHARP_),cljs.core.str("-"),cljs.core.str(p2__21981_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field21982 = (function sablono$core$color_field21982(){
var G__21984 = arguments.length;
switch (G__21984) {
case 1:
return sablono.core.color_field21982.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field21982.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field21982.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.color_field21982.call(null,name__19665__auto__,null);
});

sablono.core.color_field21982.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.color_field21982.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field21982);

/**
 * Creates a date input field.
 */
sablono.core.date_field21985 = (function sablono$core$date_field21985(){
var G__21987 = arguments.length;
switch (G__21987) {
case 1:
return sablono.core.date_field21985.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field21985.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field21985.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.date_field21985.call(null,name__19665__auto__,null);
});

sablono.core.date_field21985.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.date_field21985.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field21985);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field21988 = (function sablono$core$datetime_field21988(){
var G__21990 = arguments.length;
switch (G__21990) {
case 1:
return sablono.core.datetime_field21988.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field21988.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field21988.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.datetime_field21988.call(null,name__19665__auto__,null);
});

sablono.core.datetime_field21988.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.datetime_field21988.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field21988);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field21991 = (function sablono$core$datetime_local_field21991(){
var G__21993 = arguments.length;
switch (G__21993) {
case 1:
return sablono.core.datetime_local_field21991.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field21991.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field21991.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.datetime_local_field21991.call(null,name__19665__auto__,null);
});

sablono.core.datetime_local_field21991.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.datetime_local_field21991.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field21991);

/**
 * Creates a email input field.
 */
sablono.core.email_field21994 = (function sablono$core$email_field21994(){
var G__21996 = arguments.length;
switch (G__21996) {
case 1:
return sablono.core.email_field21994.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field21994.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field21994.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.email_field21994.call(null,name__19665__auto__,null);
});

sablono.core.email_field21994.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.email_field21994.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field21994);

/**
 * Creates a file input field.
 */
sablono.core.file_field21997 = (function sablono$core$file_field21997(){
var G__21999 = arguments.length;
switch (G__21999) {
case 1:
return sablono.core.file_field21997.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field21997.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field21997.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.file_field21997.call(null,name__19665__auto__,null);
});

sablono.core.file_field21997.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.file_field21997.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field21997);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field22000 = (function sablono$core$hidden_field22000(){
var G__22002 = arguments.length;
switch (G__22002) {
case 1:
return sablono.core.hidden_field22000.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field22000.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field22000.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.hidden_field22000.call(null,name__19665__auto__,null);
});

sablono.core.hidden_field22000.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.hidden_field22000.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22000);

/**
 * Creates a month input field.
 */
sablono.core.month_field22003 = (function sablono$core$month_field22003(){
var G__22005 = arguments.length;
switch (G__22005) {
case 1:
return sablono.core.month_field22003.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field22003.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field22003.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.month_field22003.call(null,name__19665__auto__,null);
});

sablono.core.month_field22003.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.month_field22003.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22003);

/**
 * Creates a number input field.
 */
sablono.core.number_field22006 = (function sablono$core$number_field22006(){
var G__22008 = arguments.length;
switch (G__22008) {
case 1:
return sablono.core.number_field22006.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field22006.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field22006.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.number_field22006.call(null,name__19665__auto__,null);
});

sablono.core.number_field22006.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.number_field22006.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22006);

/**
 * Creates a password input field.
 */
sablono.core.password_field22009 = (function sablono$core$password_field22009(){
var G__22011 = arguments.length;
switch (G__22011) {
case 1:
return sablono.core.password_field22009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field22009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field22009.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.password_field22009.call(null,name__19665__auto__,null);
});

sablono.core.password_field22009.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.password_field22009.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22009);

/**
 * Creates a range input field.
 */
sablono.core.range_field22012 = (function sablono$core$range_field22012(){
var G__22014 = arguments.length;
switch (G__22014) {
case 1:
return sablono.core.range_field22012.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field22012.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field22012.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.range_field22012.call(null,name__19665__auto__,null);
});

sablono.core.range_field22012.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.range_field22012.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22012);

/**
 * Creates a search input field.
 */
sablono.core.search_field22015 = (function sablono$core$search_field22015(){
var G__22017 = arguments.length;
switch (G__22017) {
case 1:
return sablono.core.search_field22015.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field22015.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field22015.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.search_field22015.call(null,name__19665__auto__,null);
});

sablono.core.search_field22015.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.search_field22015.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22015);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field22018 = (function sablono$core$tel_field22018(){
var G__22020 = arguments.length;
switch (G__22020) {
case 1:
return sablono.core.tel_field22018.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field22018.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field22018.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.tel_field22018.call(null,name__19665__auto__,null);
});

sablono.core.tel_field22018.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.tel_field22018.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22018);

/**
 * Creates a text input field.
 */
sablono.core.text_field22021 = (function sablono$core$text_field22021(){
var G__22023 = arguments.length;
switch (G__22023) {
case 1:
return sablono.core.text_field22021.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field22021.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field22021.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.text_field22021.call(null,name__19665__auto__,null);
});

sablono.core.text_field22021.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.text_field22021.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22021);

/**
 * Creates a time input field.
 */
sablono.core.time_field22024 = (function sablono$core$time_field22024(){
var G__22026 = arguments.length;
switch (G__22026) {
case 1:
return sablono.core.time_field22024.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field22024.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field22024.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.time_field22024.call(null,name__19665__auto__,null);
});

sablono.core.time_field22024.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.time_field22024.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22024);

/**
 * Creates a url input field.
 */
sablono.core.url_field22027 = (function sablono$core$url_field22027(){
var G__22029 = arguments.length;
switch (G__22029) {
case 1:
return sablono.core.url_field22027.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field22027.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field22027.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.url_field22027.call(null,name__19665__auto__,null);
});

sablono.core.url_field22027.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.url_field22027.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22027);

/**
 * Creates a week input field.
 */
sablono.core.week_field22030 = (function sablono$core$week_field22030(){
var G__22032 = arguments.length;
switch (G__22032) {
case 1:
return sablono.core.week_field22030.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field22030.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field22030.cljs$core$IFn$_invoke$arity$1 = (function (name__19665__auto__){
return sablono.core.week_field22030.call(null,name__19665__auto__,null);
});

sablono.core.week_field22030.cljs$core$IFn$_invoke$arity$2 = (function (name__19665__auto__,value__19666__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19665__auto__,value__19666__auto__);
});

sablono.core.week_field22030.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22030);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box22050 = (function sablono$core$check_box22050(){
var G__22052 = arguments.length;
switch (G__22052) {
case 1:
return sablono.core.check_box22050.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box22050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box22050.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box22050.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box22050.call(null,name,null);
});

sablono.core.check_box22050.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box22050.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box22050.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box22050.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22050);
/**
 * Creates a radio button.
 */
sablono.core.radio_button22054 = (function sablono$core$radio_button22054(){
var G__22056 = arguments.length;
switch (G__22056) {
case 1:
return sablono.core.radio_button22054.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button22054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button22054.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button22054.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button22054.call(null,group,null);
});

sablono.core.radio_button22054.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button22054.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button22054.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button22054.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22054);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options22058 = (function sablono$core$select_options22058(){
var G__22060 = arguments.length;
switch (G__22060) {
case 1:
return sablono.core.select_options22058.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options22058.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options22058.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options22058.call(null,coll,null);
});

sablono.core.select_options22058.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__16823__auto__ = (function sablono$core$iter__22061(s__22062){
return (new cljs.core.LazySeq(null,(function (){
var s__22062__$1 = s__22062;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22062__$1);
if(temp__4425__auto__){
var s__22062__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22062__$2)){
var c__16821__auto__ = cljs.core.chunk_first.call(null,s__22062__$2);
var size__16822__auto__ = cljs.core.count.call(null,c__16821__auto__);
var b__22064 = cljs.core.chunk_buffer.call(null,size__16822__auto__);
if((function (){var i__22063 = (0);
while(true){
if((i__22063 < size__16822__auto__)){
var x = cljs.core._nth.call(null,c__16821__auto__,i__22063);
cljs.core.chunk_append.call(null,b__22064,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22067 = x;
var text = cljs.core.nth.call(null,vec__22067,(0),null);
var val = cljs.core.nth.call(null,vec__22067,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22067,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options22058.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__22070 = (i__22063 + (1));
i__22063 = G__22070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22064),sablono$core$iter__22061.call(null,cljs.core.chunk_rest.call(null,s__22062__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22064),null);
}
} else {
var x = cljs.core.first.call(null,s__22062__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22068 = x;
var text = cljs.core.nth.call(null,vec__22068,(0),null);
var val = cljs.core.nth.call(null,vec__22068,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22068,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options22058.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__22061.call(null,cljs.core.rest.call(null,s__22062__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16823__auto__.call(null,coll);
});

sablono.core.select_options22058.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22058);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down22071 = (function sablono$core$drop_down22071(){
var G__22073 = arguments.length;
switch (G__22073) {
case 2:
return sablono.core.drop_down22071.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down22071.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down22071.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down22071.call(null,name,options,null);
});

sablono.core.drop_down22071.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down22071.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22071);
/**
 * Creates a text area element.
 */
sablono.core.text_area22075 = (function sablono$core$text_area22075(){
var G__22077 = arguments.length;
switch (G__22077) {
case 1:
return sablono.core.text_area22075.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area22075.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area22075.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area22075.call(null,name,null);
});

sablono.core.text_area22075.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area22075.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22075);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label22079 = (function sablono$core$label22079(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22079);
/**
 * Creates a submit button.
 */
sablono.core.submit_button22080 = (function sablono$core$submit_button22080(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22080);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button22081 = (function sablono$core$reset_button22081(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22081);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to22082 = (function sablono$core$form_to22082(){
var argseq__17109__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to22082.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17109__auto__);
});

sablono.core.form_to22082.cljs$core$IFn$_invoke$arity$variadic = (function (p__22085,body){
var vec__22086 = p__22085;
var method = cljs.core.nth.call(null,vec__22086,(0),null);
var action = cljs.core.nth.call(null,vec__22086,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to22082.cljs$lang$maxFixedArity = (1);

sablono.core.form_to22082.cljs$lang$applyTo = (function (seq22083){
var G__22084 = cljs.core.first.call(null,seq22083);
var seq22083__$1 = cljs.core.next.call(null,seq22083);
return sablono.core.form_to22082.cljs$core$IFn$_invoke$arity$variadic(G__22084,seq22083__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22082);

//# sourceMappingURL=core.js.map?rel=1436696887884