'use strict';

var table = document.getElementById('table_content');
var data = [];
var cars = [];

//This is my object constructor
function Car(make, model, year, mileage){
  this.make = make;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
}

//new cars
var audi = new Car('Audi', 'A4', 2010, 70000);
var dakota = new Car('Dodge', 'Dakota', 2004, 80000);
var atst = new Car('Imperial', 'Walker', 2653, 43425);

//Push new objects into the cars array
cars.push(audi);
cars.push(dakota);
cars.push(atst);


//push car objects into data array
for (var i = 0 ; i < cars.length ; i++){
  data.push(
    '<td>' + cars[i].make + '</td>' +
    '<td>' + cars[i].model + '</td>' +
    '<td>' + cars[i].year + '</td>' +
    '<td>' + cars[i].mileage + '</td>'
  );
}

//append to html
var newRow;

for (var j = 0 ; j < data.length ; j++){
  newRow = document.createElement('tr');
  newRow.innerHTML = data[j];
  table.appendChild(newRow);
}
