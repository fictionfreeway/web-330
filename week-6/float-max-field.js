/*     
    Title: float-max-field.js
    Author: William Watlington
    Date: 7/1/2022
    Description: float-max-field class for future-value app
*/

export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() {
        let userNum = parseFloat(this.field);
        if(userNum < this.max) {
            return true;
        } else {
            return false;
        }
    }
    
    getMessage() {
        return `${this.name} must be less that ${this.max}. You entered ${this.field}`;
    }
}