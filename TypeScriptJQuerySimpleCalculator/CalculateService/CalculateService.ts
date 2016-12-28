namespace  App.Tools.Services {

    export class CalculateService implements ICalculateService {

        calculate(inputField: JQuery, outputField: JQuery) : void  {
            var value = eval(inputField.text());
            outputField.html(value);
        }
    }
}