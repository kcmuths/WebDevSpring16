var app = angular.module('Threads', ['ui.router']);
app.factory('posts',[function(){
    var o = {
        posts:[]
    };
    return o;
}]);
app.controller('MainCtrl',['$scope','posts',function($scope, posts){
    $scope.test= 'Hello World'
    $scope.posts = posts.posts;
        /*[
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
    ]; */
    /* add POST controller */
    $scope.addPost = function(){
        if(!$scope.title || $scope.title === '')
        {
            return;
        }
        $scope.posts.push({title: $scope.title, link:$scope.link, upvotes: 0,
        comments: [
            {author:'Grace', body:'Slick', upvotes: 0},
            {author:'Alice', body:'so and so', upvotes: 0}
        ]});
        $scope.title = '';
        $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    };
}]);

app.config([
    '$stateProvider',
    '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/home.html',
                controller: 'MainCtrl'
            })
        .state('posts', {
            url: '/posts/{id}',
            templateUrl:'/posts.html',
            controller: 'PostsCtrl'
        });
        $urlRouterProvider.otherwise('home');
    }
]);
/* POST controller */
app.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts){
        $scope.post = posts.posts[$stateParams.id];
    $scope.addComment = function(){
        if($scope.body === ''){
            return;
        }
        $scope.post.comments.push({
            body: $scope.body,
            author: 'user',
            upvotes: 0
        });
        $scope.body = '';
    };

    }]);
