﻿/*!@license
* Infragistics.Web.ClientUI Zoombar localization resources 16.2.20162.2141
*
* Copyright (c) 2011-2017 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define( [
			"jquery"
		], factory );
	} else {
		factory(jQuery);
	}
}
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Zoombar) {
	$.ig.Zoombar = {};

	$.extend($.ig.Zoombar, {

		locale: {
			zoombarTargetNotSpecified: "igZoombar を有効なターゲットにアタッチする必要があります。",
			zoombarTypeNotSupported: "ズームバーにアタッチするウィジェット タイプはサポートされません。",
			zoombarProviderNotRecognized: "igZoombar が指定したクラスからプロバイダーを初期化できなかったか、渡された値がクラスではありません。",
			optionChangeNotSupported: "igZoombar が作成された後のこのオプションの変更はサポートされません:"
		}
	});

}
}));// REMOVE_FROM_COMBINED_FILES
