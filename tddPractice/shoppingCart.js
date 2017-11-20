// shoppingCart.js (tddPractice)
let cart = []

const newItem = (name, price, quantity=1) => {
    return {
        name,
        price,
        quantity
    }
}

const getCart = () => {
    return [...cart]
}

const addToCart = (newItem) => {
    for (let item of cart) {
        if (newItem.name == item.name) {
            item.quantity += newItem.quantity;
            return;
        }
    }
    cart.push(newItem);
}

const removeByItem = (itemName) => {
    let index = 0;

    for (let item of cart) {
        if (itemName == item.name) {
            cart.splice(index, 1);  // Modifying existing cart (consider FILTER)
            return;
        }
        
        index++;
    }
}

const getCount = () => {
    return cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);
}

// const removeFromCart = (itemName) => {
//     // whoooooooo
//     for (let item in cart) {
//         if (cart[item].name == itemName) {
//             cart[item].quantity -= 1;

//             if (cart[item].quantity == 0) {
//                 cart.splice[item];
//                 return;
//             }
//         }
//     }
// }

const getTotal = () => {
    return cart.reduce((acc, curr) => {
        return acc + (curr.price * curr.quantity);
    }, 0);
}

const clearCart = () => {
    cart = [];
}


module.exports.newItem = newItem;
module.exports.getCart = getCart;
module.exports.addToCart = addToCart;
module.exports.getCount = getCount;
module.exports.clearCart = clearCart;
module.exports.getTotal = getTotal;
module.exports.removeByItem = removeByItem;