class CalculateService implements ICalculateService {

    constructor() { }

    calculate(inputField: JQuery, outputField: JQuery) {
        var value = eval(inputField.text());
        outputField.html(value);
    }
}