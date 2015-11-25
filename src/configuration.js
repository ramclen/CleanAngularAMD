require(["../configuration"], function () {

    requirejs.config({
        paths: {
            "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min"
        },
        deps : ['jquery', 'src/Main']
    });

});
