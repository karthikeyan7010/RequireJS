define(['jquery'],function()
{
    var methods={};
    methods.myCss=function(url) {
        console.log(url);
        var mylink = document.createElement("mylink");
        mylink.type = "text/css";
        mylink.rel = "stylesheet";
        mylink.href = "css/"+url;
        document.getElementsByTagName("head")[0].appendChild(mylink);
     }
     return methods;
})

