namespace A03_Formular {
    console.log("Init");
    window.addEventListener("load", handleLoad);

    function handleLoad(_event:Event): void{
        let taskDiv: HTMLElement = <HTMLElement>document.querySelector("div#tasks");
        taskDiv.addEventListener("change", handleChange);
        let deleteButton: HTMLElement = <HTMLElement>document.querySelector(".deleteButton");
        deleteButton.addEventListener("click", deleteTask);
        let addButton: HTMLElement = <HTMLElement>document.querySelector(".addButton");
        addButton.addEventListener("click", addTask);
        let backButton: HTMLElement = <HTMLElement>document.querySelector(".backButton");
        backButton.addEventListener("click", backTask);
        let skipButton: HTMLElement = <HTMLElement>document.querySelector(".skipButton");
        skipButton.addEventListener("click", nextTask);
        let settingButton: HTMLElement = <HTMLElement>document.querySelector(".settingButton");
        settingButton.addEventListener("click", settingTask);
    }

    function handleChange() {
        console.log("Change");
    }

    function deleteTask() {
        console.log("assoziatives Array wird gelöscht");
    }

    function addTask() {
        console.log("Neues leeres Fieldset entsteht");
    }

    function backTask() {
        console.log("Letzter Task wird durch auswählen des Index im Array angezeigt");
    }

    function nextTask() {
        console.log("Nächster Task wird durch auswählen des Index im Array angezeigt");
    }

    function settingTask() {
        console.log("Fieldsets werden für bearbeitung aktiviert");
    }
}