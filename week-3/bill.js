/* 
Title: appetizer.js
Author: William Watlington
Date: 6/12/2022
Description: Bill generator for restaurant app 
*/

export class Bill {
    constructor() {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }

    //methods to add items to their respective arrays
    addBeverage(beverage) {
        this._beverages.push(beverage);
    }
    
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }

    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }

    addDessert(dessert) {
        this._desserts.push(dessert);
    }

    //get total price of each type of product and then calculate total
    getTotal() {
        let total = 0;

        let beverageTotal = this._beverages.forEach(function(beverage) {
            total += parseFloat(beverage.price);
        });

        let appetizerTotal = this._appetizers.forEach(function(appetizer) {
            total += parseFloat(appetizer.price);
        });

        let mainCourseTotal = this._mainCourses.forEach(function(course) {
            total += parseFloat(course.price);
        });

        let dessertTotal = this._desserts.forEach(function(dessert) {
            total += parseFloat(dessert.price);
        });
    }
}