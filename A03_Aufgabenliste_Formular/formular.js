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
        console.log("geschehen");
    }
    showTask(1);
    function handleChange() {
        console.log("Change");
    }
    function deleteTask() {
        let userConfirmed = confirm("Do you really want to delete the task?");
        if (userConfirmed) {
            deleteCurrentTask();
        }
        else {
            console.log("Löschvorgang abgebrochen");
        }
    }
    function deleteCurrentTask() {
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
})(A03_Formular || (A03_Formular = {}));
//# sourceMappingURL=formular.js.map