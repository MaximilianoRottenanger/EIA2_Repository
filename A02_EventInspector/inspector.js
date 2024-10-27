"use strict";
var A02_EventInspector;
(function (A02_EventInspector) {
    // console.log("Start");
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
        let button = document.getElementById("myButton");
        button.addEventListener("click", customEvent);
        button.addEventListener("buttonClicked", logCustomEvent);
    }
    function setInfoBox(_event) {
        // console.log("mouse");
        let span = document.querySelector("span");
        let box = "";
        let offset = 10;
        span.innerText = box;
        span.style.top = (_event.clientY + offset) + "px";
        span.style.left = (_event.clientX + offset) + "px";
        span.innerHTML = "x: " + _event.clientX + "<br>" + "y: " + _event.clientY + "<br>" + "target: " + _event.target;
    }
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event);
    }
    function customEvent(_event) {
        let button = _event.target;
        let newEvent = new CustomEvent("buttonClicked", { bubbles: true });
        button.dispatchEvent(newEvent);
    }
    function logCustomEvent(_event) {
        console.log("Button Geklickt");
    }
})(A02_EventInspector || (A02_EventInspector = {}));
//# sourceMappingURL=inspector.js.map