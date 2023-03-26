let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let courseElement = document.querySelector(".js-course");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");
let exchangeElement = document.querySelector(".js-exchange");
let calculatedElement = document.querySelector(".js-calculated");

let euro = 4.71;
let dolar = 4.42;
let złoty = 1.00;

formElement.addEventListener("input", () => {

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let exchange = exchangeElement.value;
    let calculated = calculatedElement.value;

    switch (true) {

        case currency === "EUR" && exchange === "PLN":
            calculated = amount * euro;
            break;

        case currency === "PLN" && exchange === "EUR":
            calculated = amount / euro;
            break;

        case currency === "EUR" && exchange === "EUR":
            calculated = amount * 1;
            break;

        case currency === "PLN" && exchange === "PLN":
            calculated = amount * 1;
            break;

        case currency === "USD" && exchange === "PLN":
            calculated = amount * dolar;
            break;

        case currency === "PLN" && exchange === "USD":
            calculated = amount / dolar;
            break;

        case currency === "USD" && exchange === "USD":
            calculated = amount * 1;
            break;

        case currency === "EUR" && exchange === "USD":
            calculated = amount * euro / dolar;
            break;

        case currency === "USD" && exchange === "EUR":
            calculated = amount * dolar / euro;
            break;

    }

    calculatedElement.value = calculated.toFixed(2);
});

formElement.addEventListener("submit", () => {
    event.preventDefault();

    let amount = amountElement.value;
    let course = courseElement.value;

    let result = amount * course;


