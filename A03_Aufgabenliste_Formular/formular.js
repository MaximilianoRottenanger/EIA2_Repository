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
        A03_Formular.data.splice(); //hier soll der momentan eingesetzte index showtask eingefügt werden.
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