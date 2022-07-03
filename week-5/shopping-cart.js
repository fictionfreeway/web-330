export class ShoppingCart {
    constructor() {
        this.products = [];
    }
    count() {
        return this.products.length;
    }
    add(item) {
        this.products.push(item);
    }
    [Symbol.iterator]() {
        for(const item of this.products) {
            yield item;
        }
    }
}