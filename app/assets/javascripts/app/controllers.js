angular.module('myApp.controllers', [])
    .controller('HomeController', 
        function($scope, session, SessionService, ArticleService, Share) {
            $scope.user = session.user;
            
            ArticleService.getLatestFeed()
            .then(function(data) {
                $scope.articles = data;
            });

            $scope.newShare = { recipient: '' };
            
            $scope.share = function(recipient, article) {
                var share = new Share({
                    url: article.link,
                    from_user: $scope.user.id,
                    user: recipient
                });
                share.$save();
                $scope.newShare.recipient = '';
            }
});