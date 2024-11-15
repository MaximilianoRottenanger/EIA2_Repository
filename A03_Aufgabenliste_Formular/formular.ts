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
        
    }

    function showTask(_index: number): void {
        let task = data[_index];
        let title: HTMLInputElement = <HTMLInputElement>document.querySelector("input[name='Title']");
        let name: HTMLInputElement = <HTMLInputElement>document.querySelector("input[name='For']");
        let date: HTMLInputElement = <HTMLInputElement>document.querySelector("input[name='Date']");
        let time: HTMLInputElement = <HTMLInputElement>document.querySelector("input[name='Time']");
        let comment: HTMLInputElement = <HTMLInputElement>document.querySelector("input[name='Infos']");
        let status: HTMLInputElement = <HTMLInputElement>document.querySelector("input#status");
        title.value = task.Title
        name.value = task.For
        date.value = task.Date
        time.value = task.Time
        comment.value = task.Comment
        status.innerHTML = task.Status
        console.log("geschehen");
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
        data.splice() //hier soll der momentan eingesetzte index showtask eingefügt werden.
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