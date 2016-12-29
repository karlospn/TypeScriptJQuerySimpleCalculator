import { Calculator} from "./Calculator";
import { BindingButtonsService } from "./BindingButtonsService/BindingButtonsService";
import { CalculateService } from "./CalculateService/CalculateService";


export function run(): void {
    var calcService = new CalculateService();
    var bindingButtons = new BindingButtonsService();

    var calculator = new Calculator({
        calculate: "calculate",
        output: "result",
        clear: "clear"
    },
        calcService,
        bindingButtons);
    
}