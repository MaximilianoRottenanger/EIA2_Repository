namespace A03_Formular {
    console.log("Init");
    window.addEventListener("load", handleLoad);


    function handleLoad(_event: Event): void {
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
        showTask(0);
    }

    

    function showTask(_index: number): void {
        let task = data[_index];
        let title: HTMLInputElement = <HTMLInputElement>document.getElementById("infosTitle")
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("infosFor");
        let date: HTMLInputElement = <HTMLInputElement>document.getElementById("infosDate");
        let time: HTMLInputElement = <HTMLInputElement>document.getElementById("infosTime");
        let comment: HTMLInputElement = <HTMLInputElement>document.getElementById("infosComment");
        let statusPending: HTMLInputElement = <HTMLInputElement>document.getElementById("statusPending");
        let statusProgress: HTMLInputElement = <HTMLInputElement>document.getElementById("statusProgress");
        let statusCompleted: HTMLInputElement = <HTMLInputElement>document.getElementById("statusCompleted");
        title.value = task.Title
        name.value = task.For
        date.value = task.Date
        time.value = task.Time
        comment.value = task.Comment
        statusPending.value = task.Status
        statusProgress.value = task.Status
        statusCompleted.value = task.Status
    }


    function handleChange() {
        console.log("Change");
    }



    function deleteTask(): void {
        let userConfirmed: boolean = confirm("Do you really want to delete the task?");
        if (userConfirmed) {
            deleteCurrentTask();
        } else {
            console.log("Löschvorgang abgebrochen");
        }
    }

    function deleteCurrentTask(): void {

    }

    function addTask() {
        console.log("Neues leeres Fieldset entsteht");
    }

    function backTask() {
        showTask(0);
    }

    function nextTask() {
        showTask(1);
    }

    function settingTask() {

        console.log("Fieldsets werden für bearbeitung aktiviert");
    }
}