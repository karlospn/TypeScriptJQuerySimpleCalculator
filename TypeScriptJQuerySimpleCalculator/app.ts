/// <reference path="typings/jquery.d.ts" />

class Calculator {

    private output: JQuery;
    private calculate: JQuery;
    private clear: JQuery;

    private numbers: number[];
    private operators: string [];

    constructor(output: string, calculate: string, clear: string, numbers: number[], operators: string[]) {

        this.output = $(`#${output}`);
        this.calculate = $(`#${calculate}`);
        this.clear = $(`.${clear}`);
        this.numbers = numbers;
        this.operators = operators;

        this.wireEvents();
    }


    private wireEvents(): void {
        this.calculate.click((): void => {
            try {
                this.output.html(eval(this.output.text()));
            } catch (e) {
                this.output.html('NaN');
            } 
        });

        this.clear.click((): void => {
            this.output.html("");
        });

        this.numbers.forEach((index): void => {
            var number = $("span:contains("+ index + ")");
            if (number !== null || number ! == undefined) {
                number.click((): void => {
                    this.output.html(this.output.text() + number.text());
                });
            }
        });

        this.operators.forEach((index): void => {
            var operator = $("span:contains(" + index + ")");
            if (operator !== null || operator ! == undefined) {
                operator.click((): void => {
                    this.output.html(this.output.text() + operator.text());
                });
            }
        });
    }
}

$(document)
    .ready(() => {

        var calculator = new Calculator('result', 'calculate', 'clear', [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ['+', '-', '*', '/', '.']);
    });