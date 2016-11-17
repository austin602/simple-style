namespace App {
    let app = angular.module ('App', ['ui.router']);

    app.config ([
        '$stateProvider',
        ($stateProvider) => {

            $stateProvider
                .state ('home', {
                    url: '/',
                    templateUrl: 'templates/home.html',
                    controller: App.HomeController,
                    controllerAs: 'homeController'
                })
                .state ('product', {
                    url: '/product',
                    templateUrl: 'templates/product.html',
                    controller: App.ProductController,
                    controllerAs: 'productController'
                })
                .state ('front-page', {
                    url:'/front-page',
                    templateUrl:'templates/front-page.html',
                    controller: App.FrontpageController,
                    controllerAs: 'frontpageController'

                })
        }
    ]);
}
