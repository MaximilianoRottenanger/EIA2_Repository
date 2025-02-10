import { Firework } from "./firework.js";
let fireworks = [];
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
    let rocketSettings = {
        name: "",
        radius: 35,
        color: "#ff0000",
        shape: "circle"
    };
    particleColorInput.value = rocketSettings.color;
    resetButton.addEventListener("click", () => resetSettings(rocketSettings));
    saveButton.addEventListener("click", () => saveRocket(rocketSettings));
    deleteButton.addEventListener("click", deleteRocket);
    canvas.addEventListener("click", (event) => handleCanvasClick(event, rocketSettings));
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
function resetSettings(rocketSettings) {
    const rocketNameInput = document.querySelector("#rocketName");
    const explosionSizeInput = document.querySelector("#explosionSize");
    const particleColorInput = document.querySelector("#particleColor");
    const explosionShapeInputs = document.querySelectorAll("input[name='form']");
    rocketSettings.name = "";
    rocketSettings.radius = 35;
    rocketSettings.color = "#ff0000";
    rocketSettings.shape = "circle";
    rocketNameInput.value = "";
    explosionSizeInput.value = rocketSettings.radius.toString();
    particleColorInput.value = rocketSettings.color;
    explosionShapeInputs[0].checked = true;
    console.log("🟢 Einstellungen zurückgesetzt.");
}
async function saveRocket(rocket) {
    if (!rocket.name.trim()) {
        console.warn("⚠️ Kein Name eingegeben. Rakete wird nicht gespeichert.");
        return;
    }
    try {
        const url = "https://7c8644f9-f81d-49cd-980b-1883574694b6.fr.bw-cloud-instance.org/mro41572/mingidb.php";
        let query = new URLSearchParams();
        query.set("command", "insert");
        query.set("collection", "rockets");
        query.set("data", JSON.stringify(rocket));
        console.log("💾 Speichern der Rakete:", url + "?" + query.toString());
        let response = await fetch(url + "?" + query.toString(), { method: "GET" });
        let responseText = await response.text();
        alert("📡 Server-Antwort:\n" + responseText);
        console.log("📡 Server-Antwort (Rohdaten):", responseText);
        loadSavedRockets();
    }
    catch (error) {
        console.error("❌ Fehler beim Speichern:", error);
    }
}
async function loadSavedRockets() {
    try {
        const url = "https://7c8644f9-f81d-49cd-980b-1883574694b6.fr.bw-cloud-instance.org/mro41572/mingidb.php";
        let query = new URLSearchParams();
        query.set("command", "find");
        query.set("collection", "rockets");
        console.log(" Anfrage an den Server:", url + "?" + query.toString());
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        alert("Server-Antwort:\n" + responseText);
        console.log("Server-Antwort (Rohdaten):", responseText);
        let data = JSON.parse(responseText);
        if (data.status !== "success" || !data.data) {
            console.warn("Keine gespeicherten Raketen gefunden.");
            return;
        }
        const savingsDiv = document.querySelector("#savings");
        savingsDiv.innerHTML = "";
        Object.entries(data.data).forEach(([id, rocket]) => {
            addRocketButton(rocket, id);
        });
        console.log("✅ Gespeicherte Raketen erfolgreich geladen.");
    }
    catch (error) {
        console.error("❌ Fehler beim Laden der gespeicherten Raketen:", error);
    }
}
function addRocketButton(rocket, id) {
    const savingsDiv = document.querySelector("#savings");
    const savedButton = document.createElement("button");
    savedButton.textContent = rocket.name;
    savedButton.classList.add("saved-rocket-button");
    savedButton.addEventListener("click", () => loadRocketSettings(rocket));
    savingsDiv.appendChild(savedButton);
}
function loadRocketSettings(rocket) {
    const rocketNameInput = document.querySelector("#rocketName");
    const explosionSizeInput = document.querySelector("#explosionSize");
    const particleColorInput = document.querySelector("#particleColor");
    const explosionShapeInputs = document.querySelectorAll("input[name='form']");
    rocketNameInput.value = rocket.name;
    explosionSizeInput.value = rocket.radius.toString();
    particleColorInput.value = rocket.color;
    explosionShapeInputs.forEach(input => {
        input.checked = input.value === rocket.shape;
    });
    console.log(`Raketenprofil "${rocket.name}" geladen.`);
}
function handleCanvasClick(event, rocket) {
    const canvas = document.querySelector("#canvas");
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (event.clientX - rect.left) * scaleX;
    const y = (event.clientY - rect.top) * scaleY;
    console.log(`Explosion bei (${x}, ${y})`);
    fireworks.push(new Firework(x, y, rocket.radius, rocket.shape, rocket.color));
}
function update() {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fireworks.forEach(firework => firework.update(ctx));
    requestAnimationFrame(update);
}
async function deleteRocket() {
    try {
        const url = "https://7c8644f9-f81d-49cd-980b-1883574694b6.fr.bw-cloud-instance.org/mro41572/mingidb.php";
        let query = new URLSearchParams();
        query.set("command", "find");
        query.set("collection", "rockets");
        let response = await fetch(url + "?" + query.toString());
        let responseText = await response.text();
        let data = JSON.parse(responseText);
        const savingsDiv = document.querySelector("#savings");
        const lastButton = savingsDiv.lastChild;
        if (!lastButton)
            return;
        let rocketId = null;
        Object.entries(data.data).forEach(([id, rocket]) => {
            if (rocket.name === lastButton.textContent)
                rocketId = id;
        });
        if (!rocketId) {
            console.warn("Keine passende Rakete in der Datenbank gefunden.");
            return;
        }
        let deleteQuery = new URLSearchParams();
        deleteQuery.set("command", "delete");
        deleteQuery.set("collection", "rockets");
        deleteQuery.set("id", rocketId);
        await fetch(url + "?" + deleteQuery.toString(), { method: "GET" });
        console.log(`Rakete "${lastButton.textContent}" erfolgreich gelöscht.`);
        loadSavedRockets();
    }
    catch (error) {
        console.error("Fehler beim Löschen der Rakete:", error);
    }
}
//# sourceMappingURL=main.js.map