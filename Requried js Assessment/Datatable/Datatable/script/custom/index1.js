define(['jquery','knockout','datatable','methods'],function($,ko,dt,methods)
{
    methods.call();
    var data = methods.data;
    console.log(data);
    
       var ViewModel = function() {
           var cur=this;
        this.data1=ko.observableArray(data);
        this.dataModel=ko.observableArray(data);
        this.temp=ko.observableArray([]);
        this.age=ko.observable(null);
        this.sal=ko.observable(null);
        this.salOption=[
            {text:"21000-31000",id:'1'},
            {text:"31000-41000",id:'2'},
            {text:"41000-50000",id:'3'},
        ]
        this.ageOption=[
            {text:"20-30",id:'1'},
            {text:"31-40",id:'2'},
            {text:"41-50",id:'3'},
        ]
        this.checkedValue=ko.observableArray([]);
         this.agemodify=function()
         {
            cur.temp([]);
            var temp11 =this.age();
            var opt = temp11.split("-");
            
              var opt1=Number(opt[0]);
              var temp1=Number(opt[1]);
              
        
                
              for(let i=0;i<cur.data1().length;i++)
              {
                  var val=cur.data1()[i].Age;
                  
                  val=Number(val);
         
                if(val>=opt1 && val<=temp1)
                {
            
                    cur.temp.push(cur.data1()[i]);
                }
              }
            
     
           cur.dataModel(cur.temp());
        
         }
         this.salmodify=function()
         {
            cur.temp([]);
            var temp11 =this.sal();
            
            var opt = temp11.split("-");
            
              var opt1=Number(opt[0]);
              var temp1=Number(opt[1]);
              
             console.log(opt1);
             console.log(temp1);
         
                
              for(let i=0;i<cur.data1().length;i++)
              {
                  var val=cur.data1()[i].Salary;
                  
                  val=Number(val);
              
                if(val>=opt1 && val<=temp1)
                {
                  
                    cur.temp.push(cur.data1()[i]);
                }
              }
            
        
           cur.dataModel(cur.temp());
         }
      
         this.Country=function(datas)
         {
            
            console.log(datas);
          
    
         }
         this.checkedValue.subscribe(function(data)
         {
            cur.temp([]);
         
           if(data.length==0)
           {
            cur.temp(cur.data1());
           }
                
            
           
            else
            {
              
             
                
              for(let i=0;i<cur.data1().length;i++)
              {
                  var val=cur.data1()[i].Country;
                  var val2=cur.data1()[i].city;
                  
                for(let j=0;j<data.length;j++)
                {
                    if(val==data[j] || val2==data[j])
                    {
                        cur.temp.push(cur.data1()[i]);
                        break;
                    }
                }
         
              }
            }
         
            
          cur.dataModel(cur.temp());
            
         })
        
         this.reset=function()
         {
             this.age("");
             this.sal("");
             this.checkedValue([]);
        
         }
       };
       
       ko.applyBindings(new ViewModel());
    


})