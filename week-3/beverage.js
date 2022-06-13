/* 
Title: beverage.js
Author: William Watlington
Date: 6/12/2022
Description: Beverage class for restaurant app 
*/

import { Product } from "./product";

export class Beverage extends Product {
    constructor(name, price) {
        super(name, price);
    }
}
