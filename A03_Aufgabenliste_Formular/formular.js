"use strict";
var A03_Formular;
(function (A03_Formular) {
    console.log("Init");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let taskDiv = document.querySelector("div#tasks");
        taskDiv.addEventListener("change", handleChange);
        let deleteButton = document.querySelector(".deleteButton");
        deleteButton.addEventListener("click", deleteTask);
        let addButton = document.querySelector(".addButton");
        addButton.addEventListener("click", addTask);
        let backButton = document.querySelector(".backButton");
        backButton.addEventListener("click", backTask);
        let skipButton = document.querySelector(".skipButton");
        skipButton.addEventListener("click", nextTask);
        let settingButton = document.querySelector(".settingButton");
        settingButton.addEventListener("click", settingTask);
        showTask(0);
    }
    function showTask(_index) {
        let task = A03_Formular.data[_index];
        let title = document.getElementById("infosTitle");
        let name = document.getElementById("infosFor");
        let date = document.getElementById("infosDate");
        let time = document.getElementById("infosTime");
        let comment = document.getElementById("infosComment");
        let statusPending = document.getElementById("statusPending");
        let statusProgress = document.getElementById("statusProgress");
        let statusCompleted = document.getElementById("statusCompleted");
        title.value = task.Title;
        name.value = task.For;
        date.value = task.Date;
        time.value = task.Time;
        comment.value = task.Comment;
        statusPending.value = task.Status;
        statusProgress.value = task.Status;
        statusCompleted.value = task.Status;
    }
    function handleChange() {
        console.log("Change");
    }
    function deleteTask() {
        let userConfirmed = confirm("Do you really want to delete the task?");
        if (userConfirmed) {
            deleteCurrentTask(0);
        }
        else {
            console.log("Löschvorgang abgebrochen");
        }
    }
    function deleteCurrentTask(_currentIndex) {
        A03_Formular.data.splice(_currentIndex, 1);
    }
    function addTask() {
        console.log("Neues Task wird hinzugefügt");
        // Neues leeres Objekt im `data`-Array hinzufügen
        let newTask = {
            Title: "",
            For: "",
            Date: "",
            Time: "",
            Comment: "",
            Status: ""
        };
        A03_Formular.data.push(newTask);
        // Neues Fieldset dynamisch erstellen
        let taskDiv = document.querySelector("div#tasks");
        let fieldset = document.createElement("fieldset");
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
})(A03_Formular || (A03_Formular = {}));
function backTask() {
    showTask(0);
}
function nextTask() {
    showTask(1);
}
let isEditing = false;
function settingTask() {
    console.log("Setting button gedrückt");
    let inputs = document.querySelectorAll("#tasks fieldset input, #tasks fieldset textarea");
    let backButton = document.querySelector(".backButton");
    let skipButton = document.querySelector(".skipButton");
    if (!isEditing) {
        inputs.forEach((input) => {
            input.disabled = false;
        });
        backButton.style.display = "none";
        skipButton.style.display = "none";
        console.log("Bearbeitungsmodus aktiviert: Felder sind bearbeitbar, Back- und Skip-Buttons ausgeblendet.");
    }
    else {
        inputs.forEach((input) => {
            input.disabled = true;
        });
        backButton.style.display = "inline-block";
        skipButton.style.display = "inline-block";
        console.log("Bearbeitungsmodus deaktiviert: Felder sind wieder gesperrt, Back- und Skip-Buttons eingeblendet.");
    }
    isEditing = !isEditing;
}
//# sourceMappingURL=formular.js.map