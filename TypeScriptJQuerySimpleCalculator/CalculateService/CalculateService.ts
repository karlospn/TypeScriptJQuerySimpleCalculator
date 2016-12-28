import Service = require("./ICalculateService");

export class CalculateService implements Service.ICalculateService {

    calculate(inputField: JQuery, outputField: JQuery) : void  {
        var value = eval(inputField.text());
        outputField.html(value);
    }
}
