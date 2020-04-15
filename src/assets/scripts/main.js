$(function(){
//  alert("Welcome to our project");

    function City(name, number) {
        this.name = name;
        this.number = number;

        this.calculateAge = function(buildYear){
            let currentYear = new Date().getFullYear();
            let age = currentYear - buildYear;
            return age;
        }

        this.display = function(year){
            return `This city has ${this.number} parks and its name is ${this.name} and built in the year ${this.calculateAge(year)}`;
        }
        
    }

    let city = new City('Delhi', 1);
    // let result = city.calculateAge.call(city, 1955);

    console.log(city.display(1955));
    
});