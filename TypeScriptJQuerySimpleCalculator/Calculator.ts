import { ICalculateService } from "./CalculateService/ICalculateService";
import { IBindingButtonsService } from "./BindingButtonsService/IBindingButtonsService";
import { ICalculator } from "./ICalculator";

export class Calculator {

    private output: JQuery;
    private calculate: JQuery;
    private clear: JQuery;

    private numbers: number[];
    private operators: string[];

    private calculateService: ICalculateService;
    private bindingButtonsService: IBindingButtonsService;

    constructor(app: ICalculator, calculateService: ICalculateService, bindingButtonsService: IBindingButtonsService) {

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
