import { Firework } from "./firework.js";
let fireworks = [];
let rocketSettings = {
    name: "",
    radius: 35,
    color: "#ff0000",
    shape: "circle"
};
window.addEventListener("load", handleLoad);
function handleLoad() {
    const canvas = document.querySelector("#canvas");
    const resetButton = document.querySelector("#resetButton");
    const saveButton = document.querySelector("#save");
    const deleteButton = document.querySelector("#delete");
    const rocketNameInput = document.querySelector("#rocketName");
    const explosionSizeInput = document.querySelector("#explosionSize");
    const particleColorInput = document.querySelector("#particleColor");
    const explosionShapeInputs = document.querySelectorAll("input[name='form']");
    particleColorInput.value = rocketSettings.color;
    // 🟢 Event-Listener setzen
    resetButton.addEventListener("click", () => resetSettings());
    saveButton.addEventListener("click", () => saveRocket());
    deleteButton.addEventListener("click", () => deleteRocket());
    canvas.addEventListener("click", (event) => handleCanvasClick(event));
    rocketNameInput.addEventListener("input", () => rocketSettings.name = rocketNameInput.value);
    explosionSizeInput.addEventListener("input", () => rocketSettings.radius = parseInt(explosionSizeInput.value));
    particleColorInput.addEventListener("input", () => rocketSettings.color = particleColorInput.value);
    explosionShapeInputs.forEach(input => input.addEventListener("change", () => {
        if (input.checked)
            rocketSettings.shape = input.value;
    }));
    loadSavedRockets();
    update();
}
// 🟢 Funktion: Erstellt eine Explosion bei Mausklick
function handleCanvasClick(event) {
    const canvas = document.querySelector("#canvas");
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;
    console.log(`Explosion bei (${x}, ${y}) mit Radius ${rocketSettings.radius}`);
    fireworks.push(new Firework(x, y, rocketSettings.radius, rocketSettings.shape, rocketSettings.color));
}
// 🟢 Funktion: Update-Loop für Animation
function update() {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach((firework, index) => {
        firework.update(ctx);
        // Entferne Feuerwerk, wenn alle Partikel weg sind
        if (firework.isDone()) {
            fireworks.splice(index, 1);
        }
    });
    requestAnimationFrame(update);
}
// 🟢 Funktion: Setzt alle Einstellungen zurück
function resetSettings() {
    rocketSettings = {
        name: "",
        radius: 35,
        color: "#ff0000",
        shape: "circle"
    };
    (document.querySelector("#rocketName")).value = "";
    (document.querySelector("#explosionSize")).value = "35";
    (document.querySelector("#particleColor")).value = "#ff0000";
    (document.querySelectorAll("input[name='form']")[0]).checked = true;
    console.log("Einstellungen zurückgesetzt.");
}
// 🟢 Funktion: Speichert eine Rakete und erstellt einen Button im `savings`-Div
async function saveRocket() {
    if (!rocketSettings.name.trim()) {
        console.warn("Kein Name eingegeben. Rakete wird nicht gespeichert.");
        return;
    }
    try {
        const url = new URL("https://7c8644f9-f81d-49cd-980b-1883574694b6.fr.bw-cloud-instance.org/mro41572/mingidb.php");
        url.searchParams.append("command", "insert");
        url.searchParams.append("collection", "rockets");
        url.searchParams.append("data", JSON.stringify(rocketSettings));
        const response = await fetch(url.toString(), { method: "GET" });
        const responseData = await response.json();
        if (responseData.status === "success") {
            console.log(`Rakete "${rocketSettings.name}" erfolgreich gespeichert!`);
            // 🔹 Button direkt nach dem Speichern hinzufügen
            addRocketButton(rocketSettings, responseData.data.id);
        }
        else {
            console.error("Fehler beim Speichern:", responseData);
        }
    }
    catch (error) {
        console.error("Fehler beim Speichern:", error);
    }
}
// 🟢 Funktion: Lädt gespeicherte Raketen aus der Datenbank und erstellt Buttons
async function loadSavedRockets() {
    try {
        const response = await fetch("https://7c8644f9-f81d-49cd-980b-1883574694b6.fr.bw-cloud-instance.org/mro41572/mingidb.php?command=find&collection=rockets");
        const data = await response.json();
        const savingsDiv = document.querySelector("#savings");
        savingsDiv.innerHTML = "";
        if (data.status !== "success" || !data.data) {
            console.warn("Keine gespeicherten Raketen gefunden.");
            return;
        }
        Object.entries(data.data).forEach(([id, rocket]) => {
            addRocketButton(rocket, id);
        });
    }
    catch (error) {
        console.error("Fehler beim Laden:", error);
    }
}
// 🟢 Funktion: Erstellt einen Button für gespeicherte Raketen
function addRocketButton(rocket, id) {
    const savingsDiv = document.querySelector("#savings");
    // 🔹 Überprüfe, ob der Button bereits existiert
    if (document.getElementById(`rocket-${id}`))
        return;
    const savedButton = document.createElement("button");
    savedButton.textContent = rocket.name;
    savedButton.classList.add("saved-rocket-button");
    savedButton.id = `rocket-${id}`;
    savedButton.addEventListener("click", () => loadRocketSettings(rocket));
    savingsDiv.appendChild(savedButton);
}
// 🟢 Funktion: Lädt eine gespeicherte Rakete & setzt Werte
function loadRocketSettings(rocket) {
    rocketSettings = { ...rocket }; // 🔥 Werte übernehmen
    (document.querySelector("#rocketName")).value = rocket.name;
    (document.querySelector("#explosionSize")).value = rocket.radius.toString();
    (document.querySelector("#particleColor")).value = rocket.color;
    document.querySelectorAll("input[name='form']").forEach(input => {
        input.checked = input.value === rocket.shape;
    });
    console.log(`Raketenprofil "${rocket.name}" geladen.`);
}
// 🟢 Funktion: Löscht eine gespeicherte Rakete aus der Datenbank & UI
async function deleteRocket() {
    const savingsDiv = document.querySelector("#savings");
    const lastButton = savingsDiv.lastChild;
    if (!lastButton)
        return;
    const rocketId = lastButton.id.replace("rocket-", "");
    await fetch(`https://7c8644f9-f81d-49cd-980b-1883574694b6.fr.bw-cloud-instance.org/mro41572/mingidb.php?command=delete&collection=rockets&id=${rocketId}`, { method: "GET" });
    console.log(`Rakete "${lastButton.textContent}" gelöscht.`);
    lastButton.remove();
}
//# sourceMappingURL=main.js.map