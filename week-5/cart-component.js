class CartComponent extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)';
    }
}