// main.js (tipCalculator)

const d = document;

const priceInput = d.getElementById("price");
const tipPercent = d.getElementById("tip-percent");
const tipView = d.getElementById("tip");
const totalView = d.getElementById("total");
const calculateButton = d.getElementById("calculate");
const modalButton = d.getElementById("show-modal");
const overlay = d.getElementById("overlay");

modalButton.addEventListener("click", (event) => {
    overlay.classList.add("show");
});

const calculateTip = (price, percent) => {
    return price * percent / 100;
}

calculateButton.addEventListener("click", (event) => {
    const price = Number(priceInput.value);
    const percent = Number(tipPercent.value);
    const tip = calculateTip(price, percent);

    if (tipView.value == NaN || totalView.value == NaN) {
        console.error(error);
    } else {
        tipView.innerHTML = `Your tip is: ${tip.toFixed(2)}`;
        totalView.innerHTML = `Your total is: ${(tip + price).toFixed(2)}`;
    }
});