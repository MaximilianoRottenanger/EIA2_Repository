"use strict";
var A02_EventInspector;
(function (A02_EventInspector) {
    console.log("Start");
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        let divs = document.querySelector("div");
        divs.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("keyup", logInfo);
        divs.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        // console.log("mouse");
    }
    function logInfo(_event) {
        // console.log("event");
    }
})(A02_EventInspector || (A02_EventInspector = {}));
//# sourceMappingURL=inspector.js.map