/* 
Title: index.js
Author: William Watlington
Date: 6/12/2022
Description: exports all needed files together & contains onclick function
*/

import { Appetizer } from "./appetizer.js";
import { Beverage } from "./beverage.js";
import { Bill } from "./bill.js";
import { Dessert } from "./dessert.js";
import { MainCourse } from "./main-course.js";

export * from "./beverage.js";
export * from "./appetizer.js";
export * from "./main-course.js";
export * from "./dessert.js";
export * from "./bill.js";

const beveragesDiv = document.getElementById("beverages");
const beverages = beveragesDiv.getElementsByTagName("input");

const appetizersDiv = document.getElementById("appetizers");
const appetizers = beveragesDiv.getElementsByTagName("input");

const mainCoursesDiv = document.getElementById("main-courses");
const mainCourses = beveragesDiv.getElementsByTagName("input");

const dessertsDiv = document.getElementById("desserts");
const desserts = beveragesDiv.getElementsByTagName("input");

const orderResults = document.getElementById("order-total")

function placeOrder() {
    let bill = new Bill;
    for(let item of beverages) {
        let name = item.getElementsByClassName("name")[0].innerHTML;
        let price = parseFloat(item.getElementsByClassName("price")[0].innerHTML);
        if(item.checked) {
            bill.addBeverage(new Beverage(name, price));
        }
    }
    for(let item of appetizers) {
        let name = item.getElementsByClassName("name")[0].innerHTML;
        let price = parseFloat(item.getElementsByClassName("price")[0].innerHTML);
        if(item.checked) {
            bill.addAppetizer(new Appetizer(name, price));
        }
    }
    for(let item of mainCourses) {
        let name = item.getElementsByClassName("name")[0].innerHTML;
        let price = parseFloat(item.getElementsByClassName("price")[0].innerHTML);
        if(item.checked) {
            bill.addMainCourse(new MainCourse(name, price));
        }
    }
    for(let item of desserts) {
        let name = item.getElementsByClassName("name")[0].innerHTML;
        let price = parseFloat(item.getElementsByClassName("price")[0].innerHTML);
        if(item.checked) {
            bill.addDessert(new Dessert(name, price));
        }
    }
    
    orderResults.innerHTML = bill.getTotal();
}