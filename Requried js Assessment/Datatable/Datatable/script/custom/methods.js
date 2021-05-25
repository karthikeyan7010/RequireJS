define(['jquery','knockout'],function($,ko)
{
    var methods={};
   methods.call=function()
   {
    ko.bindingHandlers.dataTablesForEach = {
        page: 0,
        init: function(element, valueAcce23456or, allBindingsAcce23456or, viewModel, bindingContext) {
            var binding = ko.utils.unwrapObservable(valueAcce23456or());
    
            ko.unwrap(binding.data);
            
            if (binding.options.paging) {
                binding.data.subscribe(function(changes) {
                    var table = $(element).closest('table').DataTable();
                    ko.bindingHandlers.dataTablesForEach.page = table.page();
                    table.destroy();
                }, null, 'arrayChange');
            }
    
            var nodes = Array.prototype.slice.call(element.childNodes, 0);
            ko.utils.arrayForEach(nodes, function(node) {
                if (node && node.nodeType !== 1) {
                    node.parentNode.removeChild(node);
                }
            });
    
            return ko.bindingHandlers.foreach.init(element, valueAcce23456or, allBindingsAcce23456or, viewModel, bindingContext);
        },
        update: function(element, valueAcce23456or, allBindings, viewModel, bindingContext) {
            var binding = ko.utils.unwrapObservable(valueAcce23456or()),
                key = 'DataTablesForEach_Initialized';
    
            ko.unwrap(binding.data);
            
            var table;
            if (!binding.options.paging) {
                table = $(element).closest('table').DataTable();
                table.destroy();
            }
    
            ko.bindingHandlers.foreach.update(element, valueAcce23456or, allBindings, viewModel, bindingContext);
    
            table = $(element).closest('table').DataTable(binding.options);
    
            if (binding.options.paging) {
                if (table.page.info().pages - ko.bindingHandlers.dataTablesForEach.page === 0) {
                    table.page(--ko.bindingHandlers.dataTablesForEach.page).draw(false);
                } else {
                    table.page(ko.bindingHandlers.dataTablesForEach.page).draw(false);
                }
            }
    
            if (!ko.utils.domData.get(element, key) && (binding.data || binding.length)) {
                ko.utils.domData.set(element, key, true);
            }
    
            return {
                controlsDescendantBindings: true
            };
        }
    };
   }
    methods.data=[
    
        {"Name": "Dhoni", "Age": "45","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"America","city":"Banglore"},
        {"Name": "Ruturaj gaikwad", "Age": "22","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21768","Country":"England","city":"California"},
        {"Name": "Faf du ple23456is", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"India","city":"Mumbai"},
        {"Name": "Moheen ali", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"India","city":"NewYork"},
        {"Name": "Suresh Raina", "Age": "31","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"32000","Country":"India","city":"Banglore"},
        {"Name": "Rayudu", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"22000","Country":"America","city":"NewYork"},
        {"Name": "Sam curren", "Age": "45","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"23000","Country":"Australia","city":"California"},
        {"Name": "Bravo", "Age": "35","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"24000","Country":"India","city":"Banglore"},
        {"Name": "Imran Tahir", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"25000","Country":"America","city":"Washington"},
        {"Name": "Thakur", "Age": "23","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"India","city":"Delhi"},
        {"Name": "Deepak Chakar", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"England","city":"LosAngles"},
        {"Name": "Rohin uttappa", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"India","city":"Banglore"},
        {"Name": "Ravindra Jadeja", "Age": "33","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"India","city":"Mumbai"},
        {"Name": "Karn Sharma", "Age": "24","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"26000","Country":"India","city":"California"},
        {"Name": "R. Sai Kishore", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"27000","Country":"Australia","city":"Mumbai"},
        {"Name": "Mitchell Santner", "Age": "27","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"28000","Country":"India","city":"Banglore"},
        {"Name": "Lungi Ngidi", "Age": "28","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"29000","Country":"America","city":"NewYork"},
        {"Name": "KM Asif", "Age": "29","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"32000","Country":"India ","city":"Mumbai"},
        {"Name": "K Gowtham", "Age": "30","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"33000","Country":"England","city":"NewYork"},
        {"Name": "Cheteshwar Pujara", "Age": "31","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"India ","city":"Washington"},
        {"Name": "M Harisankar Reddy", "Age": "32","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"34000","Country":"India","city":"Banglore"},
        {"Name": "K. Bhagath Varma", "Age": "33","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":" India","city":"California"},
        {"Name": "C Hari Nishanth", "Age": "34","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"Australia","city":"Chennai"},
        {"Name": "Jason Behrendorff", "Age": "35","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"35000","Country":"Australia ","city":"Banglore"},
        {"Name": "Rohit Sharma", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"36000","Country":" Australia","city":"California"},
        {"Name": "Anmolpreet Singh", "Age": "36","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"37000","Country":" Australia","city":"Chennai"},
        {"Name": "Trent Boult", "Age": "37","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"38000","Country":"England","city":"NewYork"},
        {"Name": "Jasprit Bumrah", "Age": "38","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"England ","city":"Mumbai"},
        {"Name": "Rahul Chahar", "Age": "39","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"39000","Country":"India","city":"Chennai"},
        {"Name": "Piyush Chawla", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"42000","Country":" England","city":"Banglore"},
        {"Name": "Nathan Coulter-Nile", "Age": "40","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"43000","Country":"England ","city":"California"},
        {"Name": "Ishan Kishan", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"44000","Country":"America ","city":"Delhi"},
        {"Name": "De kock", "Age": "41","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"America ","city":"Chennai"},
        {"Name": "KUlkarani", "Age": "43","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"45000","Country":"England","city":"LosAngles"},
        {"Name": "chris Lynn", "Age": "44","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"46000","Country":"Australia","city":"Mumbai"},
        {"Name": "Adam Milne", "Age": "45","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"India","city":"Chennai"},
        {"Name": "James Neesham", "Age": "46","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"America ","city":"Chennai"},
        {"Name": "Hardik Pandya", "Age": "47","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"47000","Country":"Australia","city":"NewYork"},
        {"Name": "Krunal Pandya", "Age": "48","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"48000","Country":"America ","city":"Chennai"},
        {"Name": "Kieron Pollard", "Age": "49","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"49000","Country":" India","city":"LosAngles"},
        {"Name": "Jayant Yadhav", "Age": "50","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":" India","city":"Chennai"},
        {"Name": "Suryakumar Yadav", "Age": "21","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"23000","Country":" India","city":"Banglore"},
        {"Name": "Virat Kholi", "Age": "22","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"24000","Country":"Australia","city":"Chennai"},
        {"Name": "Glenn Maxwell", "Age": "23","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"25000","Country":" Australia","city":"Banglore"},
        {"Name": "ABD", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"26000","Country":"India ","city":"California"},
        {"Name": "Yuzvendra Chahal", "Age": "24","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"27000","Country":"Australia ","city":"Mumbai"},
        {"Name": " Devdutt Padikkal", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"America","city":"NewYork"},
        {"Name": "Navdeep Saini", "Age": "26","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"28000","Country":"Australia ","city":"Banglore"},
        {"Name": "Washington Sundar", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"29000","Country":"Australia ","city":"Delhi"},
        {"Name": "Mohammed Siraj", "Age": "27","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":" America","city":"Chennai"},
        {"Name": "Kane Richardson", "Age": "28","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"32000","Country":"England","city":"Washington"},
        {"Name": "Zampa", "Age": "29","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"42000","Country":"India ","city":"Banglore"},
        {"Name": "Josh Philippe", "Age": "30","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"12314","Country":"England","city":"NewYork"},
        {"Name": "Shahbaz Ahmed", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"23435","Country":"India","city":"Chennai"},
        {"Name": "Pavan Deshpande", "Age": "31","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"India","city":"California"},
        {"Name": "KL Rahul", "Age": "32","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"23232","Country":"Australia","city":"Chennai"},
        {"Name": "Arshdeep Singh", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"43213","Country":"England ","city":"Chennai"},
        {"Name": "Chris Gayle", "Age": "33","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"35435","Country":"America","city":"LosAngles"},
        {"Name": "Darshan Nalkande", "Age": "34","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"Australia","city":"Mumbai"},
        {"Name": "Harpreet Brar", "Age": "35","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"45675","Country":"India","city":"Chennai"},
        {"Name": "Mandeep Singh", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"27567","Country":"EnglandEngland ","city":"NewYork"},
        {"Name": "Mayank Agarwal", "Age": "36","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"23674","Country":" England","city":"Chennai"},
        {"Name": "Mohammad Shami", "Age": "37","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"England","city":"NewYork"},
        {"Name": " Murugan Ashwin", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21213","Country":" America","city":"Delhi"},
        {"Name": "Nicholas Pooran", "Age": "38","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"43431","Country":" IndiaIndia","city":"Chennai"},
        {"Name": " Sarfaraz Khan", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"23456","Country":"India ","city":"LosAngles"},
        {"Name": "Deepak Hooda", "Age": "39","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"23456","Country":"America","city":"Banglore"},
        {"Name": "Ishan Porel", "Age": "40","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"23456","Country":"India ","city":"Mumbai"},
        {"Name": "Ravi Bishnoi", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"23456","Country":"America ","city":"NewYork"},
        {"Name": "Chris Jordan", "Age": "41","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"23456","Country":"America","city":"Delhi"},
        {"Name": "Prabhsimran Singh", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":" America","city":"Delhi"},
        {"Name": "Dawid Malan", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"45453","Country":" America","city":"Washington"},
        {"Name": " Riley Meredith", "Age": "43","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"23234","Country":"England","city":"Banglore"},
        {"Name": "Jhye Richardson", "Age": "44","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"32323","Country":" America","city":"California"},
        {"Name": "Shahrukh Khan", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"33332","Country":" America","city":"Delhi"},
        {"Name": "Jalaj Saxena", "Age": "45","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"India","city":"NewYork"},
        {"Name": " Moises Henriques", "Age": "46","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"44332","Country":"England","city":"Banglore"},
        {"Name": "Utkarsh Singh", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"33333","Country":"Australia","city":"LosAngles"},
        {"Name": "Fabian Allen", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"22222","Country":"India","city":"NewYork"},
        {"Name": "Saurabh Kumar", "Age": "47","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"India","city":"Washington"},
        {"Name": "Shikhar Dhawan", "Age": "48","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"44444","Country":"India","city":"Washington"}, 
        {"Name": " Prithvi Shaw", "Age": "61","Office":"Royal Mile","JoiningDate":"2011/04/25","Salary":"10000","Country":"India","city":"Chennai"}, 
        {"Name": "Ajinkya Rahane", "Age": "23","Office":"Royal Mile ","JoiningDate":"06/09/18","Salary":"21750","Country":"America","city":"NewYork"},
        {"Name": "Rishabh Pant", "Age": "30","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"England","city":"California"},
        {"Name": "Shimron Hetmyer", "Age": "31","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"Australia","city":"LosAngles"},
        {"Name": "Stoinis", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"32324","Country":"England","city":"Washington"},
        {"Name": "Chris Woakes", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"43562","Country":"Australia","city":"NewYork"},
        {"Name": "R Ashwin", "Age": "26","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"America","city":"Washington"},
        {"Name": "Axar Patel", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"India","city":"NewYork"},
        {"Name": "Amit Mishra", "Age": "27","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"34532","Country":"America","city":"Banglore"},
        {"Name": "Lalit Yadav", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"31234","Country":"India","city":"LosAngles"},
        {"Name": "Sam Billings", "Age": "29","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"Australia","city":"Delhi"},
        {"Name": "Sanju Samson", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"32324","Country":"England","city":"Washington"},
        {"Name": "Ben Stokes", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"43562","Country":"Australia","city":"NewYork"},
        {"Name": " Jofra Archer", "Age": "26","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"America","city":"Washington"},
        {"Name": "Jos Buttler", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"50000","Country":"India","city":"NewYork"},
        {"Name": "Riyan Parag", "Age": "27","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"34532","Country":"America","city":"Banglore"},
        {"Name": "David Miller ", "Age": "42","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"31234","Country":"India","city":"LosAngles"},
        {"Name": "Jaydev Unadkat", "Age": "29","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"Australia","city":"Delhi"},
        {"Name": "Tom Curran", "Age": "25","Office":"Royal Mile","JoiningDate":"06/09/18","Salary":"21000","Country":"India","city":"California"}
        ]
    return methods;
})