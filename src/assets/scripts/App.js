$(function () {
    //  alert("Welcome to our project");

    function City(name, number) {
        this.name = name;
        this.number = number;

        this.calculateAge = function (buildYear) {
            let currentYear = new Date().getFullYear();
            let age = currentYear - buildYear;
            return age;
        }

        this.display = function (year) {
           
            return `This city has ${this.number} parks and its name is ${this.name} and built in the year ${this.calculateAge(year)}`;
        }

    }

    let city = new City('Kolkata', 1);
    // let result = city.calculateAge.call(city, 1955);
 
     console.log(city.display(1955));

});

// Ajax for pure JavaScript
//1. Create an ajaxRequest object:
var ajaxRequest = new XMLHttpRequest();
//Here the ajaxRequest variable name can be anything you want (may be ajax)

// 2. Create a callback function
ajaxRequest.onreadystatechange = function () {
    if (ajaxRequest.readyState === 4) {
        document.getElementById('ajax').innerHTML = ajaxRequest.responseText;
    }
};

// 3. Open a Request :
ajaxRequest.open('GET', 'sidebar.html');

// 4. Send a request:
ajaxRequest.send();


// explain???
(function () {
    const nameList = {
        names: [],
        newName: null,
        init: function (callback) {
            this.newName = callback;
        },
        addName: function (name) {
            this.names.push(name);
            this.newName(name, this.names);
        }
    };
    nameList.init(function (newName, allNames) {
        console.log(newName);
        console.log('The list of all Name: ', allNames);
    });

    nameList.addName('Cool');
    nameList.addName('Robert');
})();