import app = require("./Calculator");
import bbs = require("./BindingButtonsService/BindingButtonsService");
import cs = require("./CalculateService/CalculateService");
import Calculator = app.Calculator;

export function run(): void {
    var calcService = new cs.CalculateService();
    var bindingButtons = new bbs.BindingButtonsService();

    var calculator = new Calculator({
        calculate: "calculate",
        output: "result",
        clear: "clear"
    },
        calcService,
        bindingButtons);
    
}