/*     
    Title: float-field.js
    Author: William Watlington
    Date: 7/1/2022
    Description: float-field class for future-value app
*/

export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    } 

    validate() {
        try {
            userFloat = parseFloat(this.field);
            if(isNaN(userFloat)) {
                return false;
            } else {
                return true;
            }
        } catch {
            return false;
        }
    }

    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}`;

    }
}