/// <reference path="typings/jquery.d.ts" />
import CalculateService = require("./CalculateService/ICalculateService");
import BindingButtonsService = require("./BindingButtonsService/IBindingButtonsService");
import Service = CalculateService.ICalculateService;
import ButtonsService = BindingButtonsService.IBindingButtonsService;

export class Calculator {

    private output: JQuery;
    private calculate: JQuery;
    private clear: JQuery;

    private numbers: number[];
    private operators: string[];

    private calculateService: CalculateService.ICalculateService;
    private bindingButtonsService: BindingButtonsService.IBindingButtonsService;

    constructor(app: Iapp, calculateService: Service, bindingButtonsService: ButtonsService) {

        this.output = $(`#${app.output}`);
        this.calculate = $(`#${app.calculate}`);
        this.clear = $(`.${app.clear}`);
        this.calculateService = calculateService;
        this.bindingButtonsService = bindingButtonsService;

        this.wireEvents();
    }

    private wireEvents(): void {

        this.calculate.click((): void => {
            try {
                this.calculateService.calculate(this.output, this.output);
            } catch (e) {
                this.output.html('NaN');
            }
        });

        this.clear.click((): void => {
            this.output.html("");
        });

        this.bindingButtonsService.bind([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], this.output);
        this.bindingButtonsService.bind(['+', '-', '*', '/', '.'], this.output);

    }    
}
