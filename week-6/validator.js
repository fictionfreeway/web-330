/*     
    Title: validator.js
    Author: William Watlington
    Date: 7/2/2022
    Description: validator class for future-value app
*/

import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

export class Validator {
    validators = [];
    messages = [];
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field));
    }

    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, this.field));
    }

    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }

    validate() {
        for(const item of this.validators) {
            if(item.validate() === false) {
                this.messages.push(item.getMessage());
                return false;
            }
        } 
        return true;
    }
    
}