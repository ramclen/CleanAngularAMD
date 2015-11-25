requirejs.config({
    paths: {
        "src": "../src",
        'angular': '../bower_components/angular/angular',
        'angular-route': '../bower_components/angular-route/angular-route.min',
        'angularAMD': '../bower_components/angularAMD/angularAMD.min'
    },
    shim: { 'angularAMD': ['angular'], 'angular-route': ['angular'] }

});
