app.controller('EditCtrl', function ($scope, FlashCardFactory, $stateParams) {

	$scope.flashCard = FlashCardFactory.flashCards.filter(function (card) {
		return card._id === $stateParams.cardId;
	})[0];

});
