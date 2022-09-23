function Dealership(name, maxNumberOfCars){
    this.name = name
    this.maxNumberOfCars = maxNumberOfCars
    this.currentCar = null
    this.cars = []
}                                                           //every object contstructor has a prototype property, containing methods
                                                            //functions should be prototyped - allows for cleaner/smaller objects
Dealership.prototype.count = function (){                       //return current car count
    return this.cars.length;
}

Dealership.prototype.add = function (car){
    if (this.count() < this.maxNumberOfCars){               //if current amount of cars is less than max
        this.cars.push(car)                                     //create new car
    }                                                               //no return required (equivalent to void method)
}

Dealership.prototype.manufaturer = function (){             // return array containing manufacturers
    return this.cars.map( (car) => car.manufacturer)
}

Dealership.prototype.carsWithManufacturer = function (manufacturer){        //match cars with manufacturer
    return this.cars.filter((car) => car.manufacturer === manufacturer)         
}

Dealership.prototype.total = function (){                 //total price of all cars
    return this.cars                                       //return cars prices and...
    .map(car => car.price)                               //..map car prices to an array
    .reduce((total, price) => total + price)            //then return total of prices in array
}

Dealership.prototype.find = function (by, value){
    let result = []
    switch (by) {

    }
}

