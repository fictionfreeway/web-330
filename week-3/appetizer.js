/* 
Title: appetizer.js
Author: William Watlington
Date: 6/12/2022
Description: Appetizer class for restaurant app 
*/

import { Product } from "./product";

export class Appetizer extends Product {
    constructor(name, price) {
        super(name, price);
    }
}