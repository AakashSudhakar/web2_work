// shoppingcart.test.js (tddPractice/test)
// Aakash Sudhakar


const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

const newItem = require("../shoppingCart.js").newItem;
const getCart = require("../shoppingCart.js").getCart;
const addToCart = require("../shoppingCart.js").addToCart;
const getCount = require("../shoppingCart.js").getCount;
const clearCart = require("../shoppingCart.js").clearCart;
const getTotal = require("../shoppingCart.js").getTotal;
const removeByItem = require("../shoppingCart.js").removeByItem;

const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;


// ================================================================================
// ================================== TEST CASES ==================================
// ================================================================================

it("Should create a new item with name, price, and default quantity of 1", () => {
    const apple = newItem("Apple", 0.99);
    expect(apple).to.have.property("name");
    expect(apple).to.have.property("price");
})

it('Should return an array containing all items in cart', () => {
    const cart = getCart();
    expect(cart).to.have.length(0);
    expect(cart).to.be.a("array");
});

it('Should add a new item to the shopping cart', () => {
    let item = newItem("Dollar", 3.99);
    addToCart(item);
    expect(getCart()).to.have.length(1);
});

it('Should return the number of items in the cart', () => {
    clearCart();
    let apple = newItem("Orange", 1.99);
    addToCart(apple);
    expect(getCount()).to.equal(1);
});


it('Should remove items from cart', () => {
    clearCart();
    let apple = newItem("Apple", 0.99);
    addToCart(apple);
    expect(getCount()).to.equal(1);
    clearCart();
    expect(getCount()).to.equal(0);
});


// ================================================================================
// ======================== TEST CASES: STRETCH CHALLENGES ========================
// ================================================================================

it('Should update the count of items in the cart', () => {
    clearCart();
    let apple = newItem("Apple", 0.99);
    addToCart(apple);
    let itemCount = getCount();
    addToCart(apple);
    expect(getCount()).to.equal(2);
});

it('Should remove an item when its count is 0', () => {
    clearCart();

    // why?
});

it('Should return the total cost of all items in the cart', () => {
    clearCart();

    let apple = newItem("Apple", 0.99, 3);
    addToCart(apple);
    expect(getTotal()).to.equal(3 * 0.99);

    let orange = newItem("Orange", 1.49);
    addToCart(orange);
    expect(getTotal()).to.equal((3 * 0.99) + 1.49);
});

it("Should remove individual items from the cart", () => {
    clearCart();
    
    let apple = newItem("Apple", 0.99, 3);
    addToCart(apple);
    // console.log(JSON.stringify(getCart()));
    expect(getCount()).to.equal(3);

    removeByItem("Apple");
    // console.log(JSON.stringify(getCart()));
    expect(getCount()).to.equal(0);
})