define([],function()
{
    var methods={}
    methods.valid=function(a)
    {
       if(a==undefined ||a==""){
       return true;}
       return false;
    }
    return methods;
  
})