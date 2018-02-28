(function(DOM, global) {

	'use strict';

	var app = {
		page: "home",
		init: function() {
			this.cacheDOM();
			this.render();
		},
		cacheDOM: function() {
			this.app = $("#app");
		},
		render: function() {

		},
		switchPage: function(destination) {
			switch (destination) {
				case "home":
					this.app.removeClass();
					this.app.toggleClass("home");
					this.page = "home";
					break;
				case "portfolio":
					this.app.removeClass();
					this.app.toggleClass("portfolio");
					this.page = "portfolio";
					break;
				case "about": 
					this.app.removeClass();
					this.app.toggleClass("about");
					this.page = "about";
					break;
				case "reviews":
					this.app.removeClass();
					this.app.toggleClass("reviews");
					this.page = "reviews";
					break;
				case "contact":
					this.app.removeClass();
					this.app.toggleClass("contact");
					this.page = "contact";
					break;
			}
		}
	}

	var navbar = {
		init: function() {
			this.cacheDOM();
			this.render();
		},
		cacheDOM: function() {
			this.navigationWrapper = $(".nav-wrapper");
			this.navigation = $(".navigation");
			this.homeBtn = $("#home-btn");
			this.portfolioBtn = $("#portfolio-btn");
			this.aboutBtn = $("#about-btn");
			this.reviewsBtn = $("#reviews-btn");
			this.contactBtn = $("#contact-btn");
			this.titleWrapper = $(".title-wrapper");
		},
		render: function() {
			this.homeBtn.on("click", () => {
				app.switchPage("home");
				this.switchActive("home");
				this.switchLayout("main");
			});	

			this.portfolioBtn.on("click", () => {
				app.switchPage("portfolio");
				this.switchActive("portfolio");
				this.switchLayout("secondary");
			});	

			this.aboutBtn.on("click", () => {
				app.switchPage("about");
				this.switchActive("about");
				this.switchLayout("secondary");
			});	

			this.reviewsBtn.on("click", () => {
				app.switchPage("reviews");
				this.switchActive("reviews");
				this.switchLayout("secondary");
			});	

			this.contactBtn.on("click", () => {
				app.switchPage("contact");
				this.switchActive("contact");
				this.switchLayout("secondary");
			});	
		},
		switchActive: function(active) {
			switch (active) {
				case "home":
					this.unactify();
					this.homeBtn.toggleClass("active");
					break;
				case "portfolio":
					this.unactify();
					this.portfolioBtn.toggleClass("active");
					break;
				case "about": 
					this.unactify();
					this.aboutBtn.toggleClass("active");
					break;
				case "reviews":
					this.unactify();
					this.reviewsBtn.toggleClass("active");
					break;
				case "contact":
					this.unactify();
					this.contactBtn.toggleClass("active");
					break;
			}
		},
		unactify: function() {
			this.homeBtn.removeClass();
			this.portfolioBtn.removeClass();
			this.aboutBtn.removeClass();
			this.reviewsBtn.removeClass();
			this.contactBtn.removeClass();
		},
		switchLayout: function(layout) {
			switch (layout) {
				case "main":
					this.navigationWrapper.removeClass("secondary");
					this.titleWrapper.removeClass("secondary");
					break;
				case "secondary":
					this.navigationWrapper.addClass("secondary");
					this.titleWrapper.addClass("secondary");
					break;
			}
		}
	}

	app.init();
	navbar.init();
}(document, window));