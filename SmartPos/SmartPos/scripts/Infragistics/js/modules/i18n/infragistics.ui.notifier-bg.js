﻿/*!@license
* Infragistics.Web.ClientUI Notifier localization resources 16.2.20162.2141
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
(function($) {
$.ig = $.ig || {};

if (!$.ig.Notifier) {
	$.ig.Notifier = {};

	$.extend($.ig.Notifier, {
		locale: {
			successMsg: "Успех",
			errorMsg: "Грешка",
			warningMsg: "Внимание"
		}
	});

}
}));// REMOVE_FROM_COMBINED_FILES
