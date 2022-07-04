/*     
    Title: float-min-field.js
    Author: William Watlington
    Date: 7/1/2022
    Description: float-min-field class for future-value app
*/

export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }

    validate() {
        let userNum = parseFloat(this.field);
        if(userNum > this.min) {
            return true;
        } else {
            return false;
        }
    }
    
    getMessage() {
        return `${this.name} must be more that ${this.min}. You entered ${this.field}`;
    }
}