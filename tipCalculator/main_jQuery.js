// main_jQuery.js (tipCalculator)


$(".box").click(() => {
    $(this)
        .addClass("selected")
        .siblings()
        .removeClass("selected");
});

$("calculate").click(() => {
    let price = Number($("#amount").val());
    let tip = Number($("#tip").val());
    let tipAmount = calculateTip(price, tip);

    $("#show-tip").html(tipAmount);
});

let calculateTip = (price, tip) => {
    return (price * tip / 100).toFixed(2);
}