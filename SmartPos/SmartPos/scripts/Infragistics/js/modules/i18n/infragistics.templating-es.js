﻿/*!@license
* Infragistics.Web.ClientUI templating localization resources 16.2.20162.2141
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

	if (!$.ig.Templating) {
		$.ig.Templating = {};

		$.extend($.ig.Templating, {
			locale: {
				undefinedArgument: 'Se ha producido un error al intentar recuperar las propiedades del origen de datos: '
			}
		});
	}
}));// REMOVE_FROM_COMBINED_FILES
