define(['angularAMD', 'angular-route'], function (angularAMD) {
    return AppController(angularAMD);
});

function AppController(angularAMD){
    var app;

    this.getApp = function () {
        if(app==undefined)
            app = angular.module("webapp", ['ngRoute']);
        return app;
    };

    this.bootstrap = function () {
        angularAMD.bootstrap(app);
    };

    return this;
}