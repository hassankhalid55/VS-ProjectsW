﻿/*!@license
* Infragistics.Web.ClientUI Pivot View 16.2.20162.2141
*
* Copyright (c) 2011-2012 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
*	jquery-1.9.1.js
*	jquery.ui.core.js
*	jquery.ui.widget.js
*	jquery.ui.mouse.js
*	jquery.ui.draggable.js
*	jquery.ui.droppable.js
*	infragistics.util.js
*	infragistics.datasource.js
*	infragistics.olapxmladatasource.js
*	infragistics.olapflatdatasource.js
*	infragistics.ui.shared.js
*	infragistics.ui.scroll.js
*	infragistics.ui.splitter.js
*	infragistics.ui.tree.js
*	infragistics.ui.grid.framework.js
*	infragistics.ui.grid.multicolumnheaders.js
*	infragistics.ui.pivot.shared.js
*	infragistics.ui.pivotdataselector.js
*	infragistics.ui.pivotgrid.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery","jquery-ui","./infragistics.util","./infragistics.ui.splitter","./infragistics.ui.pivotgrid","./infragistics.ui.pivotdataselector"],factory)}else{factory(jQuery)}})(function($){var _igPivotGrid=$.ui.igPivotGrid.prototype.widgetFullName||$.ui.igPivotGrid.prototype.widgetName,_igPivotDataSelector=$.ui.igPivotDataSelector.prototype.widgetFullName||$.ui.igPivotDataSelector.prototype.widgetName,_igSplitter=$.ui.igSplitter.prototype.widgetFullName||$.ui.igSplitter.prototype.widgetName;$.widget("ui.igPivotView",{options:{width:null,height:null,dataSource:null,dataSourceOptions:{xmlaOptions:{serverUrl:null,catalog:null,cube:null,measureGroup:null,requestOptions:{withCredentials:false,beforeSend:null},enableResultCache:true,discoverProperties:null,executeProperties:null,mdxSettings:{nonEmptyOnRows:true,nonEmptyOnColumns:true,addCalculatedMembersOnRows:true,addCalculatedMembersOnColumns:true,dimensionPropertiesOnRows:[],dimensionPropertiesOnColumns:[]}},flatDataOptions:{dataSource:null,dataSourceUrl:null,dataSourceType:null,responseDataKey:null,responseDataType:null,metadata:{cube:{name:null,caption:null,measuresDimension:{name:null,caption:null,measures:[{name:null,caption:null,aggregator:null,displayFolder:null}]},dimensions:[{name:null,caption:null,hierarchies:[{name:null,caption:null,displayFolder:null,levels:[{name:null,caption:null,memberProvider:null}]}]}]}}},measures:null,filters:null,rows:null,columns:null},pivotGridOptions:{isParentInFrontForColumns:false,isParentInFrontForRows:true,compactColumnHeaders:false,rowHeadersLayout:"compact",compactColumnHeaderIndentation:30,compactRowHeaderIndentation:20,defaultRowHeaderWidth:200,allowSorting:false,firstSortDirection:"ascending",allowHeaderRowsSorting:false,allowHeaderColumnsSorting:false,levelSortDirections:[{levelUniqueName:null,sortDirection:null}],firstLevelSortDirection:"ascending",gridOptions:{defaultColumnWidth:null,fixedHeaders:true,caption:null,features:[],tabIndex:0,alternateRowStyles:true,enableHoverStyles:false},dragAndDropSettings:{appendTo:"body",containment:false,zIndex:10},dropDownParent:"body",disableRowsDropArea:false,disableColumnsDropArea:false,disableMeasuresDropArea:false,disableFiltersDropArea:false,hideRowsDropArea:false,hideColumnsDropArea:false,hideMeasuresDropArea:false,hideFiltersDropArea:false,customMoveValidation:null},dataSelectorOptions:{dragAndDropSettings:{appendTo:"body",containment:false,zIndex:10},dropDownParent:"body",customMoveValidation:null},pivotGridPanel:{resizable:true,collapsible:false,collapsed:false,size:null},dataSelectorPanel:{location:"right",resizable:true,collapsible:true,collapsed:false,size:250}},_create:function(){var $this=this,elementName,splitter,panel,pivotGrid,dataSelector,panels,dataSelectorLocation,dataSource;elementName=this.element[0].nodeName.toUpperCase();if(elementName!=="DIV"){throw new Error(elementName+$.ig.PivotDataSelector.locale.invalidBaseElement)}this.element.addClass("ui-igpivotview");if(this.options.width){this.element.width(this.options.width)}if(this.options.height){this.element.height(this.options.height)}dataSelectorLocation=this.options.dataSelectorPanel.location;splitter=$("<div></div>").appendTo(this.element);panel=$("<div></div>").appendTo(splitter);pivotGrid=$("<table></table>").attr("id",this.element.attr("id")+"_pivotGrid").appendTo(panel);panel=$("<div></div>")[dataSelectorLocation==="right"?"appendTo":"prependTo"](splitter);dataSelector=$("<div></div>").attr("id",this.element.attr("id")+"_dataSelector").appendTo(panel);panels=[this.options.pivotGridPanel,this.options.dataSelectorPanel];if(dataSelectorLocation!=="right"){panels.reverse()}dataSource=$.ig.Pivot._pivotShared._createDataSource(this.options.dataSource,this.options.dataSourceOptions);dataSelector.igPivotDataSelector($.extend(true,this.options.dataSelectorOptions,{dataSource:dataSource}));splitter.igSplitter({width:this.options.width||this.element.width(),height:this.options.height||this.element.height(),panels:panels}).bind("igsplitterresizeended igsplitterexpanded igsplittercollapsed",function(){$this._setSize()}).bind("igsplitterresizestarted",function(){$(".ui-igpivot-metadatadropdown,.ui-igpivot-filterdropdown").remove()});if($.ui.igSplitter.prototype.css.verticalPanel){$($.ui.igSplitter.prototype.css.verticalPanel.replace(/ui-/g,".ui-").replace(/ /g,"")).css("overflow","hidden")}pivotGrid.igPivotGrid($.extend(true,this.options.pivotGridOptions,{dataSource:dataSource,width:(dataSelectorLocation==="right"?splitter.igSplitter("firstPanel"):splitter.igSplitter("secondPanel")).width(),height:splitter.igSplitter("option","height")}));splitter.igSplitter("refreshLayout");this._setSize();dataSelector.bind("igpivotdataselectordeferupdatechanged",function(evt,ui){pivotGrid.igPivotGrid("option","deferUpdate",ui.deferUpdate)})},_setOption:function(key,value){switch(key){case"dataSource":this.options.dataSourceOptions=null;this.options.dataSource=$.ig.Pivot._pivotShared._createDataSource(value,null);this.dataSelector().option("dataSource",this.options.dataSource);this.pivotGrid().option("dataSource",this.options.dataSource);break;case"dataSourceOptions":this.options.dataSourceOptions=value;this.options.dataSource=$.ig.Pivot._pivotShared._createDataSource(null,value);this.dataSelector().option("dataSource",this.options.dataSource);this.pivotGrid().option("dataSource",this.options.dataSource);break;case"width":case"height":$.Widget.prototype._setOption.call(this,arguments);this.splitter().element[key](value);this._setSize();break}},_setSize:function(){var splitter=this.splitter(),pivotGrid=this.pivotGrid(),dataSelector=this.dataSelector(),height=this.element.height(),dataSelectorLocation,pivotGridPanelWidth,dataSelectorPanelWidth;dataSelectorLocation=this.options.dataSelectorPanel.location;if(dataSelectorLocation==="right"){pivotGridPanelWidth=splitter.firstPanel().width();dataSelectorPanelWidth=splitter.secondPanel().width()}else{pivotGridPanelWidth=splitter.secondPanel().width();dataSelectorPanelWidth=splitter.firstPanel().width()}pivotGrid.option("width",pivotGridPanelWidth);pivotGrid.option("height",height);dataSelector.option("width",dataSelectorPanelWidth);dataSelector.option("height",height)},pivotGrid:function(){try{return this.element.find(":ui-igPivotGrid").data(_igPivotGrid)}catch(e){if(e==="Syntax error, unrecognized expression: "+"Syntax error, unrecognized expression: ui-igPivotGrid"||e.message==="Syntax error, unrecognized expression: ui-igPivotGrid"){return this.element.find(":ui-igpivotgrid").data(_igPivotGrid)}throw e}},dataSelector:function(){try{return this.element.find(":ui-igPivotDataSelector").data(_igPivotDataSelector)}catch(e){if(e==="Syntax error, unrecognized expression:"+" Syntax error, unrecognized expression: ui-igPivotDataSelector"||e.message==="Syntax error, unrecognized expression: ui-igPivotDataSelector"){return this.element.find(":ui-igpivotdataselector").data(_igPivotDataSelector)}throw e}},splitter:function(){try{return this.element.find(":ui-igSplitter").data(_igSplitter)}catch(e){if(e==="Syntax error, unrecognized expression: "+"Syntax error, unrecognized expression: ui-igSplitter"||e.message==="Syntax error, unrecognized expression: ui-igSplitter"){return this.element.find(":ui-igsplitter").data(_igSplitter)}throw e}},destroy:function(){this.element.removeClass("ui-igpivotview");try{this.element.find(":ui-igPivotGrid").igPivotGrid("destroy");this.element.find(":ui-igPivotDataSelector").igPivotDataSelector("destroy");this.element.find(":ui-igSplitter").igSplitter("destroy").remove();$.Widget.prototype.destroy.call(this)}catch(e){if(typeof e==="string"){if(e.indexOf("unrecognized expression: ui-ig")!==-1){this.element.find(":ui-igpivotgrid").igPivotGrid("destroy");this.element.find(":ui-igpivotdataselector").igPivotDataSelector("destroy");this.element.find(":ui-igsplitter").igSplitter("destroy").remove();$.Widget.prototype.destroy.call(this);return}}else{if(e.message.indexOf("unrecognized expression: ui-ig")!==-1){this.element.find(":ui-igpivotgrid").igPivotGrid("destroy");this.element.find(":ui-igpivotdataselector").igPivotDataSelector("destroy");this.element.find(":ui-igsplitter").igSplitter("destroy").remove();$.Widget.prototype.destroy.call(this);return}}throw e}}});$.extend($.ui.igPivotView,{version:"16.2.20162.2141"});return $.ui.igPivotView});(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$("<div id='__ig_wm__'></div>").appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})})(jQuery);