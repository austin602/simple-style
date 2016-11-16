namespace App {
    let app = angular.module ('App' , ['ui.router']);

    app.config ([
        '$stateProvider' ,
        ($stateProvider) => {

            $stateProvider
                .state  ('home', {
                    url: '/',
                    templateUrl: 'templates/home.html',
                    controller: App.HomeController,
                    controllerAs: 'HomeController'
                })

        }
    ]);
}
