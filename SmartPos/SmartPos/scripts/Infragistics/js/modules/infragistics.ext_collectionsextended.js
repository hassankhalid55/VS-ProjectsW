﻿/*!@license
* Infragistics.Web.ClientUI infragistics.ext_collectionsExtended.js 16.2.20162.2141
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.ext_core.js
*     infragistics.ext_collections.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery","jquery-ui","./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections"],factory)}else{factory(jQuery)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$5=$$t;$$0=$.ig.globalDefs.$$0;$$1=$.ig.globalDefs.$$1;$$4=$.ig.globalDefs.$$4;$$6=$.ig.globalDefs.$$6;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["IOrderedEnumerable$1:d","IGrouping$2:g","ExpressionSyntax:t","IQueryable:u","IQueryable$1:v","IQueryProvider:w","LambdaExpression:x","MemberExpression:y","MethodCallExpression:z","ParameterExpression:aa"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.getBoxIfEnum,$e=$.ig.util.getDefaultValue,$f=$.ig.util.getEnumValue,$g=$.ig.util.getValue,$h=$.ig.util.intSToU,$i=$.ig.util.nullableEquals,$j=$.ig.util.nullableIsNull,$k=$.ig.util.nullableNotEquals,$l=$.ig.util.toNullable,$m=$.ig.util.toString$1,$n=$.ig.util.u32BitwiseAnd,$o=$.ig.util.u32BitwiseOr,$p=$.ig.util.u32BitwiseXor,$q=$.ig.util.u32LS,$r=$.ig.util.unwrapNullable,$s=$.ig.util.wrapNullable,$t=String.fromCharCode,$u=$.ig.util.castObjTo$t,$v=$.ig.util.compare,$w=$.ig.util.replace,$x=$.ig.util.stringFormat,$y=$.ig.util.stringFormat1,$z=$.ig.util.stringFormat2,$0=$.ig.util.stringCompare1,$1=$.ig.util.stringCompare2,$2=$.ig.util.stringCompare3;$c("Enumerable:e","Object",{init:function(){$.ig.$op.init.call(this)},u:function($tSource,a,b){var d__=new $$t.h($tSource,-2);d__.__3__source=a;d__.__3__predicate=b;return d__},v:function($tSource,a,b){var d__=new $$t.i($tSource,-2);d__.__3__source=a;d__.__3__predicate=b;return d__},o:function($tSource,$tResult,a,b){var d__=new $$t.j($tSource,$tResult,-2);d__.__3__source=a;d__.__3__selector=b;return d__},p:function($tSource,$tResult,a,b){var d__=new $$t.k($tSource,$tResult,-2);d__.__3__source=a;d__.__3__selector=b;return d__},l:function($tResult,a){var d__=new $$t.l($tResult,-2);d__.__3__source=a;return d__},ah:function($tSource,a){var b=$b($$0.$b0.$type.specialize($tSource),a);if(b!=null){return b.item(b.count()-1)}var c=$e($tSource);var e=a.getEnumerator();while(e.moveNext()){var d=e.current();c=d}return c},ad:function($tSource,a){var c=a.getEnumerator();while(c.moveNext()){var b=c.current();return b}return $e($tSource)},ae:function($tSource,a,b){var d=a.getEnumerator();while(d.moveNext()){var c=d.current();if(b(c)){return c}}return $e($tSource)},af:function($tSource,a){var c=a.getEnumerator();while(c.moveNext()){var b=c.current();return b}return $e($tSource)},x:function($tSource,$tKey,a,b){var c=new $$t.f($tSource,a);c.sort2(function(d,e){var f=d;var g=e;var h=b(f);var i=b(g);if($b($$0.$ah.$type,h)!==null){return $b($$0.$ah.$type,h).compareTo($d($tKey,i))}else{return $m($tKey,h).compareTo($m($tKey,i))}});return c},y:function($tSource,$tKey,a,b){var c=new $$t.f($tSource,a);c.sort2(function(d,e){var f=e;var g=d;var h=b(f);var i=b(g);if($b($$0.$ah.$type,h)!==null){return $b($$0.$ah.$type,h).compareTo($d($tKey,i))}else{return $m($tKey,h).compareTo($m($tKey,i))}});return c},z:function($tSource,a){var b=new $$4.v($tSource,1,a);return b},m:function(a,b){var d__=new $$t.m(-2);d__.__3__startValue=a;d__.__3__count=b;return d__},i:function($tSource,a,b){var d__=new $$t.n($tSource,-2);d__.__3__source1=a;d__.__3__source2=b;return d__},ak:function(a){var b=true;var c=0;var e=a.getEnumerator();while(e.moveNext()){var d=e.current();if(b){b=false;c=d}else{c=Math.max(c,d)}}return c},al:function($tSource,a,b){return $$t.$e.ak($$t.$e.o($tSource,$.ig.Number.prototype.$type,a,b))},am:function(a){var b=true;var c=0;var e=a.getEnumerator();while(e.moveNext()){var d=e.current();if(b){b=false;c=d}else{c=Math.min(c,d)}}return c},an:function($tSource,a,b){return $$t.$e.ak($$t.$e.o($tSource,$.ig.Number.prototype.$type,a,b))},aj:function($tSource,a){var b=0;var d=a.getEnumerator();while(d.moveNext()){var c=d.current();b++}return b},n:function($tSource,a){var d__=new $$t.o($tSource,-2);d__.__3__source=a;return d__},h:function($tResult,a){if(a==null){throw new $$6.d(0,"source")}var b=$b($$0.$bx.$type.specialize($tResult),a);if(b!=null){return b}var c=new $$4.v($tResult,0);var e=a.getEnumerator();while(e.moveNext()){var d=e.current();if($b($tResult,d)!==null){c.add($u($tResult,d))}else{c.add($e($tResult))}}return c},s:function($tSource,a,b){var d__=new $$t.p($tSource,-2);d__.__3__source=a;d__.__3__toTake=b;return d__},r:function($tSource,a,b){var d__=new $$t.q($tSource,-2);d__.__3__source=a;d__.__3__toSkip=b;return d__},c:function($tSource,a){var c=a.getEnumerator();while(c.moveNext()){var b=c.current();return true}return false},e:function($tSource,a,value_){var b=a.getEnumerator();while(b.moveNext()){var item_=b.current();if(item_===value_){return true}}return false},t:function($tSource,a,b){return null},a:function($tSource,a){var b=$b($$4.$v.$type.specialize($tSource),a);if(b!=null){return b.toArray()}b=new $$4.v($tSource,1,a);return b.asArray()},ac:function($tSource,a,b){var c=$b($$0.$b0.$type.specialize($tSource),a);if(c!=null){return c.item(b)}return $$t.$e.ad($tSource,$$t.$e.r($tSource,a,b))},aa:function(a){var b=0;var d=a.getEnumerator();while(d.moveNext()){var c=d.current();b+=c}return b},ab:function($tSource,a,b){return $$t.$e.aa($$t.$e.o($tSource,Number,a,b))},f:function($tSource,a,b){if(a==null){throw new $$6.d(0,"first")}if(b==null){throw new $$6.d(0,"second")}{var c=a.getEnumerator();try{var d=b.getEnumerator();try{while(c.moveNext()){if(!d.moveNext()||!$.ig.$op.equalsStatic($d($tSource,c.current()),$d($tSource,d.current()))){return false}}return d.moveNext()==false}finally{if(d!=null){d.dispose()}}}finally{if(c!=null){c.dispose()}}}},k:function($tSource){return new $$t.r($tSource,-2)},q:function($tSource,$tCollection,$tResult,a,b,c){var d__=new $$t.s($tSource,$tCollection,$tResult,-2);d__.__3__source=a;d__.__3__collectionSelector=b;d__.__3__resultSelector=c;return d__},d:function($tSource,a,b){var d=a.getEnumerator();while(d.moveNext()){var c=d.current();if(b(c)){return true}}return false},ag:function($tSource,a,b){var d=a.getEnumerator();while(d.moveNext()){var c=d.current();if(b(c)){return c}}return $e($tSource)},b:function($tSource,a,b){var d=a.getEnumerator();while(d.moveNext()){var c=d.current();if(b(c)==false){return false}}return true},g:function($tSource,$tKey,a,b){var c=new $$4.f($tKey,$tSource,0);var e=a.getEnumerator();while(e.moveNext()){var d=e.current();c.item(b(d),d)}return c},ai:function($tSource,a){throw new $$6.p(0);var b=$b($$0.$b0.$type.specialize($tSource),a);if(b!=null){return b.count()==0?$e($tSource):b.item(b.count()-1)}var c=$e($tSource);var e=a.getEnumerator();while(e.moveNext()){var d=e.current();c=d}return c},w:function($tFirst,$tSecond,$tResult,a,b,c){throw new $$6.p(0)},j:function($tSource,a){throw new $$6.p(0);return null},$type:new $.ig.Type("Enumerable",$.ig.$ot)},true);$c("IOrderedEnumerable$1:d","Object",{$type:new $.ig.Type("IOrderedEnumerable$1",null,[$$0.$bx.$type.specialize(0),$.ig.IEnumerable.prototype.$type])},true);$c("SortedList$1:f","List$1",{$tElement:null,init:function($tElement,a){this.$tElement=$tElement;this.$type=this.$type.specialize(this.$tElement);$$4.$v.init1.call(this,this.$tElement,1,a)},getEnumerator:function(){return $$4.$v.getEnumerator.call(this)},$type:new $.ig.Type("SortedList$1",$$4.$v.$type.specialize(0),[$$t.$d.$type.specialize(0)])},true);$c("IGrouping$2:g","Object",{$type:new $.ig.Type("IGrouping$2",null,[$$0.$bx.$type.specialize(1),$.ig.IEnumerable.prototype.$type])},true);$c("ExpressionSyntax:t","Object",{init:function(){$.ig.$op.init.call(this)},c:function(a,b,c,d){return null},a:function(a,b){return null},b:function(a,b){return null},d:function(a){return null},e:function(a,b){return null},$type:new $.ig.Type("ExpressionSyntax",$.ig.$ot)},true);$c("IQueryable:u","Object",{$type:new $.ig.Type("IQueryable",null)},true);$c("IQueryable$1:v","Object",{$type:new $.ig.Type("IQueryable$1",null,[$$t.$u.$type])},true);$c("IQueryProvider:w","Object",{$type:new $.ig.Type("IQueryProvider",null)},true);$c("LambdaExpression:x","ExpressionSyntax",{init:function(){$$t.$t.init.call(this)},$type:new $.ig.Type("LambdaExpression",$$t.$t.$type)},true);$c("MemberExpression:y","ExpressionSyntax",{init:function(){$$t.$t.init.call(this)},_f:null,g:function(a){return null},$type:new $.ig.Type("MemberExpression",$$t.$t.$type)},true);$c("MethodCallExpression:z","ExpressionSyntax",{init:function(){$$t.$t.init.call(this)},_f:null,_g:null,h:function(a,b){return null},$type:new $.ig.Type("MethodCallExpression",$$t.$t.$type)},true);$c("ParameterExpression:aa","ExpressionSyntax",{init:function(){$$t.$t.init.call(this)},_f:false,_g:null,$type:new $.ig.Type("ParameterExpression",$$t.$t.$type)},true);$c("Queryable:ab","Object",{init:function(){$.ig.$op.init.call(this)},a:function(a){return null},$type:new $.ig.Type("Queryable",$.ig.$ot)},true);$c("BitArray:a","Object",{i:0,a:null,init:function(a,b){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break;case 2:this.init2.apply(this,arguments);break;case 3:this.init3.apply(this,arguments);break;case 4:this.init4.apply(this,arguments);break}return}$$t.$a.init3.call(this,3,b.a);this.i=b.i},init1:function(a,b){$.ig.$op.init.call(this);this.length(b.length);for(var c=0;c<b.length;c++){this.item(c,b[c])}},init2:function(a,b){$$t.$a.init4.call(this,4,b,false)},init3:function(a,b){$.ig.$op.init.call(this);this.i=b.length*32;this.a=new Array(b.length);for(var c=0;c<b.length;c++){this.a[c]=b[c]}},init4:function(a,b,c){$.ig.$op.init.call(this);this.i=b;this.a=new Array($a(b-1,32)+1);this.setAll(c)},count:function(){return this.i},isReadOnly:function(){return false},isSynchronized:function(){return false},length:function(a){if(arguments.length===1){if(a<0){throw new $$6.e(0)}this.i=a;var b=$a(this.i-1,32)+1;if(this.a.length<b){var c=this.a;this.a=new Array(b);for(var d=0;d<c.length;d++){this.a[d]=c[d]}}return a}else{return this.i}},syncRoot:function(){return null},item:function(a,b){if(arguments.length===2){if(a<0||this.i<=a){throw new $$6.n(0)}if(b){this.a[$a(a,32)]|=1<<a%32}else{this.a[$a(a,32)]&=~(1<<a%32)}return b}else{if(a<0||this.i<=a){throw new $$6.n(0)}return(this.a[$a(a,32)]&1<<a%32)!=0}},and:function(a){if(a.length()!=this.length()){throw new $$6.c(1,"The BitArrays do not have the same length")}for(var b=0;b<this.a.length;b++){this.a[b]&=a.a[b]}return this},clone:function(){return new $$t.a(0,this)},copyTo:function(a,b){for(var c=0;c<this.i;c++){a[b+c]=this.item(c)}},get:function(a){return this.item(a)},getEnumerator:function(){var d__=new $$t.b(0);d__.__4__this=this;return d__},not:function(){for(var a=0;a<this.a.length;a++){this.a[a]=~this.a[a]}return this},or:function(a){if(a.length()!=this.length()){throw new $$6.c(1,"The BitArrays do not have the same length")}for(var b=0;b<this.a.length;b++){this.a[b]|=a.a[b]}return this},set:function(a,b){this.item(a,b)},setAll:function(a){var b=a?-1:0;for(var c=0;c<this.a.length;c++){this.a[c]=b}},xor:function(a){if(a.length()!=this.length()){throw new $$6.c(1,"The BitArrays do not have the same length")}for(var b=0;b<this.a.length;b++){this.a[b]^=a.a[b]}return this},$type:new $.ig.Type("BitArray",$.ig.$ot,[$$0.$bk.$type,$.ig.IEnumerable.prototype.$type])},true);$c("ReadOnlyObservableCollection$1:c","ReadOnlyCollection$1",{$t:null,init:function($t,a){this.$t=$t;this.$type=this.$type.specialize(this.$t);$$4.$e.init.call(this,this.$t,0)},collectionChanged:null,propertyChanged:null,$type:new $.ig.Type("ReadOnlyObservableCollection$1",$$4.$e.$type.specialize(0),[$$4.$aa.$type,$$0.$b8.$type])},true);$c("Enumerable___OfType__IteratorClass$1:l","Object",{$tResult:null,e:0,d:null,c:null,f:null,b:null,__3__source:null,init:function($tResult,a){this.$tResult=$tResult;this.$type=this.$type.specialize(this.$tResult);$.ig.$op.init.call(this);this.e=a},g:function(){this.e=-1;var d__=$b($$0.$au.$type,this.c);if(d__!=null){d__.dispose()}},moveNext:function(){var __hasError__=false;try{while(this.e>=0){switch(this.e){case 0:this.e=1;this.c=this.b.getEnumerator();this.e=2;break;case 2:this.e=1;if(this.c.moveNext()){this.f=this.c.current();if($b(this.$tResult,this.f)!==null){this.d=$u(this.$tResult,this.f);this.e=2;return true}this.e=2;break}this.g();break}}}catch(a){__hasError__=true;throw a}finally{if(__hasError__){this.dispose()}}return false},getEnumerator:function(){var d__;if(this.e==-2){this.e=0;d__=this}else{d__=new $$t.l(this.$tResult,0)}d__.b=this.__3__source;return d__},reset:function(){throw new $$0.r(1)},dispose:function(){switch(this.e){case 1:case 2:this.g();break}},current:function(){return this.d},current1:function(){return $d(this.$tResult,this.d)},$type:new $.ig.Type("Enumerable___OfType__IteratorClass$1",$.ig.$ot,[$$0.$bx.$type.specialize(0),$.ig.IEnumerable.prototype.$type,$$0.$by.$type.specialize(0),$.ig.IEnumerator.prototype.$type,$$0.$au.$type])},true);$c("Enumerable___Reverse__IteratorClass$1:o","Object",{$tSource:null,e:0,d:null,c:null,f:0,b:null,__3__source:null,init:function($tSource,a){this.$tSource=$tSource;this.$type=this.$type.specialize(this.$tSource);$.ig.$op.init.call(this);this.e=a},moveNext:function(){while(this.e>=0){switch(this.e){case 0:this.e=-1;this.c=new $$4.v(this.$tSource,1,this.b);this.f=this.c.count()-1;this.e=1;break;case 1:this.e=-1;if(this.f>=0){this.d=this.c.__inner[this.f];this.e=2;return true}break;case 2:this.e=-1;this.f--;this.e=1;break}}return false},getEnumerator:function(){var d__;if(this.e==-2){this.e=0;d__=this}else{d__=new $$t.o(this.$tSource,0)}d__.b=this.__3__source;return d__},reset:function(){throw new $$0.r(1)},dispose:function(){},current:function(){return this.d},current1:function(){return $d(this.$tSource,this.d)},$type:new $.ig.Type("Enumerable___Reverse__IteratorClass$1",$.ig.$ot,[$$0.$bx.$type.specialize(0),$.ig.IEnumerable.prototype.$type,$$0.$by.$type.specialize(0),$.ig.IEnumerator.prototype.$type,$$0.$au.$type])},true);$c("Enumerable___Take__IteratorClass$1:p","Object",{$tSource:null,f:0,d:null,c:null,e:null,b:null,__3__source:null,h:0,__3__toTake:0,init:function($tSource,a){this.$tSource=$tSource;this.$type=this.$type.specialize(this.$tSource);$.ig.$op.init.call(this);this.f=a},i:function(){this.f=-1;if(this.c!=null){this.c.dispose()}},moveNext:function(){var __hasError__=false;try{while(this.f>=0){switch(this.f){case 0:this.f=1;this.c=this.b.getEnumerator();this.f=2;break;case 2:this.f=1;if(this.c.moveNext()){this.e=this.c.current();if(this.h>0){this.h--;this.d=this.e;this.f=2;return true}return false}this.i();break}}}catch(a){__hasError__=true;throw a}finally{if(__hasError__){this.dispose()}}return false},getEnumerator:function(){var d__;if(this.f==-2){this.f=0;d__=this}else{d__=new $$t.p(this.$tSource,0)}d__.b=this.__3__source;d__.h=this.__3__toTake;return d__},reset:function(){throw new $$0.r(1)},dispose:function(){switch(this.f){case 1:case 2:this.i();break}},current:function(){return this.d},current1:function(){return $d(this.$tSource,this.d)},$type:new $.ig.Type("Enumerable___Take__IteratorClass$1",$.ig.$ot,[$$0.$bx.$type.specialize(0),$.ig.IEnumerable.prototype.$type,$$0.$by.$type.specialize(0),$.ig.IEnumerator.prototype.$type,$$0.$au.$type])},true);$c("Enumerable___Skip__IteratorClass$1:q","Object",{$tSource:null,f:0,d:null,c:null,e:null,b:null,__3__source:null,h:0,__3__toSkip:0,init:function($tSource,a){this.$tSource=$tSource;this.$type=this.$type.specialize(this.$tSource);$.ig.$op.init.call(this);this.f=a},i:function(){this.f=-1;if(this.c!=null){this.c.dispose()}},moveNext:function(){var __hasError__=false;try{while(this.f>=0){switch(this.f){case 0:this.f=1;this.c=this.b.getEnumerator();this.f=2;break;case 2:this.f=1;if(this.c.moveNext()){this.e=this.c.current();if(this.h<=0){this.d=this.e;this.f=2;return true}this.h--;this.f=2;break}this.i();break}}}catch(a){__hasError__=true;throw a}finally{if(__hasError__){this.dispose()}}return false},getEnumerator:function(){var d__;if(this.f==-2){this.f=0;d__=this}else{d__=new $$t.q(this.$tSource,0)}d__.b=this.__3__source;d__.h=this.__3__toSkip;return d__},reset:function(){throw new $$0.r(1)},dispose:function(){switch(this.f){case 1:case 2:this.i();break}},current:function(){return this.d},current1:function(){return $d(this.$tSource,this.d)},$type:new $.ig.Type("Enumerable___Skip__IteratorClass$1",$.ig.$ot,[$$0.$bx.$type.specialize(0),$.ig.IEnumerable.prototype.$type,$$0.$by.$type.specialize(0),$.ig.IEnumerator.prototype.$type,$$0.$au.$type])},true);$c("Enumerable___Empty__IteratorClass$1:r","Object",{$tSource:null,b:0,a:null,init:function($tSource,a){this.$tSource=$tSource;this.$type=this.$type.specialize(this.$tSource);$.ig.$op.init.call(this);this.b=a},moveNext:function(){switch(this.b){case 0:this.b=-1;return false}return false},getEnumerator:function(){if(this.b==-2){this.b=0;return this}return new $$t.r(this.$tSource,0)},reset:function(){throw new $$0.r(1)},dispose:function(){},current:function(){return this.a},current1:function(){return $d(this.$tSource,this.a)},$type:new $.ig.Type("Enumerable___Empty__IteratorClass$1",$.ig.$ot,[$$0.$bx.$type.specialize(0),$.ig.IEnumerable.prototype.$type,$$0.$by.$type.specialize(0),$.ig.IEnumerator.prototype.$type,$$0.$au.$type])},true);$c("Enumerable___SelectMany__IteratorClass1$3:s","Object",{$tSource:null,$tCollection:null,$tResult:null,l:0,j:null,c:null,k:null,d:null,i:null,b:null,__3__source:null,g:null,__3__collectionSelector:null,h:null,__3__resultSelector:null,init:function($tSource,$tCollection,$tResult,a){this.$tSource=$tSource;this.$tCollection=$tCollection;this.$tResult=$tResult;this.$type=this.$type.specialize(this.$tSource,this.$tCollection,this.$tResult);$.ig.$op.init.call(this);this.l=a},m:function(){this.l=-1;if(this.c!=null){this.c.dispose()}},n:function(){this.l=1;if(this.d!=null){this.d.dispose()}},moveNext:function(){var __hasError__=false;try{while(this.l>=0){switch(this.l){case 0:this.l=1;this.c=this.b.getEnumerator();this.l=2;break;case 2:this.l=1;if(this.c.moveNext()){this.k=this.c.current();this.l=3;this.d=this.g(this.k).getEnumerator();this.l=4;break}this.m();break;case 4:this.l=3;if(this.d.moveNext()){this.i=this.d.current();this.j=this.h(this.k,this.i);this.l=4;return true}this.n();this.l=2;break}}}catch(a){__hasError__=true;throw a}finally{if(__hasError__){this.dispose()}}return false},getEnumerator:function(){var d__;if(this.l==-2){this.l=0;d__=this}else{d__=new $$t.s(this.$tSource,this.$tCollection,this.$tResult,0)}d__.b=this.__3__source;d__.g=this.__3__collectionSelector;d__.h=this.__3__resultSelector;return d__},reset:function(){throw new $$0.r(1)},dispose:function(){switch(this.l){case 1:case 2:this.m();break;case 3:case 4:try{this.n()}finally{this.m()}break}},current:function(){return this.j},current1:function(){return $d(this.$tResult,this.j)},$type:new $.ig.Type("Enumerable___SelectMany__IteratorClass1$3",$.ig.$ot,[$$0.$bx.$type.specialize(2),$.ig.IEnumerable.prototype.$type,$$0.$by.$type.specialize(2),$.ig.IEnumerator.prototype.$type,$$0.$au.$type])},true);$c("Enumerable___SelectMany__IteratorClass$2:k","Object",{$tSource:null,$tResult:null,j:0,g:null,d:null,i:null,c:null,h:null,b:null,__3__source:null,f:null,__3__selector:null,init:function($tSource,$tResult,a){this.$tSource=$tSource;this.$tResult=$tResult;this.$type=this.$type.specialize(this.$tSource,this.$tResult);$.ig.$op.init.call(this);this.j=a},k:function(){this.j=-1;if(this.d!=null){this.d.dispose()}},l:function(){this.j=1;if(this.c!=null){this.c.dispose()}},moveNext:function(){var __hasError__=false;try{while(this.j>=0){switch(this.j){case 0:this.j=1;this.d=this.b.getEnumerator();this.j=2;break;case 2:this.j=1;if(this.d.moveNext()){this.i=this.d.current();this.j=3;this.c=this.f(this.i).getEnumerator();this.j=4;break}this.k();break;case 4:this.j=3;if(this.c.moveNext()){this.h=this.c.current();this.g=this.h;this.j=4;return true}this.l();this.j=2;break}}}catch(a){__hasError__=true;throw a}finally{if(__hasError__){this.dispose()}}return false},getEnumerator:function(){var d__;if(this.j==-2){this.j=0;d__=this}else{d__=new $$t.k(this.$tSource,this.$tResult,0)}d__.b=this.__3__source;d__.f=this.__3__selector;return d__},reset:function(){throw new $$0.r(1)},dispose:function(){switch(this.j){case 1:case 2:this.k();break;case 3:case 4:try{this.l()}finally{this.k()}break}},current:function(){return this.g},current1:function(){return $d(this.$tResult,this.g)},$type:new $.ig.Type("Enumerable___SelectMany__IteratorClass$2",$.ig.$ot,[$$0.$bx.$type.specialize(1),$.ig.IEnumerable.prototype.$type,$$0.$by.$type.specialize(1),$.ig.IEnumerator.prototype.$type,$$0.$au.$type])},true);$c("Enumerable___Select__IteratorClass$2:j","Object",{$tSource:null,$tResult:null,h:0,f:null,c:null,g:null,b:null,__3__source:null,e:null,__3__selector:null,init:function($tSource,$tResult,a){this.$tSource=$tSource;this.$tResult=$tResult;this.$type=this.$type.specialize(this.$tSource,this.$tResult);$.ig.$op.init.call(this);this.h=a},i:function(){this.h=-1;if(this.c!=null){this.c.dispose()}},moveNext:function(){var __hasError__=false;try{while(this.h>=0){switch(this.h){case 0:this.h=1;this.c=this.b.getEnumerator();this.h=2;break;case 2:this.h=1;if(this.c.moveNext()){this.g=this.c.current();this.f=this.e(this.g);this.h=2;return true}this.i();break}}}catch(a){__hasError__=true;throw a}finally{if(__hasError__){this.dispose()}}return false},getEnumerator:function(){var d__;if(this.h==-2){this.h=0;d__=this}else{d__=new $$t.j(this.$tSource,this.$tResult,0)}d__.b=this.__3__source;d__.e=this.__3__selector;return d__},reset:function(){throw new $$0.r(1)},dispose:function(){switch(this.h){case 1:case 2:this.i();break}},current:function(){return this.f},current1:function(){return $d(this.$tResult,this.f)},$type:new $.ig.Type("Enumerable___Select__IteratorClass$2",$.ig.$ot,[$$0.$bx.$type.specialize(1),$.ig.IEnumerable.prototype.$type,$$0.$by.$type.specialize(1),$.ig.IEnumerator.prototype.$type,$$0.$au.$type])},true);$c("Enumerable___Where__IteratorClass1$1:i","Object",{$tSource:null,h:0,f:null,i:0,c:null,g:null,b:null,__3__source:null,e:null,__3__predicate:null,init:function($tSource,a){this.$tSource=$tSource;this.$type=this.$type.specialize(this.$tSource);$.ig.$op.init.call(this);this.h=a},j:function(){this.h=-1;if(this.c!=null){this.c.dispose()}},moveNext:function(){var __hasError__=false;try{while(this.h>=0){switch(this.h){case 0:this.h=-1;this.i=0;this.h=1;this.c=this.b.getEnumerator();this.h=2;break;case 2:this.h=1;if(this.c.moveNext()){this.g=this.c.current();if(this.e(this.g,this.i)){this.f=this.g;this.h=3;return true}this.h=3;break}this.j();break;case 3:this.h=1;this.i++;this.h=2;break}}}catch(a){__hasError__=true;throw a}finally{if(__hasError__){this.dispose()}}return false},getEnumerator:function(){var d__;if(this.h==-2){this.h=0;d__=this}else{d__=new $$t.i(this.$tSource,0)}d__.b=this.__3__source;d__.e=this.__3__predicate;return d__},reset:function(){throw new $$0.r(1)},dispose:function(){switch(this.h){case 1:case 2:case 3:this.j();break}},current:function(){return this.f},current1:function(){return $d(this.$tSource,this.f)},$type:new $.ig.Type("Enumerable___Where__IteratorClass1$1",$.ig.$ot,[$$0.$bx.$type.specialize(0),$.ig.IEnumerable.prototype.$type,$$0.$by.$type.specialize(0),$.ig.IEnumerator.prototype.$type,$$0.$au.$type])},true);$c("Enumerable___Where__IteratorClass$1:h","Object",{$tSource:null,h:0,f:null,c:null,g:null,b:null,__3__source:null,e:null,__3__predicate:null,init:function($tSource,a){this.$tSource=$tSource;this.$type=this.$type.specialize(this.$tSource);$.ig.$op.init.call(this);this.h=a},i:function(){this.h=-1;if(this.c!=null){this.c.dispose()}},moveNext:function(){var __hasError__=false;try{while(this.h>=0){switch(this.h){case 0:this.h=1;this.c=this.b.getEnumerator();this.h=2;break;case 2:this.h=1;if(this.c.moveNext()){this.g=this.c.current();if(this.e(this.g)){this.f=this.g;this.h=2;return true}this.h=2;break}this.i();break}}}catch(a){__hasError__=true;throw a}finally{if(__hasError__){this.dispose()}}return false},getEnumerator:function(){var d__;if(this.h==-2){this.h=0;d__=this}else{d__=new $$t.h(this.$tSource,0)}d__.b=this.__3__source;d__.e=this.__3__predicate;return d__},reset:function(){throw new $$0.r(1)},dispose:function(){switch(this.h){case 1:case 2:this.i();break}},current:function(){return this.f},current1:function(){return $d(this.$tSource,this.f)},$type:new $.ig.Type("Enumerable___Where__IteratorClass$1",$.ig.$ot,[$$0.$bx.$type.specialize(0),$.ig.IEnumerable.prototype.$type,$$0.$by.$type.specialize(0),$.ig.IEnumerator.prototype.$type,$$0.$au.$type])},true);$c("BitArray___GetEnumerator__IteratorClass:b","Object",{b:0,d:null,c:0,__4__this:null,init:function(a){$.ig.$op.init.call(this);this.b=a},moveNext:function(){while(this.b>=0){switch(this.b){case 0:this.b=-1;this.c=0;this.b=1;break;case 1:this.b=-1;if(this.c<this.__4__this.i){this.d=this.__4__this.item(this.c);this.b=2;return true}break;case 2:this.b=-1;this.c++;this.b=1;break}}return false},reset:function(){throw new $$0.r(1)},dispose:function(){},current:function(){return this.d},current1:function(){return this.d},$type:new $.ig.Type("BitArray___GetEnumerator__IteratorClass",$.ig.$ot,[$$0.$by.$type.specialize($.ig.$op.$type),$.ig.IEnumerator.prototype.$type,$$0.$au.$type])},true);$c("Enumerable___Range__IteratorClass:m","Object",{a:0,b:0,e:0,g:0,__3__startValue:0,f:0,__3__count:0,init:function(a){$.ig.$op.init.call(this);this.a=a},moveNext:function(){while(this.a>=0){switch(this.a){case 0:this.a=-1;this.e=this.g;this.a=1;break;case 1:this.a=-1;if(this.e<this.f){this.b=this.e;this.a=2;return true}break;case 2:this.a=-1;this.e++;this.a=1;break}}return false},getEnumerator:function(){var d__;if(this.a==-2){this.a=0;d__=this}else{d__=new $$t.m(0)}d__.g=this.__3__startValue;d__.f=this.__3__count;return d__},reset:function(){throw new $$0.r(1)},dispose:function(){},current:function(){return this.b},current1:function(){return this.b},$type:new $.ig.Type("Enumerable___Range__IteratorClass",$.ig.$ot,[$$0.$bx.$type.specialize($.ig.Number.prototype.$type),$.ig.IEnumerable.prototype.$type,$$0.$by.$type.specialize($.ig.Number.prototype.$type),$.ig.IEnumerator.prototype.$type,$$0.$au.$type])},true);$c("Enumerable___Concat__IteratorClass$1:n","Object",{$tSource:null,j:0,g:null,e:null,h:null,f:null,i:null,c:null,__3__source1:null,d:null,__3__source2:null,init:function($tSource,a){this.$tSource=$tSource;this.$type=this.$type.specialize(this.$tSource);$.ig.$op.init.call(this);this.j=a},k:function(){this.j=-1;if(this.e!=null){this.e.dispose()}},l:function(){this.j=-1;if(this.f!=null){this.f.dispose()}},moveNext:function(){var __hasError__=false;try{while(this.j>=0){switch(this.j){case 0:this.j=1;this.e=this.c.getEnumerator();this.j=2;break;case 2:this.j=1;if(this.e.moveNext()){this.h=this.e.current();this.g=this.h;this.j=2;return true}this.k();this.j=3;this.f=this.d.getEnumerator();this.j=4;break;case 4:this.j=3;if(this.f.moveNext()){this.i=this.f.current();this.g=this.i;this.j=4;return true}this.l();break}}}catch(a){__hasError__=true;throw a}finally{if(__hasError__){this.dispose()}}return false},getEnumerator:function(){var d__;if(this.j==-2){this.j=0;d__=this}else{d__=new $$t.n(this.$tSource,0)}d__.c=this.__3__source1;d__.d=this.__3__source2;return d__},reset:function(){throw new $$0.r(1)},dispose:function(){switch(this.j){case 1:case 2:this.k();break;case 3:case 4:this.l();break}},current:function(){return this.g},current1:function(){return $d(this.$tSource,this.g)},$type:new $.ig.Type("Enumerable___Concat__IteratorClass$1",$.ig.$ot,[$$0.$bx.$type.specialize(0),$.ig.IEnumerable.prototype.$type,$$0.$by.$type.specialize(0),$.ig.IEnumerator.prototype.$type,$$0.$au.$type])},true)});(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})})(jQuery);