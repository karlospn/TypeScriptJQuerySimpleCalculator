class BindingButtonsService implements IBindingButtonsService {

    constructor(){}

    bind(arrayItems: any[], outputField: JQuery): void {

        arrayItems.forEach((index): void => {
            var item = $("span:contains(" + index + ")");

            if (item !== null || item ! == undefined) {

                item.click((): void => {
                    outputField.html(outputField.text() + item.text());

                });
            }

        });
    }
}