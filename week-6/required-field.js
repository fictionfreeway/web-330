/*     
    Title: required-field.js
    Author: William Watlington
    Date: 7/1/2022
    Description: required-field class for future-value app
*/

export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        return Boolean(typeof this.field === 'string');
    }

    getMessage() {
        return `${this.name} is a required field`;
    }
}