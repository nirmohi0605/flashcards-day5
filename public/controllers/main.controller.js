app.controller('MainCtrl', function ($scope, FlashCardFactory, $stateParams) {
    // make a query
    FlashCardFactory.getFlashCards()
    .then(function (cards) {
      FlashCardFactory.flashCards = cards;
      $scope.flashCards = cards;
    })
    .catch(function (e) {
      console.log('e', e);
    })

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.activeCat = null;

    $scope.filterByCategory = function (cat) {
      $scope.activeCat = cat;
      $scope.flashCards = null;
      FlashCardFactory.getFlashCards(cat)
      .then(function (cards) {
        FlashCardFactory.flashCards = cards;
        $scope.flashCards = cards;
      });
    };

    $scope.$on('addedCard', function (e, card) {
      if ($scope.activeCat === card.category) {
        FlashCardFactory.flashCards.push(card);
        $scope.flashCards.push(card);
      }
    });
  })