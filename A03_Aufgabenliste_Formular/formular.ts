namespace A03_Formular {
    console.log("Init");
    window.addEventListener("load", handleLoad);


    async function handleLoad(_event: Event): Promise<void> {
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
        data = await getJson();
        showTask();
    }

    let serverUrl: string = "https://7c8644f9-f81d-49cd-980b-1883574694b6.fr.bw-cloud-instance.org/mro41572/mingidb.php"

    let currentIndex: number = 0

    export function showTask(): void {
        let task = data[currentIndex];
        let title: HTMLInputElement = <HTMLInputElement>document.getElementById("infosTitle")
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("infosFor");
        let date: HTMLInputElement = <HTMLInputElement>document.getElementById("infosDate");
        let time: HTMLInputElement = <HTMLInputElement>document.getElementById("infosTime");
        let comment: HTMLInputElement = <HTMLInputElement>document.getElementById("infosComment");
        if (task.Status == "1") {
            let statusPending: HTMLInputElement = <HTMLInputElement>document.getElementById("statusPending")
            statusPending.checked = true
        }
        if (task.Status == "2") {
            let statusProgress: HTMLInputElement = <HTMLInputElement>document.getElementById("statusProgress")
            statusProgress.checked = true
        }
        if (task.Status == "3") {
            let statusCompleted: HTMLInputElement = <HTMLInputElement>document.getElementById("statusCompleted")
            statusCompleted.checked = true
        }

        title.value = task.Title
        name.value = task.For
        date.value = task.Date
        time.value = task.Time
        comment.value = task.Comment
    }


    function handleChange() {
        console.log(JSON.stringify(data));
    }

    async function getJson():Promise <Tasks> {
        // let response: Response = await fetch("data.json");
        // let data: Column[] = await response.json();
        // return data
        let query: URLSearchParams = new URLSearchParams(serverUrl);
        query.set("command", "find");
        query.set("collection", "organizerData");
        query.set("data", "{}");
        let response: Response = await fetch(serverUrl + "?" + query.toString());
        let responseJson = await response.json();
        return responseJson.data;
    }

    function deleteTask(): void {
        let userConfirmed: boolean = confirm("Do you really want to delete the task?");
        if (userConfirmed) {
            deleteCurrentTask(currentIndex);
            if (data.length < 1) addTask();
            showTask();
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
        let newTask: A03_Formular.Task = {
            Title: "",
            For: "",
            Date: "",
            Time: "",
            Comment: "",
            Status: "1"
        };
        A03_Formular.data.push(newTask);
        currentIndex = data.length - 1
        showTask();
        console.log("Neues leeres Fieldset entsteht");

    }


    function backTask() {
        if (currentIndex > 0) currentIndex--
        showTask();
    }

    function nextTask() {
        if (currentIndex < data.length - 1) currentIndex++
        showTask();
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
            let title: HTMLInputElement = <HTMLInputElement>document.getElementById("infosTitle")
            let name: HTMLInputElement = <HTMLInputElement>document.getElementById("infosFor");
            let date: HTMLInputElement = <HTMLInputElement>document.getElementById("infosDate");
            let time: HTMLInputElement = <HTMLInputElement>document.getElementById("infosTime");
            let comment: HTMLInputElement = <HTMLInputElement>document.getElementById("infosComment");
            let statusPending: HTMLInputElement = <HTMLInputElement>document.getElementById("statusPending");
            let statusProgress: HTMLInputElement = <HTMLInputElement>document.getElementById("statusProgress")
            let statusCompleted: HTMLInputElement = <HTMLInputElement>document.getElementById("statusCompleted")


            data[currentIndex].Title = title.value
            data[currentIndex].For = name.value
            data[currentIndex].Date = date.value
            data[currentIndex].Time = time.value
            data[currentIndex].Comment = comment.value
            if (statusPending.checked) data[currentIndex].Status = "1"
            if (statusProgress.checked) data[currentIndex].Status = "2"
            if (statusCompleted.checked) data[currentIndex].Status = "3"

            console.log(statusPending.value);

            backButton.style.display = "inline-block";
            skipButton.style.display = "inline-block";
            console.log("Bearbeitungsmodus deaktiviert: Felder sind wieder gesperrt, Back- und Skip-Buttons eingeblendet.");
        }

        isEditing = !isEditing;
    }
}

