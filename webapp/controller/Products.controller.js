sap.ui.define(
	["./BaseController"],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("odata.tutorial.products.controller.Products", {
			onInit: async function () {
				const oRouter = this.getRouter();
				oRouter.getRoute("RouteProducts").attachPatternMatched(this._onObjectMatched, this);
			},

			_onObjectMatched: function () {},
		});
	}
);
