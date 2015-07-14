var app = angular.module('FlashCardApp', ["ui.router"]);

app.config(function ($stateProvider) {
	$stateProvider.state("statistics", {
		url: "/stats",
		controller: "StatsController",
		templateUrl: "/templates/statistics.html"
	}).state("newCard", {
		url: "/adding",
		controller: "AddCard",
		templateUrl: "/templates/newCard.html"
	}).state("flashCardView", {
		url: "/playon",
		controller: "MainCtrl",
		templateUrl: "/templates/flashCardView.html"
	}).state("manage", {
		url: "/:cardId",
		controller: "EditCtrl",
		template: "<flash-card card='flashCard'></flash-card><p ui-sref='manage.edit'>EDIT</p><p ui-sref='manage.delete'>Delete</p><ui-view></ui-view>"
	}).state("manage.edit", {
		url: "/edit",
		templateUrl: "/templates/newCard.html"
	}).state("manage.delete", {
		url: "/delete",
		controller: function ($scope, $state) {
			alert("ARE YOU SURE????");
			$state.go("flashCardView");
		}
	});
});
