/* 
Title: main-course.js
Author: William Watlington
Date: 6/12/2022
Description: Main Course class for restaurant app 
*/

import { Product } from "./product";

export class MainCourse extends Product {
    constructor(name, price) {
        super(name, price);
    }
}