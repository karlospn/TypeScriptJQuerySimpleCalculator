/// <reference path="typings/jquery.d.ts" />
var Calculator = (function () {
    function Calculator(output, calculate, clear, numbers, operators) {
        this.output = $("#" + output);
        this.calculate = $("#" + calculate);
        this.clear = $("." + clear);
        this.numbers = numbers;
        this.operators = operators;
        this.wireEvents();
    }
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        this.calculate.click(function () {
            try {
                _this.output.html(eval(_this.output.text()));
            }
            catch (e) {
                _this.output.html('NaN');
            }
        });
        this.clear.click(function () {
            _this.output.html("");
        });
        this.numbers.forEach(function (index) {
            var number = $("span:contains(" + index + ")");
            if (number !== null || number == undefined) {
                number.click(function () {
                    _this.output.html(_this.output.text() + number.text());
                });
            }
        });
        this.operators.forEach(function (index) {
            var operator = $("span:contains(" + index + ")");
            if (operator !== null || operator == undefined) {
                operator.click(function () {
                    _this.output.html(_this.output.text() + operator.text());
                });
            }
        });
    };
    return Calculator;
}());
$(document)
    .ready(function () {
    var calculator = new Calculator('result', 'calculate', 'clear', [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ['+', '-', '*', '/', '.']);
});
//# sourceMappingURL=app.js.map