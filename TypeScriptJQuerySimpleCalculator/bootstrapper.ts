import app = require("./app");
import bbs = require("./BindingButtonsService/BindingButtonsService");
import cs = require("./CalculateService/CalculateService");

export function run(): void {
    var calcService = new cs.CalculateService();
    var bindingButtons = new bbs.BindingButtonsService();

    var calculator = new app.Calculator({
        calculate: "calculate",
        output: "result",
        clear: "clear"
    },
        calcService,
        bindingButtons);
    
}