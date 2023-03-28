{
    const formElement = document.querySelector(".js-form");
    const amountElement = document.querySelector(".js-amount");

    const calculateResult = (currency, exchange, amount) => {
        const euro = 4.71;
        const dolar = 4.42;

        switch (true) {
            case currency === "EUR" && exchange === "PLN":
                return amount * euro;

            case currency === "PLN" && exchange === "EUR":
                return amount / euro;

            case currency === "EUR" && exchange === "EUR":
                return amount * 1;

            case currency === "PLN" && exchange === "PLN":
                return amount * 1;

            case currency === "USD" && exchange === "PLN":
                return amount * dolar;

            case currency === "PLN" && exchange === "USD":
                return amount / dolar;

            case currency === "USD" && exchange === "USD":
                return amount * 1;

            case currency === "EUR" && exchange === "USD":
                return amount * euro / dolar;

            case currency === "USD" && exchange === "EUR":
                return amount * dolar / euro;
        }
    };

    const updateResultText = (calculated) => {
        const calculatedElement = document.querySelector(".js-calculated");
        calculatedElement.value = calculated.toFixed(2);
    };

    const onFormInput = () => {
        const currencyElement = document.querySelector(".js-currency");
        const exchangeElement = document.querySelector(".js-exchange");

        const amount = amountElement.value;
        const currency = currencyElement.value;
        const exchange = exchangeElement.value;

        let calculated = calculateResult(currency, exchange, amount);

        updateResultText(calculated);
    };

    const init = () => {
        formElement.addEventListener("input", onFormInput);
    };

    init();

    const calculateResultSubmit = (amount, course) => {
        return amount * course;
    };

    const updateResultTextSubmit = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = result.toFixed(2);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const courseElement = document.querySelector(".js-course");

        const amount = amountElement.value;
        const course = courseElement.value;

        let result = calculateResultSubmit(amount, course);

        updateResultTextSubmit(result);
    };

    const initSubmit = () => {
        formElement.addEventListener("submit", onFormSubmit);
    };

    initSubmit();

}


