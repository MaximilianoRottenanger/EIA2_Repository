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
            deleteCurrentTask(0);
        } else {
            console.log("Löschvorgang abgebrochen");
        }
    }

    function deleteCurrentTask(_currentIndex: number): void {
        data.splice(_currentIndex, 1)
    }


        function addTask(): void {
            console.log("Neues Task wird hinzugefügt");
        
            // Neues leeres Objekt im `data`-Array hinzufügen
            let newTask: A03_Formular.Column = {
                Title: "",
                For: "",
                Date: "",
                Time: "",
                Comment: "",
                Status: ""
            };
            A03_Formular.data.push(newTask);
        
            // Neues Fieldset dynamisch erstellen
            let taskDiv: HTMLElement = <HTMLElement>document.querySelector("div#tasks");
            let fieldset: HTMLElement = document.createElement("fieldset");
        
            // HTML-Inhalt für das neue Fieldset
            fieldset.innerHTML = `
                <input type="text" name="Title" placeholder="Title..." disabled> <br>
                <input type="text" name="For" placeholder="For..." disabled> <br>
                <input type="date" name="Date" disabled> <br>
                <input type="time" name="Time" disabled> <br>
                <textarea name="comment" placeholder="Type your comment here..." disabled></textarea>
                <div id="status">
                    <input type="radio" name="Radio" id="statusPending" disabled> 
                    <label for="pending">Pending</label> <br>
                    <input type="radio" name="Radio" id="statusProgress" disabled> 
                    <label for="progress">In Progress</label> <br>
                    <input type="radio" name="Radio" id="statusCompleted" disabled> 
                    <label for="completed">Completed</label>
                </div>
            `;
        
            // Fieldset zum Task-Container hinzufügen
            taskDiv.appendChild(fieldset);
        
            console.log("Neues Task wurde erstellt und angezeigt.");
        }
        
        console.log("Neues leeres Fieldset entsteht");
    }

    function backTask() {
        showTask(0);
    }

    function nextTask() {
        showTask(1);
    }

    let isEditing: boolean = false;

    function settingTask(): void {
        console.log("Setting button gedrückt");

        let inputs: NodeListOf<HTMLInputElement | HTMLTextAreaElement> = document.querySelectorAll(
            "#tasks fieldset input, #tasks fieldset textarea"
        );

        let backButton: HTMLElement = <HTMLElement>document.querySelector(".backButton");
        let skipButton: HTMLElement = <HTMLElement>document.querySelector(".skipButton");

        if (!isEditing) {

            inputs.forEach((input) => {
                input.disabled = false;
            });
            backButton.style.display = "none";
            skipButton.style.display = "none";
            console.log("Bearbeitungsmodus aktiviert: Felder sind bearbeitbar, Back- und Skip-Buttons ausgeblendet.");
        } else {

            inputs.forEach((input) => {
                input.disabled = true;
            });
            backButton.style.display = "inline-block";
            skipButton.style.display = "inline-block";
            console.log("Bearbeitungsmodus deaktiviert: Felder sind wieder gesperrt, Back- und Skip-Buttons eingeblendet.");
        }

        isEditing = !isEditing;
    }

}