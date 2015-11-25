require(['src/AppController', 'src/MyController'], function (appController) {
    Main(appController);
});

function Main(appController){
    new MyController(appController.getApp());
    appController.bootstrap();
}