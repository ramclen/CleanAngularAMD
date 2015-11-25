require(['src/AppController', 'src/controller/MyController'], function (appController) {
    Main(appController);
});

function Main(appController){
    new MyController(appController.getApp());
    appController.bootstrap();
}