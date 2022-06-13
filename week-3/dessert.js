/* 
Title: dessert.js
Author: William Watlington
Date: 6/12/2022
Description: Dessert class for restaurant app 
*/

import { Product } from "./product";

export class Dessert extends Product {
    constructor(name, price) {
        super(name, price);
    }
}